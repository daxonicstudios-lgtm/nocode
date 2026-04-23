"use client";

import type { BlockProps } from "@/blocks/types";
import { Ruler, Compass, ArrowRight, Building2 } from "lucide-react";

export default function Hero266(props: BlockProps) {
  const {
    theme,
    heading = "Building Tomorrow's Landmarks",
    subheading = "Architecture & Design",
    bodyText = "Award-winning architectural solutions that push boundaries. We design structures that define skylines and stand the test of time.",
    buttonText = "Our Projects",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "42", description: "Projects Completed" },
      { title: "18", description: "Design Awards" },
      { title: "12", description: "Countries" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#1a1a1a",
        color: theme?.foreground ?? "#f0f0f0",
      }}
      className="relative overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme?.foreground ?? "#f0f0f0"} 1px, transparent 1px),
              linear-gradient(90deg, ${theme?.foreground ?? "#f0f0f0"} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-[150%] opacity-20 origin-top-right"
        style={{
          backgroundColor: theme?.primary ?? "#ef4444",
          transform: "rotate(-30deg)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Main content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <Compass
                className="w-5 h-5"
                style={{ color: theme?.primary ?? "#ef4444" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-[0.25em]"
                style={{ color: theme?.primary ?? "#ef4444" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
              {heading.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>

            <div
              className="w-20 h-1 mb-8"
              style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
            />

            <p className="text-base sm:text-lg opacity-50 max-w-md leading-relaxed mb-10">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 font-bold text-sm uppercase tracking-wider group"
              style={{ color: theme?.primary ?? "#ef4444" }}
            >
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all group-hover:scale-110"
                style={{ borderColor: theme?.primary ?? "#ef4444" }}
              >
                <ArrowRight className="w-5 h-5" />
              </span>
              {buttonText}
            </a>
          </div>

          {/* Right side - stats and image */}
          <div className="lg:col-span-5">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-lg mb-8" />
            ) : (
              <div
                className="w-full aspect-[4/5] rounded-lg mb-8 flex items-center justify-center"
                style={{
                  border: `1px solid ${theme?.foreground ?? "#f0f0f0"}15`,
                  background: `linear-gradient(135deg, ${theme?.foreground ?? "#f0f0f0"}05, transparent)`,
                }}
              >
                <Building2
                  className="w-24 h-24 opacity-10"
                  style={{ color: theme?.foreground ?? "#f0f0f0" }}
                />
              </div>
            )}

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-6 pt-8"
              style={{
                borderTop: `1px solid ${theme?.foreground ?? "#f0f0f0"}15`,
              }}
            >
              {items.map((item, i) => (
                <div key={i}>
                  <div
                    className="text-3xl sm:text-4xl font-black"
                    style={{ color: theme?.primary ?? "#ef4444" }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs opacity-40 uppercase tracking-wider mt-1">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom ruler element */}
        <div className="flex items-center gap-2 mt-16 opacity-20">
          <Ruler className="w-4 h-4" />
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="h-3"
                style={{
                  width: "1px",
                  backgroundColor: theme?.foreground ?? "#f0f0f0",
                  height: i % 5 === 0 ? "12px" : "6px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
