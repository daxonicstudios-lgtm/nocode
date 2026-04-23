"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero251(props: BlockProps) {
  const {
    theme,
    heading = "Less noise. More clarity.",
    subheading = "Design that breathes",
    bodyText = "We believe the best interfaces disappear. Our platform strips away the unnecessary so your message stands on its own.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-8 opacity-50 font-light"
          style={{ color: theme?.foreground }}
        >
          {subheading}
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight leading-tight mb-8 tracking-tight">
          {heading}
        </h1>

        <p className="text-base sm:text-lg font-light leading-relaxed opacity-60 max-w-lg mx-auto mb-12">
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-3 text-sm font-light tracking-wide group"
          style={{ color: theme?.primary }}
        >
          <span className="border-b pb-1" style={{ borderColor: theme?.primary }}>
            {buttonText}
          </span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>

        {imageUrl && (
          <div className="mt-20">
            <img
              src={imageUrl}
              alt=""
              className="w-full max-w-md mx-auto opacity-80"
            />
          </div>
        )}
      </div>
    </section>
  );
}
