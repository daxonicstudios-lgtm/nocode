"use client";

import { useState } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { Zap, Code2, History, Rocket, Database, GitBranch, BookOpen, Check, Loader2 } from "lucide-react";
import Link from "next/link";
import VersionHistory from "./VersionHistory";
import SupabaseConnect from "./SupabaseConnect";
import KnowledgeEditor from "./KnowledgeEditor";
import DeployDialog from "./DeployDialog";
import ModelSelector from "./ModelSelector";
import FigmaImport from "./FigmaImport";

export default function BuilderToolbar() {
  const projectName = useBuilderStore((s) => s.projectName);
  const credits = useBuilderStore((s) => s.credits);
  const showCodePanel = useBuilderStore((s) => s.showCodePanel);
  const toggleCodePanel = useBuilderStore((s) => s.toggleCodePanel);
  const isSaving = useBuilderStore((s) => s.isSaving);
  const [showVersions, setShowVersions] = useState(false);
  const [showSupabase, setShowSupabase] = useState(false);
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [showDeploy, setShowDeploy] = useState(false);
  const [showFigma, setShowFigma] = useState(false);

  return (
    <>
      <div className="relative flex items-center justify-between px-4 py-2 bg-zinc-950 border-b border-zinc-800 h-12">
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
        <div className="flex items-center gap-1.5">
          {/* Model selector */}
          <ModelSelector />

          {/* Save indicator */}
          <div className="flex items-center gap-1 px-2 text-xs">
            {isSaving ? (
              <>
                <Loader2 className="w-3 h-3 animate-spin text-zinc-500" />
                <span className="hidden sm:inline text-zinc-500">Saving...</span>
              </>
            ) : (
              <>
                <Check className="w-3 h-3 text-emerald-500/70" />
                <span className="hidden sm:inline text-zinc-600">Saved</span>
              </>
            )}
          </div>

          <div className="w-px h-4 bg-zinc-800" />

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

          {/* Version history */}
          <button
            onClick={() => setShowVersions(!showVersions)}
            className={`p-2 rounded-md transition-colors ${
              showVersions
                ? "bg-violet-600/20 text-violet-400"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
            }`}
            title="Version history"
          >
            <History className="w-4 h-4" />
          </button>

          {/* Knowledge base */}
          <button
            onClick={() => setShowKnowledge(true)}
            className="p-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            title="Project knowledge"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Supabase connect */}
          <button
            onClick={() => setShowSupabase(true)}
            className="p-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            title="Connect Supabase"
          >
            <Database className="w-4 h-4" />
          </button>

          {/* Figma import */}
          <button
            onClick={() => setShowFigma(true)}
            className="p-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            title="Import from Figma"
          >
            <GitBranch className="w-4 h-4" />
          </button>

          {/* Deploy button */}
          <button
            onClick={() => setShowDeploy(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors ml-1"
            title="Deploy your app"
          >
            <Rocket className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Deploy</span>
          </button>
        </div>

        {/* Version history dropdown */}
        {showVersions && (
          <VersionHistory onClose={() => setShowVersions(false)} />
        )}
      </div>

      {/* Modals */}
      {showSupabase && (
        <SupabaseConnect onClose={() => setShowSupabase(false)} />
      )}
      {showKnowledge && (
        <KnowledgeEditor onClose={() => setShowKnowledge(false)} />
      )}
      {showDeploy && (
        <DeployDialog onClose={() => setShowDeploy(false)} />
      )}
      {showFigma && (
        <FigmaImport onClose={() => setShowFigma(false)} />
      )}
    </>
  );
}
