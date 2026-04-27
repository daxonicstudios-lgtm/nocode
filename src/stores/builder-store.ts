import { create } from "zustand";
import type {
  ConversationMessage,
  BuilderPanel,
  DeviceFrame,
  FileChange,
} from "@/types/builder";
import type { AIModel } from "@/lib/ai/code-agent";

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
  streamingText: string;

  // UI
  activePanel: BuilderPanel;
  deviceFrame: DeviceFrame;
  showFileExplorer: boolean;
  showCodePanel: boolean;

  // Credits + model
  credits: number;
  selectedModel: AIModel;

  // Prompt queue
  promptQueue: string[];

  // Save state
  isSaving: boolean;

  // Auto-fix tracking
  autoFixAttempts: number;

  // Actions
  loadProject: (projectId: string) => Promise<void>;
  sendMessage: (content: string) => Promise<void>;
  queuePrompt: (content: string) => void;
  removeFromQueue: (index: number) => void;
  autoFixError: (errorMessage: string) => void;
  setActiveFile: (path: string) => void;
  updateFileLocally: (path: string, content: string) => void;
  saveFileToServer: (path: string, content: string) => Promise<void>;
  setActivePanel: (panel: BuilderPanel) => void;
  setDeviceFrame: (frame: DeviceFrame) => void;
  setSelectedModel: (model: AIModel) => void;
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
  selectedModel: "gemini-flash" as AIModel,
  promptQueue: [] as string[],
  isSaving: false,
  autoFixAttempts: 0,
};

// Debounce timer for auto-saving file edits
let saveTimer: ReturnType<typeof setTimeout> | null = null;

export const useBuilderStore = create<BuilderState>((set, get) => ({
  ...initialState,

  loadProject: async (projectId: string) => {
    set({ projectId });

    try {
      const [projRes, filesRes, convRes, credRes] = await Promise.allSettled([
        fetch(`/api/projects/${projectId}`),
        fetch(`/api/projects/${projectId}/files`),
        fetch(`/api/projects/${projectId}/conversation`),
        fetch("/api/credits"),
      ]);

      if (projRes.status === "fulfilled" && projRes.value.ok) {
        const proj = await projRes.value.json();
        set({ projectName: proj.name || "Untitled Project" });
      }

      if (filesRes.status === "fulfilled" && filesRes.value.ok) {
        const data = await filesRes.value.json();
        const files: Record<string, string> = {};
        for (const f of data.files || []) {
          files[f.path] = f.content;
        }
        set({ files });
      }

      if (convRes.status === "fulfilled" && convRes.value.ok) {
        const data = await convRes.value.json();
        set({ messages: data.messages || [] });
      }

      if (credRes.status === "fulfilled" && credRes.value.ok) {
        const data = await credRes.value.json();
        set({ credits: data.balance ?? 50 });
      }
    } catch (err) {
      console.error("Failed to load project:", err);
    }
  },

  sendMessage: async (content: string) => {
    const { projectId, messages, selectedModel } = get();
    if (!projectId || get().isGenerating) return;

    // Reset auto-fix counter on user-initiated messages
    if (!content.startsWith("The app has this error")) {
      set({ autoFixAttempts: 0 });
    }

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
        body: JSON.stringify({
          projectId,
          message: content,
          model: selectedModel,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Generation failed");
      }

      if (!response.body) throw new Error("No response body");

      // ─── Clean single-pass SSE parser ───
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

        // Split on double newline (SSE event boundary)
        const blocks = buffer.split("\n\n");
        // Keep the last incomplete block in the buffer
        buffer = blocks.pop() || "";

        for (const block of blocks) {
          if (!block.trim()) continue;

          let eventType = "";
          let eventData = "";

          for (const line of block.split("\n")) {
            if (line.startsWith("event: ")) {
              eventType = line.slice(7).trim();
            } else if (line.startsWith("data: ")) {
              eventData = line.slice(6);
            }
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
                const cleanText =
                  streamedText
                    .replace(/<boltFile[\s\S]*?<\/boltFile>/g, "")
                    .trim() ||
                  `Generated ${fileChanges.length} files`;

                const assistantMsg: ConversationMessage = {
                  id: crypto.randomUUID(),
                  project_id: projectId,
                  role: "assistant",
                  content: cleanText,
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
                // Add error as assistant message so user sees it
                const errorMsg: ConversationMessage = {
                  id: crypto.randomUUID(),
                  project_id: projectId,
                  role: "assistant",
                  content: `Error: ${parsed.message}`,
                  file_changes: [],
                  credits_used: 0,
                  created_at: new Date().toISOString(),
                };
                set({ messages: [...get().messages, errorMsg] });
                break;
            }
          } catch {
            // Skip malformed events
          }
        }
      }

      // If stream ended without a "done" event, finalize
      if (get().isGenerating) {
        const cleanText =
          streamedText
            .replace(/<boltFile[\s\S]*?<\/boltFile>/g, "")
            .trim() || "Generation complete";

        const assistantMsg: ConversationMessage = {
          id: crypto.randomUUID(),
          project_id: projectId,
          role: "assistant",
          content: cleanText,
          file_changes: fileChanges,
          credits_used: 0,
          created_at: new Date().toISOString(),
        };

        set({
          messages: [...get().messages, assistantMsg],
          isGenerating: false,
          streamingText: "",
        });
      }
    } catch (err) {
      set({ isGenerating: false, streamingText: "" });
      const errorMsg: ConversationMessage = {
        id: crypto.randomUUID(),
        project_id: projectId,
        role: "assistant",
        content: `Error: ${err instanceof Error ? err.message : "Something went wrong"}`,
        file_changes: [],
        credits_used: 0,
        created_at: new Date().toISOString(),
      };
      set({ messages: [...get().messages, errorMsg] });
    }
  },

  setActiveFile: (path: string) => set({ activeFilePath: path }),

  // Update file in memory + debounced save to server
  updateFileLocally: (path: string, content: string) => {
    const files = { ...get().files, [path]: content };
    set({ files });

    // Debounced auto-save to DB
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      get().saveFileToServer(path, content);
    }, 1000);
  },

  saveFileToServer: async (path: string, content: string) => {
    const { projectId } = get();
    if (!projectId) return;

    set({ isSaving: true });
    try {
      await fetch(`/api/projects/${projectId}/files`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, content }),
      });
    } catch (err) {
      console.error("Failed to save file:", err);
    }
    set({ isSaving: false });
  },

  setActivePanel: (panel: BuilderPanel) => set({ activePanel: panel }),
  setDeviceFrame: (frame: DeviceFrame) => set({ deviceFrame: frame }),
  setSelectedModel: (model: AIModel) => set({ selectedModel: model }),
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

  // Auto-fix with max 3 attempts to prevent death loops
  autoFixError: (errorMessage: string) => {
    const { isGenerating, autoFixAttempts } = get();
    if (isGenerating) return;
    if (autoFixAttempts >= 3) {
      console.warn("Auto-fix limit reached (3 attempts). Stopping.");
      return;
    }

    set({ autoFixAttempts: autoFixAttempts + 1 });
    get().sendMessage(
      `The app has this error. Please fix it:\n\n\`\`\`\n${errorMessage}\n\`\`\``
    );
  },

  reset: () => set(initialState),
}));
