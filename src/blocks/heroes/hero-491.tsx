"use client";

import type { BlockProps } from "@/blocks/types";
import { Watch, Diamond, Shield, Award, ChevronRight } from "lucide-react";

export default function Hero491(props: BlockProps) {
  const {
    theme,
    heading = "Precision Crafted for the Discerning Collector",
    subheading = "Maison Horlogerie",
    bodyText = "Each timepiece is a testament to centuries of watchmaking tradition, merging hand-finished movements with contemporary design language.",
    buttonText = "Explore the Collection",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Swiss Movement", description: "Calibre MH-4200 automatic", icon: "watch" },
      { title: "Sapphire Crystal", description: "Anti-reflective double coating", icon: "diamond" },
      { title: "5 Year Warranty", description: "Complimentary worldwide service", icon: "shield" },
      { title: "Limited Edition", description: "Only 250 pieces worldwide", icon: "award" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    watch: <Watch className="w-5 h-5" />,
    diamond: <Diamond className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    award: <Award className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#f5f0e8" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Subtle gold line accent */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-30"
        style={{ backgroundColor: theme?.primary ?? "#c9a96e" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            <p
              className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 font-light"
              style={{ color: theme?.primary ?? "#c9a96e" }}
            >
              {subheading}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-70 mb-10 max-w-lg">
              {bodyText}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-sm p-4 hover:border-white/20 transition-colors"
                >
                  <div className="mb-2" style={{ color: theme?.primary ?? "#c9a96e" }}>
                    {iconMap[item.icon ?? "watch"]}
                  </div>
                  <p className="text-sm font-medium mb-1">{item.title}</p>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm tracking-widest uppercase font-light border transition-all duration-300 hover:gap-4"
              style={{
                borderColor: theme?.primary ?? "#c9a96e",
                color: theme?.primary ?? "#c9a96e",
              }}
            >
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — Image / Watch showcase */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border opacity-20"
                style={{ borderColor: theme?.primary ?? "#c9a96e" }}
              />
              <div
                className="absolute inset-4 rounded-full border opacity-10"
                style={{ borderColor: theme?.primary ?? "#c9a96e" }}
              />
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={heading}
                  className="absolute inset-8 rounded-full object-cover"
                />
              ) : (
                <div className="absolute inset-8 rounded-full flex items-center justify-center">
                  <Watch
                    className="w-24 h-24 sm:w-32 sm:h-32 opacity-30"
                    style={{ color: theme?.primary ?? "#c9a96e" }}
                  />
                </div>
              )}
              {/* Decorative tick marks */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-3 opacity-20"
                  style={{
                    backgroundColor: theme?.primary ?? "#c9a96e",
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${i * 30}deg) translateY(-${144}px)`,
                    transformOrigin: "0 0",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px opacity-30"
        style={{ backgroundColor: theme?.primary ?? "#c9a96e" }}
      />
    </section>
  );
}
