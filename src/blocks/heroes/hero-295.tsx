"use client";

import type { BlockProps } from "@/blocks/types";
import { MapPin, Clock, Flame, Star, UtensilsCrossed } from "lucide-react";

export default function Hero295(props: BlockProps) {
  const {
    theme,
    heading = "An Unforgettable Culinary Experience",
    subheading = "Est. 2012 ~ Fine Dining",
    bodyText = "Where traditional techniques meet modern artistry. Every dish tells a story of passion, sourced from local farms and crafted by award-winning chefs.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Wagyu Tartare", description: "Hand-cut wagyu, truffle emulsion, quail egg", label: "$38" },
      { title: "Lobster Ravioli", description: "Maine lobster, saffron cream, micro herbs", label: "$42" },
      { title: "Chocolate Souffl\u00e9", description: "Valrhona chocolate, cr\u00e8me anglaise", label: "$22" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d0d0d", color: theme?.foreground ?? "#e8e0d4" }}
      className="min-h-screen px-5 py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Ambient background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#c9944a" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Flame className="w-4 h-4" style={{ color: theme?.primary ?? "#c9944a" }} />
              <span
                className="text-xs uppercase tracking-[0.3em] font-light"
                style={{ color: theme?.primary ?? "#c9944a" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] mb-8 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed mb-10 max-w-md font-light">
              {bodyText}
            </p>

            {/* Details */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center gap-2 text-xs opacity-40">
                <Clock className="w-3.5 h-3.5" />
                <span>Tue-Sun, 5:30 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-xs opacity-40">
                <MapPin className="w-3.5 h-3.5" />
                <span>128 Grand Boulevard, Midtown</span>
              </div>
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all hover:scale-105 border"
              style={{
                borderColor: theme?.primary ?? "#c9944a",
                color: theme?.primary ?? "#c9944a",
              }}
            >
              <UtensilsCrossed className="w-4 h-4" />
              {buttonText}
            </a>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: theme?.primary ?? "#c9944a" }} />
              ))}
              <span className="text-xs opacity-40 ml-1">4.9 on Google (600+ reviews)</span>
            </div>
          </div>

          {/* Right — cuisine showcase */}
          <div>
            {imageUrl && (
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-8">
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              </div>
            )}

            <div
              className="rounded-xl border p-6"
              style={{
                borderColor: `${theme?.primary ?? "#c9944a"}20`,
                backgroundColor: `${theme?.primary ?? "#c9944a"}05`,
              }}
            >
              <h3 className="text-xs uppercase tracking-[0.25em] font-light mb-6 opacity-50">
                Chef&apos;s Selection
              </h3>
              <div className="space-y-5">
                {items.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">{item.title}</h4>
                      <p className="text-xs opacity-40 font-light">{item.description}</p>
                    </div>
                    <span
                      className="text-sm font-medium flex-shrink-0"
                      style={{ color: theme?.primary ?? "#c9944a" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
