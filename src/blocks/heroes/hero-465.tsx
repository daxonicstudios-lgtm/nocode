"use client";

import type { BlockProps } from "@/blocks/types";
import { Wine, Palette, Calendar, MapPin, Users, Sparkles, ArrowRight } from "lucide-react";

export default function Hero465(props: BlockProps) {
  const {
    theme,
    heading = "Sip, Paint & Create",
    subheading = "The Perfect Social Night Out",
    bodyText = "Grab your favorite wine, pick up a brush, and let our instructors guide you through a masterpiece. No experience needed, just good vibes and creativity.",
    buttonText = "Book a Session",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starry Night Dreams", description: "Friday, May 2", label: "$45/person", value: "7:00 PM" },
      { title: "Sunset Over the Ocean", description: "Saturday, May 3", label: "$45/person", value: "6:30 PM" },
      { title: "Abstract Florals", description: "Friday, May 9", label: "$40/person", value: "7:00 PM" },
      { title: "Couples Portrait Night", description: "Saturday, May 10", label: "$55/pair", value: "7:30 PM" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1E1028", color: theme?.foreground ?? "#F4E8FF" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Decorative paint splashes */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#9B59B6" }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[150px] opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#E74C8B" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[100px] opacity-10"
        style={{ backgroundColor: "#FFD700" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#9B59B620" }}>
            <Wine className="w-4 h-4" style={{ color: theme?.primary ?? "#D4A0FF" }} />
            <span className="text-sm font-medium" style={{ color: theme?.primary ?? "#D4A0FF" }}>
              Palette & Pour Studio
            </span>
            <Palette className="w-4 h-4" style={{ color: theme?.primary ?? "#D4A0FF" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-xl sm:text-2xl opacity-70 mb-3">{subheading}</p>
          <p className="text-base opacity-50 max-w-xl mx-auto mb-8">{bodyText}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#9B59B6"}, ${theme?.accent ?? "#E74C8B"})` }}
            >
              <Sparkles className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border transition-opacity hover:opacity-80"
              style={{ borderColor: theme?.primary ? `${theme.primary}50` : "#9B59B650", color: theme?.primary ?? "#D4A0FF" }}
            >
              Private Events
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10 opacity-60">
            {[
              { icon: Users, text: "BYOB Welcome" },
              { icon: Palette, text: "All Supplies Included" },
              { icon: MapPin, text: "Downtown Studio" },
            ].map((s, i) => (
              <span key={i} className="flex items-center gap-2 text-sm">
                <s.icon className="w-4 h-4" />
                {s.text}
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="max-w-3xl mx-auto">
          <h3 className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-4 opacity-60">
            <Calendar className="w-4 h-4" />
            Upcoming Sessions
          </h3>

          <div className="space-y-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all hover:border-opacity-50"
                style={{
                  borderColor: theme?.primary ? `${theme.primary}25` : "#9B59B625",
                  backgroundColor: theme?.primary ? `${theme.primary}08` : "#9B59B608",
                }}
              >
                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#9B59B620" }}
                  >
                    <Palette className="w-6 h-6" style={{ color: theme?.primary ?? "#D4A0FF" }} />
                  </div>
                  <div>
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm opacity-50">{item.description} at {item.value}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold" style={{ color: theme?.primary ?? "#D4A0FF" }}>
                    {item.label}
                  </span>
                  <a
                    href={buttonUrl}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: theme?.primary ?? "#9B59B6" }}
                  >
                    Book
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
