"use client";

import { useState } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { PenTool, X, Loader2, ArrowRight } from "lucide-react";

export default function FigmaImport({
  onClose,
}: {
  onClose: () => void;
}) {
  const sendMessage = useBuilderStore((s) => s.sendMessage);
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImport = async () => {
    if (!url.trim()) return;
    setLoading(true);
    setError(null);

    try {
      // Extract file key from Figma URL
      // Format: https://www.figma.com/design/FILE_KEY/Title?node-id=...
      const match = url.match(
        /figma\.com\/(file|design)\/([a-zA-Z0-9]+)/
      );
      if (!match) {
        throw new Error(
          "Invalid Figma URL. Paste a link like: figma.com/design/abc123/MyDesign"
        );
      }

      const fileKey = match[2];

      if (!token.trim()) {
        // No token — just send the URL to AI and let it work from the description
        sendMessage(
          `Import this Figma design and recreate it as a React app. Figma URL: ${url}\n\nNote: I don't have a Figma API token, so please create a professional design based on what a typical ${url.includes("dashboard") ? "dashboard" : url.includes("landing") ? "landing page" : "web application"} looks like from Figma.`
        );
        onClose();
        return;
      }

      // Fetch from Figma API
      const res = await fetch(
        `https://api.figma.com/v1/files/${fileKey}?depth=2`,
        {
          headers: {
            "X-Figma-Token": token.trim(),
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          res.status === 403
            ? "Invalid Figma token. Check your personal access token."
            : `Figma API error: ${res.status}`
        );
      }

      const figmaData = await res.json();

      // Extract key design info
      const pageName = figmaData.document?.children?.[0]?.name || "Page 1";
      const children = figmaData.document?.children?.[0]?.children || [];

      // Build a description of the design
      const components = children
        .slice(0, 20) // Limit to avoid huge prompts
        .map(
          (node: { name: string; type: string; absoluteBoundingBox?: { width: number; height: number } }) =>
            `- ${node.name} (${node.type}, ${node.absoluteBoundingBox?.width || "?"}x${node.absoluteBoundingBox?.height || "?"}px)`
        )
        .join("\n");

      // Also try to get images for the top-level frames
      const frameIds = children
        .filter((n: { type: string }) => n.type === "FRAME")
        .slice(0, 3)
        .map((n: { id: string }) => n.id);

      let imageContext = "";
      if (frameIds.length > 0) {
        try {
          const imgRes = await fetch(
            `https://api.figma.com/v1/images/${fileKey}?ids=${frameIds.join(",")}&format=png&scale=1`,
            { headers: { "X-Figma-Token": token.trim() } }
          );
          if (imgRes.ok) {
            const imgData = await imgRes.json();
            const urls = Object.values(imgData.images || {}).filter(Boolean);
            if (urls.length > 0) {
              imageContext = `\n\nRendered frame images:\n${urls.map((u) => `- ${u}`).join("\n")}`;
            }
          }
        } catch {
          // Skip image fetching if it fails
        }
      }

      // Send to AI
      sendMessage(
        `Import this Figma design and recreate it as a React app.\n\nFigma file: "${figmaData.name}"\nPage: "${pageName}"\nDesign style: ${figmaData.document?.children?.[0]?.backgroundColor ? "Custom background" : "Default"}\n\nComponents found:\n${components}${imageContext}\n\nRecreate this design pixel-perfectly in React + Tailwind CSS. Match the layout, spacing, colors, and typography as closely as possible.`
      );
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Import failed");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-violet-400" />
            <span className="text-base font-semibold text-zinc-200">
              Import from Figma
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
            Paste a Figma URL and the AI will recreate the design as a working
            React app.
          </p>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Figma URL
            </label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.figma.com/design/abc123/MyDesign"
              className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Figma API Token{" "}
              <span className="text-zinc-600 font-normal">(optional)</span>
            </label>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="figd_..."
              className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/20 outline-none transition-colors"
            />
            <p className="text-xs text-zinc-600 mt-1">
              Get a token from Figma → Settings → Personal Access Tokens.
              Without a token, AI will generate based on the URL context.
            </p>
          </div>

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
            onClick={handleImport}
            disabled={loading || !url.trim()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-sm font-medium text-white hover:from-violet-500 hover:to-blue-500 disabled:opacity-50 transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Importing...
              </>
            ) : (
              <>
                Import Design
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
