"use client";

import type { BlockProps } from "@/blocks/types";
import { Ticket, Calendar, MapPin, Clock, ArrowRight, Users, Music, Star, Grid3X3 } from "lucide-react";

export default function Hero375(props: BlockProps) {
  const {
    theme,
    heading = "Live Events, Unforgettable Moments",
    subheading = "SeatFinder",
    bodyText = "Discover and book tickets to concerts, sports, theater, and festivals. Best seats guaranteed with our interactive venue maps and instant mobile delivery.",
    buttonText = "Find Events",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Amapiano Fest 2026", description: "Lagos National Arena", label: "Apr 28", value: "From $45", icon: "music" },
      { title: "Champions League Final", description: "Cairo International Stadium", label: "May 15", value: "From $120", icon: "sports" },
      { title: "Afrobeats World Tour", description: "Accra Convention Centre", label: "Jun 3", value: "From $35", icon: "music" },
      { title: "Tech Connect Summit", description: "Nairobi ICC", label: "Jun 18", value: "From $75", icon: "conference" },
    ],
  } = props;

  const categories = ["Concerts", "Sports", "Theater", "Comedy", "Festivals", "Conferences"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0a1a", color: theme?.foreground ?? "#f0eef9" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Purple gradient */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
      />
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[150px] opacity-10"
        style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#7c3aed"}15`, color: theme?.primary ?? "#7c3aed" }}
          >
            <Ticket className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-2xl mx-auto">
            {bodyText}
          </p>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat, i) => (
              <button
                key={i}
                className="px-4 py-2 rounded-full text-xs font-semibold border transition-all hover:scale-105"
                style={{
                  borderColor: i === 0 ? theme?.primary ?? "#7c3aed" : `${theme?.primary ?? "#7c3aed"}20`,
                  backgroundColor: i === 0 ? theme?.primary ?? "#7c3aed" : "transparent",
                  color: i === 0 ? "#ffffff" : theme?.primary ?? "#7c3aed",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {imageUrl && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-xl">
            <img src={imageUrl} alt="Live event" className="w-full h-48 sm:h-64 object-cover" />
          </div>
        )}

        {/* Events list */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {items.slice(0, 4).map((event, i) => (
            <div
              key={i}
              className="group flex gap-4 p-5 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              style={{
                borderColor: `${theme?.primary ?? "#7c3aed"}12`,
                backgroundColor: `${theme?.primary ?? "#7c3aed"}06`,
              }}
            >
              {/* Date block */}
              <div
                className="w-14 h-14 rounded-xl flex flex-col items-center justify-center shrink-0"
                style={{ backgroundColor: `${theme?.primary ?? "#7c3aed"}15` }}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-50">{event.label?.split(" ")[0]}</span>
                <span className="text-lg font-black" style={{ color: theme?.primary ?? "#7c3aed" }}>
                  {event.label?.split(" ")[1]}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-bold text-sm sm:text-base mb-1 group-hover:underline">{event.title}</div>
                <div className="flex items-center gap-1.5 text-xs opacity-40 mb-2">
                  <MapPin className="w-3 h-3" />
                  {event.description}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold" style={{ color: theme?.primary ?? "#7c3aed" }}>{event.value}</span>
                  <div className="flex items-center gap-1 text-[10px] opacity-30">
                    <Users className="w-3 h-3" />
                    {(800 + i * 234).toLocaleString()} interested
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seat selection hint + CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl border"
          style={{
            borderColor: `${theme?.primary ?? "#7c3aed"}15`,
            backgroundColor: `${theme?.primary ?? "#7c3aed"}06`,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${theme?.primary ?? "#7c3aed"}15` }}
            >
              <Grid3X3 className="w-5 h-5" style={{ color: theme?.primary ?? "#7c3aed" }} />
            </div>
            <div>
              <div className="text-sm font-bold">Interactive Seat Selection</div>
              <div className="text-xs opacity-40">Choose your exact seat with our 3D venue maps</div>
            </div>
          </div>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-transform hover:scale-105 shrink-0"
            style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#ffffff" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
