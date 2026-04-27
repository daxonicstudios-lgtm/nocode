"use client";

import { useState, useEffect } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { History, RotateCcw, Save, X, Loader2 } from "lucide-react";

interface Version {
  id: string;
  description: string | null;
  created_at: string;
}

export default function VersionHistory({
  onClose,
}: {
  onClose: () => void;
}) {
  const projectId = useBuilderStore((s) => s.projectId);
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!projectId) return;
    fetch(`/api/projects/${projectId}/versions`)
      .then((r) => r.json())
      .then((d) => setVersions(d.versions || []))
      .finally(() => setLoading(false));
  }, [projectId]);

  const handleRestore = async (versionId: string) => {
    if (!projectId || restoring) return;
    setRestoring(versionId);

    try {
      const res = await fetch(
        `/api/projects/${projectId}/versions/${versionId}`,
        { method: "POST" }
      );
      if (res.ok) {
        // Reload project to get restored files
        await useBuilderStore.getState().loadProject(projectId);
        onClose();
      }
    } finally {
      setRestoring(null);
    }
  };

  const handleSaveCheckpoint = async () => {
    if (!projectId || saving) return;
    setSaving(true);

    try {
      const res = await fetch(`/api/projects/${projectId}/versions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: "Manual checkpoint" }),
      });
      if (res.ok) {
        const data = await res.json();
        setVersions((prev) => [data.version, ...prev]);
      }
    } finally {
      setSaving(false);
    }
  };

  function timeAgo(dateStr: string): string {
    const seconds = Math.floor(
      (Date.now() - new Date(dateStr).getTime()) / 1000
    );
    if (seconds < 60) return "just now";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  return (
    <div className="absolute right-0 top-12 w-80 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-zinc-400" />
          <span className="text-sm font-medium text-zinc-200">
            Version History
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Save checkpoint button */}
      <div className="px-4 py-2 border-b border-zinc-800">
        <button
          onClick={handleSaveCheckpoint}
          disabled={saving}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:bg-zinc-700 disabled:opacity-50 transition-colors"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Save checkpoint
        </button>
      </div>

      {/* Version list */}
      <div className="max-h-64 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-5 h-5 animate-spin text-zinc-500" />
          </div>
        ) : versions.length === 0 ? (
          <div className="py-8 text-center text-sm text-zinc-600">
            No versions yet
          </div>
        ) : (
          versions.map((v) => (
            <div
              key={v.id}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-zinc-800/50 border-b border-zinc-800/50 last:border-0"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm text-zinc-300 truncate">
                  {v.description || "Auto-saved version"}
                </p>
                <p className="text-xs text-zinc-600">{timeAgo(v.created_at)}</p>
              </div>
              <button
                onClick={() => handleRestore(v.id)}
                disabled={restoring === v.id}
                className="flex-shrink-0 ml-2 p-1.5 rounded-md text-zinc-500 hover:text-violet-400 hover:bg-zinc-800 disabled:opacity-50 transition-colors"
                title="Restore this version"
              >
                {restoring === v.id ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <RotateCcw className="w-4 h-4" />
                )}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
