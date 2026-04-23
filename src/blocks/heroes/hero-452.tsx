"use client";

import type { BlockProps } from "@/blocks/types";
import { Anchor, Fish, Waves, Calendar, Star, Clock } from "lucide-react";

export default function Hero452(props: BlockProps) {
  const {
    theme,
    heading = "Charter Your Perfect Fishing Trip",
    subheading = "Deep Sea & Inshore Fishing Charters",
    bodyText = "Set sail with experienced captains on fully equipped boats. Whether you're chasing marlin offshore or redfish in the shallows, we'll put you on the fish.",
    buttonText = "Book a Charter",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Half-Day Inshore", description: "4 hours", value: "$349", label: "Per boat" },
      { title: "Full-Day Offshore", description: "8 hours", value: "$799", label: "Per boat" },
      { title: "Deep Sea Adventure", description: "10 hours", value: "$1,199", label: "Per boat" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a1628", color: theme?.foreground ?? "#e0ecf7" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path d="M0,100 C320,180 440,20 720,100 C1000,180 1120,20 1440,100 L1440,200 L0,200 Z" fill="currentColor" />
          <path d="M0,140 C360,200 480,60 720,140 C960,220 1080,60 1440,140 L1440,200 L0,200 Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Top bar */}
        <div className="flex flex-wrap items-center gap-6 mb-12 text-sm opacity-70">
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#3b9fd4" }} />
            4.9 rating (230+ trips)
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#3b9fd4" }} />
            Departs daily at 6 AM
          </span>
          <span className="flex items-center gap-2">
            <Anchor className="w-4 h-4" style={{ color: theme?.primary ?? "#3b9fd4" }} />
            Marina Bay Dock 7
          </span>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#3b9fd4"}25`, color: theme?.primary ?? "#3b9fd4" }}
              >
                <Fish className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: theme?.primary ?? "#3b9fd4" }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-75 mb-8 max-w-2xl leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#3b9fd4", color: "#ffffff" }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#3b9fd4", color: theme?.primary ?? "#3b9fd4" }}
              >
                Catch Gallery
              </a>
            </div>

            {/* Catch stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "1,200+", label: "Fish Caught This Season" },
                { num: "98%", label: "Catch Rate" },
                { num: "15", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#3b9fd4" }}>
                    {stat.num}
                  </p>
                  <p className="text-xs sm:text-sm opacity-60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trip packages */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Waves className="w-5 h-5" style={{ color: theme?.primary ?? "#3b9fd4" }} />
              Trip Packages
            </h3>
            {items.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border transition-all hover:scale-[1.02]"
                style={{
                  borderColor: `${theme?.primary ?? "#3b9fd4"}30`,
                  backgroundColor: `${theme?.primary ?? "#3b9fd4"}08`,
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold text-lg">{item.title}</p>
                    <p className="text-sm opacity-60">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#3b9fd4" }}>
                      {item.value}
                    </p>
                    <p className="text-xs opacity-50">{item.label}</p>
                  </div>
                </div>
                <a
                  href={buttonUrl}
                  className="mt-3 block text-center py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: `${theme?.primary ?? "#3b9fd4"}20`, color: theme?.primary ?? "#3b9fd4" }}
                >
                  Reserve Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
