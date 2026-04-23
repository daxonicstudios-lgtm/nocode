"use client";

import type { BlockProps } from "@/blocks/types";
import { Lock, Clock, Users, ArrowRight, Eye, KeyRound, AlertTriangle } from "lucide-react";

export default function Hero341(props: BlockProps) {
  const {
    theme,
    heading = "Can You Escape in 60 Minutes?",
    subheading = "Immersive Escape Room Adventures",
    bodyText = "Step into our meticulously crafted rooms where every clue matters and every second counts. Gather your team, sharpen your wits, and race against the clock.",
    buttonText = "Book Your Escape",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Vault", description: "Crack the code before the alarm triggers", icon: "lock", value: "Hard" },
      { title: "Haunted Library", description: "Uncover the secret hidden among the shelves", icon: "eye", value: "Medium" },
      { title: "Lab Zero", description: "Stop the experiment before it's too late", icon: "alert", value: "Expert" },
    ],
  } = props;

  const stats = [
    { label: "Rooms", val: "8" },
    { label: "Escapees", val: "24K+" },
    { label: "Escape Rate", val: "32%" },
  ];

  const iconMap: Record<string, typeof Lock> = {
    lock: Lock,
    eye: Eye,
    alert: AlertTriangle,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d0d12", color: theme?.foreground ?? "#e4e4e7" }}
      className="min-h-screen relative overflow-hidden px-5 py-16 sm:py-24 flex items-center"
    >
      {/* Dark mystery grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[180px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-widest mb-6 border"
              style={{
                borderColor: `${theme?.primary ?? "#dc2626"}50`,
                color: theme?.primary ?? "#dc2626",
                backgroundColor: `${theme?.primary ?? "#dc2626"}10`,
              }}
            >
              <KeyRound className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Countdown teaser */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: theme?.primary ?? "#dc2626" }} />
                <span className="text-sm font-medium">Next session starts in:</span>
              </div>
              <div className="flex gap-2">
                {["01", "23", "45"].map((val, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="text-2xl font-mono font-bold px-3 py-1 rounded"
                      style={{ backgroundColor: `${theme?.primary ?? "#dc2626"}15`, color: theme?.primary ?? "#dc2626" }}
                    >
                      {val}
                    </span>
                    {i < 2 && <span className="text-lg opacity-30 font-bold">:</span>}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#dc2626", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-sm opacity-50">
                <Users className="w-4 h-4" />
                <span>2–8 players per room</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold" style={{ color: theme?.primary ?? "#dc2626" }}>{s.val}</div>
                  <div className="text-xs uppercase tracking-wider opacity-40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Room cards */}
          <div className="space-y-4">
            {items.slice(0, 3).map((room, i) => {
              const IconComp = iconMap[room.icon ?? "lock"] ?? Lock;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#dc2626"}20`,
                    backgroundColor: `${theme?.primary ?? "#dc2626"}06`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#dc2626"}15` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: theme?.primary ?? "#dc2626" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-lg">{room.title}</h3>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${theme?.primary ?? "#dc2626"}15`,
                            color: theme?.primary ?? "#dc2626",
                          }}
                        >
                          {room.value}
                        </span>
                      </div>
                      <p className="text-sm opacity-50">{room.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Image slot */}
            {imageUrl && (
              <div className="rounded-xl overflow-hidden mt-4 border" style={{ borderColor: `${theme?.primary ?? "#dc2626"}15` }}>
                <img src={imageUrl} alt="Escape room atmosphere" className="w-full h-48 object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
