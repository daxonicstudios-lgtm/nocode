"use client";

import { useBuilderStore } from "@/stores/builder-store";
import { Zap, Code2, Undo2, Settings, Rocket } from "lucide-react";
import Link from "next/link";

export default function BuilderToolbar() {
  const projectName = useBuilderStore((s) => s.projectName);
  const credits = useBuilderStore((s) => s.credits);
  const showCodePanel = useBuilderStore((s) => s.showCodePanel);
  const toggleCodePanel = useBuilderStore((s) => s.toggleCodePanel);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-zinc-800 h-12">
      {/* Left: logo + project name */}
      <div className="flex items-center gap-3">
        <Link
          href="/projects"
          className="text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors"
        >
          XXEL
        </Link>
        <div className="w-px h-4 bg-zinc-800" />
        <span className="text-sm text-zinc-300 truncate max-w-[200px]">
          {projectName || "Untitled Project"}
        </span>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        {/* Credits badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800">
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span
            className={`text-xs font-medium ${
              credits < 10 ? "text-red-400" : "text-zinc-300"
            }`}
          >
            {Math.round(credits)}
          </span>
        </div>

        {/* Toggle code panel */}
        <button
          onClick={toggleCodePanel}
          className={`p-2 rounded-md transition-colors ${
            showCodePanel
              ? "bg-violet-600/20 text-violet-400"
              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
          }`}
          title="Toggle code panel"
        >
          <Code2 className="w-4 h-4" />
        </button>

        {/* Deploy button */}
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors"
          title="Deploy your app"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Deploy</span>
        </button>
      </div>
    </div>
  );
}
