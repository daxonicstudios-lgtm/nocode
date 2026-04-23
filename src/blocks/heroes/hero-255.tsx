"use client";

import type { BlockProps } from "@/blocks/types";
import { Star, MoveRight } from "lucide-react";

export default function Hero255(props: BlockProps) {
  const {
    theme,
    heading = "A Timeless Approach to Modern Design",
    subheading = "Established 2019",
    bodyText = "We blend old-world craftsmanship with modern sensibility. Every project is treated with the care and attention it deserves, producing work that stands the test of time.",
    buttonText = "Explore Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#faf5ee";
  const fg = theme?.foreground ?? "#3d2e1e";
  const primary = theme?.primary ?? "#8b6f47";

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="min-h-screen flex items-center px-4 py-16 sm:px-8"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Decorative top border */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 sm:w-20" style={{ backgroundColor: primary }} />
          <Star className="w-4 h-4" style={{ color: primary }} />
          <div className="h-px w-12 sm:w-20" style={{ backgroundColor: primary }} />
        </div>

        <p
          className="text-xs tracking-[0.35em] uppercase mb-6 font-normal"
          style={{ color: primary }}
        >
          {subheading}
        </p>

        {/* Decorative frame around heading */}
        <div
          className="inline-block px-6 sm:px-12 py-8 sm:py-10 mb-8"
          style={{
            border: `1px solid ${primary}`,
            borderRadius: "2px",
          }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-normal"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {heading}
          </h1>
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10 opacity-70"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-opacity hover:opacity-80"
          style={{
            backgroundColor: primary,
            color: bg,
            borderRadius: "2px",
          }}
        >
          {buttonText}
          <MoveRight className="w-4 h-4" />
        </a>

        {/* Decorative bottom border */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <div className="h-px w-8" style={{ backgroundColor: primary, opacity: 0.4 }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ border: `1px solid ${primary}`, opacity: 0.4 }}
          />
          <div className="h-px w-8" style={{ backgroundColor: primary, opacity: 0.4 }} />
        </div>

        {imageUrl && (
          <div className="mt-14 border p-2" style={{ borderColor: primary, opacity: 0.8 }}>
            <img src={imageUrl} alt="" className="w-full sepia-[0.15]" />
          </div>
        )}
      </div>
    </section>
  );
}
