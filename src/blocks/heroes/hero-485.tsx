"use client";

import type { BlockProps } from "@/blocks/types";
import { Gift, Heart, Clock, Pen, Package, Sparkles } from "lucide-react";

export default function Hero485(props: BlockProps) {
  const {
    theme,
    heading = "Gifts That Mean More",
    subheading = "Custom-Made & Personalized for Every Occasion",
    bodyText = "From engraved jewelry to custom portraits, we turn your ideas into unforgettable keepsakes. Each piece is handcrafted with care and shipped in premium gift packaging.",
    buttonText = "Start Personalizing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Birthdays", description: "Personalized birthstone jewelry, name art", icon: "gift" },
      { title: "Weddings", description: "Couple portraits, vow books, keepsake boxes", icon: "heart" },
      { title: "Corporate", description: "Branded gifts, awards, team milestones", icon: "sparkles" },
    ],
  } = props;

  const turnarounds = [
    { speed: "Standard", days: "7-10 days", price: "Included" },
    { speed: "Rush", days: "3-5 days", price: "+ $15" },
    { speed: "Express", days: "1-2 days", price: "+ $35" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf6f0", color: theme?.foreground ?? "#2c1810" }}
      className="relative overflow-hidden"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.05]" style={{ background: `radial-gradient(circle at top right, ${theme?.primary ?? "#d4577a"}, transparent 70%)` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        {/* Centered header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: `${theme?.primary ?? "#d4577a"}12`, color: theme?.primary ?? "#d4577a" }}>
            <Pen className="w-4 h-4" />
            Preview your personalization before ordering
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#d4577a" }}>
            {subheading}
          </p>
          <p className="text-base opacity-70 leading-relaxed mb-8">{bodyText}</p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#d4577a" }}
            >
              <Sparkles className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-colors hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#d4577a", color: theme?.primary ?? "#d4577a" }}
            >
              <Gift className="w-4 h-4" />
              Gift Cards
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Occasion cards */}
          {items.map((occasion, i) => {
            const icons = [Gift, Heart, Sparkles];
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="relative rounded-2xl p-6 border cursor-pointer group transition-shadow hover:shadow-lg"
                style={{ borderColor: `${theme?.primary ?? "#d4577a"}15`, backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme?.primary ?? "#d4577a"}12` }}>
                  <Icon className="w-6 h-6" style={{ color: theme?.primary ?? "#d4577a" }} />
                </div>
                <h3 className="font-bold text-lg mb-1">{occasion.title}</h3>
                <p className="text-sm opacity-60">{occasion.description}</p>
                <div className="mt-4 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: theme?.primary ?? "#d4577a" }}>
                  Browse ideas <Sparkles className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnaround time bar */}
        <div className="rounded-2xl p-6 border" style={{ borderColor: `${theme?.primary ?? "#d4577a"}15`, backgroundColor: "rgba(255,255,255,0.5)" }}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5" style={{ color: theme?.primary ?? "#d4577a" }} />
            <h3 className="font-bold">Turnaround Time</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {turnarounds.map((t, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: i === 0 ? `${theme?.primary ?? "#d4577a"}08` : "transparent" }}>
                <Package className="w-5 h-5 flex-shrink-0 opacity-50" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{t.speed}</p>
                  <p className="text-xs opacity-60">{t.days}</p>
                </div>
                <span className="text-sm font-medium" style={{ color: i === 0 ? (theme?.primary ?? "#d4577a") : undefined, opacity: i === 0 ? 1 : 0.6 }}>
                  {t.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
