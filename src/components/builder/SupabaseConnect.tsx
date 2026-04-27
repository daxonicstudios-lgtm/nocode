"use client";

import { useState } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { Database, X, Check, Loader2, ExternalLink } from "lucide-react";

export default function SupabaseConnect({
  onClose,
}: {
  onClose: () => void;
}) {
  const projectId = useBuilderStore((s) => s.projectId);
  const [url, setUrl] = useState("");
  const [anonKey, setAnonKey] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    if (!projectId || !url.trim() || !anonKey.trim()) return;
    setConnecting(true);
    setError(null);

    try {
      // Validate the connection by making a test request
      const testRes = await fetch(`${url.trim()}/rest/v1/`, {
        headers: { apikey: anonKey.trim() },
      });

      if (!testRes.ok) {
        throw new Error("Could not connect to Supabase. Check your URL and anon key.");
      }

      // Save to project
      const res = await fetch(`/api/projects/${projectId}/files`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: "__supabase_config__",
          content: JSON.stringify({ url: url.trim(), anonKey: anonKey.trim() }),
        }),
      });

      // Also update the project record
      const updateRes = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          connected_supabase_url: url.trim(),
          connected_supabase_anon_key: anonKey.trim(),
        }),
      });

      setConnected(true);
      setTimeout(onClose, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connection failed");
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-emerald-400" />
            <span className="text-base font-semibold text-zinc-200">
              Connect Supabase
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
          <p className="text-sm text-zinc-400">
            Connect your Supabase project to add authentication, database, and
            storage to your app. The AI will generate code that integrates
            directly.
          </p>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Project URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourproject.supabase.co"
              className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Anon Key
            </label>
            <input
              type="password"
              value={anonKey}
              onChange={(e) => setAnonKey(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIs..."
              className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 outline-none transition-colors"
            />
          </div>

          <p className="text-xs text-zinc-600">
            Find these in your Supabase Dashboard → Settings → API.{" "}
            <a
              href="https://supabase.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:underline inline-flex items-center gap-0.5"
            >
              Open Dashboard <ExternalLink className="w-3 h-3" />
            </a>
          </p>

          {error && (
            <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
              {error}
            </div>
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
            onClick={handleConnect}
            disabled={connecting || connected || !url.trim() || !anonKey.trim()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-sm font-medium text-white hover:bg-emerald-500 disabled:opacity-50 transition-colors"
          >
            {connected ? (
              <>
                <Check className="w-4 h-4" />
                Connected!
              </>
            ) : connecting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Connecting...
              </>
            ) : (
              "Connect"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
