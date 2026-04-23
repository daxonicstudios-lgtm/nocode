import { lazy, type ComponentType } from "react";
import type { BlockProps } from "./types";

// ============================================
// Block Registry — Maps slugs to lazy-loaded components
// ============================================

export interface BlockMeta {
  slug: string;
  name: string;
  category: string;
  component: React.LazyExoticComponent<ComponentType<BlockProps>>;
}

/** Master registry: slug → BlockMeta */
const registry = new Map<string, BlockMeta>();

/** Category index: category → slugs[] */
const categoryIndex = new Map<string, string[]>();

// ---------------------------------------------------------------------------
// Registration helper — called by each category's barrel file (index.ts)
// ---------------------------------------------------------------------------

export function registerBlock(meta: {
  slug: string;
  name: string;
  category: string;
  importFn: () => Promise<{ default: ComponentType<BlockProps> }>;
}): void {
  const entry: BlockMeta = {
    slug: meta.slug,
    name: meta.name,
    category: meta.category,
    component: lazy(meta.importFn),
  };

  registry.set(meta.slug, entry);

  const existing = categoryIndex.get(meta.category) ?? [];
  existing.push(meta.slug);
  categoryIndex.set(meta.category, existing);
}

export function registerBlocks(
  blocks: Array<{
    slug: string;
    name: string;
    category: string;
    importFn: () => Promise<{ default: ComponentType<BlockProps> }>;
  }>
): void {
  for (const block of blocks) {
    registerBlock(block);
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Get a single block's lazy component by slug. Returns undefined if not found. */
export function getBlockComponent(
  slug: string
): React.LazyExoticComponent<ComponentType<BlockProps>> | undefined {
  return registry.get(slug)?.component;
}

/** Get full metadata for a block by slug. */
export function getBlockMeta(slug: string): BlockMeta | undefined {
  return registry.get(slug);
}

/** Get all registered blocks. */
export function getAllBlocks(): BlockMeta[] {
  return Array.from(registry.values());
}

/** Get all blocks in a given category. */
export function getBlocksByCategory(category: string): BlockMeta[] {
  const slugs = categoryIndex.get(category) ?? [];
  return slugs
    .map((s) => registry.get(s))
    .filter((b): b is BlockMeta => b !== undefined);
}

/** Get all registered category names. */
export function getCategories(): string[] {
  return Array.from(categoryIndex.keys());
}

/** Total number of registered blocks. */
export function getBlockCount(): number {
  return registry.size;
}

// ---------------------------------------------------------------------------
// Auto-import category barrel files below (added as blocks are created)
// ---------------------------------------------------------------------------
// Example (uncomment when barrel files exist):
// import "./heroes";
// import "./navbars";
// import "./footers";
