"use client";

import type { BlockProps } from "@/blocks/types";
import { Star, Heart, Globe, Rocket, Target, Gem } from "lucide-react";

export default function Hero275(props: BlockProps) {
  const {
    theme,
    heading = "Center Your Vision",
    subheading = "Where great ideas take shape",
    bodyText = "A creative hub for visionaries who dare to think differently. We put your boldest ideas at the center and build outward from there.",
    buttonText = "Explore Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Strategy", icon: "target" },
      { title: "Design", icon: "gem" },
      { title: "Growth", icon: "rocket" },
      { title: "Global", icon: "globe" },
      { title: "Quality", icon: "star" },
      { title: "Passion", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    target: <Target className="h-5 w-5" />,
    gem: <Gem className="h-5 w-5" />,
    rocket: <Rocket className="h-5 w-5" />,
    globe: <Globe className="h-5 w-5" />,
    star: <Star className="h-5 w-5" />,
    heart: <Heart className="h-5 w-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0a09", color: theme?.foreground ?? "#fafaf9" }}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Radial glow background */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Orbiting feature badges - visible on larger screens */}
        <div className="relative mx-auto mb-12 hidden sm:block" style={{ height: "340px", width: "340px" }}>
          {/* Central Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="h-36 w-36 rounded-full border-4 object-cover shadow-2xl"
                style={{ borderColor: theme?.primary ?? "#a855f7" }}
              />
            ) : (
              <div
                className="flex h-36 w-36 items-center justify-center rounded-full shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}, ${theme?.accent ?? "#ec4899"})`,
                }}
              >
                <Gem className="h-12 w-12 text-white" />
              </div>
            )}
          </div>

          {/* Ring */}
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed opacity-20"
            style={{ borderColor: theme?.primary ?? "#a855f7" }}
          />

          {/* Orbiting Items */}
          {items.slice(0, 6).map((item, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 144;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full shadow-lg"
                  style={{
                    backgroundColor: theme?.card ?? "#1c1917",
                    color: theme?.primary ?? "#a855f7",
                    border: `1px solid ${theme?.border ?? "#292524"}`,
                  }}
                >
                  {iconMap[item.icon ?? ""] ?? <Star className="h-5 w-5" />}
                </div>
                <span className="text-[10px] font-semibold opacity-60">{item.title}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile: simple grid of features */}
        <div className="mb-10 grid grid-cols-3 gap-4 sm:hidden">
          {items.slice(0, 6).map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${theme?.primary ?? "#a855f7"}20`,
                  color: theme?.primary ?? "#a855f7",
                }}
              >
                {iconMap[item.icon ?? ""] ?? <Star className="h-4 w-4" />}
              </div>
              <span className="text-xs font-medium opacity-60">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <p
          className="mb-3 text-sm font-bold uppercase tracking-widest"
          style={{ color: theme?.primary ?? "#a855f7" }}
        >
          {subheading}
        </p>
        <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
          {heading}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed opacity-50 sm:text-lg">
          {bodyText}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#a855f7"}, ${theme?.accent ?? "#ec4899"})`,
            }}
          >
            {buttonText}
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full border px-8 py-3.5 text-sm font-semibold opacity-70 transition-opacity hover:opacity-100"
            style={{ borderColor: theme?.border ?? "#292524" }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
