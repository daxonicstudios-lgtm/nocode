"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Search, Users, Heart, ArrowRight } from "lucide-react";

export default function Hero338(props: BlockProps) {
  const {
    theme,
    heading = "Stories Worth Getting Lost In",
    subheading = "Independent Bookstore & Reading Community",
    bodyText = "Curated shelves, cozy corners, and staff picks that never disappoint. More than a store — we are a gathering place for curious minds and passionate readers.",
    buttonText = "Browse New Releases",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Weight of Light", description: "Elena Marchetti", label: "Fiction" },
      { title: "Thinking in Systems", description: "Donella Meadows", label: "Non-Fiction" },
      { title: "Midnight Atlas", description: "James Okoro", label: "Sci-Fi" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FFFDF7", color: theme?.foreground ?? "#2C1810" }}
      className="relative overflow-hidden"
    >
      {/* Paper texture feel */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${(theme?.foreground ?? "#2C1810").replace("#", "")}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: featured book display */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-5">Staff Picks This Week</h3>
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                  style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#2C181005" }}
                >
                  {/* Book spine visual */}
                  <div
                    className="w-3 h-20 rounded-sm shrink-0 self-center"
                    style={{ backgroundColor: i === 0 ? (theme?.primary ?? "#B45309") : i === 1 ? (theme?.accent ?? "#1E6B55") : "#6B4C8A" }}
                  />
                  <div
                    className="w-14 h-20 rounded-sm shrink-0 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: theme?.foreground ? `${theme.foreground}08` : "#2C181008" }}
                  >
                    <BookOpen className="w-6 h-6 opacity-20" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest mb-1"
                      style={{ color: theme?.primary ?? "#B45309" }}
                    >
                      {item.label}
                    </span>
                    <h4 className="font-bold text-sm leading-tight mb-0.5" style={{ fontFamily: "Georgia, serif" }}>
                      {item.title}
                    </h4>
                    <span className="text-xs opacity-50">by {item.description}</span>
                  </div>
                  <Heart className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity self-center shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: main content */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#B45309" }} />
              <span className="text-sm font-medium" style={{ color: theme?.primary ?? "#B45309" }}>
                {subheading}
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            {/* Search bar */}
            <div className="flex gap-2 mb-8 max-w-md">
              <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg border" style={{ borderColor: theme?.foreground ? `${theme.foreground}15` : "#2C181015" }}>
                <Search className="w-4 h-4 opacity-30" />
                <span className="text-sm opacity-40">Search by title, author, or ISBN...</span>
              </div>
              <a
                href={buttonUrl}
                className="px-5 py-3 rounded-lg font-semibold text-sm text-white shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#B45309" }}
              >
                Search
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme?.primary ?? "#B45309" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border hover:bg-black/5 transition-colors"
                style={{ borderColor: theme?.primary ?? "#B45309", color: theme?.primary ?? "#B45309" }}
              >
                <Users className="w-4 h-4" />
                Join Book Club
              </a>
            </div>

            <div className="flex gap-6 text-sm opacity-50">
              <span className="font-semibold">50,000+ titles</span>
              <span>|</span>
              <span>Free local delivery</span>
              <span>|</span>
              <span>Weekly author events</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
