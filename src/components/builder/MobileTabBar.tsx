"use client";

import { useBuilderStore } from "@/stores/builder-store";
import { MessageSquare, Code2, Eye } from "lucide-react";
import type { BuilderPanel } from "@/types/builder";

const TABS: Array<{ panel: BuilderPanel; icon: typeof MessageSquare; label: string }> = [
  { panel: "chat", icon: MessageSquare, label: "Chat" },
  { panel: "code", icon: Code2, label: "Code" },
  { panel: "preview", icon: Eye, label: "Preview" },
];

export default function MobileTabBar() {
  const activePanel = useBuilderStore((s) => s.activePanel);
  const setActivePanel = useBuilderStore((s) => s.setActivePanel);
  const isGenerating = useBuilderStore((s) => s.isGenerating);

  return (
    <div className="flex items-center justify-around bg-zinc-950 border-t border-zinc-800 h-14 lg:hidden">
      {TABS.map(({ panel, icon: Icon, label }) => {
        const isActive = activePanel === panel;
        return (
          <button
            key={panel}
            onClick={() => setActivePanel(panel)}
            className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-md transition-colors ${
              isActive
                ? "text-violet-400"
                : "text-zinc-600 hover:text-zinc-400"
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {/* Generating indicator on chat tab */}
              {panel === "chat" && isGenerating && !isActive && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              )}
            </div>
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
