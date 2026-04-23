"use client";

import type { BlockProps } from "@/blocks/types";
import { Terminal, Copy, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Hero428(props: BlockProps) {
  const {
    theme,
    heading = "Ship faster with better tools",
    subheading = "A developer-first platform with powerful APIs, CLI tools, and SDKs. Deploy in seconds, scale to millions.",
    bodyText,
    buttonText = "Read the Docs",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "$ npm install @platform/cli", description: "added 42 packages in 2.1s" },
      { title: "$ platform init my-project", description: "✓ Project created\n✓ Config generated\n✓ Dependencies installed" },
      { title: "$ platform deploy --prod", description: "Deploying to production...\n✓ Build complete (3.2s)\n✓ Deployed to https://my-project.platform.app" },
    ],
  } = props;

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, i: number) => {
    navigator.clipboard?.writeText(text.replace("$ ", ""));
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const primaryColor = theme?.primary ?? "#22c55e";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-mono mb-6 border border-current/10">
              <Terminal className="w-4 h-4" style={{ color: primaryColor }} />
              <span style={{ color: primaryColor }}>v3.0 released</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 font-mono">
              {heading}
            </h1>
            <p className="text-base sm:text-lg opacity-60 mb-8 leading-relaxed">
              {subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor, color: "#0a0a0a" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm border border-current/20 opacity-70 hover:opacity-100 transition-opacity"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right side — Terminal */}
          <div className="rounded-xl overflow-hidden border border-current/10 shadow-2xl">
            {/* Terminal header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-current/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs opacity-40 font-mono">terminal — bash</span>
            </div>

            {/* Terminal content */}
            <div className="p-5 font-mono text-sm space-y-5" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
              {items.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: primaryColor }} />
                      <span>
                        <span style={{ color: primaryColor }}>$</span>{" "}
                        <span className="opacity-90">{item.title?.replace("$ ", "")}</span>
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(item.title ?? "", i)}
                      className="opacity-0 group-hover:opacity-50 hover:!opacity-100 transition-opacity p-1"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {item.description && (
                    <div className="ml-5 mt-1.5 text-xs opacity-50 whitespace-pre-line leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" style={{ color: primaryColor }} />
                <span style={{ color: primaryColor }}>$</span>
                <span className="w-2 h-4 animate-pulse" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-8 border-t border-current/5">
          {[
            { label: "npm downloads/week", stat: "1.2M" },
            { label: "GitHub stars", stat: "48K" },
            { label: "Contributors", stat: "890+" },
            { label: "Avg deploy time", stat: "3.2s" },
          ].map((s, i) => (
            <div key={i} className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-bold font-mono" style={{ color: primaryColor }}>{s.stat}</p>
              <p className="text-xs opacity-40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
