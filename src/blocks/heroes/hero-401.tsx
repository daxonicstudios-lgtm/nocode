"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero401(props: BlockProps) {
  const {
    theme,
    heading = "Simplicity is the ultimate sophistication",
    subheading = "Design Platform",
    bodyText = "Strip away the unnecessary. Focus on what matters. Build products that resonate with clarity and purpose.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#111" }}
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme?.foreground ?? "#111"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">
        <span
          className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-6 px-4 py-1.5 rounded-full border"
          style={{ borderColor: theme?.primary ?? "#333", color: theme?.primary ?? "#333" }}
        >
          {subheading}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight mb-6">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-60 leading-relaxed max-w-lg mx-auto mb-10">
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase px-8 py-3 rounded-none transition-opacity hover:opacity-80"
          style={{ backgroundColor: theme?.primary ?? "#111", color: theme?.background ?? "#fafafa" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>

        {items.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-light" style={{ color: theme?.primary ?? "#111" }}>
                  {item.value ?? "100+"}
                </div>
                <div className="text-xs uppercase tracking-widest opacity-40 mt-1">
                  {item.label ?? "Metric"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute bottom-0 right-0 w-1/3 opacity-10 pointer-events-none"
        />
      )}
    </section>
  );
}
