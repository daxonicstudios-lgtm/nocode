"use client";

import type { BlockProps } from "@/blocks/types";
import { Palette, Clock, Calendar, Star, ArrowRight } from "lucide-react";

export default function Hero463(props: BlockProps) {
  const {
    theme,
    heading = "Shape Something Beautiful",
    subheading = "Pottery & Ceramics Studio",
    bodyText = "Get your hands in clay and discover the meditative art of pottery. Our open studio and guided classes welcome beginners and seasoned potters alike.",
    buttonText = "View Class Schedule",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hand Building", description: "Coil, slab, and pinch techniques", label: "Beginner" },
      { title: "Wheel Throwing", description: "Learn to center and pull on the wheel", label: "All Levels" },
      { title: "Glazing Workshop", description: "Surface decoration and firing", label: "Intermediate" },
      { title: "Raku Firing", description: "Dramatic outdoor firing process", label: "Advanced" },
    ],
  } = props;

  const schedule = [
    { day: "Tuesday", time: "6:00 - 8:30 PM", cls: "Wheel Throwing" },
    { day: "Thursday", time: "6:00 - 8:30 PM", cls: "Hand Building" },
    { day: "Saturday", time: "10:00 AM - 1:00 PM", cls: "Open Studio" },
    { day: "Sunday", time: "2:00 - 5:00 PM", cls: "Glazing & Firing" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#F5EDE4", color: theme?.foreground ?? "#4A3C2E" }}
      className="min-h-screen relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Header area with organic shape */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme?.primary ?? "#B07D56" }}
            >
              <Palette className="w-4 h-4 text-white" />
            </div>
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: theme?.primary ?? "#B07D56" }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-8">{bodyText}</p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#B07D56" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gallery / Image area */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              {imageUrl ? (
                <img src={imageUrl} alt="Pottery studio" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-4"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#B07D5615" }}
                >
                  <div className="w-20 h-20 rounded-full border-4 border-dashed flex items-center justify-center" style={{ borderColor: theme?.primary ?? "#B07D56" }}>
                    <Palette className="w-10 h-10" style={{ color: theme?.primary ?? "#B07D56" }} />
                  </div>
                  <p className="text-sm font-medium opacity-50">Studio Gallery</p>
                </div>
              )}
            </div>
          </div>

          {/* Classes */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#B07D56" }} />
              Our Classes
            </h3>
            {items.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl border transition-shadow hover:shadow-md"
                style={{
                  borderColor: theme?.primary ? `${theme.primary}20` : "#B07D5620",
                  backgroundColor: theme?.background ?? "#F5EDE4",
                }}
              >
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold">{item.title}</h4>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: theme?.primary ? `${theme.primary}20` : "#B07D5620",
                      color: theme?.primary ?? "#B07D56",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Schedule */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#B07D5610" }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: theme?.primary ?? "#B07D56" }} />
                Weekly Schedule
              </h3>
              <div className="space-y-3">
                {schedule.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/50"
                  >
                    <div>
                      <p className="font-semibold text-sm">{s.day}</p>
                      <p className="text-xs opacity-60 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {s.time}
                      </p>
                    </div>
                    <span
                      className="text-sm font-medium"
                      style={{ color: theme?.primary ?? "#B07D56" }}
                    >
                      {s.cls}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#B07D5620" }}>
                <p className="text-sm opacity-70 text-center">
                  6-week sessions start monthly. Drop-in classes available Saturday mornings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
