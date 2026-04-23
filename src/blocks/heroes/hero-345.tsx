"use client";

import type { BlockProps } from "@/blocks/types";
import { Car, Sparkles, MapPin, ArrowRight, Crown, Clock, Droplets } from "lucide-react";

export default function Hero345(props: BlockProps) {
  const {
    theme,
    heading = "A Showroom Shine Every Time",
    subheading = "Premium Car Wash & Detailing",
    bodyText = "Drive in dirty, drive out dazzling. Our express tunnel, hand wash, and full detailing services use eco-friendly products that protect your paint and the planet.",
    buttonText = "Get a Wash",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Express Wash", description: "Quick exterior clean in 5 min", value: "$12" },
      { title: "Premium Wash", description: "Full exterior + interior vacuum", value: "$25" },
      { title: "Ultimate Detail", description: "Complete interior & exterior detail", value: "$89" },
    ],
  } = props;

  const locations = [
    { name: "Downtown", hours: "7 AM – 9 PM" },
    { name: "Westside Mall", hours: "8 AM – 8 PM" },
    { name: "Airport Road", hours: "6 AM – 10 PM" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Glossy gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${theme?.primary ?? "#8b5cf6"}20 50%, transparent 70%)`,
        }}
      />
      {/* Shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme?.primary ?? "#8b5cf6"}, transparent)`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
            style={{
              borderColor: `${theme?.primary ?? "#8b5cf6"}40`,
              color: theme?.primary ?? "#8b5cf6",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 max-w-2xl mx-auto leading-relaxed mb-10">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#8b5cf6", color: "#ffffff" }}
            >
              <Car className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-semibold border transition-colors"
              style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}40`, color: theme?.primary ?? "#8b5cf6" }}
            >
              <Crown className="w-4 h-4" />
              Membership Plans
            </a>
          </div>
        </div>

        {/* Membership plans */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {items.slice(0, 3).map((plan, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 text-center border transition-all hover:scale-[1.03]"
              style={{
                borderColor: i === 2 ? (theme?.primary ?? "#8b5cf6") : `${theme?.primary ?? "#8b5cf6"}20`,
                backgroundColor: i === 2 ? `${theme?.primary ?? "#8b5cf6"}12` : `${theme?.primary ?? "#8b5cf6"}05`,
              }}
            >
              {i === 2 && (
                <div
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3"
                  style={{ backgroundColor: theme?.primary ?? "#8b5cf6", color: "#fff" }}
                >
                  Best Value
                </div>
              )}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Droplets className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              </div>
              <h3 className="font-bold text-lg mb-1">{plan.title}</h3>
              <p className="text-sm opacity-50 mb-4">{plan.description}</p>
              <div
                className="text-3xl font-black"
                style={{ color: theme?.primary ?? "#8b5cf6" }}
              >
                {plan.value}
              </div>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {locations.map((loc, i) => (
            <div key={i} className="flex items-center gap-2 text-sm opacity-50">
              <MapPin className="w-4 h-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              <span className="font-medium">{loc.name}</span>
              <span className="opacity-50">·</span>
              <Clock className="w-3 h-3" />
              <span>{loc.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
