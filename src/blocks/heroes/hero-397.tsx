"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Recycle, Droplets, Wind, TreePine, Award, ArrowRight } from "lucide-react";

export default function Hero397(props: BlockProps) {
  const {
    theme,
    heading = "Fashion That Cares for the Planet",
    subheading = "B-Corp Certified",
    bodyText = "Every piece is crafted from organic and recycled materials, produced in fair-trade factories, and shipped carbon-neutral. Style without compromise.",
    buttonText = "Shop Sustainably",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "CO2 Offset", value: "842 tons", description: "Total carbon offset to date" },
      { title: "Recycled Materials", value: "94%", description: "Of all materials used" },
      { title: "Water Saved", value: "12M liters", description: "Compared to conventional" },
      { title: "Fair Wage Workers", value: "2,400+", description: "Across 6 countries" },
    ],
  } = props;

  const certifications = [
    { icon: Award, name: "B-Corp Certified" },
    { icon: Leaf, name: "GOTS Organic" },
    { icon: Recycle, name: "Cradle to Cradle" },
    { icon: Wind, name: "Carbon Neutral" },
  ];

  const carbonSaved = 842;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f7f0", color: theme?.foreground ?? "#1a2e1a" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div>
            {/* Certification badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#16a34a"}12`,
                    color: theme?.primary ?? "#16a34a",
                  }}
                >
                  <cert.icon className="h-3.5 w-3.5" />
                  {cert.name}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {heading}
            </h1>
            <p className="text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
              >
                <Leaf className="h-4 w-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 font-semibold transition-opacity hover:opacity-70"
                style={{ borderColor: theme?.primary ?? "#16a34a", color: theme?.primary ?? "#16a34a" }}
              >
                Our Impact Report
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Carbon footprint counter */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}08` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TreePine className="h-6 w-6" style={{ color: theme?.primary ?? "#16a34a" }} />
                <span className="text-sm font-semibold uppercase tracking-wider opacity-60">Live Carbon Tracker</span>
              </div>
              {/* Counter visualization */}
              <div className="flex items-end gap-1 mb-3">
                {String(carbonSaved).split("").map((digit, i) => (
                  <div
                    key={i}
                    className="flex h-14 w-10 items-center justify-center rounded-lg text-2xl font-bold text-white"
                    style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
                  >
                    {digit}
                  </div>
                ))}
                <span className="text-sm font-medium opacity-60 ml-2 pb-2">tons CO2 offset</span>
              </div>
              <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}20` }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: "84%", backgroundColor: theme?.primary ?? "#16a34a" }}
                />
              </div>
              <p className="text-xs opacity-40 mt-2">Goal: 1,000 tons by December 2026</p>
            </div>
          </div>

          {/* Right — Impact stats */}
          <div className="grid grid-cols-2 gap-4">
            {items.map((stat, i) => {
              const icons = [Wind, Recycle, Droplets, Award];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={stat.title}
                  className="rounded-2xl border p-6 transition-shadow hover:shadow-lg"
                  style={{
                    borderColor: `${theme?.primary ?? "#16a34a"}15`,
                    backgroundColor: theme?.muted ?? "#ffffff",
                  }}
                >
                  <Icon className="h-8 w-8 mb-4" style={{ color: theme?.primary ?? "#16a34a" }} />
                  <p className="text-3xl font-bold mb-1" style={{ color: theme?.primary ?? "#16a34a" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold mb-1">{stat.title}</p>
                  <p className="text-xs opacity-50">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
