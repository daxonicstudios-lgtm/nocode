"use client";

import type { BlockProps } from "@/blocks/types";
import { Sun, Leaf, ArrowRight, Zap, TrendingDown, Home, Battery } from "lucide-react";

export default function Hero348(props: BlockProps) {
  const {
    theme,
    heading = "Power Your Home with Sunshine",
    subheading = "Residential Solar Energy",
    bodyText = "Slash your electricity bill by up to 80% with our premium solar panel systems. Professional installation, 25-year warranty, and financing options that make going green affordable.",
    buttonText = "Get Free Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "12,000+", description: "Homes Powered" },
      { title: "40M lbs", description: "CO₂ Offset" },
      { title: "80%", description: "Avg Bill Reduction" },
      { title: "25 yrs", description: "Panel Warranty" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbeb", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Sun rays */}
      <div
        className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15"
        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
      />
      <div
        className="absolute -top-20 right-20 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
        style={{ backgroundColor: "#fbbf24" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15`, color: theme?.primary ?? "#f59e0b" }}
            >
              <Sun className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Savings calculator hint */}
            <div
              className="p-5 rounded-2xl mb-8 border"
              style={{
                borderColor: `${theme?.primary ?? "#f59e0b"}20`,
                backgroundColor: `${theme?.primary ?? "#f59e0b"}06`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <TrendingDown className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  Estimated Monthly Savings
                </div>
                <Home className="w-4 h-4 opacity-30" />
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black" style={{ color: theme?.primary ?? "#f59e0b" }}>$187</span>
                <span className="text-sm opacity-40 mb-1">/month average</span>
              </div>
              <div className="w-full h-2 rounded-full mt-4 overflow-hidden" style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15` }}>
                <div className="h-full rounded-full w-4/5" style={{ backgroundColor: theme?.primary ?? "#f59e0b" }} />
              </div>
              <div className="flex justify-between text-[10px] mt-1 opacity-40">
                <span>Your current bill: $230</span>
                <span>With solar: $43</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold border"
                style={{ borderColor: theme?.primary ?? "#f59e0b", color: theme?.primary ?? "#f59e0b" }}
              >
                <Battery className="w-4 h-4" />
                Calculate Savings
              </a>
            </div>
          </div>

          {/* Right — Eco stats */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Solar panels on roof" className="w-full h-56 object-cover" />
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {items.slice(0, 4).map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl text-center border"
                  style={{
                    borderColor: `${theme?.primary ?? "#f59e0b"}12`,
                    backgroundColor: `${theme?.primary ?? "#f59e0b"}05`,
                  }}
                >
                  <div className="flex justify-center mb-3">
                    {i % 2 === 0
                      ? <Zap className="w-6 h-6" style={{ color: theme?.primary ?? "#f59e0b" }} />
                      : <Leaf className="w-6 h-6" style={{ color: theme?.primary ?? "#f59e0b" }} />
                    }
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme?.primary ?? "#f59e0b" }}>
                    {stat.title}
                  </div>
                  <div className="text-xs opacity-50">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs opacity-40">
                Federal Tax Credit: <span className="font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>30% ITC</span> available through 2032
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
