"use client";

import { useParams } from "next/navigation";
import { useEditorStore } from "@/stores/editor-store";

export default function EditorPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { theme, updateTheme, blocks, selectedBlockId, selectBlock } =
    useEditorStore();

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Editing: {projectId}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`/preview/${projectId}`}
            target="_blank"
            className="inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium hover:bg-accent"
          >
            Preview
          </a>
          <button className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90">
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Block list & settings */}
        <aside className="hidden w-64 flex-shrink-0 overflow-y-auto border-r md:block">
          <div className="p-4">
            <h3 className="mb-3 text-sm font-semibold">Theme Colors</h3>
            <div className="space-y-2">
              {(
                Object.keys(theme) as Array<
                  keyof typeof theme
                >
              ).map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="color"
                    value={theme[key]}
                    onChange={(e) => updateTheme({ [key]: e.target.value })}
                    className="h-8 w-8 cursor-pointer rounded border"
                  />
                  <span className="text-xs capitalize">{key}</span>
                </div>
              ))}
            </div>

            <h3 className="mb-3 mt-6 text-sm font-semibold">Blocks</h3>
            {blocks.length === 0 ? (
              <p className="text-xs text-muted-foreground">
                No blocks yet. Use AI to generate your site.
              </p>
            ) : (
              <div className="space-y-1">
                {blocks.map((block) => (
                  <button
                    key={block.id}
                    onClick={() => selectBlock(block.id)}
                    className={`w-full rounded px-2 py-1.5 text-left text-xs ${
                      selectedBlockId === block.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    Block #{block.sort_order + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Canvas / Preview */}
        <main className="flex-1 overflow-y-auto bg-muted/30 p-4">
          <div className="mx-auto max-w-4xl rounded-lg border bg-background p-8 shadow-sm">
            {blocks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-lg font-semibold">Your canvas is empty</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Components will appear here once the AI builds your site.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {blocks.map((block) => (
                  <div
                    key={block.id}
                    onClick={() => selectBlock(block.id)}
                    className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                      selectedBlockId === block.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "hover:border-primary/50"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground">
                      Block component placeholder
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
