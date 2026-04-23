"use client";

import type { BlockProps } from "@/blocks/types";
import { Crosshair, MapPin, Users, Zap, Star, Shield, Clock, ChevronRight } from "lucide-react";

export default function Hero469(props: BlockProps) {
  const {
    theme,
    heading = "Enter the Arena. Own the Battlefield.",
    subheading = "Houston's #1 Laser Tag Experience",
    bodyText = "State-of-the-art laser tag arenas with immersive fog effects, pulsing neon lights, and multi-level combat zones. Perfect for birthdays, team building, and weekend warriors.",
    buttonText = "Book Your Session",
    buttonUrl = "#book",
    imageUrl,
    items = [
      {
        title: "Neon Nexus",
        description: "3-level cyberpunk cityscape with rooftop sniper nests and underground tunnels. Up to 24 players.",
        icon: "mapPin",
        label: "Most Popular",
      },
      {
        title: "Zero Gravity",
        description: "Open arena with floating barriers and 360-degree engagement zones. Fast-paced 12v12 battles.",
        icon: "zap",
        label: "New",
      },
      {
        title: "Shadow Fortress",
        description: "Medieval castle layout with narrow corridors, hidden passages, and a central throne room objective.",
        icon: "shield",
        label: "Strategic",
      },
    ],
  } = props;

  const packages = [
    { name: "Solo Drop", players: "1 Player", duration: "30 min", price: "$15", highlight: false },
    { name: "Squad Assault", players: "4 Players", duration: "60 min", price: "$49", highlight: true },
    { name: "Party Blitz", players: "Up to 12", duration: "90 min", price: "$129", highlight: false },
    { name: "Corporate Ops", players: "Up to 24", duration: "2 hours", price: "$249", highlight: false },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    mapPin: <MapPin className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
  };

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#0a0a0f",
        color: theme?.foreground || "#e0ffe0",
      }}
      className="relative overflow-hidden"
    >
      {/* Neon grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,200,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Neon glow orbs */}
      <div
        className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: theme?.primary || "#00ffcc" }}
      />
      <div
        className="absolute bottom-40 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#00e5ff" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#39ff14" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Hero header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-opacity-30"
            style={{ borderColor: theme?.primary || "#00ffcc", backgroundColor: "rgba(0,255,204,0.08)" }}
          >
            <Crosshair className="w-4 h-4" style={{ color: theme?.primary || "#00ffcc" }} />
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: theme?.primary || "#00ffcc" }}>
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {heading.split(".").map((part, i) =>
              part.trim() ? (
                <span key={i}>
                  {i > 0 && <>. </>}
                  {i === 0 ? (
                    <span style={{ color: theme?.primary || "#00ffcc" }}>{part.trim()}</span>
                  ) : (
                    <span>{part.trim()}</span>
                  )}
                  {i === 0 && <br className="hidden sm:block" />}
                </span>
              ) : null
            )}
          </h1>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-70 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundColor: theme?.primary || "#00ffcc",
                color: theme?.background || "#0a0a0f",
                boxShadow: `0 0 30px ${theme?.primary || "#00ffcc"}40`,
              }}
            >
              <Crosshair className="w-5 h-5" />
              {buttonText}
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#arenas"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 hover:bg-white/5"
              style={{ borderColor: theme?.primary || "#00ffcc", color: theme?.primary || "#00ffcc" }}
            >
              <MapPin className="w-5 h-5" />
              View Arenas
            </a>
          </div>
        </div>

        {/* Arena Maps */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Choose Your <span style={{ color: theme?.primary || "#00ffcc" }}>Battleground</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((arena, index) => (
              <div
                key={index}
                className="group relative rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:border-opacity-60"
                style={{
                  borderColor: `${theme?.primary || "#00ffcc"}30`,
                  backgroundColor: "rgba(0,255,204,0.03)",
                }}
              >
                {arena.label && (
                  <span
                    className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: theme?.primary || "#00ffcc",
                      color: theme?.background || "#0a0a0f",
                    }}
                  >
                    {arena.label}
                  </span>
                )}

                {/* Arena preview placeholder */}
                <div
                  className="w-full h-40 rounded-lg mb-5 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: "rgba(0,255,204,0.06)" }}
                >
                  {arena.imageUrl ? (
                    <img src={arena.imageUrl} alt={arena.title || "Arena"} className="w-full h-full object-cover rounded-lg" />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${theme?.primary || "#00ffcc"}20` }}
                      >
                        {iconMap[arena.icon || "mapPin"] || <MapPin className="w-5 h-5" />}
                      </div>
                      <span className="text-xs opacity-50 uppercase tracking-widest">Arena Map</span>
                    </div>
                  )}
                  {/* Scan line effect */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,204,0.1) 2px, rgba(0,255,204,0.1) 4px)",
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2" style={{ color: theme?.primary || "#00ffcc" }}>
                  {arena.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed">{arena.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Party Packages */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Party <span style={{ color: theme?.primary || "#00ffcc" }}>Packages</span>
          </h2>
          <p className="text-center opacity-50 mb-10 text-sm">All packages include gear rental, safety briefing, and a dedicated game marshal</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="relative rounded-xl p-5 border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: pkg.highlight ? (theme?.primary || "#00ffcc") : `${theme?.primary || "#00ffcc"}20`,
                  backgroundColor: pkg.highlight ? "rgba(0,255,204,0.08)" : "rgba(0,255,204,0.02)",
                  boxShadow: pkg.highlight ? `0 0 20px ${theme?.primary || "#00ffcc"}15` : "none",
                }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ backgroundColor: theme?.primary || "#00ffcc", color: theme?.background || "#0a0a0f" }}
                  >
                    <Star className="w-3 h-3" /> Best Value
                  </div>
                )}

                <h3 className="text-lg font-bold mb-3">{pkg.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <Users className="w-4 h-4" style={{ color: theme?.primary || "#00ffcc" }} />
                    {pkg.players}
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <Clock className="w-4 h-4" style={{ color: theme?.primary || "#00ffcc" }} />
                    {pkg.duration}
                  </div>
                </div>

                <div className="text-3xl font-black mb-4" style={{ color: theme?.primary || "#00ffcc" }}>
                  {pkg.price}
                </div>

                <a
                  href={buttonUrl}
                  className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:opacity-90"
                  style={
                    pkg.highlight
                      ? { backgroundColor: theme?.primary || "#00ffcc", color: theme?.background || "#0a0a0f" }
                      : { border: `1px solid ${theme?.primary || "#00ffcc"}40`, color: theme?.primary || "#00ffcc" }
                  }
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 py-6 border-t border-b"
          style={{ borderColor: `${theme?.primary || "#00ffcc"}15` }}
        >
          {[
            { value: "50K+", label: "Battles Fought" },
            { value: "4.9", label: "Star Rating" },
            { value: "3", label: "Unique Arenas" },
            { value: "24/7", label: "Weekend Hours" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black" style={{ color: theme?.primary || "#00ffcc" }}>
                {stat.value}
              </div>
              <div className="text-xs opacity-50 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
