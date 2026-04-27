import { create } from "zustand";
import type {
  ConversationMessage,
  BuilderPanel,
  DeviceFrame,
  FileChange,
  GenerateEvent,
} from "@/types/builder";

interface BuilderState {
  // Project
  projectId: string | null;
  projectName: string;

  // Virtual file system (path → content)
  files: Record<string, string>;
  activeFilePath: string | null;

  // Chat
  messages: ConversationMessage[];
  isGenerating: boolean;
  streamingText: string; // partial assistant message while streaming

  // UI
  activePanel: BuilderPanel;
  deviceFrame: DeviceFrame;
  showFileExplorer: boolean;
  showCodePanel: boolean;

  // Credits
  credits: number;

  // Prompt queue
  promptQueue: string[];

  // Actions
  loadProject: (projectId: string) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  queuePrompt: (content: string) => void;
  removeFromQueue: (index: number) => void;
  autoFixError: (errorMessage: string) => void;
  setActiveFile: (path: string) => void;
  updateFileLocally: (path: string, content: string) => void;
  setActivePanel: (panel: BuilderPanel) => void;
  setDeviceFrame: (frame: DeviceFrame) => void;
  toggleCodePanel: () => void;
  reset: () => void;
}

const initialState = {
  projectId: null as string | null,
  projectName: "",
  files: {} as Record<string, string>,
  activeFilePath: null as string | null,
  messages: [] as ConversationMessage[],
  isGenerating: false,
  streamingText: "",
  activePanel: "chat" as BuilderPanel,
  deviceFrame: "desktop" as DeviceFrame,
  showFileExplorer: true,
  showCodePanel: false,
  credits: 0,
  promptQueue: [] as string[],
};

export const useBuilderStore = create<BuilderState>((set, get) => ({
  ...initialState,

  loadProject: async (projectId: string) => {
    set({ projectId, loading: true } as Partial<BuilderState>);

    try {
      // Load project details
      const projRes = await fetch(`/api/projects/${projectId}`);
      if (projRes.ok) {
        const proj = await projRes.json();
        set({ projectName: proj.name || "Untitled Project" });
      }

      // Load existing files
      const filesRes = await fetch(`/api/projects/${projectId}/files`);
      if (filesRes.ok) {
        const data = await filesRes.json();
        const files: Record<string, string> = {};
        for (const f of data.files || []) {
          files[f.path] = f.content;
        }
        set({ files });
      }

      // Load conversation history
      const convRes = await fetch(
        `/api/projects/${projectId}/conversation`
      );
      if (convRes.ok) {
        const data = await convRes.json();
        set({ messages: data.messages || [] });
      }

      // Load credits
      const credRes = await fetch("/api/credits");
      if (credRes.ok) {
        const data = await credRes.json();
        set({ credits: data.balance ?? 50 });
      }
    } catch (err) {
      console.error("Failed to load project:", err);
    }
  },

  sendMessage: async (content: string) => {
    const { projectId, files, messages } = get();
    if (!projectId || get().isGenerating) return;

    // Add user message optimistically
    const userMsg: ConversationMessage = {
      id: crypto.randomUUID(),
      project_id: projectId,
      role: "user",
      content,
      file_changes: [],
      credits_used: 0,
      created_at: new Date().toISOString(),
    };

    set({
      messages: [...messages, userMsg],
      isGenerating: true,
      streamingText: "",
    });

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, message: content }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Generation failed");
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let streamedText = "";
      const updatedFiles = { ...get().files };
      const fileChanges: FileChange[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("event: ")) {
            // SSE event type is on this line, data on next
            continue;
          }
          if (!line.startsWith("data: ")) continue;

          try {
            // Parse the event type from the previous line
            const dataStr = line.slice(6);
            const event = JSON.parse(dataStr) as GenerateEvent;

            // We need the event type — check the raw buffer for "event: " prefix
            // Since our server sends "event: type\ndata: ...\n\n", we handle it
          } catch {
            // Try to parse as a typed event by checking content
          }
        }

        // Re-parse: our SSE format is "event: type\ndata: json\n\n"
        // Process complete SSE blocks
        const sseBuffer = decoder.decode(value, { stream: true });
        const events = sseBuffer.split("\n\n").filter(Boolean);

        for (const eventBlock of events) {
          const eventLines = eventBlock.split("\n");
          let eventType = "";
          let eventData = "";

          for (const l of eventLines) {
            if (l.startsWith("event: ")) eventType = l.slice(7);
            if (l.startsWith("data: ")) eventData = l.slice(6);
          }

          if (!eventType || !eventData) continue;

          try {
            const parsed = JSON.parse(eventData);

            switch (eventType) {
              case "token":
                streamedText += parsed.content;
                set({ streamingText: streamedText });
                break;

              case "file":
                updatedFiles[parsed.path] = parsed.content;
                fileChanges.push({
                  path: parsed.path,
                  action: get().files[parsed.path] ? "update" : "create",
                });
                set({ files: { ...updatedFiles } });
                break;

              case "done": {
                const assistantMsg: ConversationMessage = {
                  id: crypto.randomUUID(),
                  project_id: projectId,
                  role: "assistant",
                  content: streamedText.replace(
                    /<boltFile[\s\S]*?<\/boltFile>/g,
                    ""
                  ).trim() || `Generated ${fileChanges.length} files`,
                  file_changes: fileChanges,
                  credits_used: parsed.creditsUsed || 0,
                  created_at: new Date().toISOString(),
                };

                set({
                  messages: [...get().messages, assistantMsg],
                  isGenerating: false,
                  streamingText: "",
                  credits: get().credits - (parsed.creditsUsed || 0),
                });

                // Process next item in prompt queue
                const queue = get().promptQueue;
                if (queue.length > 0) {
                  const [next, ...rest] = queue;
                  set({ promptQueue: rest });
                  setTimeout(() => get().sendMessage(next), 500);
                }
                break;
              }

              case "error":
                set({ isGenerating: false, streamingText: "" });
                console.error("Generation error:", parsed.message);
                break;
            }
          } catch {
            // Skip malformed events
          }
        }
      }
    } catch (err) {
      set({ isGenerating: false, streamingText: "" });
      console.error("Send message failed:", err);
    }
  },

  setActiveFile: (path: string) => set({ activeFilePath: path }),

  updateFileLocally: (path: string, content: string) => {
    const files = { ...get().files, [path]: content };
    set({ files });
  },

  setActivePanel: (panel: BuilderPanel) => set({ activePanel: panel }),

  setDeviceFrame: (frame: DeviceFrame) => set({ deviceFrame: frame }),

  toggleCodePanel: () => set({ showCodePanel: !get().showCodePanel }),

  queuePrompt: (content: string) => {
    if (get().isGenerating) {
      set({ promptQueue: [...get().promptQueue, content] });
    } else {
      get().sendMessage(content);
    }
  },

  removeFromQueue: (index: number) => {
    const queue = [...get().promptQueue];
    queue.splice(index, 1);
    set({ promptQueue: queue });
  },

  autoFixError: (errorMessage: string) => {
    const { isGenerating, sendMessage } = get();
    if (isGenerating) return; // Don't auto-fix while already generating
    sendMessage(
      `The app has this error. Please fix it:\n\n\`\`\`\n${errorMessage}\n\`\`\``
    );
  },

  reset: () => set(initialState),
}));
