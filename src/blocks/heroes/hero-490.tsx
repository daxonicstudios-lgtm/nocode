"use client";

import type { BlockProps } from "@/blocks/types";
import { Disc3, Headphones, Music, ShoppingBag, Clock, Star } from "lucide-react";

export default function Hero490(props: BlockProps) {
  const {
    theme,
    heading = "The Sound You Can Hold",
    subheading = "New & Used Vinyl Records — All Genres, All Eras",
    bodyText = "Dig through thousands of records spanning jazz, soul, rock, hip-hop, electronic, and more. Every LP is graded and sleeved. Listening stations available in-store.",
    buttonText = "Browse New Arrivals",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Miles Davis — Kind of Blue", description: "1959 repress, NM/VG+", value: "$38", label: "Jazz" },
      { title: "Fleetwood Mac — Rumours", description: "Original press, VG+/VG+", value: "$55", label: "Rock" },
      { title: "Kendrick Lamar — DAMN.", description: "Sealed, limited red vinyl", value: "$42", label: "Hip-Hop" },
    ],
  } = props;

  const genres = ["Jazz", "Soul / R&B", "Classic Rock", "Hip-Hop", "Electronic", "Afrobeats"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1520", color: theme?.foreground ?? "#ede8f5" }}
      className="relative overflow-hidden"
    >
      {/* Vinyl groove circles */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/5 opacity-30" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] rounded-full border border-white/5 opacity-20" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] rounded-full border border-white/5 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Disc3 className="w-5 h-5 animate-spin" style={{ color: theme?.primary ?? "#c084fc", animationDuration: "4s" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: theme?.primary ?? "#c084fc" }}>
                Groove Box Records
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#c084fc" }}>
              {subheading}
            </p>
            <p className="text-base opacity-65 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#c084fc" }}
              >
                <ShoppingBag className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#c084fc", color: theme?.primary ?? "#c084fc" }}
              >
                <Headphones className="w-4 h-4" />
                Listening Station
              </a>
            </div>

            {/* Genre tags */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-40 mb-3">Browse by Genre</p>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-1.5 rounded-full text-xs font-medium border cursor-pointer hover:bg-white/5 transition-colors"
                    style={{ borderColor: `${theme?.primary ?? "#c084fc"}40`, color: theme?.primary ?? "#c084fc" }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-60" />
            ) : (
              <div className="w-full h-48 rounded-2xl flex items-center justify-center" style={{ background: `radial-gradient(circle, ${theme?.primary ?? "#c084fc"}15, transparent 70%)` }}>
                <Disc3 className="w-24 h-24 opacity-10" style={{ color: theme?.primary ?? "#c084fc" }} />
              </div>
            )}

            {/* New arrivals */}
            <div className="rounded-2xl border border-white/10 p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-5 h-5" style={{ color: theme?.primary ?? "#c084fc" }} />
                <h3 className="font-bold">Just In</h3>
              </div>
              <div className="space-y-3">
                {items.map((record, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#c084fc"}12` }}>
                      <Disc3 className="w-6 h-6" style={{ color: theme?.primary ?? "#c084fc" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{record.title}</p>
                      <p className="text-xs opacity-40">{record.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-sm" style={{ color: theme?.primary ?? "#c084fc" }}>{record.value}</p>
                      <span className="text-[10px] opacity-40">{record.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Store info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-4 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <Headphones className="w-5 h-5 mb-2" style={{ color: theme?.primary ?? "#c084fc" }} />
                <p className="font-semibold text-sm">Listening Stations</p>
                <p className="text-xs opacity-40 mt-0.5">Preview any record before buying — 4 turntables in-store</p>
              </div>
              <div className="rounded-xl p-4 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                <Clock className="w-5 h-5 mb-2" style={{ color: theme?.primary ?? "#c084fc" }} />
                <p className="font-semibold text-sm">Open Today</p>
                <p className="text-xs opacity-40 mt-0.5">11 AM – 9 PM, new crates unpacked every Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
