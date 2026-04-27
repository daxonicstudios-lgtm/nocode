"use client";

import { useBuilderStore } from "@/stores/builder-store";
import FileExplorer from "./FileExplorer";
import { Code2, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodePanel() {
  const files = useBuilderStore((s) => s.files);
  const activeFilePath = useBuilderStore((s) => s.activeFilePath);
  const [copied, setCopied] = useState(false);

  const activeContent = activeFilePath ? files[activeFilePath] : null;

  const handleCopy = async () => {
    if (!activeContent) return;
    await navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      {/* Code viewer */}
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

            {/* Code content */}
            <div className="flex-1 overflow-auto">
              <pre className="p-4 text-sm font-mono leading-relaxed">
                <code className="text-zinc-300">
                  {activeContent?.split("\n").map((line, i) => (
                    <div key={i} className="flex">
                      <span className="inline-block w-10 text-right mr-4 text-zinc-600 select-none flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="flex-1 whitespace-pre-wrap break-all">
                        {line || " "}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-zinc-600">
            <div className="text-center">
              <Code2 className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">Select a file to view its code</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
