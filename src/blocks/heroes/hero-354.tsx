"use client";

import type { BlockProps } from "@/blocks/types";
import { Landmark, Ticket, Clock, MapPin, ArrowRight, Users, Globe, Star } from "lucide-react";

export default function Hero354(props: BlockProps) {
  const {
    theme,
    heading = "Journey Through Time",
    subheading = "National History Museum",
    bodyText = "Explore over 10,000 artifacts spanning five millennia of human civilization. From ancient relics to modern marvels, every exhibit tells a story that shaped the world we know today.",
    buttonText = "Plan Your Visit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ancient Civilizations", description: "Mesopotamia, Egypt, Greece & Rome", value: "3,200+ artifacts" },
      { title: "Medieval World", description: "Arms, armor, manuscripts & tapestries", value: "1,800+ artifacts" },
      { title: "Age of Discovery", description: "Maps, instruments & expedition relics", value: "2,400+ artifacts" },
      { title: "Modern Era", description: "Industrial revolution to space age", value: "2,600+ artifacts" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1814", color: theme?.foreground ?? "#f5f0e8" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Aged parchment texture overlay effect */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, rgba(212,175,120,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(212,175,120,0.3) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top badge */}
        <div className="flex items-center justify-center mb-10">
          <div
            className="flex items-center gap-3 px-5 py-2.5 rounded-none border text-xs font-medium uppercase tracking-[0.2em]"
            style={{ borderColor: `${theme?.primary ?? "#d4af76"}40`, color: theme?.primary ?? "#d4af76" }}
          >
            <Landmark className="w-4 h-4" />
            {subheading}
            <Landmark className="w-4 h-4" />
          </div>
        </div>

        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light leading-[1.1] mb-6 tracking-wide">
            {heading}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#d4af76" }} />
            <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#d4af76" }} />
            <div className="w-12 h-px" style={{ backgroundColor: theme?.primary ?? "#d4af76" }} />
          </div>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#d4af76" }}
            >
              <Ticket className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold border"
              style={{ borderColor: `${theme?.primary ?? "#d4af76"}40`, color: theme?.primary ?? "#d4af76" }}
            >
              <Users className="w-4 h-4" />
              Become a Member
            </a>
          </div>
        </div>

        {/* Featured image */}
        {imageUrl && (
          <div className="mb-14 border p-2" style={{ borderColor: `${theme?.primary ?? "#d4af76"}20` }}>
            <img src={imageUrl} alt="Museum exhibit" className="w-full h-64 sm:h-80 object-cover" />
          </div>
        )}

        {/* Permanent collections */}
        <h3
          className="text-xs font-medium uppercase tracking-[0.25em] mb-6 text-center"
          style={{ color: theme?.primary ?? "#d4af76" }}
        >
          Permanent Collections
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="p-5 border text-center transition-all hover:scale-[1.02] cursor-pointer group"
              style={{ borderColor: `${theme?.primary ?? "#d4af76"}15` }}
            >
              <Globe className="w-6 h-6 mx-auto mb-3 opacity-40 group-hover:opacity-70 transition-opacity" style={{ color: theme?.primary ?? "#d4af76" }} />
              <div className="font-semibold text-sm mb-1">{item.title}</div>
              <div className="text-xs opacity-40 mb-3">{item.description}</div>
              <div className="text-xs font-bold" style={{ color: theme?.primary ?? "#d4af76" }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Visit info */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t text-sm"
          style={{ borderColor: `${theme?.primary ?? "#d4af76"}15` }}
        >
          <span className="flex items-center gap-2 opacity-50">
            <Clock className="w-3.5 h-3.5" />
            Daily 9 AM – 5 PM
          </span>
          <span className="flex items-center gap-2 opacity-50">
            <MapPin className="w-3.5 h-3.5" />
            Museum Quarter, Central Avenue
          </span>
          <span className="flex items-center gap-2 font-medium" style={{ color: theme?.primary ?? "#d4af76" }}>
            <Ticket className="w-3.5 h-3.5" />
            Adults $18 · Students $10 · Under 12 Free
          </span>
        </div>
      </div>
    </section>
  );
}
