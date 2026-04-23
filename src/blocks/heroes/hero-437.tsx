"use client";

import type { BlockProps } from "@/blocks/types";
import { Cpu, Zap } from "lucide-react";

export default function Hero437(props: BlockProps) {
  const {
    theme,
    heading = "Break the Mold",
    subheading = "Disruptive Technology",
    bodyText = "Push boundaries with technology that challenges conventions. Our platform is built for rebels, innovators, and those who refuse to settle.",
    buttonText = "Join the Revolution",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#ef4444";
  const accentColor = theme?.accent ?? "#06b6d4";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#000000", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      <style>{`
        @keyframes hero437-glitch {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
          5% { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 2px); }
          10% { clip-path: inset(50% 0 20% 0); transform: translate(4px, -1px); }
          15% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 3px); }
          20% { clip-path: inset(80% 0 5% 0); transform: translate(3px, -2px); }
          25% { clip-path: inset(0 0 0 0); transform: translate(0); }
        }
        @keyframes hero437-glitch-color {
          0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0; }
          5% { clip-path: inset(30% 0 40% 0); transform: translate(6px, -1px); opacity: 0.7; }
          10% { clip-path: inset(60% 0 10% 0); transform: translate(-6px, 2px); opacity: 0.7; }
          15% { clip-path: inset(0 0 0 0); transform: translate(0); opacity: 0; }
        }
        @keyframes hero437-scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .hero437-glitch { animation: hero437-glitch 4s ease-in-out infinite; }
        .hero437-glitch-r {
          animation: hero437-glitch-color 4s ease-in-out infinite;
          color: ${primaryColor};
        }
        .hero437-glitch-b {
          animation: hero437-glitch-color 4s ease-in-out 0.1s infinite;
          color: ${accentColor};
        }
        .hero437-scanline {
          animation: hero437-scan 3s linear infinite;
        }
      `}</style>

      {/* Scan line */}
      <div
        className="hero437-scanline absolute left-0 right-0 h-px opacity-30 z-20 pointer-events-none"
        style={{ backgroundColor: primaryColor, boxShadow: `0 0 20px ${primaryColor}` }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="space-y-10">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5" style={{ color: primaryColor }} />
            <span
              className="text-xs font-mono tracking-[0.3em] uppercase"
              style={{ color: primaryColor }}
            >
              {subheading}
            </span>
          </div>

          {/* Glitched heading */}
          <div className="relative">
            <h1 className="hero437-glitch text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
              {heading}
            </h1>
            <h1
              className="hero437-glitch-r absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight pointer-events-none"
              aria-hidden="true"
            >
              {heading}
            </h1>
            <h1
              className="hero437-glitch-b absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight pointer-events-none"
              aria-hidden="true"
            >
              {heading}
            </h1>
          </div>

          <p className="text-lg opacity-50 max-w-xl leading-relaxed font-mono">{bodyText}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 font-mono font-bold text-white transition-all hover:scale-105 border"
              style={{
                borderColor: primaryColor,
                backgroundColor: `${primaryColor}20`,
                boxShadow: `0 0 20px ${primaryColor}30`,
              }}
            >
              <Zap className="w-4 h-4" />
              {buttonText}
            </a>
          </div>

          {/* Decorative lines */}
          <div className="flex gap-1 pt-6">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-8"
                style={{
                  width: `${Math.max(2, (i * 7 + 3) % 12)}px`,
                  backgroundColor: i % 4 === 0 ? primaryColor : `${theme?.foreground ?? "#ffffff"}15`,
                  opacity: 0.3 + (i % 5) * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
