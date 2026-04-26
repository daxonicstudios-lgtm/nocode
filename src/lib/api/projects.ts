import { createClient } from "@/lib/supabase/server";
import type { Project, ProjectPage, PageBlock, Block } from "@/types";

/**
 * Page block with its Block metadata joined.
 */
export interface PageBlockWithMeta extends PageBlock {
  block: Block | null;
}

/**
 * Full project details: project + pages + blocks per page.
 */
export interface ProjectWithDetails {
  project: Project;
  pages: ProjectPage[];
  pageBlocks: Record<string, PageBlockWithMeta[]>;
}

/**
 * Fetch a single project by ID.
 */
export async function fetchProject(id: string): Promise<Project | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("fetchProject error:", error.message);
    return null;
  }

  return data as Project;
}

/**
 * Fetch all pages for a project, sorted by sort_order.
 */
export async function fetchProjectPages(
  projectId: string
): Promise<ProjectPage[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("project_pages")
    .select("*")
    .eq("project_id", projectId)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("fetchProjectPages error:", error.message);
    return [];
  }

  return data as ProjectPage[];
}

/**
 * Fetch all blocks on a page with their Block metadata joined.
 */
export async function fetchPageBlocks(
  pageId: string
): Promise<PageBlockWithMeta[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("page_blocks")
    .select("*, block:blocks(*)")
    .eq("page_id", pageId)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("fetchPageBlocks error:", error.message);
    return [];
  }

  return data as PageBlockWithMeta[];
}

/**
 * Fetch a project with all its pages and blocks in one call.
 */
export async function fetchProjectWithDetails(
  projectId: string
): Promise<ProjectWithDetails | null> {
  const project = await fetchProject(projectId);
  if (!project) return null;

  const pages = await fetchProjectPages(projectId);

  const pageBlocks: Record<string, PageBlockWithMeta[]> = {};
  await Promise.all(
    pages.map(async (page) => {
      pageBlocks[page.id] = await fetchPageBlocks(page.id);
    })
  );

  return { project, pages, pageBlocks };
}
