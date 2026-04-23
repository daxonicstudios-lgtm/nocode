"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

export default function Hero267(props: BlockProps) {
  const {
    theme,
    heading = "Summer Collection 2026",
    subheading = "New Arrivals",
    bodyText = "Redefining contemporary style with sustainable fabrics and timeless silhouettes.",
    buttonText = "Shop Collection",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#fafaf8",
        color: theme?.foreground ?? "#1a1a1a",
      }}
      className="relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[70vh]">
          {/* Left - Image */}
          <div className="relative aspect-[3/4] lg:aspect-auto">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full min-h-[400px] flex items-center justify-center"
                style={{
                  background: `linear-gradient(160deg, ${theme?.primary ?? "#c9a87c"}22, ${theme?.primary ?? "#c9a87c"}08)`,
                }}
              >
                <ShoppingBag
                  className="w-28 h-28 opacity-10"
                  style={{ color: theme?.primary ?? "#c9a87c" }}
                />
              </div>
            )}

            {/* Overlay label */}
            <div
              className="absolute top-6 left-6 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                backgroundColor: theme?.primary ?? "#c9a87c",
                color: "#fff",
              }}
            >
              {subheading}
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extralight leading-[1.05] tracking-tight mb-6">
                {heading}
              </h1>

              <div
                className="w-12 h-0.5 mb-6"
                style={{ backgroundColor: theme?.primary ?? "#c9a87c" }}
              />

              <p className="text-base opacity-50 leading-relaxed mb-10 max-w-sm">
                {bodyText}
              </p>

              <a
                href={buttonUrl}
                className="inline-flex items-center gap-3 group"
              >
                <span
                  className="px-8 py-4 text-sm font-semibold uppercase tracking-wider border-b-2 transition-all"
                  style={{
                    borderColor: theme?.primary ?? "#c9a87c",
                    color: theme?.foreground ?? "#1a1a1a",
                  }}
                >
                  {buttonText}
                </span>
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: theme?.primary ?? "#c9a87c",
                    color: "#fff",
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              {/* Editorial details */}
              <div
                className="mt-16 pt-8 flex gap-10"
                style={{
                  borderTop: `1px solid ${theme?.foreground ?? "#1a1a1a"}10`,
                }}
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-1">
                    Season
                  </div>
                  <div className="text-sm font-semibold">SS26</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-1">
                    Pieces
                  </div>
                  <div className="text-sm font-semibold">48 Styles</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-30 mb-1">
                    Materials
                  </div>
                  <div className="text-sm font-semibold">Organic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
