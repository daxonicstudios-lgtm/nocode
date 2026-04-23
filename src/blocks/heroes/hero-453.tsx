"use client";

import type { BlockProps } from "@/blocks/types";
import { Mountain, Snowflake, Thermometer, Wind, Ticket, ArrowRight } from "lucide-react";

export default function Hero453(props: BlockProps) {
  const {
    theme,
    heading = "Powder Days Are Calling",
    subheading = "Alpine Ridge Ski Resort",
    bodyText = "Experience world-class skiing across 120 trails, 14 lifts, and 3,200 acres of skiable terrain. Fresh powder, stunning views, and runs for every skill level.",
    buttonText = "Get Lift Passes",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Beginner", description: "22 Green Runs", value: "Open", icon: "green" },
      { title: "Intermediate", description: "48 Blue Runs", value: "Open", icon: "blue" },
      { title: "Advanced", description: "35 Black Runs", value: "Open", icon: "black" },
      { title: "Expert", description: "15 Double Black", value: "Groomed", icon: "expert" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f1b2d", color: theme?.foreground ?? "#e4edf8" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Mountain peak visual */}
      <div className="absolute top-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 400" className="w-full">
          <polygon points="0,400 200,80 350,200 500,40 650,180 800,60 950,220 1100,30 1250,160 1440,400" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Conditions bar */}
        <div
          className="inline-flex flex-wrap items-center gap-4 sm:gap-8 px-6 py-3 rounded-full mb-12 text-sm"
          style={{ backgroundColor: `${theme?.primary ?? "#4da8da"}15` }}
        >
          <span className="flex items-center gap-2">
            <Snowflake className="w-4 h-4" style={{ color: theme?.primary ?? "#4da8da" }} />
            <span>24&quot; Fresh Snow</span>
          </span>
          <span className="flex items-center gap-2">
            <Thermometer className="w-4 h-4" style={{ color: theme?.primary ?? "#4da8da" }} />
            <span>28&deg;F / -2&deg;C</span>
          </span>
          <span className="flex items-center gap-2">
            <Wind className="w-4 h-4" style={{ color: theme?.primary ?? "#4da8da" }} />
            <span>5 mph NW</span>
          </span>
          <span className="flex items-center gap-2 font-semibold" style={{ color: theme?.primary ?? "#4da8da" }}>
            All Lifts Open
          </span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: theme?.primary ?? "#4da8da" }}>
            {subheading}
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-6">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl opacity-70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#4da8da", color: "#ffffff" }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              {buttonText}
            </a>
            <a
              href="#trails"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg font-bold text-lg border-2 transition-colors hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#4da8da", color: theme?.primary ?? "#4da8da" }}
            >
              Trail Map
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

        {/* Slope conditions */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((item, i) => {
            const difficultyColors = ["#4ade80", "#3b82f6", "#1f2937", "#ef4444"];
            const dotColor = difficultyColors[i] ?? "#4ade80";
            return (
              <div
                key={i}
                className="p-5 rounded-xl border text-center"
                style={{
                  borderColor: `${theme?.primary ?? "#4da8da"}20`,
                  backgroundColor: `${theme?.primary ?? "#4da8da"}08`,
                }}
              >
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-3"
                  style={{ backgroundColor: dotColor }}
                />
                <p className="font-bold text-lg">{item.title}</p>
                <p className="text-sm opacity-60 mb-2">{item.description}</p>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${theme?.primary ?? "#4da8da"}20`, color: theme?.primary ?? "#4da8da" }}
                >
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* Lift pass pricing */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "Adult Day Pass", price: "$129" },
            { label: "Youth Day Pass", price: "$89" },
            { label: "Season Pass", price: "$899" },
          ].map((pass, i) => (
            <div key={i}>
              <p className="text-3xl font-bold" style={{ color: theme?.primary ?? "#4da8da" }}>
                {pass.price}
              </p>
              <p className="text-sm opacity-60">{pass.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
