"use client";

import type { BlockProps } from "@/blocks/types";
import { Camera, Instagram, ArrowUpRight } from "lucide-react";

export default function Hero289(props: BlockProps) {
  const {
    theme,
    heading = "Capturing Moments That Last Forever",
    subheading = "Visual Storyteller",
    bodyText,
    buttonText = "View Portfolio",
    buttonUrl = "#",
    secondaryButtonText = "Book a Session",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0c0c", color: theme?.foreground ?? "#f5f5f5" }}
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed image background */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: theme?.background ?? "#0c0c0c" }}>
          {/* Grid placeholder for portfolio feel */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-px opacity-[0.06]">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#ffffff" }}
              >
                <Camera className="w-10 h-10 opacity-30" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-40 md:pb-24 md:pt-60">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Camera className="w-5 h-5" style={{ color: theme?.primary ?? "#ffffff" }} />
            <span className="text-xs tracking-[0.3em] uppercase opacity-60">
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 tracking-tight">
            {heading}
          </h1>

          {bodyText && (
            <p className="text-base sm:text-lg opacity-50 max-w-md mb-10 leading-relaxed font-light">
              {bodyText}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-black transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#ffffff" }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide border border-white/30 text-white transition-colors hover:bg-white/10"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="flex items-center justify-between mt-16 pt-6 border-t border-white/10">
          <div className="flex gap-8 text-xs uppercase tracking-widest opacity-40">
            <span>Weddings</span>
            <span>Portraits</span>
            <span>Commercial</span>
          </div>
          <a href="#" className="flex items-center gap-2 text-xs opacity-40 hover:opacity-60 transition-opacity">
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">@photographer</span>
          </a>
        </div>
      </div>
    </section>
  );
}
