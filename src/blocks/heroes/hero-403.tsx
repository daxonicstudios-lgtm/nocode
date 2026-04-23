"use client";

import type { BlockProps } from "@/blocks/types";
import { Zap, Play } from "lucide-react";

export default function Hero403(props: BlockProps) {
  const {
    theme,
    heading = "RIDE THE DIGITAL WAVE",
    subheading = "Retro Future",
    bodyText = "Step into a neon-soaked world where retro aesthetics meet cutting-edge technology. The future has never looked this radical.",
    buttonText = "Launch Now",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #0a0015 0%, #1a0030 40%, #ff6b00 85%, #ff4500 100%)`,
        color: theme?.foreground ?? "#fff",
      }}
    >
      {/* Perspective grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%]" style={{ perspective: "500px" }}>
        <div
          className="absolute inset-0 origin-bottom"
          style={{
            transform: "rotateX(60deg)",
            backgroundImage: `
              linear-gradient(to right, ${theme?.primary ?? "#ff00ff"}44 1px, transparent 1px),
              linear-gradient(to bottom, ${theme?.primary ?? "#ff00ff"}44 1px, transparent 1px)
            `,
            backgroundSize: "60px 40px",
          }}
        />
      </div>

      {/* Sun glow */}
      <div
        className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full opacity-30 blur-[60px]"
        style={{ backgroundColor: theme?.primary ?? "#ff00ff" }}
      />

      {/* Horizontal scan lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 4px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <div
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.4em] uppercase mb-8"
          style={{ color: theme?.primary ?? "#ff00ff" }}
        >
          <Zap className="w-4 h-4" />
          {subheading}
          <Zap className="w-4 h-4" />
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-6"
          style={{
            textShadow: `0 0 20px ${theme?.primary ?? "#ff00ff"}88, 0 0 60px ${theme?.primary ?? "#ff00ff"}44`,
            WebkitTextStroke: `1px ${theme?.primary ?? "#ff00ff"}`,
          }}
        >
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-70 max-w-xl mx-auto mb-10 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-8 py-4 border-2 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]"
            style={{
              borderColor: theme?.primary ?? "#ff00ff",
              color: theme?.primary ?? "#ff00ff",
              boxShadow: `0 0 10px ${theme?.primary ?? "#ff00ff"}44`,
            }}
          >
            <Play className="w-4 h-4" />
            {buttonText}
          </a>
        </div>

        {items.length > 0 && (
          <div className="mt-16 flex flex-wrap justify-center gap-10">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl font-extrabold"
                  style={{ color: theme?.primary ?? "#ff00ff", textShadow: `0 0 15px ${theme?.primary ?? "#ff00ff"}66` }}
                >
                  {item.value ?? "88"}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-50 mt-2">
                  {item.label ?? "Score"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute bottom-10 right-10 w-32 h-32 object-contain opacity-60"
        />
      )}
    </section>
  );
}
