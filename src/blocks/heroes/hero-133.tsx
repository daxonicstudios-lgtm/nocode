import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Crown } from "lucide-react";

export default function Hero133(props: BlockProps) {
  const {
    theme,
    heading = "Timeless Elegance",
    subheading = "Crafted for those who demand perfection",
    bodyText = "Discover our exclusive collection of handcrafted luxury goods, where heritage meets modern sophistication. Every piece tells a story of uncompromising quality.",
    buttonText = "Explore the Collection",
    buttonUrl = "#",
    secondaryButtonText = "Book a Private Viewing",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#b8860b";
  const accent = theme?.accent ?? "#d4a843";
  const bg = theme?.background ?? "#fdfbf7";
  const fg = theme?.foreground ?? "#1c1a17";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${primary}15 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pb-24">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-[1px]" style={{ backgroundColor: `${primary}66` }} />
          <Crown className="w-6 h-6 mx-4" style={{ color: primary }} />
          <div className="w-12 h-[1px]" style={{ backgroundColor: `${primary}66` }} />
        </div>

        <p
          className="text-xs sm:text-sm uppercase tracking-[0.4em] font-medium mb-6"
          style={{ color: primary }}
        >
          Established 1892
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.95] mb-8">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-50 italic">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-transform hover:scale-105"
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
            className="inline-flex items-center gap-2 px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium border transition-colors hover:opacity-80"
            style={{
              borderColor: `${primary}44`,
              color: fg,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L0 60C240 20 480 0 720 0C960 0 1200 20 1440 60L1440 120L0 120Z"
            fill={bg}
          />
          <path
            d="M0 60C240 20 480 0 720 0C960 0 1200 20 1440 60"
            stroke={primary}
            strokeWidth="1"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative gold lines on sides */}
      <div
        className="absolute top-1/4 left-6 sm:left-12 w-[1px] h-32 z-0"
        style={{ background: `linear-gradient(to bottom, transparent, ${primary}44, transparent)` }}
      />
      <div
        className="absolute top-1/4 right-6 sm:right-12 w-[1px] h-32 z-0"
        style={{ background: `linear-gradient(to bottom, transparent, ${primary}44, transparent)` }}
      />
    </section>
  );
}
