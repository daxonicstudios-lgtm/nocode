"use client";

import type { BlockProps } from "@/blocks/types";
import { Music, MapPin } from "lucide-react";

export default function Hero408(props: BlockProps) {
  const {
    theme,
    heading = "OPEN TONIGHT",
    subheading = "Live Music & Cocktails",
    bodyText = "An intimate venue where the drinks are crafted and the music is live. Step inside, leave the ordinary behind.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primary = theme?.primary ?? "#ff3366";

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#f0e6e6" }}
    >
      {/* Dark ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: primary }}
      />

      {/* Brick-like subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(255,255,255,0.05) 49%, rgba(255,255,255,0.05) 51%, transparent 51%)
          `,
          backgroundSize: "60px 30px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Music className="w-4 h-4 opacity-50" />
          <span className="text-xs tracking-[0.3em] uppercase opacity-50">{subheading}</span>
          <Music className="w-4 h-4 opacity-50" />
        </div>

        {/* Neon text */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-2"
          style={{
            color: primary,
            textShadow: `
              0 0 7px ${primary},
              0 0 20px ${primary}aa,
              0 0 42px ${primary}66,
              0 0 82px ${primary}33
            `,
          }}
        >
          {heading}
        </h1>

        {/* Neon underline */}
        <div
          className="w-32 h-0.5 mx-auto mb-8"
          style={{
            backgroundColor: primary,
            boxShadow: `0 0 8px ${primary}, 0 0 20px ${primary}88`,
          }}
        />

        <p className="text-sm sm:text-base opacity-45 leading-relaxed max-w-md mx-auto mb-10">
          {bodyText}
        </p>

        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] px-8 py-3.5 rounded-sm border-2 transition-all"
          style={{
            borderColor: primary,
            color: primary,
            textShadow: `0 0 10px ${primary}88`,
            boxShadow: `0 0 15px ${primary}22, inset 0 0 15px ${primary}11`,
          }}
        >
          {buttonText}
        </a>

        {/* Info items */}
        {items.length > 0 ? (
          <div className="mt-16 flex flex-wrap justify-center gap-8">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-lg font-bold"
                  style={{ color: primary, textShadow: `0 0 8px ${primary}66` }}
                >
                  {item.title ?? "9 PM"}
                </div>
                <div className="text-xs opacity-35 mt-1">{item.label ?? "Doors Open"}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex items-center justify-center gap-2 opacity-30 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Downtown Arts District</span>
          </div>
        )}
      </div>

      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover opacity-15" />
        </div>
      )}
    </section>
  );
}
