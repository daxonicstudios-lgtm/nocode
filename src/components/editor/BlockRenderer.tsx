"use client";

import { Suspense } from "react";
import type { PageBlock, Block, EditorTheme } from "@/types";
import { getBlockComponent } from "@/blocks/registry";

interface BlockRendererProps {
  pageBlock: PageBlock;
  block: Block;
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

export default function BlockRenderer({ pageBlock, block, theme }: BlockRendererProps) {
  const Component = getBlockComponent(block.slug);

  if (!Component) {
    return <MissingBlock slug={block.slug} name={block.name} />;
  }

  return (
    <Suspense fallback={<BlockSkeleton />}>
      <Component
        theme={theme}
        {...(pageBlock.custom_props as Record<string, unknown>)}
      />
    </Suspense>
  );
}
