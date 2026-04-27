"use client";

import { useBuilderStore } from "@/stores/builder-store";
import { File, Folder, FolderOpen, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";

interface TreeNode {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: TreeNode[];
}

function buildTree(paths: string[]): TreeNode[] {
  const root: TreeNode[] = [];

  for (const path of paths.sort()) {
    const parts = path.split("/");
    let currentLevel = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;
      const fullPath = parts.slice(0, i + 1).join("/");

      const existing = currentLevel.find((n) => n.name === part);

      if (existing && !isFile) {
        currentLevel = existing.children || [];
      } else if (!existing) {
        const node: TreeNode = {
          name: part,
          path: fullPath,
          type: isFile ? "file" : "folder",
          children: isFile ? undefined : [],
        };
        currentLevel.push(node);
        if (!isFile) {
          currentLevel = node.children!;
        }
      }
    }
  }

  return root;
}

function FileIcon({ name }: { name: string }) {
  const ext = name.split(".").pop();
  const colorMap: Record<string, string> = {
    tsx: "text-blue-400",
    ts: "text-blue-300",
    css: "text-purple-400",
    json: "text-yellow-400",
    html: "text-orange-400",
    md: "text-zinc-400",
  };
  return <File className={`w-4 h-4 ${colorMap[ext || ""] || "text-zinc-500"}`} />;
}

function TreeItem({
  node,
  depth,
  activePath,
  onSelect,
}: {
  node: TreeNode;
  depth: number;
  activePath: string | null;
  onSelect: (path: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const isActive = node.path === activePath;

  if (node.type === "folder") {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 w-full px-2 py-1 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          {expanded ? (
            <ChevronDown className="w-3 h-3 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
          )}
          {expanded ? (
            <FolderOpen className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          ) : (
            <Folder className="w-4 h-4 text-yellow-600 flex-shrink-0" />
          )}
          <span className="truncate">{node.name}</span>
        </button>
        {expanded &&
          node.children?.map((child) => (
            <TreeItem
              key={child.path}
              node={child}
              depth={depth + 1}
              activePath={activePath}
              onSelect={onSelect}
            />
          ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => onSelect(node.path)}
      className={`flex items-center gap-1.5 w-full px-2 py-1 text-sm rounded transition-colors ${
        isActive
          ? "bg-violet-600/20 text-violet-300"
          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
      }`}
      style={{ paddingLeft: `${depth * 12 + 20}px` }}
    >
      <FileIcon name={node.name} />
      <span className="truncate">{node.name}</span>
    </button>
  );
}

export default function FileExplorer() {
  const files = useBuilderStore((s) => s.files);
  const activeFilePath = useBuilderStore((s) => s.activeFilePath);
  const setActiveFile = useBuilderStore((s) => s.setActiveFile);

  const tree = useMemo(() => buildTree(Object.keys(files)), [files]);

  if (Object.keys(files).length === 0) {
    return (
      <div className="p-4 text-sm text-zinc-600 text-center">
        No files yet. Send a message to generate code.
      </div>
    );
  }

  return (
    <div className="py-2 overflow-y-auto">
      {tree.map((node) => (
        <TreeItem
          key={node.path}
          node={node}
          depth={0}
          activePath={activeFilePath}
          onSelect={setActiveFile}
        />
      ))}
    </div>
  );
}
