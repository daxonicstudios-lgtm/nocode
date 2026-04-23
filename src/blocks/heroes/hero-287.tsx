"use client";

import type { BlockProps } from "@/blocks/types";
import { Car, Search, Fuel, Gauge, Calendar, ArrowRight } from "lucide-react";

export default function Hero287(props: BlockProps) {
  const {
    theme,
    heading = "Drive Your Dream",
    subheading = "New & Pre-Owned Vehicles",
    bodyText = "Browse our handpicked selection of quality vehicles. Every car inspected, certified, and ready to hit the road. Flexible financing available.",
    buttonText = "View Inventory",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "SUVs", description: "120+ available" },
      { title: "Sedans", description: "85+ available" },
      { title: "Trucks", description: "60+ available" },
      { title: "Electric", description: "40+ available" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#f5f5f5" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Speed lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px opacity-[0.06]"
            style={{
              backgroundColor: theme?.primary ?? "#dc2626",
              width: `${60 + i * 10}%`,
              top: `${15 + i * 18}%`,
              left: "-10%",
              transform: `rotate(-${2 + i}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-10">
          <Car className="w-6 h-6" style={{ color: theme?.primary ?? "#dc2626" }} />
          <span className="text-sm font-semibold uppercase tracking-wider opacity-60">{subheading}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-end">
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none tracking-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 max-w-md mb-10 leading-relaxed">
              {bodyText}
            </p>

            {/* Search/filter bar */}
            <div
              className="rounded-xl p-4 mb-10"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid rgba(255,255,255,0.08)` }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <Car className="w-4 h-4 opacity-30" />
                  <span className="text-xs opacity-40">Make</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <Calendar className="w-4 h-4 opacity-30" />
                  <span className="text-xs opacity-40">Year</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <Fuel className="w-4 h-4 opacity-30" />
                  <span className="text-xs opacity-40">Fuel</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <Gauge className="w-4 h-4 opacity-30" />
                  <span className="text-xs opacity-40">Price Range</span>
                </div>
              </div>
              <a
                href={buttonUrl}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
              >
                <Search className="w-4 h-4" />
                {buttonText}
              </a>
            </div>

            {/* Category tags */}
            <div className="flex flex-wrap gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-2.5 rounded-full border text-sm cursor-pointer transition-colors"
                  style={{ borderColor: theme?.primary ? `${theme.primary}30` : "rgba(220,38,38,0.2)" }}
                >
                  <span className="font-semibold">{item.title}</span>
                  <span className="opacity-40 ml-2 text-xs">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle showcase */}
          <div className="relative">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full object-cover rounded-xl aspect-[16/10]" />
            ) : (
              <div
                className="w-full aspect-[16/10] rounded-xl flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "rgba(220,38,38,0.06)" }}
              >
                <Car className="w-28 h-28 opacity-10" style={{ color: theme?.primary ?? "#dc2626" }} />
              </div>
            )}
            {/* Price tag */}
            <div
              className="absolute top-4 right-4 px-4 py-2 rounded-lg text-white text-sm font-bold"
              style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
            >
              From $24,990
            </div>
            {/* Feature badges */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              {["Certified", "Low Mileage", "Warranty"].map((badge, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "#ffffff" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
