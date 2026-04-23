"use client";

import type { BlockProps } from "@/blocks/types";
import { Music, Zap, Gift, ArrowRight, Star } from "lucide-react";

export default function Hero336(props: BlockProps) {
  const {
    theme,
    heading = "Move Your Body, Free Your Soul",
    subheading = "Dance Studio & Performance Academy",
    bodyText = "From hip hop to ballet, salsa to contemporary — find your rhythm in our vibrant community of dancers. All ages, all levels, one passion.",
    buttonText = "First Class Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hip Hop", description: "High energy street dance" },
      { title: "Ballet", description: "Classical technique & grace" },
      { title: "Salsa", description: "Latin rhythms & partner work" },
      { title: "Contemporary", description: "Expressive modern movement" },
      { title: "K-Pop", description: "Learn trending choreography" },
      { title: "Breakdance", description: "Power moves & footwork" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#18082A", color: theme?.foreground ?? "#F8F0FF" }}
      className="relative overflow-hidden"
    >
      {/* Dynamic diagonal stripes */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        background: `repeating-linear-gradient(45deg, transparent, transparent 40px, ${theme?.primary ?? "#E040FB"} 40px, ${theme?.primary ?? "#E040FB"} 42px)`
      }} />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#E040FB" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#E040FB20", color: theme?.primary ?? "#E040FB" }}
          >
            <Music className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl md:text-7xl font-black leading-none mb-6 tracking-tight">
            {heading.split(",").map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {i > 0 ? (
                  <span style={{ color: theme?.primary ?? "#E040FB" }}>{part}</span>
                ) : part}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg opacity-50 mb-8 max-w-lg mx-auto">
            {bodyText}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform"
              style={{ backgroundColor: theme?.primary ?? "#E040FB", color: "#fff" }}
            >
              <Gift className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base border border-white/20 hover:bg-white/5 transition-colors"
            >
              View Schedule
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Dance style cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: theme?.primary ?? "#E040FB" }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: theme?.primary ?? "#E040FB" }} />
                </div>
                <p className="text-sm opacity-40">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-white/10">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="w-8 h-8 rounded-full border-2" style={{ borderColor: theme?.background ?? "#18082A", backgroundColor: theme?.primary ? `${theme.primary}${30 + n * 15}` : `#E040FB${30 + n * 15}` }} />
            ))}
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(n => (
              <Star key={n} className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#E040FB" }} />
            ))}
          </div>
          <span className="text-sm opacity-50">1,200+ students love dancing with us</span>
        </div>
      </div>
    </section>
  );
}
