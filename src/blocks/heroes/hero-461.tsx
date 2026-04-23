"use client";

import type { BlockProps } from "@/blocks/types";
import { TreePine, Sun, Award, Users, Clock, ChevronRight } from "lucide-react";

export default function Hero461(props: BlockProps) {
  const {
    theme,
    heading = "Saddle Up for Adventure",
    subheading = "Trail Rides & Riding Lessons at Sunset Ranch",
    bodyText = "Experience the freedom of horseback riding through scenic trails, guided by expert wranglers. From beginner lessons to advanced cross-country rides, there's a saddle waiting for you.",
    buttonText = "Book a Trail Ride",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Beginner Lessons", description: "Walk & trot basics in our covered arena", icon: "award" },
      { title: "Guided Trail Rides", description: "90-min rides through meadows and forest", icon: "treePine" },
      { title: "Advanced Horsemanship", description: "Cantering, jumping, and ranch skills", icon: "users" },
    ],
  } = props;

  const levels = [
    { name: "Walk & Learn", duration: "45 min", age: "Ages 6+", color: "#8B7355" },
    { name: "Trot & Trail", duration: "90 min", age: "Ages 10+", color: "#6B4F36" },
    { name: "Canter & Country", duration: "2 hrs", age: "Ages 14+", color: "#4A3728" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FAF5EF", color: theme?.foreground ?? "#3E2C1C" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Rustic top border */}
      <div className="h-2 w-full" style={{ backgroundColor: theme?.primary ?? "#8B5E3C" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5" style={{ color: theme?.primary ?? "#8B5E3C" }} />
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: theme?.primary ?? "#8B5E3C" }}
              >
                Sunset Ranch Equestrian
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl opacity-80 mb-3">{subheading}</p>
            <p className="text-base opacity-70 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#8B5E3C" }}
              >
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#8B5E3C", color: theme?.primary ?? "#8B5E3C" }}
              >
                View Schedule
              </a>
            </div>

            {/* Lesson levels */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider opacity-60">Lesson Levels</h3>
              {levels.map((level, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg border"
                  style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#8B5E3C30" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: theme?.primary ?? level.color }}
                    />
                    <span className="font-semibold">{level.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm opacity-70">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {level.duration}
                    </span>
                    <span>{level.age}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image and trail cards */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4]">
              {imageUrl ? (
                <img src={imageUrl} alt="Horseback riding" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#8B5E3C20" }}
                >
                  <TreePine className="w-24 h-24 opacity-30" style={{ color: theme?.primary ?? "#8B5E3C" }} />
                </div>
              )}
            </div>

            {/* Trail rides overlay */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-sm"
              style={{ backgroundColor: theme?.background ? `${theme.background}E6` : "#FAF5EFE6" }}
            >
              <h4 className="font-bold mb-3 text-sm uppercase tracking-wider">Trail Rides</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg text-center"
                    style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#8B5E3C15" }}
                  >
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs opacity-60 mt-0.5">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
