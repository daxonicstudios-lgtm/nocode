"use client";

import type { BlockProps } from "@/blocks/types";
import { Play, Headphones, Clock, Mic } from "lucide-react";

export default function Hero260(props: BlockProps) {
  const {
    theme,
    heading = "Stories Worth Hearing",
    subheading = "The Unfiltered Podcast",
    bodyText = "Candid conversations with founders, creators, and thinkers who are shaping the future. New episodes every Tuesday and Thursday.",
    buttonText = "Listen Now",
    buttonUrl = "#",
    secondaryButtonText = "Subscribe",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "The Art of Failing Forward", description: "Ep. 142 — 48 min", label: "New" },
      { title: "Building in Public: Year One", description: "Ep. 141 — 62 min", label: "" },
      { title: "Why Most Startups Get Culture Wrong", description: "Ep. 140 — 55 min", label: "" },
    ],
  } = props;

  const bg = theme?.background ?? "#151520";
  const fg = theme?.foreground ?? "#f0f0f5";
  const primary = theme?.primary ?? "#f97316";

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="min-h-screen flex items-center px-4 py-16 sm:px-8"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - main content (3 cols) */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: primary }}
              >
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase" style={{ color: primary }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-50 max-w-lg mb-8 font-light">
              {bodyText}
            </p>

            {/* Audio wave decoration */}
            <div className="flex items-end gap-1 mb-10 h-8">
              {Array.from({ length: 24 }).map((_, i) => {
                const heights = [40, 65, 30, 80, 50, 90, 35, 70, 45, 85, 55, 75, 40, 60, 95, 50, 70, 35, 80, 45, 65, 55, 75, 40];
                return (
                  <div
                    key={i}
                    className="w-1 rounded-full flex-shrink-0"
                    style={{
                      height: `${heights[i % heights.length]}%`,
                      backgroundColor: primary,
                      opacity: 0.3 + (i % 3) * 0.2,
                    }}
                  />
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primary }}
              >
                <Play className="w-4 h-4 fill-current" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl as string}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  border: `1px solid rgba(255,255,255,0.15)`,
                  color: fg,
                }}
              >
                <Headphones className="w-4 h-4" />
                {secondaryButtonText as string}
              </a>
            </div>
          </div>

          {/* Right - episode list (2 cols) */}
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-widest opacity-40 mb-4 font-medium">Latest Episodes</p>
            <div className="flex flex-col gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex items-start gap-4 group cursor-pointer transition-colors"
                  style={{
                    background: `rgba(255,255,255,0.03)`,
                    border: `1px solid rgba(255,255,255,0.06)`,
                  }}
                >
                  {/* Play icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mt-0.5 transition-colors"
                    style={{
                      backgroundColor: `${primary}15`,
                      color: primary,
                    }}
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                      {item.label && (
                        <span
                          className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase"
                          style={{ backgroundColor: primary, color: "#fff" }}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                    <p className="text-xs opacity-40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
