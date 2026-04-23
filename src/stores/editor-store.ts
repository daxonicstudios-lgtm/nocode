import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";
import type { EditorTheme, PageBlock, ProjectPage, Block } from "@/types";
import type { PageBlockWithMeta } from "@/lib/api/projects";

const MAX_HISTORY = 50;
const AUTO_SAVE_DELAY = 5000;

type BlockSnapshot = PageBlockWithMeta[];

interface EditorState {
  // Current project
  projectId: string | null;
  projectName: string;

  // Pages
  pages: ProjectPage[];
  activePageId: string | null;

  // Blocks on the active page (with metadata)
  blocks: PageBlockWithMeta[];
  selectedBlockId: string | null;

  // Theme / colors
  theme: EditorTheme;

  // Loading states
  loading: boolean;
  saving: boolean;

  // Undo/redo history
  history: BlockSnapshot[];
  historyIndex: number;
  canUndo: boolean;
  canRedo: boolean;

  // Auto-save
  isDirty: boolean;

  // Actions
  setProject: (id: string, name: string) => void;
  setPages: (pages: ProjectPage[]) => void;
  setActivePage: (pageId: string) => void;
  setBlocks: (blocks: PageBlockWithMeta[]) => void;
  selectBlock: (blockId: string | null) => void;
  updateTheme: (theme: Partial<EditorTheme>) => void;
  reorderBlocks: (fromIndex: number, toIndex: number) => void;
  addBlock: (block: PageBlockWithMeta) => void;
  removeBlock: (blockId: string) => void;
  updateBlockProps: (blockId: string, props: Record<string, unknown>) => void;
  undo: () => void;
  redo: () => void;
  deleteSelectedBlock: () => void;

  // Async actions
  loadProject: (projectId: string) => Promise<void>;
  saveBlocks: () => Promise<void>;
  publishProject: () => Promise<void>;
}

const defaultTheme: EditorTheme = {
  primary: "#0f172a",
  secondary: "#64748b",
  accent: "#3b82f6",
  background: "#ffffff",
  foreground: "#0f172a",
  border: "#e2e8f0",
  card: "#ffffff",
  cardForeground: "#0f172a",
  muted: "#f1f5f9",
};

let autoSaveTimer: ReturnType<typeof setTimeout> | null = null;

function pushHistory(state: EditorState, newBlocks: PageBlockWithMeta[]): Partial<EditorState> {
  const history = state.history.slice(0, state.historyIndex + 1);
  history.push(structuredClone(newBlocks));
  if (history.length > MAX_HISTORY) history.shift();
  return {
    history,
    historyIndex: history.length - 1,
    canUndo: history.length > 1,
    canRedo: false,
    isDirty: true,
  };
}

function scheduleAutoSave(get: () => EditorState) {
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    const state = get();
    if (state.isDirty && !state.saving) {
      state.saveBlocks();
    }
  }, AUTO_SAVE_DELAY);
}

export const useEditorStore = create<EditorState>((set, get) => ({
  projectId: null,
  projectName: "",
  pages: [],
  activePageId: null,
  blocks: [],
  selectedBlockId: null,
  theme: defaultTheme,
  loading: false,
  saving: false,
  history: [],
  historyIndex: -1,
  canUndo: false,
  canRedo: false,
  isDirty: false,

  setProject: (id, name) => set({ projectId: id, projectName: name }),

  setPages: (pages) => set({ pages }),

  setActivePage: (pageId) => set({ activePageId: pageId }),

  setBlocks: (blocks) =>
    set({
      blocks,
      history: [structuredClone(blocks)],
      historyIndex: 0,
      canUndo: false,
      canRedo: false,
    }),

  selectBlock: (blockId) => set({ selectedBlockId: blockId }),

  updateTheme: (partial) =>
    set((state) => ({ theme: { ...state.theme, ...partial } })),

  reorderBlocks: (fromIndex, toIndex) => {
    set((state) => {
      const newBlocks = [...state.blocks];
      const [moved] = newBlocks.splice(fromIndex, 1);
      newBlocks.splice(toIndex, 0, moved);
      const orderedBlocks = newBlocks.map((b, i) => ({ ...b, sort_order: i }));
      return {
        blocks: orderedBlocks,
        ...pushHistory(state, orderedBlocks),
      };
    });
    scheduleAutoSave(get);
  },

  addBlock: (block) => {
    set((state) => {
      const newBlocks = [...state.blocks, block];
      return {
        blocks: newBlocks,
        ...pushHistory(state, newBlocks),
      };
    });
    scheduleAutoSave(get);
  },

  removeBlock: (blockId) => {
    set((state) => {
      const newBlocks = state.blocks.filter((b) => b.id !== blockId);
      return {
        blocks: newBlocks,
        selectedBlockId:
          state.selectedBlockId === blockId ? null : state.selectedBlockId,
        ...pushHistory(state, newBlocks),
      };
    });
    scheduleAutoSave(get);
  },

  updateBlockProps: (blockId, props) => {
    set((state) => {
      const newBlocks = state.blocks.map((b) =>
        b.id === blockId
          ? { ...b, custom_props: { ...b.custom_props, ...props } }
          : b
      );
      return {
        blocks: newBlocks,
        ...pushHistory(state, newBlocks),
      };
    });
    scheduleAutoSave(get);
  },

  undo: () =>
    set((state) => {
      if (state.historyIndex <= 0) return state;
      const newIndex = state.historyIndex - 1;
      return {
        blocks: structuredClone(state.history[newIndex]),
        historyIndex: newIndex,
        canUndo: newIndex > 0,
        canRedo: true,
        isDirty: true,
      };
    }),

  redo: () =>
    set((state) => {
      if (state.historyIndex >= state.history.length - 1) return state;
      const newIndex = state.historyIndex + 1;
      return {
        blocks: structuredClone(state.history[newIndex]),
        historyIndex: newIndex,
        canUndo: true,
        canRedo: newIndex < state.history.length - 1,
        isDirty: true,
      };
    }),

  deleteSelectedBlock: () => {
    const { selectedBlockId, removeBlock } = get();
    if (selectedBlockId) removeBlock(selectedBlockId);
  },

  loadProject: async (projectId: string) => {
    set({ loading: true });
    const supabase = createClient();

    // Fetch project
    const { data: project, error: projectError } = await supabase
      .from("projects")
      .select("*")
      .eq("id", projectId)
      .single();

    if (projectError || !project) {
      console.error("Failed to load project:", projectError?.message);
      set({ loading: false });
      return;
    }

    // Fetch pages
    const { data: pages, error: pagesError } = await supabase
      .from("project_pages")
      .select("*")
      .eq("project_id", projectId)
      .order("sort_order", { ascending: true });

    if (pagesError) {
      console.error("Failed to load pages:", pagesError.message);
      set({ loading: false });
      return;
    }

    const typedPages = (pages ?? []) as ProjectPage[];
    const homePage = typedPages.find((p) => p.is_homepage) ?? typedPages[0];
    const activePageId = homePage?.id ?? null;

    set({
      projectId,
      projectName: project.name,
      pages: typedPages,
      activePageId,
    });

    // Fetch blocks for the active page
    if (activePageId) {
      const { data: pageBlocks, error: blocksError } = await supabase
        .from("page_blocks")
        .select("*, block:blocks(*)")
        .eq("page_id", activePageId)
        .order("sort_order", { ascending: true });

      if (blocksError) {
        console.error("Failed to load blocks:", blocksError.message);
      } else {
        set({ blocks: (pageBlocks ?? []) as PageBlockWithMeta[] });
      }
    }

    set({ loading: false });
  },

  saveBlocks: async () => {
    const { blocks, saving } = get();
    if (saving) return;

    set({ saving: true });
    const supabase = createClient();

    for (const block of blocks) {
      const { error } = await supabase
        .from("page_blocks")
        .update({
          sort_order: block.sort_order,
          custom_props: block.custom_props,
        })
        .eq("id", block.id);

      if (error) {
        console.error("Failed to save block:", error.message);
      }
    }

    set({ saving: false, isDirty: false });
  },

  publishProject: async () => {
    const { projectId } = get();
    if (!projectId) return;

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { error } = await supabase.from("publish_requests").insert({
      project_id: projectId,
      user_id: user.id,
      status: "pending",
    });

    if (error) {
      console.error("Failed to create publish request:", error.message);
    }
  },
}));
