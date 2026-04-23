"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero433(props: BlockProps) {
  const {
    theme,
    heading = "Organic Growth for Modern Teams",
    subheading = "Naturally Intelligent",
    bodyText = "Watch your productivity transform with tools that adapt and evolve organically alongside your workflow.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#06b6d4";
  const accentColor = theme?.accent ?? "#a855f7";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#f8fafc" }}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      <style>{`
        @keyframes hero433-blob1 {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0, 0) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(20px, -30px) scale(1.05); }
          50% { border-radius: 50% 60% 30% 60% / 30% 40% 70% 50%; transform: translate(-10px, 20px) scale(0.95); }
          75% { border-radius: 40% 60% 50% 40% / 60% 50% 40% 60%; transform: translate(15px, 10px) scale(1.02); }
        }
        @keyframes hero433-blob2 {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0) scale(1); }
          33% { border-radius: 70% 30% 50% 50% / 30% 60% 40% 70%; transform: translate(-25px, 15px) scale(1.08); }
          66% { border-radius: 50% 50% 30% 70% / 60% 40% 50% 50%; transform: translate(10px, -20px) scale(0.97); }
        }
        @keyframes hero433-blob3 {
          0%, 100% { border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%; transform: scale(1); }
          50% { border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%; transform: scale(1.1); }
        }
        .hero433-blob1 { animation: hero433-blob1 12s ease-in-out infinite; }
        .hero433-blob2 { animation: hero433-blob2 15s ease-in-out infinite; }
        .hero433-blob3 { animation: hero433-blob3 10s ease-in-out infinite; }
      `}</style>

      {/* Morphing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero433-blob1 absolute top-10 right-10 w-72 h-72 md:w-[500px] md:h-[500px] opacity-30 blur-3xl"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="hero433-blob2 absolute bottom-10 left-10 w-64 h-64 md:w-[400px] md:h-[400px] opacity-25 blur-3xl"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="hero433-blob3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 opacity-20 blur-2xl"
          style={{ backgroundColor: primaryColor }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" style={{ color: primaryColor }} />
          <span className="text-sm font-medium opacity-80">{subheading}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {heading}
        </h1>

        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: primaryColor, boxShadow: `0 0 40px ${primaryColor}50` }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 pt-12 max-w-lg mx-auto">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
            { value: "4.9/5", label: "Rating" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: primaryColor }}>
                {stat.value}
              </div>
              <div className="text-xs opacity-50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
