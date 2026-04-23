"use client";

import type { BlockProps } from "@/blocks/types";
import { Wine, CalendarDays, MapPin, Star, Grape } from "lucide-react";

export default function Hero334(props: BlockProps) {
  const {
    theme,
    heading = "Crafted with Passion, Poured with Pride",
    subheading = "Est. 1998 — Small Batch Brewery & Winery",
    bodyText = "From vine to glass and grain to pint, every sip tells the story of our land. Visit our tasting room nestled in the rolling hills and experience award-winning craft beverages.",
    buttonText = "Reserve a Tasting",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Harvest Gold Lager", description: "Light, crisp, citrus finish", label: "Beer" },
      { title: "Old Vine Cabernet", description: "Bold, oaky, dark cherry", label: "Wine" },
      { title: "Barrel-Aged Stout", description: "Rich, chocolatey, smooth", label: "Beer" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1C1410", color: theme?.foreground ?? "#F5E6D3" }}
      className="relative overflow-hidden"
    >
      {/* Vintage border accent */}
      <div className="absolute inset-4 md:inset-8 border opacity-20 pointer-events-none" style={{ borderColor: theme?.primary ?? "#C8913A" }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16 py-20 md:py-32 text-center">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#C8913A" }} />
          <Grape className="w-5 h-5" style={{ color: theme?.primary ?? "#C8913A" }} />
          <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#C8913A" }} />
        </div>

        <p
          className="text-xs md:text-sm uppercase tracking-[0.35em] font-medium mb-6"
          style={{ color: theme?.primary ?? "#C8913A" }}
        >
          {subheading}
        </p>

        <h1 className="text-3xl md:text-6xl font-serif font-bold leading-tight mb-6 max-w-3xl mx-auto" style={{ fontFamily: "Georgia, serif" }}>
          {heading}
        </h1>

        <p className="text-base md:text-lg opacity-60 mb-10 max-w-xl mx-auto leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm uppercase tracking-wider border-2 hover:bg-white/5 transition-colors"
            style={{ borderColor: theme?.primary ?? "#C8913A", color: theme?.primary ?? "#C8913A" }}
          >
            <Wine className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm uppercase tracking-wider hover:opacity-80 transition-opacity"
            style={{ backgroundColor: theme?.primary ?? "#C8913A", color: theme?.background ?? "#1C1410" }}
          >
            <CalendarDays className="w-4 h-4" />
            Upcoming Events
          </a>
        </div>

        {/* Featured pours */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-sm border"
              style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#C8913A30", backgroundColor: theme?.primary ? `${theme.primary}08` : "#C8913A08" }}
            >
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm mb-3"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}25` : "#C8913A25", color: theme?.primary ?? "#C8913A" }}
              >
                {item.label}
              </span>
              <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="text-xs opacity-50">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-xs opacity-40">
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> 42 Vineyard Road, Napa Valley</span>
          <span className="flex items-center gap-1.5"><Star className="w-3 h-3" /> Must be 21+ to taste</span>
        </div>

        {/* Ornamental bottom */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#C8913A" }} />
          <Grape className="w-5 h-5" style={{ color: theme?.primary ?? "#C8913A" }} />
          <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#C8913A" }} />
        </div>
      </div>
    </section>
  );
}
