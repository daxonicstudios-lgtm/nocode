"use client";

import { useState } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { Rocket, X, Loader2, ExternalLink, Check, Globe } from "lucide-react";

export default function DeployDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  const projectId = useBuilderStore((s) => s.projectId);
  const files = useBuilderStore((s) => s.files);
  const [deploying, setDeploying] = useState(false);
  const [deployUrl, setDeployUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDeploy = async () => {
    if (!projectId || deploying) return;
    setDeploying(true);
    setError(null);

    try {
      const res = await fetch(`/api/projects/${projectId}/deploy`, {
        method: "POST",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Deploy failed");
      }

      const data = await res.json();
      setDeployUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Deploy failed");
    } finally {
      setDeploying(false);
    }
  };

  const fileCount = Object.keys(files).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-violet-400" />
            <span className="text-base font-semibold text-zinc-200">
              Deploy Your App
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
        <div className="px-6 py-5 space-y-4">
          {deployUrl ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-emerald-300">
                    Deployed successfully!
                  </p>
                  <p className="text-xs text-emerald-400/70 mt-0.5">
                    Your app is now live
                  </p>
                </div>
              </div>

              <a
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 hover:bg-zinc-700 transition-colors"
              >
                <Globe className="w-4 h-4 text-violet-400" />
                <span className="flex-1 truncate">{deployUrl}</span>
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          ) : (
            <>
              <p className="text-sm text-zinc-400">
                Deploy your app to a live URL. Your {fileCount} files will be
                bundled and deployed to Vercel.
              </p>

              <div className="px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-800 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Files</span>
                  <span className="text-zinc-300">{fileCount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Framework</span>
                  <span className="text-zinc-300">React + Vite</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Hosting</span>
                  <span className="text-zinc-300">Vercel (free)</span>
                </div>
              </div>

              {error && (
                <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
                  {error}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
          >
            {deployUrl ? "Close" : "Cancel"}
          </button>
          {!deployUrl && (
            <button
              onClick={handleDeploy}
              disabled={deploying || fileCount === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-sm font-medium text-white hover:bg-violet-500 disabled:opacity-50 transition-colors"
            >
              {deploying ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Deploying...
                </>
              ) : (
                <>
                  <Rocket className="w-4 h-4" />
                  Deploy Now
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
