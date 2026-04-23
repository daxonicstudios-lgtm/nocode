"use client";

import type { BlockProps } from "@/blocks/types";
import { Terminal, ArrowUpRight } from "lucide-react";

export default function Hero434(props: BlockProps) {
  const {
    theme,
    heading = "Ship Products Faster",
    subheading = "Developer-First Platform",
    bodyText = "A modern development toolkit that eliminates boilerplate and lets your team focus on building features that matter.",
    buttonText = "Start Coding",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#22c55e";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="relative min-h-screen flex items-center px-4 py-20"
    >
      <style>{`
        @keyframes hero434-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes hero434-typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .hero434-cursor::after {
          content: '|';
          font-weight: 700;
          animation: hero434-blink 1s step-end infinite;
          margin-left: 2px;
        }
        .hero434-type-line {
          overflow: hidden;
          white-space: nowrap;
          animation: hero434-typing 2s steps(40) forwards;
          width: 0;
        }
        .hero434-type-delay-1 { animation-delay: 0.5s; }
        .hero434-type-delay-2 { animation-delay: 1.5s; }
      `}</style>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5" style={{ color: primaryColor }} />
            <span
              className="text-sm font-mono font-semibold tracking-wider uppercase"
              style={{ color: primaryColor }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="hero434-cursor">{heading}</span>
          </h1>

          <p className="text-lg opacity-60 max-w-lg leading-relaxed">{bodyText}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-black font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: primaryColor }}
            >
              {buttonText}
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
            >
              View Docs
            </a>
          </div>
        </div>

        {/* Right: terminal mockup */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs opacity-40 ml-3 font-mono">terminal</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-3 bg-black/40">
            <div className="flex gap-2">
              <span style={{ color: primaryColor }}>$</span>
              <span className="hero434-type-line hero434-type-delay-1 opacity-80">
                npx create-app my-project --template pro
              </span>
            </div>
            <div className="flex gap-2">
              <span style={{ color: primaryColor }}>$</span>
              <span className="hero434-type-line hero434-type-delay-2 opacity-80">
                cd my-project && npm run dev
              </span>
            </div>
            <div className="pt-2 opacity-50 text-xs">
              <p>Ready in 1.2s</p>
              <p>
                Local: <span style={{ color: primaryColor }}>http://localhost:3000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
