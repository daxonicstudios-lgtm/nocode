"use client";

import type { BlockProps } from "@/blocks/types";
import { IceCreamCone, Sparkles, Clock, Star, Cherry } from "lucide-react";

export default function Hero443(props: BlockProps) {
  const {
    theme,
    heading = "Scoops of Joy",
    subheading = "Handcrafted Ice Cream & Artisan Desserts",
    bodyText = "Made fresh daily with locally sourced ingredients. Over 30 unique flavors, rotating seasonal specials, and custom sundae creations for every craving.",
    buttonText = "View Full Menu",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Mango Tango Sorbet", description: "Fresh Alphonso mango with lime zest", label: "Seasonal", value: "R45" },
      { title: "Cookies & Cream Dream", description: "Double-stuffed cookie chunks in vanilla bean", label: "Bestseller", value: "R50" },
      { title: "Salted Caramel Pretzel", description: "Buttery caramel swirl with pretzel crunch", label: "New", value: "R55" },
      { title: "Berry Cheesecake Swirl", description: "Strawberry & blueberry ripple with cream cheese", label: "Popular", value: "R50" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fff5f7", color: theme?.foreground ?? "#3d2c35" }}
      className="relative overflow-hidden"
    >
      {/* Playful blob decorations */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: theme?.primary ?? "#f472b6" }} />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: theme?.accent ?? "#a78bfa" }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: "#fbbf24" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        {/* Top badge */}
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold"
            style={{ backgroundColor: `${theme?.primary ?? "#f472b6"}20`, color: theme?.primary ?? "#f472b6" }}
          >
            <Sparkles className="w-4 h-4" />
            Summer Specials Are Here!
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            {heading.split(" ").map((word, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span style={{ color: theme?.primary ?? "#f472b6" }}>{word} </span>
                ) : (
                  <span>{word} </span>
                )}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl opacity-70 mb-3">{subheading}</p>
          <p className="text-sm opacity-60 max-w-xl mx-auto">{bodyText}</p>
        </div>

        {/* Flavor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((flavor, i) => {
            const pastelColors = ["#fce4ec", "#e8f5e9", "#fff3e0", "#e3f2fd"];
            const accentColors = ["#f472b6", "#4ade80", "#fb923c", "#60a5fa"];
            return (
              <div
                key={i}
                className="rounded-2xl p-5 transition-transform hover:scale-105 hover:-rotate-1"
                style={{ backgroundColor: pastelColors[i % 4] }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: accentColors[i % 4] }}
                  >
                    {flavor.label}
                  </span>
                  <span className="text-lg font-black" style={{ color: accentColors[i % 4] }}>
                    {flavor.value}
                  </span>
                </div>
                <IceCreamCone className="w-8 h-8 mb-2" style={{ color: accentColors[i % 4] }} />
                <h3 className="font-bold text-base mb-1" style={{ color: "#3d2c35" }}>{flavor.title}</h3>
                <p className="text-xs opacity-60" style={{ color: "#3d2c35" }}>{flavor.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA area */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-lg shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#f472b6" }}
          >
            <Cherry className="w-5 h-5" />
            {buttonText}
          </a>
          <div className="flex items-center justify-center gap-4 mt-6 opacity-60 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> Open 11AM - 10PM
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#f472b6" }} /> 4.8 (500+ reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
