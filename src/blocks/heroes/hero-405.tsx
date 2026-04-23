"use client";

import type { BlockProps } from "@/blocks/types";
import { Palette, MoveRight } from "lucide-react";

export default function Hero405(props: BlockProps) {
  const {
    theme,
    heading = "Where ideas bloom into reality",
    subheading = "Creative Agency",
    bodyText = "We blend strategy with artistry to produce work that feels alive. Every project is a canvas waiting for its story.",
    buttonText = "View Portfolio",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primary = theme?.primary ?? "#8b5cf6";
  const accent = theme?.accent ?? "#ec4899";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#fefcfb", color: theme?.foreground ?? "#1e1b2e" }}
    >
      {/* Watercolor wash blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ backgroundColor: primary }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[350px] rounded-full blur-[90px] opacity-15"
          style={{ backgroundColor: accent }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[450px] h-[400px] rounded-full blur-[110px] opacity-12"
          style={{ backgroundColor: "#60a5fa" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
          style={{ backgroundColor: "#fbbf24" }}
        />
        {/* Soft streaks */}
        <div
          className="absolute top-[10%] left-[20%] w-[60%] h-32 rounded-full blur-[70px] opacity-8 rotate-[-15deg]"
          style={{ backgroundColor: primary }}
        />
      </div>

      {/* Subtle paper texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <Palette className="w-5 h-5" style={{ color: primary }} />
          <span className="text-sm font-medium tracking-wide uppercase" style={{ color: primary }}>
            {subheading}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-6">
          {heading.split(" ").map((word, i) => (
            <span
              key={i}
              className={i % 3 === 1 ? "italic font-normal" : ""}
              style={i % 3 === 1 ? { color: primary } : undefined}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <p className="text-base sm:text-lg opacity-55 leading-relaxed max-w-lg mx-auto mb-10">
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-3 text-sm font-medium px-8 py-3.5 rounded-full border transition-all hover:shadow-lg"
          style={{ borderColor: primary, color: primary }}
        >
          {buttonText}
          <MoveRight className="w-4 h-4" />
        </a>

        {imageUrl && (
          <div className="mt-14 mx-auto max-w-2xl">
            <img src={imageUrl} alt="" className="w-full rounded-3xl shadow-lg" />
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-semibold" style={{ color: primary }}>
                  {item.value ?? "120"}
                </div>
                <div className="text-xs opacity-45 mt-1">{item.label ?? "Clients"}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
