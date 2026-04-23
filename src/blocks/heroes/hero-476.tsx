"use client";

import type { BlockProps } from "@/blocks/types";
import { Beer, GlassWater, MapPin, Calendar, Star, Hop } from "lucide-react";

export default function Hero476(props: BlockProps) {
  const {
    theme,
    heading = "Craft Beer, Born Here",
    subheading = "Taproom & Brewery",
    bodyText = "Small-batch brews crafted with locally sourced ingredients and a whole lot of heart. Visit our taproom, grab a flight, and taste what independent brewing is all about.",
    buttonText = "See What's On Tap",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hazy Days IPA", description: "Juicy, tropical, unfiltered New England-style IPA", label: "IPA", value: "6.8% ABV · 55 IBU" },
      { title: "Copper Lane Amber", description: "Toasty malt backbone with subtle caramel sweetness", label: "Amber Ale", value: "5.4% ABV · 30 IBU" },
      { title: "Midnight Porter", description: "Rich chocolate and coffee notes with a smooth finish", label: "Porter", value: "5.9% ABV · 35 IBU" },
      { title: "Golden Hour Pilsner", description: "Crisp, clean, and crushable with noble hop character", label: "Pilsner", value: "4.8% ABV · 25 IBU" },
      { title: "Farmhouse Saison", description: "Spicy, fruity Belgian-style with a dry, effervescent finish", label: "Saison", value: "6.2% ABV · 22 IBU" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#f5f0e8" }}
      className="min-h-screen"
    >
      {/* Hero top section */}
      <div className="relative">
        {imageUrl ? (
          <div className="absolute inset-0">
            <img src={imageUrl} alt={heading} className="w-full h-full object-cover opacity-30" />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)" }} />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Hop className="w-6 h-6" style={{ color: theme?.primary ?? "#d4a03c" }} />
              <span
                className="text-sm uppercase tracking-[0.25em] font-bold"
                style={{ color: theme?.primary ?? "#d4a03c" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-none">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#d4a03c", color: "#1a1a1a" }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                <Beer className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-current/30 hover:border-current/60 transition-colors"
              >
                <GlassWater className="w-5 h-5 mr-2" />
                Book a Flight Tasting
              </a>
            </div>

            {/* Info bar */}
            <div className="flex flex-wrap gap-6 text-sm opacity-50">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> 412 Brewers Lane, Portland
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> Open Wed–Sun, 12pm–10pm
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4" /> 4.8 on Untappd
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Beer menu */}
      <div className="border-t" style={{ borderColor: `${theme?.primary ?? "#d4a03c"}20` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Beer className="w-5 h-5" style={{ color: theme?.primary ?? "#d4a03c" }} />
              On Tap Now
            </h2>
            <span className="text-sm opacity-40">{items.length} beers on rotation</span>
          </div>

          <div className="space-y-1">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 border-b last:border-0"
                style={{ borderColor: `${theme?.primary ?? "#d4a03c"}15` }}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: theme?.primary ?? "#d4a03c", opacity: 0.4 + i * 0.15 }}
                  />
                  <h3 className="font-bold truncate">{item.title}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-medium flex-shrink-0 hidden sm:inline"
                    style={{ backgroundColor: `${theme?.primary ?? "#d4a03c"}20`, color: theme?.primary ?? "#d4a03c" }}
                  >
                    {item.label}
                  </span>
                </div>
                <p className="text-sm opacity-50 flex-1 truncate">{item.description}</p>
                <span className="text-sm font-mono opacity-40 flex-shrink-0">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
