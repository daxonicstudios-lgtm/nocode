import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Diamond } from "lucide-react";

export default function Hero037(props: BlockProps) {
  const {
    theme,
    heading = "Experience True Elegance",
    subheading = "Where craftsmanship meets innovation. Discover a premium collection curated for the discerning individual.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    secondaryButtonText = "Book a Consultation",
    secondaryButtonUrl = "#",
  } = props;

  const goldAccent = theme?.accent || "#c9a96e";
  const bgColor = theme?.background || "#0f0f0f";
  const fgColor = theme?.foreground || "#f5f0eb";

  return (
    <section
      className="min-h-[90vh] flex items-center justify-center px-4 py-20 sm:py-28 relative overflow-hidden"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${goldAccent} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Diamond icon */}
        <div className="flex items-center justify-center mb-8">
          <Diamond className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: goldAccent }} />
        </div>

        {/* Thin gold line */}
        <div
          className="w-12 h-px mx-auto mb-8"
          style={{ backgroundColor: goldAccent }}
        />

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {heading}
        </h1>

        <p
          className="text-sm sm:text-base lg:text-lg mb-12 max-w-md mx-auto leading-relaxed opacity-70"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-90"
            style={{
              backgroundColor: goldAccent,
              color: bgColor,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest border transition-colors hover:opacity-80"
            style={{
              borderColor: goldAccent,
              color: goldAccent,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Bottom gold line */}
        <div
          className="w-12 h-px mx-auto mt-16"
          style={{ backgroundColor: goldAccent }}
        />
      </div>
    </section>
  );
}
