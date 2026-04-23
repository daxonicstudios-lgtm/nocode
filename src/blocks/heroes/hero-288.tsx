"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, Calendar, MapPin, Clock, Sparkles } from "lucide-react";

export default function Hero288(props: BlockProps) {
  const {
    theme,
    heading = "Sarah & James",
    subheading = "We Are Getting Married",
    bodyText = "Join us as we celebrate the beginning of our forever. Your presence would make our special day even more magical.",
    buttonText = "RSVP Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "June 15", description: "2026", label: "Date" },
      { title: "The Grand Estate", description: "Cape Town", label: "Venue" },
      { title: "4:00 PM", description: "Reception follows", label: "Time" },
    ],
  } = props;

  // Countdown display values (static for component)
  const countdown = [
    { value: "52", label: "Days" },
    { value: "14", label: "Hours" },
    { value: "38", label: "Minutes" },
    { value: "09", label: "Seconds" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf8f4", color: theme?.foreground ?? "#3d2c2c" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles
          className="absolute top-[15%] left-[10%] w-6 h-6 opacity-[0.08]"
          style={{ color: theme?.primary ?? "#c2856e" }}
        />
        <Sparkles
          className="absolute top-[25%] right-[15%] w-4 h-4 opacity-[0.06]"
          style={{ color: theme?.primary ?? "#c2856e" }}
        />
        <Sparkles
          className="absolute bottom-[20%] left-[20%] w-5 h-5 opacity-[0.05]"
          style={{ color: theme?.primary ?? "#c2856e" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Ornamental top */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 sm:w-24" style={{ backgroundColor: theme?.primary ? `${theme.primary}40` : "rgba(194,133,110,0.25)" }} />
          <Heart className="w-5 h-5" style={{ color: theme?.primary ?? "#c2856e" }} />
          <div className="h-px w-16 sm:w-24" style={{ backgroundColor: theme?.primary ? `${theme.primary}40` : "rgba(194,133,110,0.25)" }} />
        </div>

        <p
          className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 opacity-60"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {subheading}
        </p>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-6"
          style={{ fontFamily: "Georgia, 'Playfair Display', serif", color: theme?.primary ?? "#c2856e" }}
        >
          {heading}
        </h1>

        <p
          className="text-base sm:text-lg opacity-60 max-w-lg mx-auto mb-12 leading-relaxed font-light"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {bodyText}
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-6 sm:gap-10 mb-14">
          {countdown.map((unit, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-light tabular-nums"
                style={{ fontFamily: "Georgia, serif", color: theme?.primary ?? "#c2856e" }}
              >
                {unit.value}
              </div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] opacity-40 mt-2">
                {unit.label}
              </p>
            </div>
          ))}
        </div>

        {/* Event details */}
        <div
          className="grid sm:grid-cols-3 gap-6 max-w-xl mx-auto mb-12 p-6 rounded-2xl"
          style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(194,133,110,0.04)" }}
        >
          {items.map((item, i) => {
            const icons = [
              <Calendar key="c" className="w-4 h-4" />,
              <MapPin key="m" className="w-4 h-4" />,
              <Clock key="t" className="w-4 h-4" />,
            ];
            return (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2 opacity-40">
                  {icons[i]}
                </div>
                <p className="text-xs uppercase tracking-widest opacity-40 mb-1">{item.label}</p>
                <p className="font-semibold" style={{ fontFamily: "Georgia, serif" }}>{item.title}</p>
                <p className="text-sm opacity-50">{item.description}</p>
              </div>
            );
          })}
        </div>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-medium tracking-wide text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: theme?.primary ?? "#c2856e", fontFamily: "Georgia, serif" }}
        >
          <Heart className="w-4 h-4" />
          {buttonText}
        </a>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px w-16 sm:w-24" style={{ backgroundColor: theme?.primary ? `${theme.primary}40` : "rgba(194,133,110,0.25)" }} />
          <Sparkles className="w-4 h-4 opacity-30" style={{ color: theme?.primary ?? "#c2856e" }} />
          <div className="h-px w-16 sm:w-24" style={{ backgroundColor: theme?.primary ? `${theme.primary}40` : "rgba(194,133,110,0.25)" }} />
        </div>
      </div>
    </section>
  );
}
