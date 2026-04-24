"use client";

import type { BlockProps } from "@/blocks/types";
import { Terminal, Copy, ChevronRight, GitBranch, Zap } from "lucide-react";

export default function Hero312(props: BlockProps) {
  const {
    theme,
    heading = "Ship faster with type-safe APIs",
    subheading = "Developer-first infrastructure",
    bodyText = "Build, test, and deploy production-grade APIs in minutes. Auto-generated SDKs, real-time logs, and zero-config authentication.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const codeLines = [
    { indent: 0, text: 'import { createClient } from "@acme/sdk";', color: theme?.primary || "#6d9eeb" },
    { indent: 0, text: "", color: "" },
    { indent: 0, text: "const client = createClient({", color: theme?.foreground || "#e4e4e7" },
    { indent: 1, text: 'apiKey: process.env.ACME_KEY,', color: "#a78bfa" },
    { indent: 0, text: "});", color: theme?.foreground || "#e4e4e7" },
    { indent: 0, text: "", color: "" },
    { indent: 0, text: "const users = await client.users.list({", color: theme?.foreground || "#e4e4e7" },
    { indent: 1, text: "limit: 50,", color: "#fbbf24" },
    { indent: 1, text: 'status: "active",', color: "#34d399" },
    { indent: 0, text: "});", color: theme?.foreground || "#e4e4e7" },
  ];

  const stats = items.length > 0 ? items : [
    { title: "99.99%", description: "Uptime SLA" },
    { title: "<50ms", description: "Avg latency" },
    { title: "10M+", description: "API calls/day" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background || "#09090b", color: theme?.foreground || "#fafafa" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${theme?.foreground || "#fff"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.foreground || "#fff"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${theme?.primary || "#6d9eeb"}15`, color: theme?.primary || "#6d9eeb" }}
            >
              <Zap className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-60 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary || "#6d9eeb", color: "#fff" }}
              >
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-opacity hover:opacity-70"
                style={{ borderColor: `${theme?.foreground || "#fff"}20` }}
              >
                <GitBranch className="w-4 h-4" />
                View on GitHub
              </button>
            </div>

            {/* Install command */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-mono"
              style={{ backgroundColor: `${theme?.foreground || "#fff"}08` }}
            >
              <Terminal className="w-4 h-4 opacity-50" />
              <span className="opacity-70">npm install @acme/sdk</span>
              <Copy className="w-3.5 h-3.5 opacity-30 cursor-pointer hover:opacity-60 transition-opacity" />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold" style={{ color: theme?.primary || "#6d9eeb" }}>
                    {stat.title}
                  </div>
                  <div className="text-xs opacity-50 mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - code snippet */}
          <div
            className="rounded-xl border overflow-hidden shadow-2xl"
            style={{
              backgroundColor: `${theme?.foreground || "#fff"}05`,
              borderColor: `${theme?.foreground || "#fff"}10`,
            }}
          >
            {/* Terminal header */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{ borderColor: `${theme?.foreground || "#fff"}10` }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs opacity-40 font-mono ml-2">app.ts</span>
            </div>

            {/* Code content */}
            <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 24}px` }}>
                  {line.text ? (
                    <span style={{ color: line.color }} className="opacity-80">
                      {line.text}
                    </span>
                  ) : (
                    <br />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
