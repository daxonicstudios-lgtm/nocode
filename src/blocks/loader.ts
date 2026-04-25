"use client";

import { lazy, type ComponentType } from "react";
import type { BlockProps } from "./types";

/**
 * Lightweight block loader — loads a single block by slug WITHOUT
 * importing the entire registry. This keeps the editor bundle small.
 *
 * Slug format: "{category}-{number}" e.g. "heroes-001", "navbars-042"
 */

const cache = new Map<
  string,
  React.LazyExoticComponent<ComponentType<BlockProps>>
>();

export function loadBlockBySlug(
  slug: string
): React.LazyExoticComponent<ComponentType<BlockProps>> | undefined {
  if (cache.has(slug)) {
    return cache.get(slug)!;
  }

  // Parse slug to determine category directory and filename
  // e.g. "heroes-001" → dir: "heroes", file: "heroes-001"
  // e.g. "ind-restaurant-001" → dir: "ind-restaurant", file: "ind-restaurant-001"
  // e.g. "ecom-grids-042" → dir: "ecom-grids", file: "ecom-grids-042"
  const match = slug.match(/^(.+)-(\d{3})$/);
  if (!match) return undefined;

  const dir = match[1];
  const file = slug;

  const component = lazy(
    () =>
      import(`@/blocks/${dir}/${file}.tsx`).catch(() => ({
        default: (props: BlockProps) => null,
      })) as Promise<{ default: ComponentType<BlockProps> }>
  );

  cache.set(slug, component);
  return component;
}
