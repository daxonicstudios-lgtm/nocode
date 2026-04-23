"use client";

import type { BlockProps } from "@/blocks/types";
import { Skull, Ghost, Eye, AlertTriangle, Ticket, ChevronRight } from "lucide-react";

export default function Hero456(props: BlockProps) {
  const {
    theme,
    heading = "Enter If You Dare",
    subheading = "Shadowfall Manor Haunted Experience",
    bodyText = "Five floors of heart-stopping terror. Live actors, animatronic horrors, and sensory nightmares designed by Hollywood FX artists. Not recommended for anyone under 14.",
    buttonText = "Get Tickets",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Cellar", description: "Complete darkness, disorientation", value: "Extreme" },
      { title: "Doll Factory", description: "Animatronic nightmare corridor", value: "High" },
      { title: "The Asylum", description: "Live actors, jump scares", value: "Extreme" },
      { title: "Phantom Maze", description: "Fog-filled labyrinth", value: "Moderate" },
    ],
  } = props;

  const scareColors: Record<string, string> = {
    Extreme: "#ef4444",
    High: "#f97316",
    Moderate: "#eab308",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#d4d4d4" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Fog / dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center bottom, ${theme?.primary ?? "#7f1d1d"}30 0%, transparent 70%)`,
        }}
      />
      {/* Drip-like top decoration */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: theme?.primary ?? "#991b1b" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <Skull className="w-16 h-16 opacity-60" style={{ color: theme?.primary ?? "#991b1b" }} />
          </div>

          <p
            className="text-sm font-black tracking-[0.3em] uppercase mb-4"
            style={{ color: theme?.primary ?? "#991b1b" }}
          >
            {subheading}
          </p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight">
            {heading}
          </h1>

          <p className="text-lg opacity-50 mb-4 leading-relaxed">
            {bodyText}
          </p>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-10"
            style={{ backgroundColor: `${theme?.primary ?? "#991b1b"}20`, color: theme?.primary ?? "#991b1b" }}
          >
            <AlertTriangle className="w-4 h-4" />
            Scare Rating: Extreme — You&apos;ve Been Warned
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-10 py-5 rounded-lg font-black text-lg uppercase tracking-wider transition-transform hover:scale-105"
              style={{
                backgroundColor: theme?.primary ?? "#991b1b",
                color: "#ffffff",
                boxShadow: `0 0 40px ${theme?.primary ?? "#991b1b"}50`,
              }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              {buttonText}
            </a>
            <a
              href="#waiver"
              className="inline-flex items-center justify-center px-10 py-5 rounded-lg font-bold text-lg border transition-colors hover:opacity-80"
              style={{ borderColor: `${theme?.primary ?? "#991b1b"}50`, color: theme?.foreground ?? "#d4d4d4" }}
            >
              Sign Waiver
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>

        {/* Scare zones */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item, i) => {
            const scareLevelColor = scareColors[item.value ?? "Moderate"] ?? "#eab308";
            return (
              <div
                key={i}
                className="p-5 rounded-xl border group cursor-pointer transition-all hover:scale-[1.03]"
                style={{
                  borderColor: `${scareLevelColor}30`,
                  backgroundColor: `${scareLevelColor}08`,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Ghost className="w-6 h-6 opacity-40" />
                  <span
                    className="px-2 py-1 rounded text-xs font-bold uppercase"
                    style={{ backgroundColor: `${scareLevelColor}20`, color: scareLevelColor }}
                  >
                    {item.value}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-50">{item.description}</p>
                {/* Scare meter */}
                <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ backgroundColor: `${scareLevelColor}15` }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: item.value === "Extreme" ? "100%" : item.value === "High" ? "70%" : "45%",
                      backgroundColor: scareLevelColor,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing */}
        <div className="mt-14 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "General Admission", price: "$35" },
              { label: "VIP Fast Pass", price: "$59" },
              { label: "Ultimate Terror (all floors)", price: "$79" },
            ].map((tier, i) => (
              <div key={i}>
                <p className="text-2xl font-black" style={{ color: theme?.primary ?? "#991b1b" }}>
                  {tier.price}
                </p>
                <p className="text-xs opacity-50">{tier.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs opacity-30 mt-4 flex items-center justify-center gap-1">
            <Eye className="w-3 h-3" />
            Open Thursday - Sunday, 7 PM - Midnight
          </p>
        </div>
      </div>
    </section>
  );
}
