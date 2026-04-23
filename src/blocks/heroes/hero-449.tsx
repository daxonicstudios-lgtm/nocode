"use client";

import type { BlockProps } from "@/blocks/types";
import { Flag, Users, TreePine, Sun, Star, MapPin, ChevronRight } from "lucide-react";

export default function Hero449(props: BlockProps) {
  const {
    theme,
    heading = "Putt Paradise Mini Golf",
    subheading = "18 Holes of Pure Fun",
    bodyText = "Three uniquely themed courses set in beautiful gardens. Perfect for date nights, family outings, and group events. No skill needed — just a sense of adventure!",
    buttonText = "Book a Round",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Jungle Safari", description: "Wind through tropical plants, waterfalls & animal sculptures", label: "18 holes", value: "Popular" },
      { title: "Pirate Cove", description: "Navigate shipwrecks, treasure caves & a cannon water feature", label: "18 holes", value: "Family Fav" },
      { title: "Dino Discovery", description: "Putt past life-sized dinosaurs and volcanic rock formations", label: "18 holes", value: "New" },
    ],
  } = props;

  const courseColors = ["#22c55e", "#3b82f6", "#f59e0b"];
  const courseEmojiBgs = ["#dcfce7", "#dbeafe", "#fef3c7"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#1a3a2a" }}
      className="relative overflow-hidden"
    >
      {/* Decorative hills */}
      <svg className="absolute bottom-0 left-0 w-full h-40 opacity-10" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <ellipse cx="400" cy="160" rx="500" ry="120" fill={theme?.primary ?? "#22c55e"} />
        <ellipse cx="1100" cy="160" rx="400" ry="100" fill={theme?.primary ?? "#22c55e"} opacity="0.5" />
      </svg>

      {/* Small flag decoration */}
      <div className="absolute top-16 right-16 opacity-10">
        <Flag className="w-32 h-32" style={{ color: theme?.primary ?? "#22c55e" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-28">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Flag className="w-6 h-6" style={{ color: theme?.primary ?? "#22c55e" }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#22c55e" }}>
              3 Themed Courses - 54 Holes Total
            </span>
            <TreePine className="w-6 h-6" style={{ color: theme?.primary ?? "#22c55e" }} />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-3">
            {heading}
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: theme?.primary ?? "#22c55e" }}>
            {subheading}
          </p>
          <p className="text-base opacity-60 max-w-lg mx-auto">{bodyText}</p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {items.map((course, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden transition-transform hover:scale-105 hover:-rotate-1"
              style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            >
              <div className="h-32 flex items-center justify-center" style={{ backgroundColor: courseEmojiBgs[i % 3] }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: courseColors[i % 3] }}>
                  {i === 0 && <TreePine className="w-8 h-8 text-white" />}
                  {i === 1 && <Flag className="w-8 h-8 text-white" />}
                  {i === 2 && <Star className="w-8 h-8 text-white" />}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: courseColors[i % 3] }}
                  >
                    {course.value}
                  </span>
                  <span className="text-xs opacity-50">{course.label}</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1a3a2a" }}>{course.title}</h3>
                <p className="text-xs opacity-60" style={{ color: "#1a3a2a" }}>{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing & CTA */}
        <div className="text-center">
          <div
            className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-2xl mb-8 text-sm font-semibold"
            style={{ backgroundColor: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
          >
            <span style={{ color: "#1a3a2a" }}>
              <span className="font-black text-lg" style={{ color: theme?.primary ?? "#22c55e" }}>R80</span> Adults
            </span>
            <span className="w-px h-6 bg-gray-200" />
            <span style={{ color: "#1a3a2a" }}>
              <span className="font-black text-lg" style={{ color: theme?.primary ?? "#22c55e" }}>R55</span> Kids (4-12)
            </span>
            <span className="w-px h-6 bg-gray-200" />
            <span style={{ color: "#1a3a2a" }}>
              <span className="font-black text-lg" style={{ color: theme?.primary ?? "#22c55e" }}>R250</span> Family 4-Pack
            </span>
          </div>

          <div>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white text-lg font-bold shadow-lg transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
            >
              <Flag className="w-5 h-5" />
              {buttonText}
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs opacity-50">
            <span className="flex items-center gap-1"><Sun className="w-3 h-3" /> Open Daily 9AM-9PM</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Walk-ins Welcome</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Group rates for 10+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
