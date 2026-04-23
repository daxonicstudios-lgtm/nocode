import type { BlockProps } from "@/blocks/types";
import { Gem, ExternalLink, Wallet } from "lucide-react";

export default function Hero142(props: BlockProps) {
  const {
    theme,
    heading = "Collect Digital Masterpieces",
    subheading = "The premier marketplace for rare NFTs and digital art",
    bodyText = "Discover, collect, and trade extraordinary digital assets from world-class creators. Every piece is authenticated and secured on the blockchain.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    secondaryButtonText = "Connect Wallet",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#0b0b1a";
  const fg = theme?.foreground ?? "#f0f0ff";
  const primary = theme?.primary ?? "#a855f7";
  const accent = theme?.accent ?? "#06b6d4";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Holographic gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            conic-gradient(from 180deg at 50% 50%, ${primary}33 0deg, ${accent}22 90deg, ${primary}11 180deg, ${accent}33 270deg, ${primary}33 360deg)
          `,
        }}
      />

      {/* Animated shimmer lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute top-1/4 left-0 w-full h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${primary}, ${accent}, transparent)` }}
        />
        <div
          className="absolute top-1/2 left-0 w-full h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}, ${primary}, transparent)` }}
        />
        <div
          className="absolute top-3/4 left-0 w-full h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${primary}, ${accent}, transparent)` }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid142" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <rect width="60" height="60" fill="none" stroke={fg} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid142)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
          style={{
            background: `linear-gradient(135deg, ${primary}33, ${accent}33)`,
            border: `1px solid ${primary}55`,
            color: fg,
          }}
        >
          <Gem className="w-4 h-4" style={{ color: accent }} />
          <span>Season 3 Drop — Live Now</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          <span
            style={{
              background: `linear-gradient(135deg, ${primary}, ${accent}, ${primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heading}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-70 max-w-3xl mx-auto">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold transition-transform hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${primary}, ${accent})`,
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ExternalLink className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${primary}66`,
              color: fg,
            }}
          >
            <Wallet className="w-5 h-5" />
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "12.4K", label: "Artworks" },
            { value: "3.2K", label: "Artists" },
            { value: "48M", label: "Volume" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-black"
                style={{ color: primary }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider opacity-50 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corner glow effects */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 z-0"
        style={{ background: primary }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 z-0"
        style={{ background: accent }}
      />
    </section>
  );
}
