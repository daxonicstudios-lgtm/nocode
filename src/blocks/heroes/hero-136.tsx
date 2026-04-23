import type { BlockProps } from "@/blocks/types";
import { Music, Ticket } from "lucide-react";

export default function Hero136(props: BlockProps) {
  const {
    theme,
    heading = "Feel the Beat Live",
    subheading = "The stage is set. The crowd is waiting.",
    bodyText = "Experience unforgettable nights with world-class artists, immersive sound design, and electric atmospheres. Get your tickets before they sell out.",
    buttonText = "Get Tickets",
    buttonUrl = "#",
    secondaryButtonText = "View Lineup",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#e91e63";
  const accent = theme?.accent ?? "#ff9800";
  const bg = theme?.background ?? "#0a0a0a";
  const fg = theme?.foreground ?? "#ffffff";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 40% 60% at 50% 0%, ${primary}40 0%, transparent 70%),
            radial-gradient(ellipse 30% 40% at 30% 10%, ${accent}20 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 70% 10%, ${accent}20 0%, transparent 60%)
          `,
        }}
      />

      {/* Light rays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[15, 35, 50, 65, 85].map((left, i) => (
          <div
            key={i}
            className="absolute top-0 w-[2px] opacity-[0.04]"
            style={{
              left: `${left}%`,
              height: "70%",
              background: `linear-gradient(to bottom, ${i % 2 === 0 ? primary : accent}, transparent)`,
              transform: `rotate(${(left - 50) * 0.3}deg)`,
              transformOrigin: "top center",
            }}
          />
        ))}
      </div>

      {/* Subtle noise/grain at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 z-0"
        style={{
          background: `linear-gradient(to top, ${bg}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-bold mb-8"
          style={{
            backgroundColor: `${primary}22`,
            color: primary,
            border: `1px solid ${primary}44`,
          }}
        >
          <Music className="w-4 h-4" />
          <span>Live Events 2026</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-6 uppercase">
          {heading}
        </h1>

        <p
          className="text-lg sm:text-2xl font-light mb-4 italic"
          style={{ color: `${fg}88` }}
        >
          {subheading}
        </p>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-bold uppercase tracking-wider transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${primary}, ${accent})`,
              color: "#ffffff",
              boxShadow: `0 0 40px ${primary}44`,
            }}
          >
            <Ticket className="w-5 h-5" />
            {buttonText}
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full text-base font-bold uppercase tracking-wider border transition-colors hover:opacity-80"
            style={{
              borderColor: `${fg}22`,
              color: fg,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Event details */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm opacity-40">
          <span>June 14-16, 2026</span>
          <span className="hidden sm:inline" style={{ color: primary }}>|</span>
          <span>Zenith Arena, Lagos</span>
          <span className="hidden sm:inline" style={{ color: primary }}>|</span>
          <span>3 Stages, 40+ Artists</span>
        </div>
      </div>
    </section>
  );
}
