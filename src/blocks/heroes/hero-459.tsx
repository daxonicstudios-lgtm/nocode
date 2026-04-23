"use client";

import type { BlockProps } from "@/blocks/types";
import { Waves, Award, MapPin, Anchor, ThermometerSun, ArrowRight } from "lucide-react";

export default function Hero459(props: BlockProps) {
  const {
    theme,
    heading = "Explore the Deep Blue",
    subheading = "Coral Bay Scuba Diving Center",
    bodyText = "From beginner discover dives to advanced wreck explorations, our PADI-certified instructors guide you through crystal-clear waters teeming with marine life.",
    buttonText = "Book a Dive",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Discover Scuba", description: "No certification needed, shallow reef", value: "$99", label: "Beginner" },
      { title: "Open Water Cert", description: "PADI certification, 4-day course", value: "$450", label: "Beginner" },
      { title: "Advanced Open Water", description: "Deep dives, navigation, night diving", value: "$350", label: "Intermediate" },
      { title: "Wreck & Cave Dives", description: "Guided specialty dives", value: "$149", label: "Advanced" },
    ],
  } = props;

  const levelColors: Record<string, string> = {
    Beginner: "#22c55e",
    Intermediate: "#3b82f6",
    Advanced: "#a855f7",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#021a2e", color: theme?.foreground ?? "#cde4f5" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Underwater bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border opacity-10"
            style={{
              width: `${8 + (i * 7) % 20}px`,
              height: `${8 + (i * 7) % 20}px`,
              bottom: `${(i * 23) % 80}%`,
              left: `${(i * 17) % 95}%`,
              borderColor: theme?.primary ?? "#0ea5e9",
            }}
          />
        ))}
      </div>

      {/* Depth gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${theme?.primary ?? "#0ea5e9"}08 100%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: main content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Waves className="w-6 h-6" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-65 mb-8 leading-relaxed">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 mb-10"
              style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#ffffff" }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            {/* Dive conditions */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 opacity-60">
                <ThermometerSun className="w-4 h-4" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                <span>Water Temp: 78°F / 26°C</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <Anchor className="w-4 h-4" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                <span>Visibility: 80+ feet</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <MapPin className="w-4 h-4" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                <span>12 Dive Sites Within 20 Minutes</span>
              </div>
              <div className="flex items-center gap-3 opacity-60">
                <Award className="w-4 h-4" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                <span>PADI 5-Star Dive Center</span>
              </div>
            </div>
          </div>

          {/* Right: certification levels / packages */}
          <div className="lg:col-span-3 space-y-4">
            {items.slice(0, 4).map((item, i) => {
              const levelColor = levelColors[item.label ?? "Beginner"] ?? "#22c55e";
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-4 transition-all hover:scale-[1.01]"
                  style={{
                    borderColor: `${theme?.primary ?? "#0ea5e9"}20`,
                    backgroundColor: `${theme?.primary ?? "#0ea5e9"}06`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${levelColor}20`, color: levelColor }}
                  >
                    <span className="text-lg font-black">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-bold"
                        style={{ backgroundColor: `${levelColor}20`, color: levelColor }}
                      >
                        {item.label}
                      </span>
                    </div>
                    <p className="text-sm opacity-55">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                      {item.value}
                    </p>
                    <a
                      href={buttonUrl}
                      className="text-xs font-semibold mt-1 inline-block"
                      style={{ color: theme?.primary ?? "#0ea5e9" }}
                    >
                      Book Now →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
