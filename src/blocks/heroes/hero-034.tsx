import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";

export default function Hero034(props: BlockProps) {
  const {
    theme,
    heading = "Crafted With Care Since 2024",
    subheading = "Timeless design meets modern technology. Build websites that stand the test of time.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    secondaryButtonText = "Our Story",
    secondaryButtonUrl = "#",
  } = props;

  const accentColor = theme?.accent || "#c2956b";
  const primaryColor = theme?.primary || "#8b4513";

  return (
    <section
      className="min-h-[85vh] flex items-center justify-center px-4 py-16 sm:py-24"
      style={{
        backgroundColor: theme?.background || "#faf5ef",
        color: theme?.foreground || "#3d2b1f",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative top ornament */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 sm:w-16" style={{ backgroundColor: accentColor }} />
          <Star className="w-4 h-4" style={{ color: accentColor }} />
          <div className="h-px w-10 sm:w-16" style={{ backgroundColor: accentColor }} />
        </div>

        {/* Retro badge */}
        <span
          className="inline-block px-5 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-6 border-2"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          Est. 2024
        </span>

        {/* Heading with retro serif feel */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {heading}
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="h-px w-6" style={{ backgroundColor: accentColor }} />
          <div
            className="w-2 h-2 rotate-45"
            style={{ backgroundColor: accentColor }}
          />
          <div className="h-px w-6" style={{ backgroundColor: accentColor }} />
        </div>

        <p
          className="text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed opacity-80"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {subheading}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href={buttonUrl}
            className="inline-block px-8 py-3 font-bold text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-block px-8 py-3 font-bold text-sm uppercase tracking-widest border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Decorative bottom ornament */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-10 sm:w-16" style={{ backgroundColor: accentColor }} />
          <Star className="w-4 h-4" style={{ color: accentColor }} />
          <div className="h-px w-10 sm:w-16" style={{ backgroundColor: accentColor }} />
        </div>
      </div>
    </section>
  );
}
