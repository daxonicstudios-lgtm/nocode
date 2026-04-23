"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Hero253(props: BlockProps) {
  const {
    theme,
    heading = "Build Interfaces That Feel Like Magic",
    subheading = "Next-Gen Design Platform",
    bodyText = "Create stunning, responsive websites with our intuitive drag-and-drop builder. No coding required, no compromises made.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#fff" }}
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Glassmorphism card */}
        <div
          className="rounded-3xl p-8 sm:p-12 md:p-16"
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-xl mx-auto mb-10">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl as string}
              className="px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {secondaryButtonText as string}
            </a>
          </div>
        </div>

        {imageUrl && (
          <div className="mt-12 rounded-2xl overflow-hidden" style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <img src={imageUrl} alt="" className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
}
