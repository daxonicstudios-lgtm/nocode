"use client";

import type { BlockProps } from "@/blocks/types";
import { Wine, Calendar, Star, MapPin, GlassWater } from "lucide-react";

export default function Hero444(props: BlockProps) {
  const {
    theme,
    heading = "Noir & Vine",
    subheading = "Curated Wines. Intimate Evenings.",
    bodyText = "An exclusive wine bar experience in the heart of Cape Town's waterfront. Discover rare vintages, handpicked by our sommelier, paired with artisan charcuterie and live jazz every Friday.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Stellenbosch Cabernet 2019", description: "Bold, dark fruit with cedar notes", label: "Red", value: "R180/glass" },
      { title: "Elgin Chardonnay 2021", description: "Crisp citrus, subtle oak, long finish", label: "White", value: "R140/glass" },
      { title: "Robertson Pinotage Reserve", description: "Smoky plum with chocolate undertones", label: "Red", value: "R220/glass" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1018", color: theme?.foreground ?? "#f5ede4" }}
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />

      {/* Decorative wine stain circle */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5 blur-xl"
        style={{ backgroundColor: theme?.primary ?? "#8b2252" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Wine className="w-6 h-6" style={{ color: theme?.primary ?? "#8b2252" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: theme?.primary ?? "#8b2252" }}
              >
                Est. 2018 - Cape Town
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extralight tracking-tight leading-none mb-2">
              {heading}
            </h1>
            <p className="text-xl sm:text-2xl font-light italic mb-6 opacity-60">
              {subheading}
            </p>

            <div className="w-16 h-px mb-6" style={{ backgroundColor: theme?.primary ?? "#8b2252" }} />

            <p className="text-sm opacity-60 mb-10 max-w-md leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#8b2252" }}
              >
                <Calendar className="w-4 h-4" />
                {buttonText}
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs opacity-50">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> V&A Waterfront
              </span>
              <span>Tue-Sun, 5PM - Midnight</span>
              <span className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-current" style={{ color: theme?.primary ?? "#8b2252" }} />
                ))}
              </span>
            </div>
          </div>

          {/* Right - Wine List Preview */}
          <div>
            <div
              className="border p-8 backdrop-blur-sm"
              style={{ borderColor: `${theme?.primary ?? "#8b2252"}30`, backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: theme?.primary ?? "#8b2252" }}>
                  Tonight&apos;s Selection
                </h3>
                <GlassWater className="w-5 h-5 opacity-30" />
              </div>

              <div className="space-y-0">
                {items.map((wine, i) => (
                  <div
                    key={i}
                    className="py-6 border-b last:border-b-0"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mr-2"
                          style={{
                            backgroundColor: wine.label === "Red" ? `${theme?.primary ?? "#8b2252"}30` : "rgba(200,180,100,0.2)",
                            color: wine.label === "Red" ? theme?.primary ?? "#8b2252" : "#c8b464",
                          }}
                        >
                          {wine.label}
                        </span>
                      </div>
                      <span className="text-sm font-light opacity-70">{wine.value}</span>
                    </div>
                    <h4 className="font-medium text-base mb-1">{wine.title}</h4>
                    <p className="text-xs opacity-40">{wine.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <a
                  href="#"
                  className="text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-80"
                  style={{ color: theme?.primary ?? "#8b2252" }}
                >
                  View Full Wine List &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
