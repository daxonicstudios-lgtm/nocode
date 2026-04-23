"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Palette, PenTool, Grid3X3, CheckSquare, ArrowRight } from "lucide-react";

export default function Hero482(props: BlockProps) {
  const {
    theme,
    heading = "Plan, Create, Achieve",
    subheading = "Premium Stationery & Planners for Purposeful Living",
    bodyText = "Beautifully designed planners, journals, and stationery that help you organize your days and express your creativity. FSC-certified paper, lay-flat binding, and timeless design.",
    buttonText = "Browse Planners",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Daily Planners", description: "Structured layouts for productive days", value: "24" },
      { title: "Bullet Journals", description: "Dot-grid pages for creative planning", value: "18" },
      { title: "Notebook Sets", description: "Lined, blank, and grid options", value: "32" },
    ],
  } = props;

  const collections = [
    { name: "2026 Academic Planner", color: "#e8d5c4", tag: "New" },
    { name: "Minimalist Weekly", color: "#c4d5e8", tag: "Bestseller" },
    { name: "Goal Setter Pro", color: "#d5e8c4", tag: "Popular" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#2d2a26" }}
      className="relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 40px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        {/* Top badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border" style={{ borderColor: theme?.primary ?? "#6b5ce7", color: theme?.primary ?? "#6b5ce7" }}>
            <PenTool className="w-4 h-4" />
            Customize any planner with your name or monogram
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#6b5ce7" }}>
            {subheading}
          </p>
          <p className="text-base opacity-70 mb-8 leading-relaxed">{bodyText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#6b5ce7" }}
            >
              <BookOpen className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 transition-colors hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#6b5ce7", color: theme?.primary ?? "#6b5ce7" }}
            >
              <Palette className="w-4 h-4" />
              Custom Orders
            </a>
          </div>
        </div>

        {/* Featured collections */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {collections.map((col, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-black/5 group cursor-pointer transition-shadow hover:shadow-lg">
              <div className="h-40 flex items-center justify-center" style={{ backgroundColor: col.color }}>
                <BookOpen className="w-12 h-12 opacity-30" />
              </div>
              <div className="p-4" style={{ backgroundColor: theme?.background ?? "#faf8f5" }}>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{col.name}</p>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: theme?.primary ?? "#6b5ce7" }}>
                    {col.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const icons = [CheckSquare, Grid3X3, BookOpen];
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-black/5" style={{ backgroundColor: "rgba(107,92,231,0.04)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary ?? "#6b5ce7" }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm opacity-60 mt-0.5">{item.description}</p>
                  <p className="text-xs mt-2 font-medium flex items-center gap-1" style={{ color: theme?.primary ?? "#6b5ce7" }}>
                    {item.value} designs <ArrowRight className="w-3 h-3" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
