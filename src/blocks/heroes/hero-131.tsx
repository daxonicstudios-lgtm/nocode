import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Frame } from "lucide-react";

export default function Hero131(props: BlockProps) {
  const {
    theme,
    heading = "Where Art Meets Imagination",
    subheading = "Curated exhibitions from world-renowned artists",
    bodyText = "Step into a gallery experience unlike any other. Discover contemporary masterpieces, immersive installations, and timeless collections that challenge perspective.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    secondaryButtonText = "Plan Your Visit",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#c9a96e";
  const accent = theme?.accent ?? "#8b7355";
  const bg = theme?.background ?? "#faf8f5";
  const fg = theme?.foreground ?? "#1a1a1a";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Mosaic grid pattern background */}
      <div className="absolute inset-0 z-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-[1px] opacity-[0.08]">
        {Array.from({ length: 96 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square"
            style={{
              backgroundColor: i % 3 === 0 ? primary : i % 3 === 1 ? accent : fg,
              opacity: 0.3 + (i % 5) * 0.15,
            }}
          />
        ))}
      </div>

      {/* Subtle border frame */}
      <div
        className="absolute inset-4 sm:inset-8 md:inset-12 border z-0 pointer-events-none"
        style={{ borderColor: `${primary}33` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <Frame className="w-5 h-5" style={{ color: primary }} />
          <span
            className="text-xs uppercase tracking-[0.3em] font-medium"
            style={{ color: primary }}
          >
            Gallery &amp; Exhibition Space
          </span>
          <Frame className="w-5 h-5" style={{ color: primary }} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6 font-serif">
          {heading}
        </h1>

        <div
          className="w-16 h-[1px] mx-auto mb-6"
          style={{ backgroundColor: primary }}
        />

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-60 italic">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-medium transition-transform hover:scale-105"
            style={{
              backgroundColor: primary,
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-medium border transition-colors hover:opacity-80"
            style={{
              borderColor: `${fg}33`,
              color: fg,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l z-0" style={{ borderColor: primary }} />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r z-0" style={{ borderColor: primary }} />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l z-0" style={{ borderColor: primary }} />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r z-0" style={{ borderColor: primary }} />
    </section>
  );
}
