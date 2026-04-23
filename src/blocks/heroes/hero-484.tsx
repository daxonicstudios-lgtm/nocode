"use client";

import type { BlockProps } from "@/blocks/types";
import { Shirt, Tag, Recycle, Clock, Star, ArrowRight } from "lucide-react";

export default function Hero484(props: BlockProps) {
  const {
    theme,
    heading = "Timeless Finds, One-of-a-Kind Style",
    subheading = "Curated Vintage & Pre-Loved Fashion Since 2018",
    bodyText = "Every piece in our shop is hand-selected for quality, character, and charm. From 70s denim to 90s streetwear — discover fashion that tells a story.",
    buttonText = "Shop New Arrivals",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "70s Bohemian", description: "Flowing fabrics, earthy tones, fringe details", value: "42 items" },
      { title: "80s Power", description: "Bold shoulders, bright colors, statement pieces", value: "38 items" },
      { title: "90s Streetwear", description: "Oversized fits, graphic tees, denim everything", value: "56 items" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f5efe8", color: theme?.foreground ?? "#3d2e1e" }}
      className="relative overflow-hidden"
    >
      {/* Retro diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(135deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 20px)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Retro badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm border-2 border-dashed" style={{ borderColor: theme?.primary ?? "#c0582e", color: theme?.primary ?? "#c0582e" }}>
              <Shirt className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Retro Revival Thrift</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#c0582e" }}>
              {subheading}
            </p>
            <p className="text-base opacity-75 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-bold text-white uppercase tracking-wide text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#c0582e" }}
              >
                <Tag className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm font-bold uppercase tracking-wide text-sm border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#c0582e", color: theme?.primary ?? "#c0582e" }}
              >
                <Recycle className="w-4 h-4" />
                Sell Your Clothes
              </a>
            </div>

            {/* Consignment info */}
            <div className="p-5 rounded-lg border-l-4" style={{ borderColor: theme?.primary ?? "#c0582e", backgroundColor: `${theme?.primary ?? "#c0582e"}08` }}>
              <p className="font-bold text-sm mb-1">Consignment Program</p>
              <p className="text-sm opacity-70">Bring your quality pre-loved clothing and earn up to 60% of the sale price. We handle photos, pricing, and customers.</p>
              <a href="#" className="text-sm font-semibold mt-2 inline-flex items-center gap-1" style={{ color: theme?.primary ?? "#c0582e" }}>
                Learn more <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-lg mb-6 object-cover max-h-72 border-4 border-white/20" />
            ) : (
              <div className="w-full h-56 rounded-lg mb-6 flex items-center justify-center border-4" style={{ borderColor: `${theme?.primary ?? "#c0582e"}20`, backgroundColor: `${theme?.primary ?? "#c0582e"}08` }}>
                <Shirt className="w-16 h-16 opacity-20" style={{ color: theme?.primary ?? "#c0582e" }} />
              </div>
            )}

            {/* Era categories */}
            <div className="space-y-3 mb-6">
              <p className="text-xs font-bold uppercase tracking-widest opacity-50">Shop by Era</p>
              {items.map((era, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-shadow hover:shadow-md" style={{ borderColor: `${theme?.primary ?? "#c0582e"}15`, backgroundColor: "rgba(255,255,255,0.5)" }}>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg text-white" style={{ backgroundColor: theme?.primary ?? "#c0582e" }}>
                    {["70s", "80s", "90s"][i]}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{era.title}</p>
                    <p className="text-xs opacity-60">{era.description}</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: `${theme?.primary ?? "#c0582e"}12`, color: theme?.primary ?? "#c0582e" }}>
                    {era.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Store hours */}
            <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: `${theme?.primary ?? "#c0582e"}08` }}>
              <Clock className="w-5 h-5 flex-shrink-0" style={{ color: theme?.primary ?? "#c0582e" }} />
              <div className="text-sm">
                <span className="font-semibold">Open today:</span>
                <span className="opacity-70 ml-1">10 AM – 7 PM</span>
                <span className="mx-2 opacity-30">|</span>
                <span className="opacity-70">New arrivals every Tuesday & Friday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
