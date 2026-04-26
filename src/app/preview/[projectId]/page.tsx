import { notFound } from "next/navigation";
import { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import type { PageBlockWithMeta } from "@/lib/api/projects";
import BlockRenderer from "@/components/editor/BlockRenderer";

/** Fetch project details using admin client (bypasses RLS for public preview) */
async function fetchProjectPublic(projectId: string) {
  const supabase = createAdminClient();

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .single();

  if (!project) return null;

  const { data: pages } = await supabase
    .from("project_pages")
    .select("*")
    .eq("project_id", projectId)
    .order("sort_order");

  if (!pages || pages.length === 0) return null;

  const pageBlocks: Record<string, PageBlockWithMeta[]> = {};
  for (const page of pages) {
    const { data: blocks } = await supabase
      .from("page_blocks")
      .select("*, block:blocks(*)")
      .eq("page_id", page.id)
      .order("sort_order");

    pageBlocks[page.id] = (blocks ?? []) as PageBlockWithMeta[];
  }

  return { project, pages, pageBlocks };
}

interface PreviewPageProps {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({
  params,
}: PreviewPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const result = await fetchProjectPublic(projectId);

  if (!result) {
    return { title: "Project Not Found" };
  }

  return {
    title: result.project.name,
    description: result.project.description ?? `Preview of ${result.project.name}`,
    openGraph: {
      title: result.project.name,
      description: result.project.description ?? `Preview of ${result.project.name}`,
      type: "website",
    },
  };
}

export default async function PreviewPage({ params, searchParams }: PreviewPageProps) {
  const { projectId } = await params;
  const { page: pageSlug } = await searchParams;

  const result = await fetchProjectPublic(projectId);

  if (!result) {
    notFound();
  }

  const { project, pages, pageBlocks } = result;

  // Find the target page: use query param, homepage, or first page
  const targetPage = pageSlug
    ? pages.find((p) => p.slug === pageSlug)
    : pages.find((p) => p.is_homepage) ?? pages[0];

  if (!targetPage) {
    notFound();
  }

  const blocks = pageBlocks[targetPage.id] ?? [];

  // Build a simple theme from the project (could be stored in project metadata later)
  const theme = {
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

  return (
    <div className="relative min-h-screen">
      {/* Watermark */}
      <div className="fixed bottom-4 right-4 z-50 rounded-full bg-black/80 px-4 py-2 text-xs font-medium text-white shadow-lg">
        Built with Xxel
      </div>

      {/* Preview Content */}
      <main>
        {blocks.length === 0 ? (
          <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
            <h1 className="text-2xl font-bold">{project.name}</h1>
            <p className="mt-2 text-gray-500">
              This project has no blocks yet.
            </p>
          </div>
        ) : (
          blocks.map((pageBlock) => (
            <BlockRenderer
              key={pageBlock.id}
              pageBlock={pageBlock}
              block={pageBlock.block ?? null}
              theme={theme}
            />
          ))
        )}
      </main>
    </div>
  );
}
