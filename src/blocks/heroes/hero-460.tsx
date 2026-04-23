"use client";

import type { BlockProps } from "@/blocks/types";
import { Mountain, Shield, Award, ArrowUp, Wrench, ChevronRight } from "lucide-react";

export default function Hero460(props: BlockProps) {
  const {
    theme,
    heading = "Conquer the Wall",
    subheading = "Summit Rock Climbing Gym & Outdoor Guides",
    bodyText = "Indoor bouldering, top-rope walls up to 55 feet, and guided outdoor rock climbing excursions. All skill levels welcome, from first-timers to competition climbers.",
    buttonText = "Start Climbing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "V0 - V2", description: "Beginner bouldering", value: "Green", label: "Intro" },
      { title: "V3 - V5", description: "Intermediate problems", value: "Blue", label: "Moderate" },
      { title: "V6 - V8", description: "Advanced techniques", value: "Red", label: "Hard" },
      { title: "V9+", description: "Elite-level sends", value: "Black", label: "Expert" },
    ],
  } = props;

  const gradeColors: Record<string, string> = {
    Green: "#22c55e",
    Blue: "#3b82f6",
    Red: "#ef4444",
    Black: "#a3a3a3",
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a1a1a", color: theme?.foreground ?? "#e5e5e5" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Vertical lines (climbing wall feel) */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${15 + i * 14}%`,
              backgroundColor: "currentColor",
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${10 + i * 9}%`,
              backgroundColor: "currentColor",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-8 h-8" style={{ color: theme?.primary ?? "#f97316" }} />
              <p className="text-sm font-bold tracking-widest uppercase" style={{ color: theme?.primary ?? "#f97316" }}>
                {subheading}
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-65 mb-10 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f97316", color: "#ffffff" }}
              >
                <ArrowUp className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#gear"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#f97316", color: theme?.primary ?? "#f97316" }}
              >
                <Wrench className="w-5 h-5 mr-2" />
                Gear Rental
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 text-sm opacity-60">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" style={{ color: theme?.primary ?? "#f97316" }} />
                Certified Instructors
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" style={{ color: theme?.primary ?? "#f97316" }} />
                USA Climbing Affiliated
              </span>
            </div>
          </div>

          {/* Route difficulty grades */}
          <div>
            <h3 className="text-lg font-bold mb-6">Route Difficulty Grades</h3>
            <div className="space-y-3">
              {items.slice(0, 4).map((item, i) => {
                const color = gradeColors[item.value ?? "Green"] ?? "#22c55e";
                const widthPercents = ["30%", "55%", "80%", "100%"];
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl border transition-all hover:scale-[1.01]"
                    style={{
                      borderColor: `${color}30`,
                      backgroundColor: `${color}08`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <span
                          className="px-2 py-0.5 rounded text-xs font-bold"
                          style={{ backgroundColor: `${color}20`, color }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-40" />
                    </div>
                    <p className="text-sm opacity-55 mb-3 pl-6">{item.description}</p>
                    {/* Difficulty bar */}
                    <div className="h-1.5 rounded-full overflow-hidden ml-6" style={{ backgroundColor: `${color}15` }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: widthPercents[i], backgroundColor: color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Gear rental pricing */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Day Pass", price: "$22" },
                { label: "Gear Rental", price: "$12" },
                { label: "Monthly", price: "$79" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${theme?.primary ?? "#f97316"}10` }}
                >
                  <p className="text-xl font-black" style={{ color: theme?.primary ?? "#f97316" }}>
                    {p.price}
                  </p>
                  <p className="text-xs opacity-55">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
