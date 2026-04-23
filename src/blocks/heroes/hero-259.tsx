"use client";

import type { BlockProps } from "@/blocks/types";
import { Gem, ExternalLink, TrendingUp } from "lucide-react";

export default function Hero259(props: BlockProps) {
  const {
    theme,
    heading = "Collect Digital Art That Matters",
    subheading = "NFT Marketplace",
    bodyText = "Discover, collect, and trade extraordinary NFTs from creators around the world. Curated drops, verified artists, zero gas fees.",
    buttonText = "Mint Now",
    buttonUrl = "#",
    secondaryButtonText = "Explore Collection",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "Neon Dreams #42", description: "0.85 ETH", label: "Live", imageUrl: "" },
      { title: "Cosmic Drift #17", description: "1.2 ETH", label: "Live", imageUrl: "" },
      { title: "Abstract Mind #08", description: "0.6 ETH", label: "Ended", imageUrl: "" },
      { title: "Digital Flora #31", description: "2.1 ETH", label: "Live", imageUrl: "" },
    ],
  } = props;

  const bg = theme?.background ?? "#101018";
  const fg = theme?.foreground ?? "#eeeef2";
  const primary = theme?.primary ?? "#a855f7";

  const placeholderColors = ["#6366f1", "#8b5cf6", "#a855f7", "#d946ef"];

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="min-h-screen px-4 py-16 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8"
              style={{
                background: `${primary}15`,
                color: primary,
                border: `1px solid ${primary}25`,
              }}
            >
              <Gem className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-50 max-w-md mb-8 font-light">
              {bodyText}
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 mb-10">
              <div>
                <p className="text-2xl font-bold" style={{ color: primary }}>12.4K</p>
                <p className="text-xs opacity-40 mt-1">Artworks</p>
              </div>
              <div className="w-px h-10 opacity-10" style={{ backgroundColor: fg }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: primary }}>3.2K</p>
                <p className="text-xs opacity-40 mt-1">Artists</p>
              </div>
              <div className="w-px h-10 opacity-10" style={{ backgroundColor: fg }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: primary }}>28K+</p>
                <p className="text-xs opacity-40 mt-1">Collectors</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primary }}
              >
                <Gem className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl as string}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  border: `1px solid ${primary}30`,
                  color: fg,
                }}
              >
                {secondaryButtonText as string}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right - NFT preview grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {items.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden group"
                style={{
                  background: `rgba(255,255,255,0.03)`,
                  border: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                {/* Image or colored placeholder */}
                <div
                  className="aspect-square relative"
                  style={{
                    background: item.imageUrl
                      ? `url(${item.imageUrl}) center/cover`
                      : `linear-gradient(135deg, ${placeholderColors[i % 4]}30, ${placeholderColors[(i + 1) % 4]}20)`,
                  }}
                >
                  {item.label && (
                    <span
                      className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase"
                      style={{
                        backgroundColor: item.label === "Live" ? "#22c55e" : "#6b7280",
                        color: "#fff",
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-sm font-semibold truncate">{item.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-50">Floor</span>
                    <span className="text-xs font-semibold flex items-center gap-1" style={{ color: primary }}>
                      <TrendingUp className="w-3 h-3" />
                      {item.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
