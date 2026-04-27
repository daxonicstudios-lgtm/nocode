"use client";

import { useState, useRef, useEffect } from "react";
import { useBuilderStore } from "@/stores/builder-store";
import { ChevronDown, Sparkles, Cpu, Zap } from "lucide-react";
import type { AIModel } from "@/lib/ai/code-agent";

interface ModelOption {
  id: AIModel;
  name: string;
  description: string;
  icon: typeof Sparkles;
  color: string;
  dotColor: string;
  available: boolean;
}

const MODELS: ModelOption[] = [
  {
    id: "gemini-flash",
    name: "Gemini Flash",
    description: "Fast & free — great for iteration",
    icon: Zap,
    color: "text-emerald-400",
    dotColor: "bg-emerald-400",
    available: true,
  },
  {
    id: "claude-sonnet",
    name: "Claude Sonnet",
    description: "Best code quality — needs API key",
    icon: Sparkles,
    color: "text-violet-400",
    dotColor: "bg-violet-400",
    available: true,
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Powerful alternative — needs API key",
    icon: Cpu,
    color: "text-blue-400",
    dotColor: "bg-blue-400",
    available: true,
  },
];

export default function ModelSelector() {
  const selectedModel = useBuilderStore((s) => s.selectedModel);
  const setSelectedModel = useBuilderStore((s) => s.setSelectedModel);
  const isGenerating = useBuilderStore((s) => s.isGenerating);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = MODELS.find((m) => m.id === selectedModel) || MODELS[0];
  const CurrentIcon = current.icon;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        disabled={isGenerating}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:border-zinc-700 disabled:opacity-50 transition-colors"
      >
        <span className={`w-1.5 h-1.5 rounded-full ${current.dotColor}`} />
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown className="w-3 h-3 text-zinc-500" />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-1 w-64 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden z-50">
          {MODELS.map((model) => {
            const Icon = model.icon;
            const isActive = model.id === selectedModel;
            return (
              <button
                key={model.id}
                onClick={() => {
                  setSelectedModel(model.id);
                  setOpen(false);
                }}
                className={`flex items-start gap-3 w-full px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "bg-violet-600/10 border-l-2 border-violet-500"
                    : "hover:bg-zinc-800/50 border-l-2 border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${model.color}`} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-zinc-200">
                      {model.name}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${model.dotColor}`} />
                  </div>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {model.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
