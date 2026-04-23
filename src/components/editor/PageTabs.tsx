"use client";

import { useEditorStore } from "@/stores/editor-store";
import { FileText } from "lucide-react";

export default function PageTabs() {
  const pages = useEditorStore((s) => s.pages);
  const activePageId = useEditorStore((s) => s.activePageId);
  const setActivePage = useEditorStore((s) => s.setActivePage);

  if (pages.length <= 1) return null;

  return (
    <div className="flex items-center gap-1 overflow-x-auto border-b bg-muted/30 px-4 py-1 scrollbar-none">
      {pages.map((page) => {
        const isActive = activePageId === page.id;
        return (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id)}
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-t px-3 py-1.5 text-xs font-medium transition-colors ${
              isActive
                ? "border border-b-0 bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
            }`}
          >
            <FileText className="h-3 w-3" />
            {page.name}
            {page.is_homepage && (
              <span className="rounded bg-primary/10 px-1 py-0.5 text-[10px] text-primary">
                Home
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
