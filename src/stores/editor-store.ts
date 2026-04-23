import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";
import type { EditorTheme, PageBlock, ProjectPage, Block } from "@/types";
import type { PageBlockWithMeta } from "@/lib/api/projects";

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
};

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

    set({ saving: false });
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
