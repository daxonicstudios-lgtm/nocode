"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Clock, Users, Sparkles, Play } from "lucide-react";

export default function Hero335(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Inner Peace",
    subheading = "Yoga & Meditation Studio",
    bodyText = "Slow down, breathe deep, and reconnect with yourself. Our classes blend traditional yoga practices with modern mindfulness techniques for all experience levels.",
    buttonText = "View Class Schedule",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Vinyasa Flow", description: "Mon/Wed/Fri 7:00 AM", icon: "sparkles" },
      { title: "Yin Yoga", description: "Tue/Thu 6:30 PM", icon: "leaf" },
      { title: "Guided Meditation", description: "Daily 12:00 PM", icon: "play" },
      { title: "Community Circle", description: "Saturdays 10:00 AM", icon: "users" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#F0F5F1", color: theme?.foreground ?? "#2D3B2E" }}
      className="relative overflow-hidden"
    >
      {/* Peaceful gradient overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#7CB69D"} 0%, ${theme?.accent ?? "#B8A9D4"} 100%)`,
        }}
      />

      {/* Breathing animation circle */}
      <div className="absolute top-1/2 right-8 md:right-16 -translate-y-1/2 hidden md:block">
        <div className="relative w-64 h-64">
          <div
            className="absolute inset-0 rounded-full opacity-10 animate-pulse"
            style={{ backgroundColor: theme?.primary ?? "#7CB69D", animationDuration: "4s" }}
          />
          <div
            className="absolute inset-6 rounded-full opacity-15 animate-pulse"
            style={{ backgroundColor: theme?.primary ?? "#7CB69D", animationDuration: "4s", animationDelay: "0.5s" }}
          />
          <div
            className="absolute inset-12 rounded-full opacity-20 animate-pulse"
            style={{ backgroundColor: theme?.primary ?? "#7CB69D", animationDuration: "4s", animationDelay: "1s" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium opacity-40 uppercase tracking-widest">Breathe</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-28">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-5 h-5" style={{ color: theme?.primary ?? "#7CB69D" }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: theme?.primary ?? "#7CB69D" }}>
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 tracking-tight">
            {heading}
          </h1>

          <p className="text-base md:text-lg opacity-60 mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#7CB69D" }}
            >
              <Clock className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm border hover:bg-black/5 transition-colors"
              style={{ borderColor: theme?.primary ?? "#7CB69D", color: theme?.primary ?? "#7CB69D" }}
            >
              First Class Free
            </a>
          </div>

          {/* Class schedule preview */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Upcoming Classes</h3>
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#7CB69D15" }}
                >
                  {item.icon === "sparkles" && <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#7CB69D" }} />}
                  {item.icon === "leaf" && <Leaf className="w-5 h-5" style={{ color: theme?.primary ?? "#7CB69D" }} />}
                  {item.icon === "play" && <Play className="w-5 h-5" style={{ color: theme?.primary ?? "#7CB69D" }} />}
                  {item.icon === "users" && <Users className="w-5 h-5" style={{ color: theme?.primary ?? "#7CB69D" }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full shrink-0"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}12` : "#7CB69D12", color: theme?.primary ?? "#7CB69D" }}
                >
                  Join
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
