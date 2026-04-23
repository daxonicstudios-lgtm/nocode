"use client";

import type { BlockProps } from "@/blocks/types";
import { Zap } from "lucide-react";

export default function Hero252(props: BlockProps) {
  const {
    theme,
    heading = "BREAK THE RULES",
    subheading = "BRUTALIST DESIGN STUDIO",
    bodyText = "We don't follow trends. We smash them apart and rebuild something raw, honest, and impossible to ignore.",
    buttonText = "ENTER NOW",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#000", color: theme?.foreground ?? "#fff" }}
      className="min-h-screen flex items-center px-4 py-16 sm:px-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="border-4 p-6 sm:p-10 md:p-16" style={{ borderColor: theme?.primary ?? "#ff0" }}>
          <p
            className="text-xs sm:text-sm font-mono tracking-[0.4em] uppercase mb-6"
            style={{ color: theme?.primary ?? "#ff0" }}
          >
            {subheading}
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-8 tracking-tighter">
            {heading}
          </h1>

          <div
            className="w-full h-1 mb-8"
            style={{ backgroundColor: theme?.primary ?? "#ff0" }}
          />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-sm sm:text-base font-mono leading-relaxed max-w-md opacity-70">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 border-4 px-8 py-4 text-sm font-black uppercase tracking-widest transition-colors hover:opacity-80"
              style={{
                borderColor: theme?.primary ?? "#ff0",
                color: theme?.primary ?? "#ff0",
              }}
            >
              <Zap className="w-5 h-5" />
              {buttonText}
            </a>
          </div>

          {imageUrl && (
            <div className="mt-10 border-4" style={{ borderColor: theme?.primary ?? "#ff0" }}>
              <img src={imageUrl} alt="" className="w-full grayscale contrast-125" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
