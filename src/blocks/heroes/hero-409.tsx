"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Star, ArrowRight } from "lucide-react";

export default function Hero409(props: BlockProps) {
  const {
    theme,
    heading = "Today's Special",
    subheading = "Est. 2019",
    bodyText = "Fresh ingredients, family recipes, served with love. Our chalkboard menu changes with the seasons because the best food follows nature.",
    buttonText = "See the Menu",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#2a3028";
  const fg = theme?.foreground ?? "#e8e4d8";
  const primary = theme?.primary ?? "#f5deb3";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Chalkboard texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%">
          <filter id="chalk409">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#chalk409)" />
        </svg>
      </div>

      {/* Chalk dust smudges */}
      <div
        className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full blur-[60px] opacity-[0.04]"
        style={{ backgroundColor: "#fff" }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-36 h-36 rounded-full blur-[50px] opacity-[0.03]"
        style={{ backgroundColor: "#fff" }}
      />

      {/* Chalk border frame */}
      <div
        className="absolute inset-4 sm:inset-8 border-2 rounded-sm pointer-events-none"
        style={{ borderColor: `${fg}15` }}
      />
      <div
        className="absolute inset-5 sm:inset-9 border pointer-events-none"
        style={{ borderColor: `${fg}08` }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 sm:px-12 py-20 text-center">
        {/* Decorative top */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px" style={{ backgroundColor: `${fg}30` }} />
          <Star className="w-4 h-4" style={{ color: primary }} />
          <div className="w-12 h-px" style={{ backgroundColor: `${fg}30` }} />
        </div>

        <span
          className="text-xs tracking-[0.35em] uppercase font-medium opacity-60"
        >
          {subheading}
        </span>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 mb-2"
          style={{
            fontFamily: "'Georgia', serif",
            color: primary,
            textShadow: `1px 1px 0 ${bg}`,
          }}
        >
          {heading}
        </h1>

        {/* Decorative swirl line */}
        <div className="flex items-center justify-center gap-2 my-6">
          <div className="w-16 h-px" style={{ backgroundColor: `${fg}25` }} />
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: primary, opacity: 0.6 }}
          />
          <div className="w-16 h-px" style={{ backgroundColor: `${fg}25` }} />
        </div>

        <p
          className="text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-10 opacity-60"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {bodyText}
        </p>

        {/* Menu items / specials */}
        {items.length > 0 && (
          <div className="mb-10 max-w-sm mx-auto">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between py-2 border-b"
                style={{ borderColor: `${fg}10` }}
              >
                <span className="text-sm" style={{ fontFamily: "'Georgia', serif" }}>
                  {item.title ?? "House Special"}
                </span>
                <span className="flex-1 mx-3 border-b border-dotted" style={{ borderColor: `${fg}15` }} />
                <span className="text-sm font-semibold" style={{ color: primary }}>
                  {item.value ?? "$12"}
                </span>
              </div>
            ))}
          </div>
        )}

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 text-sm font-medium px-7 py-3 rounded-sm border transition-opacity hover:opacity-80"
          style={{ borderColor: primary, color: primary }}
        >
          <BookOpen className="w-4 h-4" />
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute bottom-8 right-8 w-24 h-24 rounded-full object-cover opacity-30 border-2"
          style={{ borderColor: `${fg}20` }}
        />
      )}
    </section>
  );
}
