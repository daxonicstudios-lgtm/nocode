"use client";

import type { BlockProps } from "@/blocks/types";
import { PartyPopper, Users, Shield, Gift, ChevronRight, Clock, Star } from "lucide-react";

export default function Hero447(props: BlockProps) {
  const {
    theme,
    heading = "Sky High Trampoline Park",
    subheading = "Bounce. Flip. Fly.",
    bodyText = "Over 10,000 sq ft of interconnected trampolines, foam pits, dodgeball courts, and ninja obstacle courses. Fun for the whole family — toddlers to adults!",
    buttonText = "Jump In Today",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Open Jump", description: "1 hour unlimited access to all zones", value: "R120", label: "per person" },
      { title: "Birthday Bash", description: "2 hours jump + party room + pizza for 10 kids", value: "R2,500", label: "package" },
      { title: "Family 4-Pack", description: "4 x 1-hour passes, any day", value: "R400", label: "save 20%" },
      { title: "Glow Night", description: "Friday nights 7-10PM, UV lights & DJ", value: "R150", label: "per person" },
    ],
  } = props;

  const vibrantColors = ["#f43f5e", "#8b5cf6", "#06b6d4", "#f59e0b"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fef3c7", color: theme?.foreground ?? "#1e1b4b" }}
      className="relative overflow-hidden"
    >
      {/* Bouncy circles decoration */}
      {vibrantColors.map((color, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-15"
          style={{
            backgroundColor: color,
            width: `${60 + i * 30}px`,
            height: `${60 + i * 30}px`,
            top: `${10 + i * 20}%`,
            left: i % 2 === 0 ? `${5 + i * 5}%` : undefined,
            right: i % 2 !== 0 ? `${5 + i * 5}%` : undefined,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Bouncy badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-bold mb-6 animate-bounce"
            style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}
          >
            <PartyPopper className="w-4 h-4" />
            Now Open 7 Days a Week!
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-2">
            {heading}
          </h1>
          <p
            className="text-3xl sm:text-4xl font-black uppercase tracking-wider mb-4"
            style={{ color: theme?.primary ?? "#f43f5e" }}
          >
            {subheading}
          </p>
          <p className="text-base opacity-70 max-w-lg mx-auto">{bodyText}</p>
        </div>

        {/* Party packages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((pkg, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 text-center transition-transform hover:scale-105 hover:-translate-y-2"
              style={{
                backgroundColor: "#fff",
                boxShadow: `0 8px 30px ${vibrantColors[i % 4]}25`,
                borderTop: `4px solid ${vibrantColors[i % 4]}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${vibrantColors[i % 4]}15` }}
              >
                {i === 0 && <Users className="w-6 h-6" style={{ color: vibrantColors[i] }} />}
                {i === 1 && <Gift className="w-6 h-6" style={{ color: vibrantColors[i] }} />}
                {i === 2 && <PartyPopper className="w-6 h-6" style={{ color: vibrantColors[i] }} />}
                {i === 3 && <Star className="w-6 h-6" style={{ color: vibrantColors[i] }} />}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "#1e1b4b" }}>{pkg.title}</h3>
              <p className="text-3xl font-black mb-1" style={{ color: vibrantColors[i % 4] }}>{pkg.value}</p>
              <p className="text-xs uppercase tracking-wide opacity-50 mb-2" style={{ color: "#1e1b4b" }}>{pkg.label}</p>
              <p className="text-xs opacity-60" style={{ color: "#1e1b4b" }}>{pkg.description}</p>
            </div>
          ))}
        </div>

        {/* CTA & Waiver */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-white text-lg font-black uppercase tracking-wide shadow-xl transition-transform hover:scale-110"
            style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}
          >
            {buttonText}
            <ChevronRight className="w-5 h-5" />
          </a>

          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
            <Shield className="w-5 h-5" style={{ color: theme?.primary ?? "#f43f5e" }} />
            <div className="text-left">
              <p className="font-bold text-xs">Waiver Required</p>
              <p className="text-xs opacity-60">Complete online before arrival to skip the line</p>
            </div>
            <a href="#" className="text-xs font-bold underline ml-2" style={{ color: theme?.primary ?? "#f43f5e" }}>
              Sign Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs opacity-50">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Mon-Thu 10-8 | Fri-Sun 9-10</span>
            <span>Ages 3+</span>
            <span>Grip socks required (R25)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
