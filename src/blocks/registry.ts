import { lazy, type ComponentType } from "react";
import type { BlockProps } from "./types";

// ============================================
// Block Registry — Maps slugs to lazy-loaded components
// with rich metadata for AI-powered block selection
// ============================================

export interface BlockMeta {
  slug: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  style: string;
  layout: string;
  industries: string[];
  component: React.LazyExoticComponent<ComponentType<BlockProps>>;
}

export interface BlockRegistration {
  slug: string;
  name: string;
  category: string;
  description?: string;
  tags?: string[];
  style?: string;
  layout?: string;
  industries?: string[];
  importFn: () => Promise<{ default: ComponentType<BlockProps> }>;
}

export interface BlockQuery {
  category?: string;
  tags?: string[];
  style?: string;
  layout?: string;
  industries?: string[];
  search?: string;
}

/** Master registry: slug → BlockMeta */
const registry = new Map<string, BlockMeta>();

/** Category index: category → slugs[] */
const categoryIndex = new Map<string, string[]>();

/** Industry index: industry → slugs[] */
const industryIndex = new Map<string, string[]>();

/** Tag index: tag → slugs[] */
const tagIndex = new Map<string, string[]>();

// ---------------------------------------------------------------------------
// Registration helper — called by each category's barrel file (index.ts)
// ---------------------------------------------------------------------------

export function registerBlock(meta: BlockRegistration): void {
  const entry: BlockMeta = {
    slug: meta.slug,
    name: meta.name,
    category: meta.category,
    description: meta.description ?? "",
    tags: meta.tags ?? [],
    style: meta.style ?? "modern",
    layout: meta.layout ?? "default",
    industries: meta.industries ?? [],
    component: lazy(meta.importFn),
  };

  registry.set(meta.slug, entry);

  // Category index
  const catList = categoryIndex.get(meta.category) ?? [];
  catList.push(meta.slug);
  categoryIndex.set(meta.category, catList);

  // Industry index
  for (const ind of entry.industries) {
    const indList = industryIndex.get(ind) ?? [];
    indList.push(meta.slug);
    industryIndex.set(ind, indList);
  }

  // Tag index
  for (const tag of entry.tags) {
    const tagList = tagIndex.get(tag) ?? [];
    tagList.push(meta.slug);
    tagIndex.set(tag, tagList);
  }
}

export function registerBlocks(blocks: BlockRegistration[]): void {
  for (const block of blocks) {
    registerBlock(block);
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Get a single block's lazy component by slug. */
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

/**
 * Query blocks by multiple criteria. The AI agent uses this to find
 * the best matching blocks for a user's prompt.
 *
 * All filters are ANDed: a block must match every specified criterion.
 * Within `tags` and `industries`, any overlap counts as a match (OR).
 */
export function getBlocksByQuery(query: BlockQuery): BlockMeta[] {
  let results = Array.from(registry.values());

  if (query.category) {
    results = results.filter((b) => b.category === query.category);
  }

  if (query.style) {
    results = results.filter((b) => b.style === query.style);
  }

  if (query.layout) {
    results = results.filter((b) => b.layout === query.layout);
  }

  if (query.tags && query.tags.length > 0) {
    results = results.filter((b) =>
      query.tags!.some((t) => b.tags.includes(t))
    );
  }

  if (query.industries && query.industries.length > 0) {
    results = results.filter(
      (b) =>
        b.industries.length === 0 ||
        query.industries!.some((ind) => b.industries.includes(ind))
    );
  }

  if (query.search) {
    const q = query.search.toLowerCase();
    results = results.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.tags.some((t) => t.includes(q))
    );
  }

  return results;
}

/** Get all blocks for a specific industry (includes universal blocks). */
export function getBlocksByIndustry(industry: string): BlockMeta[] {
  const industrySpecific = industryIndex.get(industry) ?? [];
  const universal = Array.from(registry.values()).filter(
    (b) => b.industries.length === 0
  );
  const specific = industrySpecific
    .map((s) => registry.get(s))
    .filter((b): b is BlockMeta => b !== undefined);
  return [...specific, ...universal];
}

/** Get all unique tags across all blocks. */
export function getAllTags(): string[] {
  return Array.from(tagIndex.keys());
}

/** Get all unique industries across all blocks. */
export function getAllIndustries(): string[] {
  return Array.from(industryIndex.keys());
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

import "./about";
import "./banners";
import "./blog";
import "./careers";
import "./comparison";
import "./contact";
import "./content";
import "./cta";
import "./dividers";
import "./download";
import "./events";
import "./faq";
import "./features";
import "./galleries";
import "./logos";
import "./maps";
import "./newsletter";
import "./portfolio";
import "./pricing";
import "./services";
import "./stats";
import "./steps";
import "./teams";
import "./testimonials";
import "./timeline";
import "./trust";
import "./video";

// E-Commerce
import "./ecom-grids";
import "./ecom-cards";
import "./ecom-detail";
import "./ecom-cart";
import "./ecom-checkout";
import "./ecom-categories";
import "./ecom-promos";
import "./ecom-wishlist";
import "./ecom-orders";
import "./ecom-reviews";
import "./ecom-filters";
import "./ecom-stores";
import "./ecom-account";

// Forms
import "./form-login";
import "./form-signup";
import "./form-contact";
import "./form-multistep";
import "./form-booking";
import "./form-survey";
import "./form-payment";
import "./form-search";
import "./form-registration";
import "./form-application";
