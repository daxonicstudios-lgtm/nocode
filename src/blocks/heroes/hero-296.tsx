"use client";

import type { BlockProps } from "@/blocks/types";
import { Calendar, Scissors, Sparkles, Heart, ArrowRight } from "lucide-react";

export default function Hero296(props: BlockProps) {
  const {
    theme,
    heading = "Where Beauty Meets Serenity",
    subheading = "Premium Beauty Studio",
    bodyText = "Indulge in a luxurious experience crafted just for you. Our expert stylists and aestheticians bring out your natural radiance with personalized treatments.",
    buttonText = "Book Your Appointment",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hair Styling", description: "Cut, color & blowout", label: "From $85", icon: "scissors" },
      { title: "Facial Treatments", description: "Hydra, chemical peels & more", label: "From $120", icon: "sparkles" },
      { title: "Nail Artistry", description: "Manicure, pedicure & gel", label: "From $55", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, typeof Scissors> = {
    scissors: Scissors,
    sparkles: Sparkles,
    heart: Heart,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf6f0", color: theme?.foreground ?? "#3d2b1f" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top hero */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ backgroundColor: theme?.primary ?? "#c97f7f" }} />
            <span
              className="text-[11px] uppercase tracking-[0.3em] font-medium"
              style={{ color: theme?.primary ?? "#c97f7f" }}
            >
              {subheading}
            </span>
            <div className="h-px w-8" style={{ backgroundColor: theme?.primary ?? "#c97f7f" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.15] mb-6 tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            {heading}
          </h1>

          <p className="text-sm sm:text-base opacity-60 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            {bodyText}
          </p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#c97f7f",
              color: "#ffffff",
            }}
          >
            <Calendar className="w-4 h-4" />
            {buttonText}
          </a>
        </div>

        {/* Image */}
        {imageUrl && (
          <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16">
            <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        {/* Service highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => {
            const IconComp = iconMap[item.icon ?? "sparkles"] ?? Sparkles;
            return (
              <div
                key={i}
                className="rounded-2xl p-8 text-center border transition-shadow hover:shadow-lg group cursor-pointer"
                style={{
                  borderColor: `${theme?.primary ?? "#c97f7f"}20`,
                  backgroundColor: `${theme?.primary ?? "#c97f7f"}05`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${theme?.primary ?? "#c97f7f"}15` }}
                >
                  <IconComp className="w-6 h-6" style={{ color: theme?.primary ?? "#c97f7f" }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 font-light mb-4">{item.description}</p>
                <span
                  className="text-sm font-semibold"
                  style={{ color: theme?.primary ?? "#c97f7f" }}
                >
                  {item.label}
                </span>
                <div className="mt-4 flex items-center justify-center gap-1 text-xs opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ color: theme?.primary ?? "#c97f7f" }}
                >
                  <span>Book now</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
