"use client";

import type { BlockProps } from "@/blocks/types";
import { Minus, Circle, Leaf } from "lucide-react";

export default function Hero311(props: BlockProps) {
  const {
    theme,
    heading = "Find Stillness in Motion",
    subheading = "A mindful approach to digital experiences",
    bodyText = "We craft products that honor simplicity, intentionality, and the beauty of restraint. Every element serves a purpose.",
    buttonText = "Begin",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Thin horizontal lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[15, 30, 50, 70, 85].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px opacity-[0.06]"
            style={{ top: `${top}%`, backgroundColor: theme?.foreground || "#1a1a1a" }}
          />
        ))}
      </div>

      {/* Vertical accent line */}
      <div
        className="absolute left-8 md:left-16 top-0 bottom-0 w-px opacity-10"
        style={{ backgroundColor: theme?.primary || "#c4a77d" }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Left content */}
          <div className="md:col-span-7 space-y-10">
            {/* Zen circle mark */}
            <div className="flex items-center gap-4">
              <Circle
                className="w-5 h-5 opacity-30"
                style={{ color: theme?.primary || "#c4a77d" }}
                strokeWidth={1}
              />
              <Minus className="w-8 h-0.5 opacity-20" style={{ color: theme?.foreground || "#1a1a1a" }} />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
              {heading}
            </h1>

            <div
              className="w-16 h-px"
              style={{ backgroundColor: theme?.primary || "#c4a77d" }}
            />

            <p className="text-base md:text-lg font-light leading-relaxed max-w-lg opacity-70">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-light border-b pb-2 transition-opacity hover:opacity-70"
              style={{
                borderColor: theme?.primary || "#c4a77d",
                color: theme?.foreground || "#1a1a1a",
              }}
            >
              {buttonText}
              <Minus className="w-6 h-px" />
            </a>
          </div>

          {/* Right - zen composition */}
          <div className="md:col-span-5 flex flex-col items-center justify-center space-y-8">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full max-w-xs aspect-[3/4] object-cover"
                style={{ filter: "grayscale(30%)" }}
              />
            ) : (
              <div className="relative w-full max-w-xs aspect-square flex items-center justify-center">
                {/* Enso circle */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 md:w-64 md:h-64 opacity-10"
                  style={{ color: theme?.primary || "#c4a77d" }}
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="460 40"
                    strokeLinecap="round"
                  />
                </svg>
                <Leaf
                  className="absolute w-8 h-8 opacity-20"
                  style={{ color: theme?.primary || "#c4a77d" }}
                  strokeWidth={1}
                />
              </div>
            )}

            <p className="text-xs tracking-[0.3em] uppercase opacity-40 text-center font-light">
              {subheading}
            </p>
          </div>
        </div>

        {/* Bottom subtle nav */}
        <div className="mt-20 pt-8 border-t border-opacity-10 flex flex-wrap gap-8 text-xs tracking-[0.15em] uppercase opacity-30 font-light"
          style={{ borderColor: theme?.foreground ? `${theme.foreground}20` : "#1a1a1a20" }}
        >
          {(items.length > 0 ? items : [
            { title: "Philosophy" },
            { title: "Practice" },
            { title: "Purpose" },
          ]).map((item, i) => (
            <span key={i}>{item.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
