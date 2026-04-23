"use client";

import type { BlockProps } from "@/blocks/types";
import { Camera, ArrowUpRight } from "lucide-react";

export default function Hero407(props: BlockProps) {
  const {
    theme,
    heading = "Captured in natural light",
    subheading = "Film & Photography",
    bodyText = "Authentic moments deserve an authentic medium. We shoot on film, edit by hand, and deliver work that feels timeless.",
    buttonText = "See the Collection",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#e8e4df";
  const fg = theme?.foreground ?? "#2c2824";
  const primary = theme?.primary ?? "#8b7355";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Film grain noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <svg width="100%" height="100%">
          <filter id="grain407">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain407)" />
        </svg>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 50%, ${bg} 100%)`,
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-5 h-5 opacity-50" />
              <span className="text-xs font-medium tracking-[0.25em] uppercase opacity-60">
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug tracking-tight mb-6 font-serif italic">
              {heading}
            </h1>

            <div className="w-12 h-px mb-6" style={{ backgroundColor: primary }} />

            <p className="text-sm sm:text-base opacity-55 leading-relaxed max-w-md mb-10">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase border-b-2 pb-1 transition-opacity hover:opacity-70"
              style={{ borderColor: primary, color: fg }}
            >
              {buttonText}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {items.length > 0 && (
              <div className="mt-14 flex flex-wrap gap-8">
                {items.map((item, i) => (
                  <div key={i}>
                    <div className="text-2xl font-light" style={{ color: primary }}>
                      {item.value ?? "35mm"}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 mt-1">
                      {item.label ?? "Format"}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            {imageUrl ? (
              <div className="relative">
                <img
                  src={imageUrl}
                  alt=""
                  className="w-full rounded-sm shadow-lg"
                  style={{ filter: "contrast(1.05) saturate(0.85) sepia(0.1)" }}
                />
                {/* Film border marks */}
                <div className="absolute -left-3 top-4 bottom-4 w-3 flex flex-col justify-between py-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-2 h-3 rounded-sm" style={{ backgroundColor: `${fg}22` }} />
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="w-full aspect-[3/4] rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${fg}08`, border: `1px solid ${fg}15` }}
              >
                <Camera className="w-16 h-16 opacity-10" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
