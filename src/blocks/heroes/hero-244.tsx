"use client";

import type { BlockProps } from "@/blocks/types";
import { HardHat, Wrench, Building2, ShieldCheck } from "lucide-react";

export default function Hero244(props: BlockProps) {
  const {
    theme,
    heading = "Building Tomorrow's Infrastructure",
    subheading = "Industrial-Grade Construction Solutions",
    bodyText = "From ground-breaking to grand opening, our team delivers precision engineering, sustainable materials, and on-time project completion for commercial and residential developments.",
    buttonText = "Request a Quote",
    buttonUrl = "#",
    secondaryButtonText = "View Projects",
    secondaryButtonUrl = "#",
    items = [
      { icon: "shield", title: "Safety First", description: "Zero incident track record across 200+ projects" },
      { icon: "clock", title: "On Schedule", description: "98% of projects completed on time" },
      { icon: "award", title: "Certified", description: "ISO 9001 & 14001 certified operations" },
    ],
  } = props;

  const bgColor = theme?.background ?? "#1c1917";
  const fgColor = theme?.foreground ?? "#fafaf9";
  const primaryColor = theme?.primary ?? "#f59e0b";
  const accentColor = theme?.accent ?? "#ea580c";

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        @keyframes hero244stripes {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
      `}</style>

      {/* Moving diagonal stripes */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${primaryColor},
            ${primaryColor} 2px,
            transparent 2px,
            transparent 30px
          )`,
          backgroundSize: "42px 42px",
          animation: "hero244stripes 3s linear infinite",
        }}
      />

      {/* Accent stripe layer */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${accentColor},
            ${accentColor} 1px,
            transparent 1px,
            transparent 60px
          )`,
          backgroundSize: "85px 85px",
          animation: "hero244stripes 5s linear infinite reverse",
        }}
      />

      {/* Hazard stripe accent bar at top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${primaryColor},
            ${primaryColor} 10px,
            ${bgColor} 10px,
            ${bgColor} 20px
          )`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold tracking-wider uppercase mb-8"
            style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
          >
            <HardHat className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-10 max-w-2xl">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={buttonUrl}
              className="px-8 py-4 rounded-lg font-bold text-base transition-all hover:scale-105 text-center uppercase tracking-wide"
              style={{ backgroundColor: primaryColor, color: bgColor }}
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="px-8 py-4 rounded-lg font-bold text-base border-2 transition-all hover:scale-105 text-center uppercase tracking-wide flex items-center justify-center gap-2"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              <Building2 className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {items.map((item, i) => {
              const icons = [ShieldCheck, Wrench, HardHat];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl border-l-4"
                  style={{
                    backgroundColor: `${fgColor}06`,
                    borderLeftColor: primaryColor,
                  }}
                >
                  <Icon className="w-8 h-8 mb-3" style={{ color: primaryColor }} />
                  <div className="text-lg font-bold mb-1">{item.title}</div>
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
