"use client";

import type { BlockProps } from "@/blocks/types";
import { Radio, Clock, TrendingUp, ChevronRight, Zap } from "lucide-react";

export default function Hero268(props: BlockProps) {
  const {
    theme,
    heading = "Tech Giants Report Record Growth as AI Adoption Accelerates Worldwide",
    subheading = "Breaking News",
    bodyText = "Major technology companies posted their strongest quarterly results in years, driven by surging demand for artificial intelligence products and services across every sector of the global economy.",
    buttonText = "Read Full Story",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Markets Rally to New Highs on Strong Earnings Reports", label: "Finance" },
      { title: "Climate Summit Reaches Historic Agreement on Emissions", label: "World" },
      { title: "New Study Reveals Benefits of Four-Day Work Week", label: "Business" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#ffffff",
        color: theme?.foreground ?? "#111111",
      }}
      className="relative overflow-hidden"
    >
      {/* Breaking news ticker */}
      <div
        className="w-full py-2 px-4 flex items-center gap-3"
        style={{
          backgroundColor: theme?.primary ?? "#dc2626",
          color: "#fff",
        }}
      >
        <Zap className="w-4 h-4 flex-shrink-0 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider flex-shrink-0">
          {subheading}
        </span>
        <div className="w-px h-4 bg-white/30 flex-shrink-0" />
        <div className="overflow-hidden whitespace-nowrap">
          <span className="text-xs animate-pulse">
            Live updates coming in — stay tuned for developing stories
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main story - 2 cols */}
          <div className="lg:col-span-2">
            {/* Category + timestamp */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-1"
                style={{
                  backgroundColor: theme?.primary ?? "#dc2626",
                  color: "#fff",
                }}
              >
                Technology
              </span>
              <span className="text-xs opacity-40 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                12 minutes ago
              </span>
              <span className="text-xs opacity-40 flex items-center gap-1">
                <Radio className="w-3 h-3" />
                Live
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight mb-5 tracking-tight">
              {heading}
            </h1>

            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full aspect-video object-cover mb-5"
              />
            ) : (
              <div
                className="w-full aspect-video mb-5 flex items-center justify-center"
                style={{
                  backgroundColor: `${theme?.foreground ?? "#111111"}08`,
                }}
              >
                <TrendingUp className="w-16 h-16 opacity-10" />
              </div>
            )}

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-6 max-w-2xl">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 font-bold text-sm transition-opacity hover:opacity-70"
              style={{ color: theme?.primary ?? "#dc2626" }}
            >
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Sidebar stories */}
          <div
            className="lg:border-l lg:pl-8 space-y-0"
            style={{ borderColor: `${theme?.foreground ?? "#111111"}10` }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] opacity-40 mb-6">
              Top Stories
            </h2>

            {items.map((item, i) => (
              <a
                key={i}
                href={buttonUrl}
                className="block py-5 group"
                style={{
                  borderBottom: `1px solid ${theme?.foreground ?? "#111111"}10`,
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: theme?.primary ?? "#dc2626" }}
                >
                  {item.label}
                </span>
                <h3 className="text-base font-bold leading-snug mt-1 transition-opacity group-hover:opacity-70">
                  {item.title}
                </h3>
                <span className="text-xs opacity-30 mt-2 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {(i + 1) * 25} min ago
                </span>
              </a>
            ))}

            <div className="pt-6">
              <a
                href={buttonUrl}
                className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: theme?.primary ?? "#dc2626" }}
              >
                View All Stories
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
