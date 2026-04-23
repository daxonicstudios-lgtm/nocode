"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Play } from "lucide-react";

export default function Hero313(props: BlockProps) {
  const {
    theme,
    heading = "Break Through the Ordinary",
    subheading = "Redefine what's possible",
    bodyText = "We help ambitious brands stand out with bold design, fearless strategy, and campaigns that demand attention.",
    buttonText = "Start Your Project",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#e63946";
  const accentColor = theme?.accent || "#457b9d";

  return (
    <section
      style={{ backgroundColor: theme?.background || "#0a0a0a", color: theme?.foreground || "#f1faee" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Geometric shapes background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large triangle */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.07]"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, transparent)`,
            clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
          }}
        />

        {/* Circle */}
        <div
          className="absolute bottom-[-10%] left-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full opacity-[0.06]"
          style={{ backgroundColor: accentColor }}
        />

        {/* Diamond */}
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 md:w-48 md:h-48 opacity-[0.05] rotate-45"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Horizontal bar */}
        <div
          className="absolute top-[60%] right-0 w-1/3 h-2 opacity-20"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Small squares */}
        <div
          className="absolute top-[15%] right-[20%] w-6 h-6 opacity-20"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute bottom-[25%] right-[35%] w-4 h-4 opacity-15 rotate-12"
          style={{ backgroundColor: primaryColor }}
        />
        <div
          className="absolute top-[40%] left-[10%] w-3 h-3 opacity-10"
          style={{ backgroundColor: theme?.foreground || "#f1faee" }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl space-y-8">
          {/* Tag */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-1" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: primaryColor }}
            >
              {subheading}
            </span>
          </div>

          {/* Heading with accent block */}
          <div className="relative">
            <div
              className="absolute -left-4 md:-left-6 top-2 w-1 h-16 md:h-20"
              style={{ backgroundColor: primaryColor }}
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
              {heading.split(" ").map((word, i) => (
                <span key={i}>
                  {i === Math.floor(heading.split(" ").length / 2) ? (
                    <span style={{ color: primaryColor }}>{word}</span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-lg md:text-xl opacity-60 max-w-xl leading-relaxed">
            {bodyText}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href={buttonUrl}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-transform hover:scale-105"
              style={{ backgroundColor: primaryColor, color: "#fff" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 transition-opacity hover:opacity-70"
              style={{ borderColor: `${theme?.foreground || "#f1faee"}30` }}
            >
              <Play className="w-4 h-4" style={{ color: primaryColor }} />
              Watch Reel
            </button>
          </div>
        </div>

        {/* Bottom geometric strip */}
        <div className="mt-20 flex items-center gap-6">
          {(items.length > 0 ? items : [
            { title: "Strategy" },
            { title: "Design" },
            { title: "Development" },
            { title: "Growth" },
          ]).map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-2 h-2 rotate-45"
                style={{ backgroundColor: i % 2 === 0 ? primaryColor : accentColor }}
              />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] opacity-50">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
