"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Truck, Sun, Droplets, Calendar, Sprout } from "lucide-react";

export default function Hero483(props: BlockProps) {
  const {
    theme,
    heading = "Bring Nature Home",
    subheading = "Rare & Everyday Plants Delivered to Your Door",
    bodyText = "From easy-care succulents to rare tropical specimens, our nursery grows over 500 plant varieties. Expert care guides included with every purchase.",
    buttonText = "Shop Plants",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Beginner Friendly", description: "Low light, low water — perfect starters", icon: "sun", value: "Easy" },
      { title: "Intermediate", description: "Some attention needed, big rewards", icon: "droplets", value: "Medium" },
      { title: "Expert Level", description: "Rare specimens for plant enthusiasts", icon: "leaf", value: "Advanced" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f7ef", color: theme?.foreground ?? "#1a2e1a" }}
      className="relative overflow-hidden"
    >
      {/* Leaf decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3" style={{ backgroundColor: theme?.primary ?? "#2d8a4e" }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3" style={{ backgroundColor: theme?.primary ?? "#2d8a4e" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main content — 3 cols */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: `${theme?.primary ?? "#2d8a4e"}15`, color: theme?.primary ?? "#2d8a4e" }}>
              <Sprout className="w-4 h-4" />
              Green Thumb Nursery — Est. 2014
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#2d8a4e" }}>
              {subheading}
            </p>
            <p className="text-base opacity-75 mb-8 max-w-xl leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#2d8a4e" }}
              >
                <Leaf className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#2d8a4e", color: theme?.primary ?? "#2d8a4e" }}
              >
                <Calendar className="w-4 h-4" />
                Workshops
              </a>
            </div>

            {/* Plant care levels */}
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-50">Shop by Care Level</p>
              {items.map((level, i) => {
                const icons = [Sun, Droplets, Leaf];
                const Icon = icons[i % icons.length];
                const fills = [1, 2, 3];
                return (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: `${theme?.primary ?? "#2d8a4e"}20`, backgroundColor: `${theme?.primary ?? "#2d8a4e"}06` }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: theme?.primary ?? "#2d8a4e" }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm">{level.title}</p>
                      <p className="text-xs opacity-60">{level.description}</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((dot) => (
                        <div
                          key={dot}
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: dot <= fills[i] ? (theme?.primary ?? "#2d8a4e") : `${theme?.primary ?? "#2d8a4e"}25` }}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-64" />
            ) : (
              <div className="w-full h-52 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#2d8a4e"}12` }}>
                <Leaf className="w-16 h-16 opacity-20" style={{ color: theme?.primary ?? "#2d8a4e" }} />
              </div>
            )}

            {/* Delivery info */}
            <div className="rounded-2xl p-5 border" style={{ borderColor: `${theme?.primary ?? "#2d8a4e"}20`, backgroundColor: `${theme?.primary ?? "#2d8a4e"}06` }}>
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-5 h-5" style={{ color: theme?.primary ?? "#2d8a4e" }} />
                <h3 className="font-bold">Plant Delivery</h3>
              </div>
              <p className="text-sm opacity-70 mb-3">Every plant ships in eco-friendly packaging with a moisture-locking wrap to arrive fresh and healthy.</p>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Local pickup", detail: "Free — Same day" },
                  { label: "Standard delivery", detail: "From $8 — 3-5 days" },
                  { label: "Express delivery", detail: "From $15 — Next day" },
                ].map((opt, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="opacity-70">{opt.label}</span>
                    <span className="font-medium" style={{ color: theme?.primary ?? "#2d8a4e" }}>{opt.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming workshop */}
            <div className="rounded-2xl p-5 text-white" style={{ backgroundColor: theme?.primary ?? "#2d8a4e" }}>
              <Calendar className="w-5 h-5 mb-2 opacity-80" />
              <p className="font-bold">Next Workshop</p>
              <p className="text-sm opacity-80 mt-1">Propagation 101 — Saturday, May 10</p>
              <p className="text-xs opacity-60 mt-1">Learn to multiply your plant collection at home. All materials provided.</p>
              <a href="#" className="inline-block mt-3 text-sm font-semibold underline underline-offset-2 opacity-90 hover:opacity-100">
                Reserve a spot →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
