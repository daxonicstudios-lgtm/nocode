"use client";

import { useState, useMemo } from "react";
import {
  getAllBlocks,
  getCategories,
  type BlockMeta,
} from "@/blocks/registry";
import { useEditorStore } from "@/stores/editor-store";
import type { PageBlockWithMeta } from "@/lib/api/projects";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Plus,
  X,
  LayoutGrid,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatCategoryName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function createPageBlock(meta: BlockMeta, pageId: string, sortOrder: number): PageBlockWithMeta {
  return {
    id: crypto.randomUUID(),
    page_id: pageId,
    block_id: meta.slug,
    sort_order: sortOrder,
    custom_props: {},
    block: {
      id: meta.slug,
      category: meta.category,
      name: meta.name,
      slug: meta.slug,
      description: null,
      thumbnail_url: null,
      is_pro: false,
      tags: [],
      html_preview: null,
      component_path: "",
      created_at: new Date().toISOString(),
    },
  };
}

// ---------------------------------------------------------------------------
// CategorySection
// ---------------------------------------------------------------------------

function CategorySection({
  category,
  blocks,
  onAdd,
}: {
  category: string;
  blocks: BlockMeta[];
  onAdd: (meta: BlockMeta) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-3 py-2.5 text-left text-sm font-medium hover:bg-accent/50 transition-colors"
      >
        <span className="flex items-center gap-2">
          <LayoutGrid className="h-3.5 w-3.5 text-muted-foreground" />
          {formatCategoryName(category)}
          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
            {blocks.length}
          </span>
        </span>
        {open ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="grid grid-cols-2 gap-1.5 px-3 pb-3">
          {blocks.map((block) => (
            <button
              key={block.slug}
              onClick={() => onAdd(block)}
              className="group flex flex-col items-center gap-1 rounded-md border p-2 text-center transition-colors hover:border-primary hover:bg-primary/5"
            >
              <div className="flex h-10 w-full items-center justify-center rounded bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
                <Plus className="h-4 w-4" />
              </div>
              <span className="line-clamp-1 text-[11px] leading-tight">
                {block.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// BlockPicker (desktop sidebar + mobile bottom sheet)
// ---------------------------------------------------------------------------

export default function BlockPicker({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [search, setSearch] = useState("");
  const { blocks, addBlock, activePageId } = useEditorStore();

  // Gather all registered blocks grouped by category
  const allBlocks = useMemo(() => getAllBlocks(), []);
  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return null; // null = show categories

    const q = search.toLowerCase();
    return allBlocks.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.slug.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [search, allBlocks]);

  const handleAdd = (meta: BlockMeta) => {
    if (!activePageId) return;
    const newBlock = createPageBlock(meta, activePageId, blocks.length);
    addBlock(newBlock);
  };

  // -- Shared inner content --
  const pickerContent = (
    <>
      {/* Search */}
      <div className="relative px-3 py-2">
        <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search blocks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border bg-background py-2 pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto">
        {filtered !== null ? (
          // Flat search results
          filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-xs text-muted-foreground">
              No blocks match &ldquo;{search}&rdquo;
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-1.5 px-3 pb-3">
              {filtered.map((block) => (
                <button
                  key={block.slug}
                  onClick={() => handleAdd(block)}
                  className="group flex flex-col items-center gap-1 rounded-md border p-2 text-center transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <div className="flex h-10 w-full items-center justify-center rounded bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
                    <Plus className="h-4 w-4" />
                  </div>
                  <span className="line-clamp-1 text-[11px] leading-tight">
                    {block.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {formatCategoryName(block.category)}
                  </span>
                </button>
              ))}
            </div>
          )
        ) : // Category accordion
        categories.length === 0 ? (
          <p className="px-4 py-8 text-center text-xs text-muted-foreground">
            No blocks registered yet.
          </p>
        ) : (
          categories.map((cat) => {
            const catBlocks = allBlocks.filter((b) => b.category === cat);
            return (
              <CategorySection
                key={cat}
                category={cat}
                blocks={catBlocks}
                onAdd={handleAdd}
              />
            );
          })
        )}
      </div>
    </>
  );

  if (!open) return null;

  return (
    <>
      {/* ---- Desktop sidebar ---- */}
      <aside className="hidden w-72 flex-shrink-0 flex-col border-r bg-background md:flex">
        <div className="flex items-center justify-between border-b px-3 py-2">
          <h3 className="text-sm font-semibold">Add Block</h3>
          <button
            onClick={onClose}
            className="rounded p-1 hover:bg-accent"
            aria-label="Close block picker"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {pickerContent}
      </aside>

      {/* ---- Mobile bottom sheet ---- */}
      <div className="fixed inset-0 z-50 md:hidden">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Sheet */}
        <div className="absolute bottom-0 left-0 right-0 flex max-h-[75vh] flex-col rounded-t-2xl bg-background shadow-xl animate-in slide-in-from-bottom duration-300">
          {/* Handle */}
          <div className="flex justify-center py-2">
            <div className="h-1 w-10 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="flex items-center justify-between border-b px-4 pb-2">
            <h3 className="text-sm font-semibold">Add Block</h3>
            <button
              onClick={onClose}
              className="rounded p-1 hover:bg-accent"
              aria-label="Close block picker"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {pickerContent}
        </div>
      </div>
    </>
  );
}
