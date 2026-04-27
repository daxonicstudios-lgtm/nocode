"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useBuilderStore } from "@/stores/builder-store";
import ChatPanel from "@/components/builder/ChatPanel";
import PreviewPanel from "@/components/builder/PreviewPanel";
import CodePanel from "@/components/builder/CodePanel";
import BuilderToolbar from "@/components/builder/BuilderToolbar";
import MobileTabBar from "@/components/builder/MobileTabBar";
import { GripHorizontal } from "lucide-react";

export default function BuilderPage() {
  const params = useParams();
  const projectId = params.projectId as string;

  const searchParams = useSearchParams();
  const initialPromptSent = useRef(false);

  const loadProject = useBuilderStore((s) => s.loadProject);
  const sendMessage = useBuilderStore((s) => s.sendMessage);
  const activePanel = useBuilderStore((s) => s.activePanel);
  const showCodePanel = useBuilderStore((s) => s.showCodePanel);

  // Bottom drawer height (in pixels)
  const [drawerHeight, setDrawerHeight] = useState(300);
  const isDragging = useRef(false);

  useEffect(() => {
    if (projectId) {
      loadProject(projectId).then(() => {
        const prompt = searchParams.get("prompt");
        if (prompt && !initialPromptSent.current) {
          initialPromptSent.current = true;
          sendMessage(prompt);
        }
      });
    }
  }, [projectId, loadProject, sendMessage, searchParams]);

  // Drag handler for resizing the code drawer
  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    const startY = e.clientY;
    const startHeight = drawerHeight;

    const handleMove = (me: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = startY - me.clientY;
      const newHeight = Math.max(150, Math.min(startHeight + delta, window.innerHeight - 200));
      setDrawerHeight(newHeight);
    };

    const handleUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0A0A0F] overflow-hidden">
      {/* Top toolbar */}
      <BuilderToolbar />

      {/* ─── Desktop layout ─── */}
      <div className="hidden lg:flex flex-col flex-1 overflow-hidden">
        {/* Main area: Chat + Preview side by side */}
        <div
          className="flex flex-1 overflow-hidden"
          style={{
            height: showCodePanel
              ? `calc(100% - ${drawerHeight}px)`
              : "100%",
          }}
        >
          {/* Chat panel — fixed width with glass border */}
          <div className="w-[340px] flex-shrink-0 border-r border-zinc-800/50">
            <ChatPanel />
          </div>

          {/* Preview panel — fills remaining space */}
          <div className="flex-1 min-w-0">
            <PreviewPanel />
          </div>
        </div>

        {/* Code panel — bottom drawer that slides up */}
        {showCodePanel && (
          <div
            className="border-t border-zinc-800/50 bg-[#0D0D12] flex flex-col"
            style={{ height: `${drawerHeight}px` }}
          >
            {/* Drag handle */}
            <div
              onMouseDown={handleDragStart}
              className="flex items-center justify-center h-6 cursor-row-resize hover:bg-zinc-800/50 transition-colors group"
            >
              <GripHorizontal className="w-5 h-4 text-zinc-700 group-hover:text-zinc-500" />
            </div>

            {/* Code editor fills the rest */}
            <div className="flex-1 overflow-hidden">
              <CodePanel />
            </div>
          </div>
        )}
      </div>

      {/* ─── Mobile layout ─── */}
      <div className="flex lg:hidden flex-1 overflow-hidden">
        <div
          className={`flex-1 ${activePanel === "chat" ? "flex flex-col" : "hidden"}`}
        >
          <ChatPanel />
        </div>
        <div
          className={`flex-1 ${activePanel === "code" ? "flex flex-col" : "hidden"}`}
        >
          <CodePanel />
        </div>
        <div
          className={`flex-1 ${activePanel === "preview" ? "flex flex-col" : "hidden"}`}
        >
          <PreviewPanel />
        </div>
      </div>

      {/* Mobile bottom tab bar */}
      <MobileTabBar />
    </div>
  );
}
