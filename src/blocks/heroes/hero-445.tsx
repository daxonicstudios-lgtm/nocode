"use client";

import type { BlockProps } from "@/blocks/types";
import { Waves, Sun, Wind, Thermometer, CloudSun, ChevronRight, Users } from "lucide-react";

export default function Hero445(props: BlockProps) {
  const {
    theme,
    heading = "Atlantic Surf Academy",
    subheading = "Ride Your First Wave Today",
    bodyText = "Professional surf and paddleboard lessons for all ages and skill levels. Based in Muizenberg, Cape Town — one of the world's best beginner surf spots.",
    buttonText = "Book a Lesson",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Beginner Package", description: "2-hour group lesson with board & wetsuit", value: "R450", label: "Most Popular" },
      { title: "Private Coaching", description: "1-on-1 session with video analysis", value: "R850", label: "Premium" },
      { title: "5-Day Surf Camp", description: "Daily lessons, theory, ocean safety", value: "R3,200", label: "Best Value" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c2d48", color: theme?.foreground ?? "#e8f4f8" }}
      className="relative overflow-hidden"
    >
      {/* Wave pattern at bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-20 opacity-10" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,60 1440,60 L1440,120 L0,120 Z" fill={theme?.primary ?? "#06b6d4"} />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        {/* Weather/Conditions bar */}
        <div
          className="flex flex-wrap items-center justify-center gap-6 mb-12 px-6 py-3 rounded-full mx-auto w-fit text-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          <span className="flex items-center gap-2">
            <Waves className="w-4 h-4" style={{ color: theme?.primary ?? "#06b6d4" }} />
            Swell: 1.2m
          </span>
          <span className="flex items-center gap-2">
            <Wind className="w-4 h-4" style={{ color: theme?.primary ?? "#06b6d4" }} />
            Wind: 12 km/h SW
          </span>
          <span className="flex items-center gap-2">
            <Thermometer className="w-4 h-4" style={{ color: theme?.primary ?? "#06b6d4" }} />
            Water: 18°C
          </span>
          <span className="flex items-center gap-2">
            <CloudSun className="w-4 h-4" style={{ color: theme?.primary ?? "#06b6d4" }} />
            Partly Cloudy
          </span>
          <span
            className="font-bold px-3 py-1 rounded-full text-xs"
            style={{ backgroundColor: "#22c55e", color: "#fff" }}
          >
            Great Conditions
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-6 h-6" style={{ color: theme?.primary ?? "#06b6d4" }} />
            <span className="text-xs uppercase tracking-[0.3em] font-bold" style={{ color: theme?.primary ?? "#06b6d4" }}>
              Since 2012 - Muizenberg Beach
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-3" style={{ color: theme?.primary ?? "#06b6d4" }}>
            {subheading}
          </p>
          <p className="text-sm opacity-60 max-w-lg mx-auto">{bodyText}</p>
        </div>

        {/* Lesson packages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {items.map((pkg, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center transition-transform hover:scale-105 relative"
              style={{
                backgroundColor: i === 0 ? theme?.primary ?? "#06b6d4" : "rgba(255,255,255,0.06)",
                color: i === 0 ? "#fff" : undefined,
                border: i !== 0 ? "1px solid rgba(255,255,255,0.1)" : undefined,
              }}
            >
              {pkg.label && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: i === 0 ? "#fff" : theme?.primary ?? "#06b6d4",
                    color: i === 0 ? theme?.primary ?? "#06b6d4" : "#fff",
                  }}
                >
                  {pkg.label}
                </span>
              )}
              <p className="text-3xl font-black mb-1 mt-2">{pkg.value}</p>
              <h3 className="font-bold text-base mb-2">{pkg.title}</h3>
              <p className="text-xs opacity-70">{pkg.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#06b6d4", color: "#fff" }}
          >
            <Waves className="w-5 h-5" />
            {buttonText}
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-xs opacity-40 flex items-center justify-center gap-2">
            <Users className="w-3 h-3" /> 5,000+ students taught | All equipment provided
          </p>
        </div>
      </div>
    </section>
  );
}
