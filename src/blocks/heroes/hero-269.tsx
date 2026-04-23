"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero269(props: BlockProps) {
  const {
    theme,
    heading = "Create Without Limits",
    subheading = "The future belongs to builders",
    bodyText = "Design, build, and launch digital experiences that captivate audiences and drive results. No complexity, just clarity.",
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#09090b",
        color: theme?.foreground ?? "#fafafa",
      }}
      className="relative overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${theme?.primary ?? "#6366f1"}12, transparent 70%)`,
        }}
      />

      {/* Bottom fade line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme?.primary ?? "#6366f1"}33, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p
          className="text-sm sm:text-base font-medium mb-6 opacity-50 tracking-wide"
        >
          {subheading}
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
          {heading}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl opacity-40 max-w-xl mx-auto leading-relaxed mb-12">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#6366f1",
              color: "#fff",
              boxShadow: `0 0 40px ${theme?.primary ?? "#6366f1"}33`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border transition-all hover:opacity-80"
            style={{
              borderColor: `${theme?.foreground ?? "#fafafa"}15`,
              color: theme?.foreground ?? "#fafafa",
            }}
          >
            Learn More
          </a>
        </div>

        {/* Subtle bottom text */}
        <p className="mt-16 text-xs opacity-20 tracking-wider uppercase">
          Trusted by 10,000+ creators worldwide
        </p>
      </div>
    </section>
  );
}
