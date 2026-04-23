"use client";

import type { BlockProps } from "@/blocks/types";
import { Target, Users, Clock, Trophy, Music, ChevronRight, Zap } from "lucide-react";

export default function Hero448(props: BlockProps) {
  const {
    theme,
    heading = "Strike Zone Lanes",
    subheading = "Neon Lights. Cold Drinks. Perfect Strikes.",
    bodyText = "Retro bowling at its finest. 24 lanes, cosmic bowling every weekend, a full-service bar, and the best loaded nachos in town. Leagues now forming for the winter season.",
    buttonText = "Reserve a Lane",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Per Game", description: "Shoe rental included", value: "R65", label: "per person" },
      { title: "2-Hour Unlimited", description: "Bowl all you want for 2 hours", value: "R180", label: "per person" },
      { title: "Cosmic Bowling", description: "Fri & Sat 8PM-12AM, UV lights & music", value: "R120", label: "per person" },
      { title: "League Night", description: "Wednesday evenings, 10-week season", value: "R200", label: "per week/team" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a1e", color: theme?.foreground ?? "#e0e7ff" }}
      className="relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute top-0 left-1/4 w-px h-full opacity-20" style={{ backgroundColor: theme?.primary ?? "#f0abfc", boxShadow: `0 0 20px ${theme?.primary ?? "#f0abfc"}` }} />
      <div className="absolute top-0 right-1/3 w-px h-full opacity-10" style={{ backgroundColor: "#06b6d4", boxShadow: "0 0 20px #06b6d4" }} />

      {/* Neon circle accents */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: theme?.primary ?? "#f0abfc" }} />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: "#06b6d4" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border"
              style={{ borderColor: theme?.primary ?? "#f0abfc", color: theme?.primary ?? "#f0abfc" }}
            >
              <Zap className="w-3 h-3" />
              Cosmic Bowling This Friday
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4"
              style={{ textShadow: `0 0 40px ${theme?.primary ?? "#f0abfc"}30` }}
            >
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-light italic mb-4 opacity-70">
              {subheading}
            </p>
            <p className="text-sm opacity-50 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#f0abfc",
                  color: "#0a0a1e",
                  boxShadow: `0 0 30px ${theme?.primary ?? "#f0abfc"}40`,
                }}
              >
                <Target className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border transition-colors hover:opacity-80"
                style={{ borderColor: "#06b6d4", color: "#06b6d4" }}
              >
                <Trophy className="w-5 h-5" />
                Join a League
              </a>
            </div>

            {/* Feature icons */}
            <div className="flex gap-8 text-xs opacity-50">
              <span className="flex items-center gap-2"><Target className="w-4 h-4" /> 24 Lanes</span>
              <span className="flex items-center gap-2"><Music className="w-4 h-4" /> Full Bar</span>
              <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Parties</span>
            </div>
          </div>

          {/* Right - Pricing */}
          <div
            className="rounded-2xl p-6 border backdrop-blur-sm"
            style={{ borderColor: `${theme?.primary ?? "#f0abfc"}20`, backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <h3
              className="text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2"
              style={{ color: theme?.primary ?? "#f0abfc" }}
            >
              <Target className="w-5 h-5" />
              Lane Pricing
            </h3>

            <div className="space-y-0">
              {items.map((price, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b last:border-b-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <div className="flex-1">
                    <h4 className="font-bold text-base">{price.title}</h4>
                    <p className="text-xs opacity-40 mt-1">{price.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-xl font-black" style={{ color: theme?.primary ?? "#f0abfc" }}>{price.value}</p>
                    <p className="text-[10px] uppercase tracking-wide opacity-40">{price.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90"
              style={{
                backgroundColor: theme?.primary ?? "#f0abfc",
                color: "#0a0a1e",
              }}
            >
              Book Now <ChevronRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-1 mt-4 text-xs opacity-40">
              <Clock className="w-3 h-3" />
              <span>Open Mon-Thu 12-10PM | Fri-Sat 12-1AM | Sun 10-9PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
