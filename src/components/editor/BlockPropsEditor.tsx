"use client";

import { useCallback, useMemo, useRef } from "react";
import { useEditorStore } from "@/stores/editor-store";
import { RotateCcw, X, Type, Link, Palette, AlignLeft, List } from "lucide-react";

/** Heuristics to pick the right input type for a prop */
function detectFieldType(
  key: string,
  value: unknown
): "color" | "url" | "textarea" | "text" | "items" {
  if (key === "items" || key === "navLinks") return "items";
  if (typeof value !== "string") return "text";
  if (/color|bg|background|foreground/i.test(key) || /^#[0-9a-fA-F]{3,8}$/.test(value))
    return "color";
  if (/url|href|link|src/i.test(key) || /^https?:\/\//.test(value)) return "url";
  if (value.length > 80 || /body|description|content|text/i.test(key)) return "textarea";
  return "text";
}

function fieldIcon(type: string) {
  switch (type) {
    case "color":
      return <Palette className="h-3.5 w-3.5 text-muted-foreground" />;
    case "url":
      return <Link className="h-3.5 w-3.5 text-muted-foreground" />;
    case "textarea":
      return <AlignLeft className="h-3.5 w-3.5 text-muted-foreground" />;
    case "items":
      return <List className="h-3.5 w-3.5 text-muted-foreground" />;
    default:
      return <Type className="h-3.5 w-3.5 text-muted-foreground" />;
  }
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[_-]/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())
    .trim();
}

/** Props we don't expose in the editor (internal / theme is handled separately) */
const HIDDEN_KEYS = new Set(["theme", "key", "children"]);

interface BlockPropsEditorProps {
  className?: string;
}

export default function BlockPropsEditor({ className }: BlockPropsEditorProps) {
  const { selectedBlockId, blocks, updateBlockProps, selectBlock } = useEditorStore();

  const selectedBlock = useMemo(
    () => blocks.find((b) => b.id === selectedBlockId),
    [blocks, selectedBlockId]
  );

  const initialPropsRef = useRef<Record<string, unknown> | null>(null);

  // Capture initial props when a block is first selected
  const currentId = selectedBlock?.id ?? null;
  if (currentId && initialPropsRef.current === null) {
    initialPropsRef.current = { ...selectedBlock?.custom_props };
  }
  if (!currentId) {
    initialPropsRef.current = null;
  }

  const handleChange = useCallback(
    (key: string, value: unknown) => {
      if (!selectedBlockId) return;
      updateBlockProps(selectedBlockId, { [key]: value });
    },
    [selectedBlockId, updateBlockProps]
  );

  const handleReset = useCallback(() => {
    if (!selectedBlockId || !initialPropsRef.current) return;
    updateBlockProps(selectedBlockId, initialPropsRef.current);
  }, [selectedBlockId, updateBlockProps]);

  if (!selectedBlock) return null;

  // Standard editable fields from BlockProps — always shown regardless of custom_props
  const STANDARD_FIELDS: Array<{ key: string; label: string; type: "text" | "textarea" | "url" }> = [
    { key: "heading", label: "Heading", type: "text" },
    { key: "subheading", label: "Subheading", type: "text" },
    { key: "bodyText", label: "Body Text", type: "textarea" },
    { key: "buttonText", label: "Button Text", type: "text" },
    { key: "buttonUrl", label: "Button URL", type: "url" },
    { key: "secondaryButtonText", label: "Secondary Button", type: "text" },
    { key: "secondaryButtonUrl", label: "Secondary Button URL", type: "url" },
    { key: "imageUrl", label: "Image URL", type: "url" },
    { key: "logoUrl", label: "Logo URL", type: "url" },
    { key: "backgroundImageUrl", label: "Background Image URL", type: "url" },
  ];

  const customProps = selectedBlock.custom_props ?? {};

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-sm font-semibold">
          {selectedBlock.block?.name ?? "Block Properties"}
        </h3>
        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
            title="Reset to original values"
            aria-label="Reset properties"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
          <button
            onClick={() => selectBlock(null)}
            className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
            aria-label="Close properties"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Standard Fields */}
      <div className="space-y-4 overflow-y-auto p-4">
        {STANDARD_FIELDS.map(({ key, label, type }) => {
          const value = typeof customProps[key] === "string" ? customProps[key] as string : "";

          if (type === "textarea") {
            return (
              <div key={key}>
                <div className="mb-1 flex items-center gap-1.5">
                  {fieldIcon("textarea")}
                  <label className="text-xs font-medium text-muted-foreground">{label}</label>
                </div>
                <textarea
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  rows={3}
                  className="w-full resize-y rounded-md border bg-transparent px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            );
          }

          if (type === "url") {
            return (
              <div key={key}>
                <div className="mb-1 flex items-center gap-1.5">
                  {fieldIcon("url")}
                  <label className="text-xs font-medium text-muted-foreground">{label}</label>
                </div>
                <input
                  type="url"
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder="https://..."
                  className="h-8 w-full rounded-md border bg-transparent px-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            );
          }

          return (
            <div key={key}>
              <div className="mb-1 flex items-center gap-1.5">
                {fieldIcon("text")}
                <label className="text-xs font-medium text-muted-foreground">{label}</label>
              </div>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                placeholder={`Enter ${label.toLowerCase()}...`}
                className="h-8 w-full rounded-md border bg-transparent px-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
