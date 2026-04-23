"use client";

import type { BlockProps } from "@/blocks/types";
import {
  Wifi,
  Lightbulb,
  Thermometer,
  Lock,
  Speaker,
  Camera,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function Hero493(props: BlockProps) {
  const {
    theme,
    heading = "Your Home, Intelligently Connected",
    subheading = "NexaHome Ecosystem",
    bodyText = "Unify every device under one intelligent roof. From lighting to security, NexaHome learns your routines and automates your life.",
    buttonText = "Start Setup Wizard",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Smart Lighting", description: "Circadian rhythm scenes", icon: "lightbulb" },
      { title: "Climate Control", description: "Room-by-room comfort", icon: "thermometer" },
      { title: "Security System", description: "24/7 AI monitoring", icon: "lock" },
      { title: "Voice Control", description: "Works with every assistant", icon: "speaker" },
      { title: "Smart Cameras", description: "Person detection built-in", icon: "camera" },
      { title: "Energy Saving", description: "Reduce bills by up to 30%", icon: "zap" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    lightbulb: <Lightbulb className="w-5 h-5" />,
    thermometer: <Thermometer className="w-5 h-5" />,
    lock: <Lock className="w-5 h-5" />,
    speaker: <Speaker className="w-5 h-5" />,
    camera: <Camera className="w-5 h-5" />,
    zap: <Zap className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafbfc", color: theme?.foreground ?? "#1a1a2e" }}
      className="min-h-screen relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Top badge */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#10b981"}15`,
              color: theme?.primary ?? "#10b981",
            }}
          >
            <Wifi className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme?.primary ?? "#10b981" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Automation scenes */}
        <div className="mb-12 sm:mb-16">
          <p className="text-center text-xs uppercase tracking-widest opacity-40 mb-6">
            Popular Automation Scenes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Good Morning", "Movie Night", "Away Mode", "Bedtime", "Party Mode", "Energy Saver"].map(
              (scene) => (
                <button
                  key={scene}
                  className="px-5 py-2.5 rounded-full text-sm border transition-colors hover:text-white"
                  style={{
                    borderColor: `${theme?.primary ?? "#10b981"}40`,
                    color: theme?.foreground ?? "#1a1a2e",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme?.primary ?? "#10b981";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = theme?.foreground ?? "#1a1a2e";
                  }}
                >
                  {scene}
                </button>
              )
            )}
          </div>
        </div>

        {/* Device grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{ borderColor: `${theme?.primary ?? "#10b981"}20` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                style={{
                  backgroundColor: `${theme?.primary ?? "#10b981"}10`,
                  color: theme?.primary ?? "#10b981",
                }}
              >
                {iconMap[item.icon ?? "lightbulb"]}
              </div>
              <h3 className="text-sm sm:text-base font-semibold mb-1">{item.title}</h3>
              <p className="text-xs opacity-50">{item.description}</p>
              {/* Connection line decoration */}
              <div
                className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-40"
                style={{ backgroundColor: theme?.primary ?? "#10b981" }}
              />
            </div>
          ))}
        </div>

        {/* Compatibility bar */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
            Works with 500+ devices from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 opacity-30">
            {["Google", "Apple", "Amazon", "Samsung", "Philips"].map((brand) => (
              <span key={brand} className="text-sm sm:text-base font-semibold tracking-wide">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
