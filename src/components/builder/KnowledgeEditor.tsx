"use client";

import { useState, useEffect } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { BookOpen, X, Save, Loader2 } from "lucide-react";

export default function KnowledgeEditor({
  onClose,
}: {
  onClose: () => void;
}) {
  const projectId = useBuilderStore((s) => s.projectId);
  const [knowledge, setKnowledge] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) return;
    fetch(`/api/projects/${projectId}`)
      .then((r) => r.json())
      .then((d) => setKnowledge(d.knowledge || ""))
      .finally(() => setLoading(false));
  }, [projectId]);

  const handleSave = async () => {
    if (!projectId) return;
    setSaving(true);

    try {
      await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ knowledge }),
      });
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        onClose();
      }, 1000);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-400" />
            <span className="text-base font-semibold text-zinc-200">
              Project Knowledge
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-3">
          <p className="text-sm text-zinc-400">
            Add custom instructions that the AI will follow for every
            generation. Brand guidelines, color palettes, coding conventions,
            tone of voice — anything you want consistent.
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-5 h-5 animate-spin text-zinc-500" />
            </div>
          ) : (
            <textarea
              value={knowledge}
              onChange={(e) => setKnowledge(e.target.value)}
              rows={8}
              placeholder={`Example:\n- Brand colors: #6D28D9 (primary), #1E1B4B (dark)\n- Font: Inter for UI, JetBrains Mono for code\n- Tone: professional but friendly\n- Always include a dark mode toggle\n- Use rounded corners (rounded-xl) everywhere`}
              className="w-full px-3 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 outline-none transition-colors resize-none font-mono"
            />
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-sm font-medium text-white hover:bg-violet-500 disabled:opacity-50 transition-colors"
          >
            {saved ? (
              "Saved!"
            ) : saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Save
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
