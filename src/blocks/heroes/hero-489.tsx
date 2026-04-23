"use client";

import type { BlockProps } from "@/blocks/types";
import { Zap, Flame, Ruler, Clock, TrendingUp, Star } from "lucide-react";

export default function Hero489(props: BlockProps) {
  const {
    theme,
    heading = "Step Into the Culture",
    subheading = "Limited Drops, Grails & Everyday Heat",
    bodyText = "From exclusive collabs to classic silhouettes — we carry the freshest sneakers with guaranteed authenticity. Every pair verified before it ships.",
    buttonText = "Shop New Drops",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Air Max Revival", description: "Retro runner, cloud cushion", value: "$185", label: "Just Dropped" },
      { title: "Dunk Low Coastal", description: "Sail / Ocean Blue colorway", value: "$140", label: "Trending" },
      { title: "Yeezy Foam RNR", description: "Sand tone, slip-on comfort", value: "$220", label: "Limited" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="relative overflow-hidden"
    >
      {/* Gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: theme?.primary ?? "#e535ab" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-5" style={{ backgroundColor: theme?.primary ?? "#e535ab" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left — 7 cols */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border" style={{ borderColor: `${theme?.primary ?? "#e535ab"}50`, color: theme?.primary ?? "#e535ab" }}>
              <Zap className="w-3 h-3" />
              Authenticated Sneakers
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-4 uppercase">
              {heading}
            </h1>
            <p className="text-xl sm:text-2xl font-bold mb-3" style={{ color: theme?.primary ?? "#e535ab" }}>
              {subheading}
            </p>
            <p className="text-base opacity-60 mb-8 max-w-xl">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white uppercase tracking-wider text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#e535ab" }}
              >
                <Flame className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-sm border transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#e535ab", color: theme?.primary ?? "#e535ab" }}
              >
                <Ruler className="w-5 h-5" />
                Size Finder
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              {[
                { num: "100%", label: "Verified Authentic" },
                { num: "2,400+", label: "Styles Available" },
                { num: "24h", label: "Fast Shipping" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-black" style={{ color: theme?.primary ?? "#e535ab" }}>{stat.num}</p>
                  <p className="text-xs uppercase tracking-wide opacity-40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-56" />
            ) : (
              <div className="w-full h-44 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#e535ab"}20, transparent)` }}>
                <Zap className="w-16 h-16 opacity-15" style={{ color: theme?.primary ?? "#e535ab" }} />
              </div>
            )}

            {/* New drops */}
            <div className="rounded-2xl border border-white/10 p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#e535ab" }} />
                  <h3 className="font-bold">Latest Drops</h3>
                </div>
                <span className="text-xs opacity-40">This week</span>
              </div>
              <div className="space-y-3">
                {items.map((shoe, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#e535ab"}12` }}>
                      <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#e535ab" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm truncate">{shoe.title}</p>
                      <p className="text-xs opacity-40">{shoe.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-sm">{shoe.value}</p>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${theme?.primary ?? "#e535ab"}20`, color: theme?.primary ?? "#e535ab" }}>
                        {shoe.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Release calendar */}
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: theme?.primary ?? "#e535ab" }}>
              <Clock className="w-5 h-5 text-white flex-shrink-0" />
              <div className="text-white">
                <p className="font-bold text-sm">Next Drop: Saturday 9 AM</p>
                <p className="text-xs opacity-70">Join the waitlist to get early access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
