"use client";

import type { BlockProps } from "@/blocks/types";
import { Play, Volume2 } from "lucide-react";

export default function Hero303(props: BlockProps) {
  const {
    theme,
    heading = "Watch the future unfold",
    subheading = "A new era of creative tools",
    bodyText = "See how teams around the world are transforming their workflow with our platform.",
    buttonText = "Play Showreel",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#000000", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen flex flex-col relative overflow-hidden"
    >
      {/* Top cinematic bar */}
      <div className="w-full h-12 sm:h-16 bg-black flex-shrink-0" />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 relative">
        {/* Video placeholder area */}
        <div className="w-full max-w-5xl mx-auto relative">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border"
            style={{
              borderColor: `${theme?.foreground ?? "#ffffff"}15`,
              backgroundColor: `${theme?.foreground ?? "#ffffff"}05`,
            }}
          >
            {/* Background image or gradient */}
            {imageUrl ? (
              <img src={imageUrl} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, ${theme?.primary ?? "#3b82f6"}20, transparent 70%)`,
                }}
              />
            )}

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <a
                href={buttonUrl}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-transform hover:scale-110 mb-6"
                style={{
                  backgroundColor: theme?.primary ?? "#3b82f6",
                  color: "#ffffff",
                }}
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1" fill="currentColor" />
              </a>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 px-4">
                {heading}
              </h1>
              <p className="text-sm sm:text-base opacity-50 text-center max-w-md">
                {bodyText}
              </p>
            </div>

            {/* Bottom controls mock */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 flex items-center justify-between z-10">
              <span className="text-xs opacity-30 font-mono">00:00 / 03:24</span>
              <div className="flex items-center gap-3">
                <Volume2 className="w-4 h-4 opacity-30" />
                <div
                  className="h-1 w-20 rounded-full opacity-20"
                  style={{ backgroundColor: theme?.foreground ?? "#ffffff" }}
                >
                  <div
                    className="h-full w-3/4 rounded-full"
                    style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Subheading below video */}
          <p
            className="text-center text-xs sm:text-sm font-semibold uppercase tracking-widest mt-6"
            style={{ color: theme?.primary ?? "#3b82f6" }}
          >
            {subheading}
          </p>
        </div>
      </div>

      {/* Bottom cinematic bar */}
      <div className="w-full h-12 sm:h-16 bg-black flex-shrink-0" />
    </section>
  );
}
