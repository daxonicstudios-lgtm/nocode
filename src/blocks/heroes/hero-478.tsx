"use client";

import type { BlockProps } from "@/blocks/types";
import { Flame, Search, BookOpen, Globe, Truck, Star } from "lucide-react";

export default function Hero478(props: BlockProps) {
  const {
    theme,
    heading = "Spices That Tell a Story",
    subheading = "World Spice Merchants",
    bodyText = "Hand-selected spices from farms across India, Morocco, Turkey, and Mexico. Ground fresh in small batches to preserve flavor, aroma, and potency.",
    buttonText = "Explore Our Spices",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smoked Paprika", description: "Sweet and smoky, oak-dried from La Vera, Spain", label: "Spain", value: "ground" },
      { title: "Turmeric Root", description: "Vibrant golden, high-curcumin Alleppey variety", label: "India", value: "ground" },
      { title: "Ras el Hanout", description: "Our signature 22-spice North African blend", label: "Morocco", value: "blend" },
      { title: "Szechuan Peppercorn", description: "Electric, citrusy tingle with floral notes", label: "China", value: "whole" },
      { title: "Madagascar Vanilla", description: "Grade-A bourbon vanilla beans, rich and creamy", label: "Madagascar", value: "whole" },
      { title: "Chipotle Chili", description: "Smoke-dried jalapeños with deep, earthy heat", label: "Mexico", value: "flakes" },
    ],
  } = props;

  const warmColors = ["#e07a1f", "#c9302c", "#d4a017", "#8b5a2b", "#a0522d", "#b8860b"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf6f0", color: theme?.foreground ?? "#3d2b1f" }}
      className="min-h-screen"
    >
      {/* Warm gradient header */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#c9302c"}15, ${theme?.background ?? "#faf6f0"} 60%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Flame className="w-5 h-5" style={{ color: theme?.primary ?? "#c9302c" }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#c9302c" }}>
                  {subheading}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                {heading}
              </h1>

              <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

              {/* Search-like input */}
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-xl mb-8 max-w-md border"
                style={{ borderColor: `${theme?.primary ?? "#c9302c"}25`, backgroundColor: theme?.background ?? "#fff" }}
              >
                <Search className="w-5 h-5 opacity-30" />
                <span className="text-sm opacity-40">Search 200+ spices, blends, and recipes...</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={buttonUrl}
                  style={{ backgroundColor: theme?.primary ?? "#c9302c" }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  {buttonText}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border"
                  style={{ borderColor: `${theme?.primary ?? "#c9302c"}30`, color: theme?.primary ?? "#c9302c" }}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Recipe Ideas
                </a>
              </div>
            </div>

            {/* Image or spice visual */}
            <div>
              {imageUrl ? (
                <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-[500px]" />
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: `${warmColors[i % warmColors.length]}18` }}
                    >
                      <div
                        className="w-10 h-10 rounded-full mb-2"
                        style={{ backgroundColor: `${warmColors[i % warmColors.length]}40` }}
                      />
                      <span className="text-xs font-bold leading-tight">{item.title}</span>
                      <span className="text-[10px] opacity-40 mt-0.5">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Spice category bar */}
      <div className="border-t" style={{ borderColor: `${theme?.primary ?? "#c9302c"}15` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <Globe className="w-4 h-4" />, text: "Single Origin" },
              { icon: <Flame className="w-4 h-4" />, text: "Chili & Heat" },
              { icon: <Star className="w-4 h-4" />, text: "Signature Blends" },
              { icon: <BookOpen className="w-4 h-4" />, text: "Baking Spices" },
              { icon: <Truck className="w-4 h-4" />, text: "Gift Sets" },
            ].map((cat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors"
                style={{
                  backgroundColor: `${theme?.primary ?? "#c9302c"}08`,
                  color: theme?.primary ?? "#c9302c",
                }}
              >
                {cat.icon}
                {cat.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
