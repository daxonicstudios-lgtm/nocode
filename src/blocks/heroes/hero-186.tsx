import type { BlockProps } from "@/blocks/types";
import { Music, Headphones } from "lucide-react";

export default function Hero186(props: BlockProps) {
  const {
    theme,
    heading = "Amara Osei",
    subheading = "New Album Out Now",
    bodyText = "Blending Afrobeats, soul, and electronic sounds into a genre-defying sonic landscape. The debut album 'Midnight Gold' is available on all platforms.",
    buttonText = "Listen Now",
    buttonUrl = "#listen",
    items = [
      { label: "Spotify", url: "#spotify" },
      { label: "Apple Music", url: "#apple-music" },
      { label: "YouTube Music", url: "#youtube" },
      { label: "Tidal", url: "#tidal" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#09090b",
        color: theme?.foreground ?? "#fafafa",
      }}
    >
      {/* Dramatic gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#7c3aed"}15 0%, transparent 50%, ${theme?.accent ?? "#ec4899"}20 100%)`,
        }}
      />
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Music className="w-5 h-5" style={{ color: theme?.accent ?? "#ec4899" }} />
          <Headphones className="w-5 h-5" style={{ color: theme?.accent ?? "#ec4899" }} />
        </div>

        {/* Album badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          style={{
            backgroundColor: `${theme?.primary ?? "#7c3aed"}25`,
            color: theme?.primary ?? "#7c3aed",
            border: `1px solid ${theme?.primary ?? "#7c3aed"}40`,
          }}
        >
          {subheading}
        </span>

        {/* Artist name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-none tracking-tight mb-6">
          {heading}
        </h1>

        {/* Body */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-8 opacity-70">
          {bodyText}
        </p>

        {/* Listen Now CTA */}
        <a
          href={buttonUrl}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 mb-10"
          style={{
            backgroundColor: theme?.primary ?? "#7c3aed",
            color: "#fff",
          }}
        >
          <Music className="w-4 h-4" />
          {buttonText}
        </a>

        {/* Streaming platform links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="text-xs uppercase tracking-wider opacity-40 w-full mb-1">
            Stream on
          </span>
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url ?? "#"}
              className="text-sm font-medium tracking-wide transition-colors duration-200 hover:opacity-100 opacity-60"
              style={{ color: theme?.accent ?? "#ec4899" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
