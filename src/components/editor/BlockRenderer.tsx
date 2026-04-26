"use client";

import { Suspense, Component as ReactComponent } from "react";
import type { ReactNode } from "react";
import type { PageBlock, Block, EditorTheme } from "@/types";
import { loadBlockBySlug } from "@/blocks/loader";

interface BlockRendererProps {
  pageBlock: PageBlock;
  block: Block | null;
  theme?: EditorTheme;
}

function BlockSkeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="h-64 rounded-lg bg-gray-200" />
    </div>
  );
}

function MissingBlock({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-gray-500">
          Block not found
        </p>
        <p className="mt-1 text-xs text-gray-400">
          {name} ({slug})
        </p>
      </div>
    </div>
  );
}

function BrokenBlock({ error }: { error: string }) {
  return (
    <div className="flex w-full items-center justify-center rounded-lg border-2 border-dashed border-red-300 bg-red-50 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium text-red-500">Block failed to render</p>
        <p className="mt-1 text-xs text-red-400">{error}</p>
      </div>
    </div>
  );
}

class BlockErrorBoundary extends ReactComponent<
  { children: ReactNode },
  { error: string | null }
> {
  state = { error: null as string | null };

  static getDerivedStateFromError(err: Error) {
    return { error: err.message };
  }

  render() {
    if (this.state.error) return <BrokenBlock error={this.state.error} />;
    return this.props.children;
  }
}

export default function BlockRenderer({ pageBlock, block, theme }: BlockRendererProps) {
  // Resolve slug: prefer the joined block record, fall back to custom_props._registrySlug
  const slug = block?.slug ?? (pageBlock.custom_props as Record<string, unknown>)?._registrySlug as string | undefined;

  if (!slug) {
    return <MissingBlock slug="unknown" name="Unknown block" />;
  }

  const Component = loadBlockBySlug(slug);

  if (!Component) {
    return <MissingBlock slug={slug} name={block?.name ?? slug} />;
  }

  return (
    <BlockErrorBoundary>
      <Suspense fallback={<BlockSkeleton />}>
        <Component
          theme={theme}
          {...(pageBlock.custom_props as Record<string, unknown>)}
        />
      </Suspense>
    </BlockErrorBoundary>
  );
}
