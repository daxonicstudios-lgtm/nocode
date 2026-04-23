"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero301(props: BlockProps) {
  const {
    theme,
    heading = "Build something extraordinary",
    subheading = "Design. Ship. Scale.",
    bodyText = "The platform that turns your boldest ideas into production-ready products — no compromises, no shortcuts.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030712", color: theme?.foreground ?? "#f9fafb" }}
      className="min-h-screen flex items-center justify-center px-5 py-24 overflow-hidden relative"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: `radial-gradient(circle, ${theme?.primary ?? "#6366f1"}, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-6"
          style={{ color: theme?.primary ?? "#6366f1" }}
        >
          {subheading}
        </p>

        {/* Massive gradient heading */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8"
          style={{
            background: `linear-gradient(135deg, ${theme?.foreground ?? "#f9fafb"}, ${theme?.primary ?? "#6366f1"}, ${theme?.accent ?? "#a855f7"})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {heading}
        </h1>

        {/* Body */}
        <p className="text-base sm:text-lg opacity-50 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        {/* CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
          style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
