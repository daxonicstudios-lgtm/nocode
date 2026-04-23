import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, Wine } from "lucide-react";

export default function Hero151(props: BlockProps) {
  const {
    theme,
    heading = "An Exquisite Dining Experience",
    subheading = "Michelin-Starred Excellence",
    bodyText = "Indulge in a culinary journey crafted by our award-winning chefs, featuring locally sourced ingredients and timeless French techniques in an intimate setting.",
    buttonText = "Reserve Your Table",
    buttonUrl = "#reservation",
    secondaryButtonText = "View Our Menu",
    secondaryButtonUrl = "#menu",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0a0a0a",
        color: theme?.foreground ?? "#f5f0e8",
      }}
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${theme?.primary ?? "#b8860b"}22 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Icon cluster */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Wine
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-16 h-px"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <UtensilsCrossed
            className="w-7 h-7 sm:w-8 sm:h-8"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-16 h-px"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <Wine
            className="w-6 h-6 sm:w-7 sm:h-7"
            style={{ color: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Subheading */}
        <p
          className="text-xs sm:text-sm tracking-[0.35em] uppercase mb-4 font-light"
          style={{ color: theme?.accent ?? "#c9a84c" }}
        >
          {subheading}
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-light leading-tight mb-6 tracking-wide">
          {heading}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div
            className="w-20 sm:w-32 h-px"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-2 h-2 rotate-45 border"
            style={{ borderColor: theme?.accent ?? "#c9a84c" }}
          />
          <div
            className="w-20 sm:w-32 h-px"
            style={{ backgroundColor: theme?.accent ?? "#c9a84c" }}
          />
        </div>

        {/* Body text */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 opacity-80 font-light">
          {bodyText}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-90 border"
            style={{
              backgroundColor: theme?.primary ?? "#b8860b",
              color: theme?.background ?? "#0a0a0a",
              borderColor: theme?.primary ?? "#b8860b",
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-block px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300 hover:opacity-80 border"
            style={{
              borderColor: theme?.accent ?? "#c9a84c",
              color: theme?.accent ?? "#c9a84c",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Bottom accent */}
        <p
          className="mt-16 text-xs tracking-[0.25em] uppercase opacity-50"
          style={{ color: theme?.accent ?? "#c9a84c" }}
        >
          Est. 1998 &mdash; Fine Dining &mdash; Open Tue&ndash;Sun
        </p>
      </div>
    </section>
  );
}
