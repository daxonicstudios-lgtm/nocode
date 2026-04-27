"use client";

import { useBuilderStore } from "@/stores/builder-store";
import FileExplorer from "./FileExplorer";
import { Code2, Copy, Check } from "lucide-react";
import { useState, useCallback, lazy, Suspense } from "react";

const MonacoEditor = lazy(() => import("@monaco-editor/react").then((m) => ({ default: m.Editor })));

function getLanguage(path: string): string {
  const ext = path.split(".").pop() || "";
  const map: Record<string, string> = {
    tsx: "typescript",
    ts: "typescript",
    jsx: "javascript",
    js: "javascript",
    css: "css",
    json: "json",
    html: "html",
    md: "markdown",
  };
  return map[ext] || "plaintext";
}

export default function CodePanel() {
  const files = useBuilderStore((s) => s.files);
  const activeFilePath = useBuilderStore((s) => s.activeFilePath);
  const updateFileLocally = useBuilderStore((s) => s.updateFileLocally);
  const [copied, setCopied] = useState(false);

  const activeContent = activeFilePath ? files[activeFilePath] : null;

  const handleCopy = async () => {
    if (!activeContent) return;
    await navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (activeFilePath && value !== undefined) {
        updateFileLocally(activeFilePath, value);
      }
    },
    [activeFilePath, updateFileLocally]
  );

  return (
    <div className="flex h-full bg-zinc-950 border-l border-zinc-800">
      {/* File explorer sidebar */}
      <div className="w-52 border-r border-zinc-800 overflow-y-auto flex-shrink-0">
        <div className="px-3 py-2 border-b border-zinc-800">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">
            Files
          </span>
        </div>
        <FileExplorer />
      </div>

      {/* Code editor */}
      <div className="flex-1 flex flex-col min-w-0">
        {activeFilePath ? (
          <>
            {/* File tab */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
              <div className="flex items-center gap-2 min-w-0">
                <Code2 className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <span className="text-sm text-zinc-300 truncate">
                  {activeFilePath}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 p-1.5 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
                title="Copy file contents"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Monaco Editor */}
            <div className="flex-1">
              <Suspense
                fallback={
                  <div className="flex-1 flex items-center justify-center text-zinc-600 p-4">
                    Loading editor...
                  </div>
                }
              >
                <MonacoEditor
                  height="100%"
                  language={getLanguage(activeFilePath)}
                  value={activeContent || ""}
                  onChange={handleEditorChange}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 13,
                    lineNumbers: "on",
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    tabSize: 2,
                    automaticLayout: true,
                    padding: { top: 8 },
                    renderLineHighlight: "line",
                    cursorBlinking: "smooth",
                    smoothScrolling: true,
                    bracketPairColorization: { enabled: true },
                  }}
                />
              </Suspense>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-600">
            <div className="text-center">
              <Code2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Select a file to edit its code</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
