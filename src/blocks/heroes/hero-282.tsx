"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Droplets, Heart } from "lucide-react";

export default function Hero282(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Inner Peace",
    subheading = "Wellness & Spa",
    bodyText = "Reconnect with yourself through our curated wellness experiences. From rejuvenating spa treatments to mindful meditation sessions, we guide you toward total harmony.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Massage Therapy", icon: "droplets" },
      { title: "Meditation", icon: "leaf" },
      { title: "Holistic Healing", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    droplets: <Droplets className="w-5 h-5" />,
    leaf: <Leaf className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf7f2", color: theme?.foreground ?? "#3d3426" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Flowing shape background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 opacity-[0.06]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill={theme?.primary ?? "#a3856a"} />
        </svg>
        <svg className="absolute -bottom-1/3 -left-1/4 w-2/3 h-2/3 opacity-[0.04]" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="200" fill={theme?.accent ?? "#c4a882"} />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-xs tracking-[0.3em] uppercase mb-6 opacity-60"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {subheading}
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 max-w-md mb-10 leading-relaxed font-light">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#a3856a", fontFamily: "Georgia, serif" }}
            >
              <Leaf className="w-4 h-4" />
              {buttonText}
            </a>

            {/* Service pills */}
            <div className="flex flex-wrap gap-3 mt-12">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm opacity-70"
                  style={{ borderColor: theme?.primary ? `${theme.primary}40` : "rgba(163,133,106,0.25)" }}
                >
                  <span style={{ color: theme?.primary ?? "#a3856a" }}>
                    {iconMap[item.icon ?? "leaf"] ?? <Leaf className="w-5 h-5" />}
                  </span>
                  <span style={{ fontFamily: "Georgia, serif" }}>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image area */}
          <div className="relative">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt=""
                className="w-full rounded-3xl object-cover aspect-[4/5]"
              />
            ) : (
              <div
                className="w-full aspect-[4/5] rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "rgba(163,133,106,0.07)" }}
              >
                <Droplets className="w-24 h-24 opacity-10" style={{ color: theme?.primary ?? "#a3856a" }} />
              </div>
            )}
            {/* Decorative border */}
            <div
              className="absolute inset-4 rounded-3xl border pointer-events-none"
              style={{ borderColor: theme?.primary ? `${theme.primary}20` : "rgba(163,133,106,0.12)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
