"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero257(props: BlockProps) {
  const {
    theme,
    heading = "Where Vision Meets Precision",
    subheading = "Atelier Collection 2026",
    bodyText = "An invitation to experience design at its most refined. Curated for those who appreciate the extraordinary in every detail.",
    buttonText = "Discover More",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#1a1714";
  const fg = theme?.foreground ?? "#f5f0e8";
  const primary = theme?.primary ?? "#c9a96e";

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="min-h-screen flex items-center px-4 py-16"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase mb-10 font-light"
              style={{ color: primary }}
            >
              {subheading}
            </p>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-normal"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {heading}
            </h1>

            {/* Gold divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16" style={{ backgroundColor: primary }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: primary }} />
            </div>

            <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-md mb-12 font-light">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-4 group"
            >
              <span
                className="text-sm tracking-[0.2em] uppercase font-light"
                style={{ color: primary }}
              >
                {buttonText}
              </span>
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full border transition-transform group-hover:translate-x-1"
                style={{ borderColor: primary }}
              >
                <ArrowRight className="w-4 h-4" style={{ color: primary }} />
              </span>
            </a>
          </div>

          {/* Right column - image or decorative */}
          <div className="relative">
            {imageUrl ? (
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full border"
                  style={{ borderColor: primary, opacity: 0.2 }}
                />
                <img src={imageUrl} alt="" className="relative z-10 w-full" />
              </div>
            ) : (
              <div className="relative aspect-[3/4] flex items-center justify-center">
                <div
                  className="absolute inset-0 border"
                  style={{ borderColor: `${primary}20` }}
                />
                <div
                  className="absolute inset-6 border"
                  style={{ borderColor: `${primary}15` }}
                />
                <div
                  className="text-8xl sm:text-9xl font-light opacity-10"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: primary }}
                >
                  A
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
