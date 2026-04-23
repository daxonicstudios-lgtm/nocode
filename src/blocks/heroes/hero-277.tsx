"use client";

import type { BlockProps } from "@/blocks/types";
import { Mountain, ChevronDown } from "lucide-react";

export default function Hero277(props: BlockProps) {
  const {
    theme,
    heading = "Discover the Extraordinary",
    subheading = "Adventure Awaits Beyond the Horizon",
    bodyText = "Immerse yourself in experiences that push boundaries. From towering peaks to hidden valleys, every journey tells a story worth sharing.",
    buttonText = "Begin Your Journey",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
    >
      {/* Parallax-style layered backgrounds */}

      {/* Layer 1: Deepest - large gradient orb */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${theme?.primary ?? "#3b82f6"}40, transparent)`,
        }}
      />

      {/* Layer 2: Mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "300px" }}
        >
          <path
            d="M0 400L120 350L240 380L360 300L480 340L600 250L720 310L840 200L960 280L1080 220L1200 270L1320 190L1440 250L1440 400Z"
            fill={theme?.primary ?? "#3b82f6"}
            fillOpacity="0.15"
          />
          <path
            d="M0 400L100 370L200 390L350 320L500 360L650 280L800 330L950 240L1100 300L1250 250L1350 290L1440 230L1440 400Z"
            fill={theme?.primary ?? "#3b82f6"}
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Layer 3: Stars / dots */}
      <div className="absolute inset-0">
        {[
          { top: "10%", left: "15%", size: 2 },
          { top: "20%", left: "80%", size: 3 },
          { top: "35%", left: "60%", size: 2 },
          { top: "15%", left: "45%", size: 1.5 },
          { top: "45%", left: "25%", size: 2 },
          { top: "8%", left: "70%", size: 1.5 },
          { top: "30%", left: "90%", size: 2 },
          { top: "50%", left: "10%", size: 1.5 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: dot.top,
              left: dot.left,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Layer 4: Foreground horizontal bands */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: `linear-gradient(to top, ${theme?.background ?? "#0f172a"}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Mountain className="h-4 w-4" style={{ color: theme?.primary ?? "#3b82f6" }} />
          <span className="text-xs font-medium opacity-70">Parallax Experience</span>
        </div>

        <h1 className="mb-3 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <p
          className="mb-4 text-lg font-medium sm:text-xl"
          style={{ color: theme?.primary ?? "#3b82f6" }}
        >
          {subheading}
        </p>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed opacity-50">
          {bodyText}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="rounded-full px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#3b82f6",
              boxShadow: `0 20px 40px ${theme?.primary ?? "#3b82f6"}40`,
            }}
          >
            {buttonText}
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition-colors hover:bg-white/5"
          >
            Watch Film
          </a>
        </div>

        {/* Depth indicator bars */}
        <div className="mt-16 flex items-end gap-1">
          {[20, 35, 50, 70, 50, 35, 20].map((h, i) => (
            <div
              key={i}
              className="w-1 rounded-full"
              style={{
                height: `${h}px`,
                backgroundColor: theme?.primary ?? "#3b82f6",
                opacity: 0.3 + (h / 100),
              }}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 opacity-40" />
        </div>
      </div>
    </section>
  );
}
