"use client";

import { useState } from "react";
import { useEditorStore } from "@/stores/editor-store";
import { Menu, X, Palette, Layers, Plus } from "lucide-react";

interface MobileSidebarProps {
  onOpenPicker: () => void;
}

export default function MobileSidebar({ onOpenPicker }: MobileSidebarProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"theme" | "blocks">("blocks");

  const theme = useEditorStore((s) => s.theme);
  const updateTheme = useEditorStore((s) => s.updateTheme);
  const blocks = useEditorStore((s) => s.blocks);
  const selectedBlockId = useEditorStore((s) => s.selectedBlockId);
  const selectBlock = useEditorStore((s) => s.selectBlock);

  return (
    <>
      {/* Hamburger trigger — visible only on small screens */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-accent md:hidden"
        aria-label="Open editor menu"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-background shadow-xl transition-transform duration-200 ease-in-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="text-sm font-semibold">Editor</span>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("blocks")}
            className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "blocks"
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            Blocks
          </button>
          <button
            onClick={() => setActiveTab("theme")}
            className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors ${
              activeTab === "theme"
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground"
            }`}
          >
            <Palette className="h-3.5 w-3.5" />
            Theme
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === "blocks" && (
            <div>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenPicker();
                }}
                className="mb-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-dashed py-2 text-xs font-medium text-muted-foreground hover:border-primary hover:text-foreground"
              >
                <Plus className="h-3.5 w-3.5" />
                Add Block
              </button>

              {blocks.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  No blocks yet. Use AI to generate your site.
                </p>
              ) : (
                <div className="space-y-1">
                  {blocks.map((block) => (
                    <button
                      key={block.id}
                      onClick={() => {
                        selectBlock(block.id);
                        setOpen(false);
                      }}
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
          )}

          {activeTab === "theme" && (
            <div className="space-y-2">
              {(Object.keys(theme) as Array<keyof typeof theme>).map((key) => (
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
          )}
        </div>
      </div>
    </>
  );
}
