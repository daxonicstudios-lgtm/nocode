"use client";

import type { BlockProps } from "@/blocks/types";
import { Wine, GlassWater, Sun, MapPin, Calendar, Star } from "lucide-react";

export default function Hero457(props: BlockProps) {
  const {
    theme,
    heading = "Savor Every Sip",
    subheading = "Golden Hills Winery & Vineyard Tours",
    bodyText = "Nestled among 200 acres of sun-drenched vineyards, our estate offers guided tours, private tastings, and farm-to-table dining overlooking rolling hills of Cabernet and Chardonnay.",
    buttonText = "Reserve a Tasting",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Classic Tasting", description: "5 wines, guided notes", value: "$35", label: "Per person" },
      { title: "Reserve Experience", description: "8 premium wines + cheese pairing", value: "$65", label: "Per person" },
      { title: "Private Estate Tour", description: "Vineyard walk, barrel room, 10 wines", value: "$120", label: "Per person" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1412", color: theme?.foreground ?? "#f2ebe4" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Vineyard rows pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px"
            style={{
              left: `${12 + i * 11}%`,
              background: `linear-gradient(to bottom, transparent, currentColor 20%, currentColor 80%, transparent)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Wine className="w-8 h-8" style={{ color: theme?.primary ?? "#a3553a" }} />
              <div className="h-px flex-1" style={{ backgroundColor: `${theme?.primary ?? "#a3553a"}30` }} />
            </div>

            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: theme?.primary ?? "#a3553a" }}
            >
              {subheading}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-65 mb-10 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#a3553a", color: "#ffffff" }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#wines"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-lg border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.primary ?? "#a3553a"}50`, color: theme?.primary ?? "#a3553a" }}
              >
                <GlassWater className="w-5 h-5 mr-2" />
                Our Wines
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm opacity-60">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Napa Valley, CA
              </span>
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4" /> Open Daily 10 AM - 6 PM
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#a3553a" }} />
                4.9 (480 reviews)
              </span>
            </div>
          </div>

          {/* Tasting packages */}
          <div className="space-y-5">
            <h3 className="text-xl font-serif font-bold mb-6">Tasting Packages</h3>
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer"
                style={{
                  borderColor: `${theme?.primary ?? "#a3553a"}${i === 1 ? "50" : "20"}`,
                  backgroundColor: `${theme?.primary ?? "#a3553a"}${i === 1 ? "12" : "06"}`,
                }}
              >
                {i === 1 && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                    style={{ backgroundColor: theme?.primary ?? "#a3553a", color: "#ffffff" }}
                  >
                    Most Popular
                  </span>
                )}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm opacity-60 mt-1">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#a3553a" }}>
                      {item.value}
                    </p>
                    <p className="text-xs opacity-50">{item.label}</p>
                  </div>
                </div>
                <a
                  href={buttonUrl}
                  className="mt-4 block text-center py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#a3553a"}15`,
                    color: theme?.primary ?? "#a3553a",
                  }}
                >
                  Book This Experience
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
