"use client";

import type { BlockProps } from "@/blocks/types";
import { Heart, Leaf, Wind, Flower2 } from "lucide-react";

export default function Hero248(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Inner Peace",
    subheading = "Guided Meditation & Wellness",
    bodyText = "Transform your daily routine with personalized meditation sessions, breathwork exercises, and mindfulness practices designed by world-renowned wellness experts.",
    buttonText = "Begin Your Journey",
    buttonUrl = "#",
    secondaryButtonText = "Explore Programs",
    secondaryButtonUrl = "#",
    items = [
      { icon: "heart", title: "Stress Relief", description: "Guided sessions for calm" },
      { icon: "wind", title: "Breathwork", description: "Intentional breathing patterns" },
      { icon: "leaf", title: "Mindfulness", description: "Present-moment awareness" },
    ],
  } = props;

  const bgColor = theme?.background ?? "#fdf6ee";
  const fgColor = theme?.foreground ?? "#3d2e1f";
  const primaryColor = theme?.primary ?? "#d97706";
  const accentColor = theme?.accent ?? "#a3825d";

  const rings = Array.from({ length: 6 }, (_, i) => ({
    size: 150 + i * 120,
    delay: i * 0.8,
    duration: 4 + i * 0.5,
  }));

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        @keyframes hero248pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.25; }
          50% { transform: translate(-50%, -50%) scale(1); opacity: 0.08; }
          100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.25; }
        }
      `}</style>

      {/* Pulsing concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {rings.map((ring, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: `${ring.size}px`,
              height: `${ring.size}px`,
              left: "50%",
              top: "50%",
              borderColor: primaryColor,
              animation: `hero248pulse ${ring.duration}s ease-in-out ${ring.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Soft radial glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${primaryColor}, transparent)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <Flower2
            className="w-10 h-10 mx-auto mb-6"
            style={{ color: primaryColor }}
          />

          <span
            className="text-sm font-medium tracking-[0.2em] uppercase block mb-4"
            style={{ color: accentColor }}
          >
            {subheading}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-10 max-w-xl mx-auto font-light">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-base transition-all hover:scale-105"
              style={{
                backgroundColor: primaryColor,
                color: "#ffffff",
                boxShadow: `0 8px 30px ${primaryColor}30`,
              }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-base border transition-all hover:scale-105"
              style={{ borderColor: `${fgColor}20` }}
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {items.map((item, i) => {
              const icons = [Heart, Wind, Leaf];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl backdrop-blur-sm"
                  style={{ backgroundColor: `${primaryColor}08` }}
                >
                  <Icon className="w-7 h-7 mx-auto mb-3" style={{ color: primaryColor }} />
                  <div className="text-base font-semibold mb-1">{item.title}</div>
                  <div className="text-sm opacity-50">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
