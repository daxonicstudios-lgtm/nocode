"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowUpRight } from "lucide-react";

export default function Hero254(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with purpose, built to last",
    subheading = "Product Design Studio",
    bodyText = "We help ambitious teams design and ship digital products that customers love. Strategy, design, and engineering — all under one roof.",
    buttonText = "Start a Project",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "150+", description: "Projects Delivered" },
      { title: "98%", description: "Client Retention" },
      { title: "12", description: "Design Awards" },
    ],
  } = props;

  const bg = theme?.background ?? "#e8e4df";
  const fg = theme?.foreground ?? "#2d2d2d";
  const primary = theme?.primary ?? "#5a5a5a";

  return (
    <section
      style={{ backgroundColor: bg, color: fg }}
      className="min-h-screen flex items-center px-4 py-16 sm:px-8"
    >
      <div className="w-full max-w-5xl mx-auto">
        {/* Neumorphic badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-medium tracking-wide uppercase mb-10"
          style={{
            color: primary,
            boxShadow: `6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.6)`,
            backgroundColor: bg,
          }}
        >
          <Layers className="w-4 h-4" />
          {subheading}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-3xl">
          {heading}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-xl mb-10">
          {bodyText}
        </p>

        {/* Neumorphic button */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold transition-all"
          style={{
            backgroundColor: bg,
            color: fg,
            boxShadow: `8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)`,
          }}
        >
          {buttonText}
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Stats row with neumorphic cards */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-3xl p-8 text-center"
                style={{
                  backgroundColor: bg,
                  boxShadow: `10px 10px 20px rgba(0,0,0,0.08), -10px -10px 20px rgba(255,255,255,0.6)`,
                }}
              >
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: primary }}>
                  {item.title}
                </p>
                <p className="text-sm opacity-50">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {imageUrl && (
          <div
            className="mt-14 rounded-3xl overflow-hidden"
            style={{
              boxShadow: `12px 12px 24px rgba(0,0,0,0.1), -12px -12px 24px rgba(255,255,255,0.6)`,
            }}
          >
            <img src={imageUrl} alt="" className="w-full" />
          </div>
        )}
      </div>
    </section>
  );
}
