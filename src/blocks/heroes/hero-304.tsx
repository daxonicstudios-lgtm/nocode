"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Star } from "lucide-react";

export default function Hero304(props: BlockProps) {
  const {
    theme,
    heading = "The future of work is here",
    subheading = "Trusted by 10,000+ teams worldwide",
    bodyText = "Automate repetitive tasks, collaborate in real time, and ship products faster than ever before.",
    buttonText = "Join the Waitlist",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const tickerWords = [
    "Automate", "Collaborate", "Ship Faster", "Scale Effortlessly",
    "Build Better", "Work Smarter", "Move Forward", "Create More",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Top content */}
      <div className="px-5 pt-24 pb-12 text-center relative z-10">
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" style={{ color: theme?.accent ?? "#eab308" }} />
          ))}
          <span className="text-xs opacity-50 ml-2">{subheading}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-3xl mx-auto">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-40 max-w-lg mx-auto mb-10">
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
          style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Marquee ticker band */}
      <div className="relative py-8 my-8 overflow-hidden">
        {/* Top border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: `${theme?.foreground ?? "#fafafa"}15` }}
        />
        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: `${theme?.foreground ?? "#fafafa"}15` }}
        />

        <div className="flex animate-[scroll_20s_linear_infinite] whitespace-nowrap">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="text-3xl sm:text-5xl font-black uppercase tracking-wide mx-4 sm:mx-8 opacity-10">
                {word}
              </span>
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              />
            </span>
          ))}
        </div>

        <style>{`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.33%); }
          }
        `}</style>
      </div>

      {/* Bottom spacer */}
      <div className="pb-24" />
    </section>
  );
}
