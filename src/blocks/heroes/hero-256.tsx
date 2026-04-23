"use client";

import type { BlockProps } from "@/blocks/types";
import { Cpu, ChevronRight } from "lucide-react";

export default function Hero256(props: BlockProps) {
  const {
    theme,
    heading = "The Future Is Already Here",
    subheading = "Quantum Platform v2.0",
    bodyText = "Harness the power of next-generation computing. Our platform delivers real-time processing at the edge, pushing boundaries others haven't imagined yet.",
    buttonText = "Launch Console",
    buttonUrl = "#",
    secondaryButtonText = "Read the Docs",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#0a0a0f";
  const fg = theme?.foreground ?? "#e0e0e8";
  const primary = theme?.primary ?? "#00f0ff";

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="relative min-h-screen flex items-center px-4 py-20 sm:px-8 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${primary} 1px, transparent 1px), linear-gradient(90deg, ${primary} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
        style={{ backgroundColor: primary }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 mb-12 lg:mb-0">
            {/* Neon badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider mb-8"
              style={{
                color: primary,
                border: `1px solid ${primary}`,
                boxShadow: `0 0 12px ${primary}40, inset 0 0 12px ${primary}10`,
              }}
            >
              <Cpu className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              {heading.split(" ").map((word, i) => (
                <span key={i}>
                  {i === heading.split(" ").length - 1 ? (
                    <span
                      style={{
                        color: primary,
                        textShadow: `0 0 20px ${primary}60, 0 0 40px ${primary}30`,
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-50 max-w-lg mb-10 font-light">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all"
                style={{
                  backgroundColor: primary,
                  color: bg,
                  boxShadow: `0 0 20px ${primary}40`,
                }}
              >
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl as string}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  border: `1px solid ${primary}30`,
                  color: fg,
                }}
              >
                {secondaryButtonText as string}
              </a>
            </div>
          </div>

          {/* Futuristic decorative element */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `1px solid ${primary}20`,
                  animation: "spin 20s linear infinite",
                }}
              />
              <div
                className="absolute inset-6 rounded-full"
                style={{
                  border: `1px solid ${primary}30`,
                  animation: "spin 15s linear reverse infinite",
                }}
              />
              <div
                className="absolute inset-12 rounded-full"
                style={{
                  border: `1px solid ${primary}40`,
                  animation: "spin 10s linear infinite",
                }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: primary,
                    boxShadow: `0 0 30px ${primary}, 0 0 60px ${primary}60`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
