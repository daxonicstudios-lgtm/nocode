"use client";

import type { BlockProps } from "@/blocks/types";
import { Flame, Gift, Droplets, Heart, Star, Sparkles } from "lucide-react";

export default function Hero481(props: BlockProps) {
  const {
    theme,
    heading = "Illuminate Your Space",
    subheading = "Hand-Poured Soy Candles & Aromatherapy Essentials",
    bodyText = "Crafted in small batches using 100% natural soy wax and premium essential oil blends. Transform any room into a sanctuary of calm, warmth, and beauty.",
    buttonText = "Shop Candles",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Warm & Cozy", description: "Vanilla, cinnamon, amber", icon: "flame", value: "12" },
      { title: "Fresh & Clean", description: "Eucalyptus, lemon, sage", icon: "droplets", value: "9" },
      { title: "Floral Garden", description: "Lavender, rose, jasmine", icon: "heart", value: "11" },
    ],
  } = props;

  const scents = [
    { name: "Fireside Evening", size: "8 oz", price: "$28" },
    { name: "Morning Meadow", size: "12 oz", price: "$36" },
    { name: "Ocean Breeze", size: "8 oz", price: "$28" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1410", color: theme?.foreground ?? "#f5efe6" }}
      className="relative overflow-hidden"
    >
      {/* Warm glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: theme?.primary ?? "#e8a838" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-5 h-5" style={{ color: theme?.primary ?? "#e8a838" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: theme?.primary ?? "#e8a838" }}>
                Artisan Candle Co.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-lg sm:text-xl mb-3 font-medium" style={{ color: theme?.primary ?? "#e8a838" }}>
              {subheading}
            </p>
            <p className="text-base opacity-80 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#e8a838" }}
              >
                <Sparkles className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#e8a838", color: theme?.primary ?? "#e8a838" }}
              >
                <Gift className="w-4 h-4" />
                Gift Sets
              </a>
            </div>

            {/* Scent categories */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-60">Scent Collections</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {items.map((cat, i) => {
                  const icons = [Flame, Droplets, Heart];
                  const Icon = icons[i % icons.length];
                  return (
                    <div
                      key={i}
                      className="rounded-xl p-4 border border-white/10"
                      style={{ backgroundColor: "rgba(232,168,56,0.06)" }}
                    >
                      <Icon className="w-5 h-5 mb-2" style={{ color: theme?.primary ?? "#e8a838" }} />
                      <p className="font-semibold text-sm">{cat.title}</p>
                      <p className="text-xs opacity-60 mt-0.5">{cat.description}</p>
                      <p className="text-xs mt-1" style={{ color: theme?.primary ?? "#e8a838" }}>{cat.value} scents</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl mb-6 object-cover max-h-72" />
            ) : (
              <div
                className="w-full h-56 rounded-2xl mb-6 flex items-center justify-center"
                style={{ background: `radial-gradient(circle, ${theme?.primary ?? "#e8a838"}22, transparent)` }}
              >
                <Flame className="w-20 h-20 opacity-30" style={{ color: theme?.primary ?? "#e8a838" }} />
              </div>
            )}

            {/* Bestsellers */}
            <div className="rounded-2xl border border-white/10 p-6" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#e8a838" }} />
                <h3 className="font-bold text-lg">Bestselling Candles</h3>
              </div>
              <div className="space-y-3">
                {scents.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <div>
                      <p className="font-semibold text-sm">{s.name}</p>
                      <p className="text-xs opacity-60">{s.size} — Pure soy wax</p>
                    </div>
                    <span className="font-bold text-sm" style={{ color: theme?.primary ?? "#e8a838" }}>{s.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-xs mt-4 opacity-50">Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
