"use client";

import type { BlockProps } from "@/blocks/types";
import { Terminal, ChevronRight, SquareCode, GitBranch } from "lucide-react";

export default function Hero278(props: BlockProps) {
  const {
    theme,
    heading = "ship faster. break nothing.",
    subheading = "developer-first infrastructure",
    bodyText = "A CLI-native platform for teams who live in the terminal. Deploy, monitor, and scale without leaving your workflow.",
    buttonText = "npm install @acme/cli",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "$ acme deploy --prod", description: "Deploying to production...", label: "success" },
      { title: "$ acme status", description: "All systems operational", label: "info" },
      { title: "$ acme logs --tail", description: "Streaming live logs...", label: "stream" },
    ],
  } = props;

  const accent = theme?.primary ?? "#22c55e";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Top bar */}
        <div className="mb-12 flex items-center gap-3">
          <Terminal className="h-5 w-5" style={{ color: accent }} />
          <span
            className="font-mono text-xs font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            {subheading}
          </span>
          <div className="h-px flex-1 opacity-20" style={{ backgroundColor: accent }} />
        </div>

        {/* Main heading - monospace style */}
        <div className="mb-8">
          <h1
            className="mb-4 font-mono text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            <span style={{ color: accent }}>&gt; </span>
            {heading}
          </h1>
          <p className="max-w-2xl font-mono text-sm leading-relaxed opacity-50 sm:text-base">
            {bodyText}
          </p>
        </div>

        {/* Install command */}
        <div className="mb-12 flex flex-wrap gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-mono text-sm transition-colors hover:bg-white/5"
            style={{ borderColor: `${accent}40`, color: accent }}
          >
            <ChevronRight className="h-4 w-4" />
            {buttonText}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 font-mono text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            <GitBranch className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        {/* Terminal Window */}
        <div
          className="overflow-hidden rounded-xl border shadow-2xl"
          style={{
            borderColor: theme?.border ?? "#27272a",
            backgroundColor: theme?.card ?? "#18181b",
          }}
        >
          {/* Terminal Header */}
          <div
            className="flex items-center gap-3 border-b px-4 py-3"
            style={{ borderColor: theme?.border ?? "#27272a" }}
          >
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-2 rounded bg-white/5 px-3 py-1">
              <SquareCode className="h-3 w-3 opacity-40" />
              <span className="font-mono text-xs opacity-40">~/projects/my-app</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 font-mono text-sm leading-loose">
            {items.map((item, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-start gap-2">
                  <span style={{ color: accent }}>$</span>
                  <span className="font-semibold opacity-90">
                    {item.title?.replace("$ ", "")}
                  </span>
                </div>
                <div className="ml-4 flex items-center gap-2 opacity-50">
                  {item.label === "success" && (
                    <span className="text-green-400">&#10003;</span>
                  )}
                  {item.label === "info" && (
                    <span className="text-blue-400">&#9432;</span>
                  )}
                  {item.label === "stream" && (
                    <span className="text-yellow-400">&#9654;</span>
                  )}
                  <span>{item.description}</span>
                </div>
              </div>
            ))}

            {/* Cursor line */}
            <div className="flex items-center gap-2">
              <span style={{ color: accent }}>$</span>
              <span
                className="inline-block h-5 w-2 animate-pulse"
                style={{ backgroundColor: accent }}
              />
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { value: "40ms", label: "avg deploy time" },
            { value: "99.99%", label: "uptime SLA" },
            { value: "186", label: "edge regions" },
            { value: "OSS", label: "open source" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-mono text-xl font-bold" style={{ color: accent }}>
                {stat.value}
              </p>
              <p className="font-mono text-xs opacity-40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
