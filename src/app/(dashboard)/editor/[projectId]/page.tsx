"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useEditorStore } from "@/stores/editor-store";
import BlockRenderer from "@/components/editor/BlockRenderer";
import BlockPicker from "@/components/editor/BlockPicker";
import BlockPropsEditor from "@/components/editor/BlockPropsEditor";
import { Plus } from "lucide-react";

export default function EditorPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const [pickerOpen, setPickerOpen] = useState(false);
  const {
    projectName,
    theme,
    updateTheme,
    blocks,
    selectedBlockId,
    selectBlock,
    pages,
    activePageId,
    setActivePage,
    loading,
    saving,
    loadProject,
    saveBlocks,
    publishProject,
  } = useEditorStore();

  useEffect(() => {
    if (projectId) {
      loadProject(projectId);
    }
  }, [projectId, loadProject]);

  // Load blocks when switching pages
  useEffect(() => {
    if (activePageId && projectId) {
      // blocks are loaded in loadProject for initial page,
      // for page switches we reload
    }
  }, [activePageId, projectId]);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-4 text-sm text-muted-foreground">Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] flex-col">
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">
            {projectName || `Project ${projectId}`}
          </span>
          {saving && (
            <span className="text-xs text-muted-foreground">Saving...</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPickerOpen(!pickerOpen)}
            className="inline-flex h-8 items-center gap-1 rounded-md border px-3 text-xs font-medium hover:bg-accent"
          >
            <Plus className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Add Block</span>
          </button>
          <button
            onClick={saveBlocks}
            disabled={saving}
            className="inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium hover:bg-accent disabled:opacity-50"
          >
            Save
          </button>
          <a
            href={`/preview/${projectId}`}
            target="_blank"
            className="inline-flex h-8 items-center rounded-md border px-3 text-xs font-medium hover:bg-accent"
          >
            Preview
          </a>
          <button
            onClick={publishProject}
            className="inline-flex h-8 items-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground hover:bg-primary/90"
          >
            Publish
          </button>
        </div>
      </div>

      {/* Page Tabs */}
      {pages.length > 1 && (
        <div className="flex gap-1 overflow-x-auto border-b px-4 py-1">
          {pages.map((page) => (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`whitespace-nowrap rounded-t px-3 py-1.5 text-xs font-medium transition-colors ${
                activePageId === page.id
                  ? "bg-background border border-b-0 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {page.name}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Block Picker */}
        <BlockPicker open={pickerOpen} onClose={() => setPickerOpen(false)} />

        {/* Sidebar - Block list & settings */}
        <aside className="hidden w-64 flex-shrink-0 overflow-y-auto border-r md:block">
          <div className="p-4">
            <h3 className="mb-3 text-sm font-semibold">Theme Colors</h3>
            <div className="space-y-2">
              {(
                Object.keys(theme) as Array<keyof typeof theme>
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
                    {block.block?.name ?? `Block #${block.sort_order + 1}`}
                  </button>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Canvas / Preview */}
        <main className="flex-1 overflow-y-auto bg-muted/30 p-4">
          <div className="mx-auto max-w-4xl rounded-lg border bg-background shadow-sm">
            {blocks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-lg font-semibold">Your canvas is empty</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Components will appear here once the AI builds your site.
                </p>
              </div>
            ) : (
              <div>
                {blocks.map((pageBlock) => (
                  <div
                    key={pageBlock.id}
                    onClick={() => selectBlock(pageBlock.id)}
                    className={`cursor-pointer transition-all ${
                      selectedBlockId === pageBlock.id
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:ring-1 hover:ring-primary/30"
                    }`}
                  >
                    <BlockRenderer
                      pageBlock={pageBlock}
                      block={pageBlock.block}
                      theme={theme}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Block Props Editor — right panel */}
        {selectedBlockId && (
          <aside className="w-64 flex-shrink-0 overflow-y-auto border-l">
            <BlockPropsEditor />
          </aside>
        )}
      </div>
    </div>
  );
}
