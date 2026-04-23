"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowUpRight } from "lucide-react";

export default function Hero404(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with care, layer by layer",
    subheading = "Artisan Studio",
    bodyText = "Every detail is intentionally placed. We fold ideas into beautiful experiences that unfold naturally for your audience.",
    buttonText = "Explore Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#f5f0eb";
  const fg = theme?.foreground ?? "#2d2620";
  const primary = theme?.primary ?? "#c17f59";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Paper cutout layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bottom layer */}
        <div
          className="absolute -bottom-10 -left-10 w-[70%] h-[60%] rounded-tr-[120px]"
          style={{ backgroundColor: primary, opacity: 0.08 }}
        />
        {/* Middle layer */}
        <div
          className="absolute -bottom-5 right-0 w-[55%] h-[50%] rounded-tl-[80px]"
          style={{ backgroundColor: fg, opacity: 0.04, boxShadow: "0 -4px 20px rgba(0,0,0,0.06)" }}
        />
        {/* Top layer */}
        <div
          className="absolute top-0 -right-10 w-[40%] h-[45%] rounded-bl-[100px]"
          style={{ backgroundColor: primary, opacity: 0.06, boxShadow: "0 4px 30px rgba(0,0,0,0.05)" }}
        />
        {/* Floating paper piece */}
        <div
          className="absolute top-[15%] left-[10%] w-40 h-40 rotate-12 rounded-lg"
          style={{ backgroundColor: fg, opacity: 0.03, boxShadow: "4px 4px 20px rgba(0,0,0,0.08)" }}
        />
        {/* Another floating piece */}
        <div
          className="absolute bottom-[20%] right-[15%] w-28 h-36 -rotate-6 rounded-lg"
          style={{ backgroundColor: primary, opacity: 0.07, boxShadow: "3px 3px 15px rgba(0,0,0,0.06)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium mb-6" style={{ color: primary }}>
              <Layers className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed max-w-md mb-8">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: primary, color: bg }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {items.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-6">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 rounded-xl"
                    style={{ backgroundColor: `${fg}08`, boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                  >
                    <div className="text-xl font-bold" style={{ color: primary }}>
                      {item.value ?? "50+"}
                    </div>
                    <div className="text-xs opacity-50 mt-1">{item.label ?? "Projects"}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative hidden lg:block">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full rounded-2xl shadow-xl" />
            ) : (
              <div className="relative w-full aspect-square">
                {/* Stacked paper cards */}
                <div
                  className="absolute top-8 left-8 right-0 bottom-0 rounded-2xl rotate-3"
                  style={{ backgroundColor: primary, opacity: 0.15, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                />
                <div
                  className="absolute top-4 left-4 right-4 bottom-4 rounded-2xl -rotate-1"
                  style={{ backgroundColor: primary, opacity: 0.25, boxShadow: "0 6px 25px rgba(0,0,0,0.06)" }}
                />
                <div
                  className="absolute inset-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${primary}22`, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                >
                  <Layers className="w-20 h-20 opacity-30" style={{ color: primary }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
