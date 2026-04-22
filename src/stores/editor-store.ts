import { create } from "zustand";
import type { EditorTheme, PageBlock, ProjectPage } from "@/types";

interface EditorState {
  // Current project
  projectId: string | null;
  projectName: string;

  // Pages
  pages: ProjectPage[];
  activePageId: string | null;

  // Blocks on the active page
  blocks: PageBlock[];
  selectedBlockId: string | null;

  // Theme / colors
  theme: EditorTheme;

  // Actions
  setProject: (id: string, name: string) => void;
  setPages: (pages: ProjectPage[]) => void;
  setActivePage: (pageId: string) => void;
  setBlocks: (blocks: PageBlock[]) => void;
  selectBlock: (blockId: string | null) => void;
  updateTheme: (theme: Partial<EditorTheme>) => void;
  reorderBlocks: (fromIndex: number, toIndex: number) => void;
  addBlock: (block: PageBlock) => void;
  removeBlock: (blockId: string) => void;
  updateBlockProps: (blockId: string, props: Record<string, unknown>) => void;
}

const defaultTheme: EditorTheme = {
  primary: "#0f172a",
  secondary: "#64748b",
  accent: "#3b82f6",
  background: "#ffffff",
  foreground: "#0f172a",
};

export const useEditorStore = create<EditorState>((set) => ({
  projectId: null,
  projectName: "",
  pages: [],
  activePageId: null,
  blocks: [],
  selectedBlockId: null,
  theme: defaultTheme,

  setProject: (id, name) => set({ projectId: id, projectName: name }),

  setPages: (pages) => set({ pages }),

  setActivePage: (pageId) => set({ activePageId: pageId }),

  setBlocks: (blocks) => set({ blocks }),

  selectBlock: (blockId) => set({ selectedBlockId: blockId }),

  updateTheme: (partial) =>
    set((state) => ({ theme: { ...state.theme, ...partial } })),

  reorderBlocks: (fromIndex, toIndex) =>
    set((state) => {
      const newBlocks = [...state.blocks];
      const [moved] = newBlocks.splice(fromIndex, 1);
      newBlocks.splice(toIndex, 0, moved);
      return {
        blocks: newBlocks.map((b, i) => ({ ...b, sort_order: i })),
      };
    }),

  addBlock: (block) =>
    set((state) => ({ blocks: [...state.blocks, block] })),

  removeBlock: (blockId) =>
    set((state) => ({
      blocks: state.blocks.filter((b) => b.id !== blockId),
      selectedBlockId:
        state.selectedBlockId === blockId ? null : state.selectedBlockId,
    })),

  updateBlockProps: (blockId, props) =>
    set((state) => ({
      blocks: state.blocks.map((b) =>
        b.id === blockId
          ? { ...b, custom_props: { ...b.custom_props, ...props } }
          : b
      ),
    })),
}));
