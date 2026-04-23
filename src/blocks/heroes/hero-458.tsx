"use client";

import type { BlockProps } from "@/blocks/types";
import { Cloud, Sunrise, Wind, Shield, Clock, ChevronRight, Star } from "lucide-react";

export default function Hero458(props: BlockProps) {
  const {
    theme,
    heading = "Rise Above the Ordinary",
    subheading = "Skyward Hot Air Balloon Rides",
    bodyText = "Drift peacefully over vineyards, mountains, and coastlines at sunrise. Our FAA-certified pilots have logged over 10,000 safe flights. An unforgettable perspective awaits.",
    buttonText = "Book a Flight",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sunrise Classic", description: "60-min flight, champagne toast", value: "$249", label: "Per person" },
      { title: "Private Romance", description: "Private basket, 75 min, roses", value: "$499", label: "Per couple" },
      { title: "Sunset Deluxe", description: "90-min flight, dinner package", value: "$379", label: "Per person" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: theme?.background
          ? theme.background
          : "linear-gradient(180deg, #1a1040 0%, #2d1b69 30%, #e8734a 70%, #f4a940 100%)",
        color: theme?.foreground ?? "#f0e6ff",
      }}
    >
      {/* Cloud decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <Cloud className="absolute top-[15%] left-[10%] w-32 h-32" />
        <Cloud className="absolute top-[25%] right-[15%] w-24 h-24" />
        <Cloud className="absolute top-[40%] left-[60%] w-20 h-20" />
        <Cloud className="absolute top-[10%] left-[45%] w-28 h-28" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${theme?.primary ?? "#f4a940"}25`, color: theme?.primary ?? "#f4a940" }}
            >
              <Sunrise className="w-8 h-8" />
            </div>
          </div>

          <p
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: theme?.primary ?? "#f4a940" }}
          >
            {subheading}
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6">
            {heading}
          </h1>

          <p className="text-lg opacity-70 mb-10 max-w-xl mx-auto leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
              style={{ backgroundColor: theme?.primary ?? "#f4a940", color: "#1a1040" }}
            >
              {buttonText}
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Safety & trust */}
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-60">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" style={{ color: theme?.primary ?? "#f4a940" }} />
              FAA Certified
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#f4a940" }} />
              4.9 Stars (1,200+ flights)
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#f4a940" }} />
              10,000+ Safe Landings
            </span>
            <span className="flex items-center gap-2">
              <Wind className="w-4 h-4" style={{ color: theme?.primary ?? "#f4a940" }} />
              Weather Guaranteed
            </span>
          </div>
        </div>

        {/* Flight packages */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border text-center transition-transform hover:scale-105"
              style={{
                borderColor: `${theme?.primary ?? "#f4a940"}${i === 1 ? "60" : "25"}`,
                backgroundColor: `rgba(0,0,0,${i === 1 ? "0.35" : "0.2"})`,
                backdropFilter: "blur(10px)",
              }}
            >
              {i === 1 && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                  style={{ backgroundColor: theme?.primary ?? "#f4a940", color: "#1a1040" }}
                >
                  Best Seller
                </span>
              )}
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 mb-4">{item.description}</p>
              <p className="text-3xl font-black mb-1" style={{ color: theme?.primary ?? "#f4a940" }}>
                {item.value}
              </p>
              <p className="text-xs opacity-50 mb-5">{item.label}</p>
              <a
                href={buttonUrl}
                className="block py-3 rounded-xl text-sm font-bold transition-colors"
                style={{
                  backgroundColor: i === 1 ? (theme?.primary ?? "#f4a940") : `${theme?.primary ?? "#f4a940"}20`,
                  color: i === 1 ? "#1a1040" : (theme?.primary ?? "#f4a940"),
                }}
              >
                Reserve
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
