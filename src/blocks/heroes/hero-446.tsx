"use client";

import type { BlockProps } from "@/blocks/types";
import { Lock, Users, Clock, Star, Zap, Brain, ChevronRight } from "lucide-react";

export default function Hero446(props: BlockProps) {
  const {
    theme,
    heading = "The Enigma Rooms",
    subheading = "Can You Escape in 60 Minutes?",
    bodyText = "Immersive escape room experiences designed to challenge your mind and test your teamwork. Five uniquely themed rooms, each with a gripping storyline. Book your team's adventure today.",
    buttonText = "Book Your Escape",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Lost Laboratory", description: "A mad scientist's lab holds the cure. Find it before the lockdown.", icon: "brain", label: "Hard", value: "4.8" },
      { title: "Pharaoh's Tomb", description: "Trapped in an ancient burial chamber. Decode the hieroglyphs to survive.", icon: "lock", label: "Medium", value: "4.9" },
      { title: "Cyber Heist", description: "Break into the vault before the security AI catches you.", icon: "zap", label: "Expert", value: "4.7" },
      { title: "The Haunted Manor", description: "Something lurks in the shadows. Escape before midnight strikes.", icon: "star", label: "Medium", value: "4.9" },
    ],
  } = props;

  const difficultyColors: Record<string, string> = {
    Easy: "#22c55e",
    Medium: "#f59e0b",
    Hard: "#ef4444",
    Expert: "#8b5cf6",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f1a", color: theme?.foreground ?? "#e8e6f0" }}
      className="relative overflow-hidden"
    >
      {/* Mysterious glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl" style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
            style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20`, color: theme?.primary ?? "#8b5cf6" }}
          >
            <Lock className="w-4 h-4" />
            5 Themed Rooms - 3 Locations
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-2xl sm:text-3xl font-light italic mb-4" style={{ color: theme?.primary ?? "#8b5cf6" }}>
            {subheading}
          </p>
          <p className="text-sm opacity-60">{bodyText}</p>
        </div>

        {/* Room cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((room, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border transition-all hover:scale-105 hover:border-opacity-60 group cursor-pointer"
              style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}25`, backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded text-white"
                  style={{ backgroundColor: difficultyColors[room.label ?? "Medium"] ?? "#f59e0b" }}
                >
                  {room.label}
                </span>
                <span className="flex items-center gap-1 text-xs">
                  <Star className="w-3 h-3 fill-current" style={{ color: "#f59e0b" }} />
                  {room.value}
                </span>
              </div>

              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20` }}>
                {room.icon === "brain" && <Brain className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />}
                {room.icon === "lock" && <Lock className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />}
                {room.icon === "zap" && <Zap className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />}
                {room.icon === "star" && <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />}
              </div>

              <h3 className="font-bold text-base mb-2">{room.title}</h3>
              <p className="text-xs opacity-50 mb-4">{room.description}</p>

              <div className="flex items-center justify-between text-xs opacity-40">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 2-8 players</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 60 min</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA & Group Booking */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-lg font-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
          >
            <Lock className="w-5 h-5" />
            {buttonText}
            <ChevronRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm opacity-50">
            Groups of 10+? <a href="#" className="underline font-semibold" style={{ color: theme?.primary ?? "#8b5cf6" }}>Get a corporate package</a>
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-xs opacity-40">
            <span>From R250/person</span>
            <span>Age 12+</span>
            <span>No experience needed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
