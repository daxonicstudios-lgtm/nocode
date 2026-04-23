"use client";

import type { BlockProps } from "@/blocks/types";
import { Glasses, Clock, Gamepad2, Star, Users, ChevronRight, Sparkles, Layers, Cpu } from "lucide-react";

export default function Hero470(props: BlockProps) {
  const {
    theme,
    heading = "Step Inside the Impossible",
    subheading = "Premium VR Arcade & Experience Center",
    bodyText = "Full-body VR experiences across 20+ worlds. Walk through alien landscapes, battle in zero gravity, or create art in three dimensions. No headset required — we provide everything.",
    buttonText = "Reserve Your Time Slot",
    buttonUrl = "#reserve",
    imageUrl,
    items = [
      {
        title: "Cyber Colosseum",
        description: "Full-body multiplayer arena combat. Swords, shields, and sorcery in ancient Rome reimagined as a neon dystopia.",
        icon: "gamepad",
        label: "60 min",
        value: "4.9",
      },
      {
        title: "Gravity Rush",
        description: "Defy physics in a zero-G obstacle course. Race through asteroid fields and space stations at breakneck speed.",
        icon: "sparkles",
        label: "45 min",
        value: "4.8",
      },
      {
        title: "Dreamscape Studio",
        description: "Sculpt, paint, and build in infinite 3D space. Perfect for creatives, couples, or anyone who wants to make something beautiful.",
        icon: "layers",
        label: "30 min",
        value: "4.7",
      },
      {
        title: "Neural Link",
        description: "Cooperative puzzle experience. Sync with your partner to hack through a digital fortress. Communication is everything.",
        icon: "cpu",
        label: "45 min",
        value: "5.0",
      },
    ],
  } = props;

  const timeSlots = [
    { name: "Quick Dive", duration: "30 min", price: "$25", description: "1 experience of your choice" },
    { name: "Explorer Pass", duration: "60 min", price: "$45", description: "2 experiences + free replay" },
    { name: "Full Immersion", duration: "2 hours", price: "$79", description: "Unlimited experiences" },
    { name: "Group Circuit", duration: "3 hours", price: "$59/person", description: "4+ guests, all experiences, private lounge" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    gamepad: <Gamepad2 className="w-5 h-5" />,
    sparkles: <Sparkles className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
  };

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#0b0014",
        color: theme?.foreground || "#e8e0ff",
      }}
      className="relative overflow-hidden"
    >
      {/* Cyberpunk background effects */}
      <div className="absolute inset-0">
        {/* Diagonal grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(225deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: theme?.primary || "#8b5cf6" }}
        />
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: "#3b82f6" }}
        />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: "#a855f7" }}
        />
      </div>

      {/* Horizontal neon line accents */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: theme?.primary || "#8b5cf6" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-50" style={{ backgroundColor: "#3b82f6" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{
                backgroundColor: `${theme?.primary || "#8b5cf6"}15`,
                border: `1px solid ${theme?.primary || "#8b5cf6"}30`,
                color: theme?.primary || "#8b5cf6",
              }}
            >
              <Glasses className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              <span>Step Inside</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6, #06b6d4)`,
                }}
              >
                the Impossible
              </span>
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6)`,
                  color: "#ffffff",
                  boxShadow: `0 0 40px ${theme?.primary || "#8b5cf6"}30`,
                }}
              >
                <Glasses className="w-5 h-5" />
                {buttonText}
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#experiences"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:bg-white/5"
                style={{ borderColor: `${theme?.primary || "#8b5cf6"}50`, color: theme?.primary || "#8b5cf6" }}
              >
                Browse Experiences
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t" style={{ borderColor: `${theme?.primary || "#8b5cf6"}15` }}>
              {[
                { icon: <Gamepad2 className="w-4 h-4" />, val: "20+", label: "VR Worlds" },
                { icon: <Users className="w-4 h-4" />, val: "12K+", label: "Happy Visitors" },
                { icon: <Star className="w-4 h-4" />, val: "4.9", label: "Avg Rating" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary || "#8b5cf6"}15`, color: theme?.primary || "#8b5cf6" }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-lg font-bold">{s.val}</div>
                    <div className="text-xs opacity-50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VR Headset visual / image area */}
          <div className="relative">
            <div
              className="w-full aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}10, #3b82f610, #06b6d410)`,
                border: `1px solid ${theme?.primary || "#8b5cf6"}20`,
              }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="VR Experience" className="w-full h-full object-cover rounded-3xl" />
              ) : (
                <div className="text-center p-8">
                  <div
                    className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}25, #3b82f625)`,
                    }}
                  >
                    <Glasses className="w-12 h-12" style={{ color: theme?.primary || "#8b5cf6" }} />
                  </div>
                  <p className="text-sm opacity-40 uppercase tracking-widest">Immersive VR</p>
                  <p className="text-xs opacity-25 mt-1">20+ worlds await</p>
                </div>
              )}
              {/* Floating scan lines */}
              <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(139,92,246,0.2) 3px, rgba(139,92,246,0.2) 4px)",
                }}
              />
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: theme?.primary || "#8b5cf6" }} />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: "#3b82f6" }} />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: "#3b82f6" }} />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: theme?.primary || "#8b5cf6" }} />
            </div>
          </div>
        </div>

        {/* Experience Catalog */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Experience <span style={{ color: theme?.primary || "#8b5cf6" }}>Catalog</span>
            </h2>
            <p className="text-sm opacity-50">Choose your reality. Each world is crafted for maximum immersion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((exp, index) => (
              <div
                key={index}
                className="group rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.01] hover:border-opacity-50"
                style={{
                  borderColor: `${theme?.primary || "#8b5cf6"}20`,
                  backgroundColor: `${theme?.primary || "#8b5cf6"}05`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-colors duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}20, #3b82f620)`,
                      color: theme?.primary || "#8b5cf6",
                    }}
                  >
                    {iconMap[exp.icon || "gamepad"] || <Gamepad2 className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      {exp.label && (
                        <span className="text-xs px-2 py-0.5 rounded-full opacity-70" style={{ backgroundColor: `${theme?.primary || "#8b5cf6"}20` }}>
                          <Clock className="w-3 h-3 inline mr-1" />
                          {exp.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm opacity-55 leading-relaxed mb-3">{exp.description}</p>
                    {exp.value && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#fbbf24" }} />
                        <span className="text-sm font-semibold">{exp.value}</span>
                        <span className="text-xs opacity-40 ml-1">rating</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slot Pricing */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Pick Your <span style={{ color: theme?.primary || "#8b5cf6" }}>Time Slot</span>
            </h2>
            <p className="text-sm opacity-50">Walk-ins welcome. Reservations guarantee your preferred time.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timeSlots.map((slot, index) => {
              const isPopular = index === 2;
              return (
                <div
                  key={index}
                  className="relative rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    borderColor: isPopular ? (theme?.primary || "#8b5cf6") : `${theme?.primary || "#8b5cf6"}20`,
                    backgroundColor: isPopular ? `${theme?.primary || "#8b5cf6"}10` : `${theme?.primary || "#8b5cf6"}03`,
                    boxShadow: isPopular ? `0 0 30px ${theme?.primary || "#8b5cf6"}15` : "none",
                  }}
                >
                  {isPopular && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                      style={{
                        background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6)`,
                        color: "#ffffff",
                      }}
                    >
                      <Sparkles className="w-3 h-3" /> Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-bold mb-1">{slot.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-60 mb-4">
                    <Clock className="w-4 h-4" />
                    {slot.duration}
                  </div>

                  <div
                    className="text-3xl font-black mb-2"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {slot.price}
                  </div>
                  <p className="text-xs opacity-50 mb-5">{slot.description}</p>

                  <a
                    href={buttonUrl}
                    className="block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:opacity-90"
                    style={
                      isPopular
                        ? {
                            background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6)`,
                            color: "#ffffff",
                          }
                        : {
                            border: `1px solid ${theme?.primary || "#8b5cf6"}40`,
                            color: theme?.primary || "#8b5cf6",
                          }
                    }
                  >
                    Reserve Now
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open hours bar */}
        <div
          className="mt-16 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}08, #3b82f608)`,
            border: `1px solid ${theme?.primary || "#8b5cf6"}15`,
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-1">Open 7 Days a Week</h3>
            <p className="text-sm opacity-50">Mon-Thu 12pm-10pm &bull; Fri-Sun 10am-Midnight</p>
          </div>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary || "#8b5cf6"}, #3b82f6)`,
              color: "#ffffff",
            }}
          >
            <Glasses className="w-5 h-5" />
            Book Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
