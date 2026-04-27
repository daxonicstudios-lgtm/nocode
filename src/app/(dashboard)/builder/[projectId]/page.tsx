"use client";

import { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useBuilderStore } from "@/stores/builder-store";
import ChatPanel from "@/components/builder/ChatPanel";
import PreviewPanel from "@/components/builder/PreviewPanel";
import CodePanel from "@/components/builder/CodePanel";
import BuilderToolbar from "@/components/builder/BuilderToolbar";
import MobileTabBar from "@/components/builder/MobileTabBar";

export default function BuilderPage() {
  const params = useParams();
  const projectId = params.projectId as string;

  const searchParams = useSearchParams();
  const initialPromptSent = useRef(false);

  const loadProject = useBuilderStore((s) => s.loadProject);
  const sendMessage = useBuilderStore((s) => s.sendMessage);
  const activePanel = useBuilderStore((s) => s.activePanel);
  const showCodePanel = useBuilderStore((s) => s.showCodePanel);

  useEffect(() => {
    if (projectId) {
      loadProject(projectId).then(() => {
        // Auto-send the initial prompt from the projects page
        const prompt = searchParams.get("prompt");
        if (prompt && !initialPromptSent.current) {
          initialPromptSent.current = true;
          sendMessage(prompt);
        }
      });
    }
  }, [projectId, loadProject, sendMessage, searchParams]);

  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      {/* Top toolbar */}
      <BuilderToolbar />

      {/* Main content area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop layout: side-by-side panels */}
        <div className="hidden lg:flex flex-1">
          {/* Chat panel — fixed width */}
          <div className="w-[340px] flex-shrink-0">
            <ChatPanel />
          </div>

          {/* Code panel — toggleable */}
          {showCodePanel && (
            <div className="w-[400px] flex-shrink-0">
              <CodePanel />
            </div>
          )}

          {/* Preview panel — fills remaining space */}
          <div className="flex-1 min-w-0">
            <PreviewPanel />
          </div>
        </div>

        {/* Mobile layout: single panel with tab switching */}
        <div className="flex lg:hidden flex-1">
          <div
            className={`flex-1 ${activePanel === "chat" ? "block" : "hidden"}`}
          >
            <ChatPanel />
          </div>
          <div
            className={`flex-1 ${activePanel === "code" ? "block" : "hidden"}`}
          >
            <CodePanel />
          </div>
          <div
            className={`flex-1 ${activePanel === "preview" ? "block" : "hidden"}`}
          >
            <PreviewPanel />
          </div>
        </div>
      </div>

      {/* Mobile bottom tab bar */}
      <MobileTabBar />
    </div>
  );
}
