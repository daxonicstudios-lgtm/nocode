"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowRight } from "lucide-react";

export default function Hero432(props: BlockProps) {
  const {
    theme,
    heading = "Build With Depth and Dimension",
    subheading = "Multi-Layer Architecture",
    bodyText = "Our platform provides layered solutions that work together seamlessly, creating an experience with real depth and substance.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#8b5cf6";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f1a", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <style>{`
        @keyframes hero432-layer1 { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.02); } }
        @keyframes hero432-layer2 { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-12px) scale(1.01); } }
        @keyframes hero432-layer3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .hero432-l1 { animation: hero432-layer1 8s ease-in-out infinite; }
        .hero432-l2 { animation: hero432-layer2 8s ease-in-out 0.5s infinite; }
        .hero432-l3 { animation: hero432-layer3 8s ease-in-out 1s infinite; }
      `}</style>

      {/* Background parallax layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero432-l1 absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="hero432-l2 absolute top-20 -right-20 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
        />
        <div
          className="hero432-l3 absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      {/* Stacked depth cards in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end pr-12 gap-0">
        {[0.05, 0.1, 0.15].map((opacity, i) => (
          <div
            key={i}
            className={`hero432-l${i + 1} w-72 h-48 rounded-2xl border`}
            style={{
              backgroundColor: `${primaryColor}${Math.round(opacity * 255).toString(16).padStart(2, "0")}`,
              borderColor: `${primaryColor}30`,
              marginTop: i === 0 ? 0 : "-140px",
              marginRight: `${i * 30}px`,
              zIndex: 3 - i,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 py-20">
        <div className="max-w-2xl space-y-8">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
            >
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase opacity-70">
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
            {heading}
          </h1>

          <p className="text-lg md:text-xl opacity-60 max-w-xl leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: primaryColor, boxShadow: `0 8px 30px ${primaryColor}40` }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Depth meter visual */}
          <div className="flex items-end gap-2 pt-4">
            {[40, 60, 80, 100, 80, 60, 40].map((h, i) => (
              <div
                key={i}
                className="w-2 rounded-full transition-all"
                style={{
                  height: `${h}%`,
                  minHeight: `${h * 0.4}px`,
                  backgroundColor: `${primaryColor}${Math.round((0.3 + i * 0.1) * 255).toString(16).padStart(2, "0")}`,
                }}
              />
            ))}
            <span className="text-xs opacity-40 ml-3">Multi-layer depth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
