import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Palette, Sparkles } from "lucide-react";

export default function Hero074(props: BlockProps) {
  const {
    theme,
    heading = "Interiors That Tell Your Story",
    subheading = "Luxury interior design tailored to your lifestyle",
    bodyText = "We transform ordinary spaces into extraordinary experiences. Every detail is curated to reflect your unique taste and personality.",
    buttonText = "Get a Quote",
    buttonUrl = "#",
    secondaryButtonText = "Portfolio",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f5f0eb", color: theme?.foreground ?? "#2d2a26" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Text Side (right on desktop) */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5" style={{ color: theme?.accent ?? "#b8860b" }} />
              <span
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: theme?.accent ?? "#b8860b" }}
              >
                Interior Design
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-5 text-base sm:text-lg opacity-70 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-3 text-sm opacity-50 max-w-md mx-auto md:mx-0 leading-relaxed">
              {bodyText}
            </p>

            {/* Elegant accent line */}
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <div
                className="w-8 h-[1px]"
                style={{ backgroundColor: theme?.accent ?? "#b8860b" }}
              />
              <Palette className="w-4 h-4 opacity-40" style={{ color: theme?.accent ?? "#b8860b" }} />
              <div
                className="w-8 h-[1px]"
                style={{ backgroundColor: theme?.accent ?? "#b8860b" }}
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#2d2a26", color: theme?.background ?? "#f5f0eb" }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm text-base font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm text-base font-medium tracking-wide border hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.accent ?? "#b8860b", color: theme?.accent ?? "#b8860b" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Image Side (left on desktop) */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            {imageUrl ? (
              <div className="relative">
                <img
                  src={imageUrl}
                  alt="Interior design"
                  className="w-full h-[300px] sm:h-[400px] md:h-[520px] object-cover rounded-sm"
                />
                <div
                  className="absolute inset-0 rounded-sm pointer-events-none"
                  style={{ border: `1px solid ${theme?.accent ?? "#b8860b"}40` }}
                />
              </div>
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[520px] rounded-sm flex flex-col items-center justify-center gap-6 relative"
                style={{ backgroundColor: theme?.accent ? `${theme.accent}12` : "#b8860b12" }}
              >
                <div
                  className="absolute inset-4 border opacity-20 rounded-sm"
                  style={{ borderColor: theme?.accent ?? "#b8860b" }}
                />
                <Palette className="w-16 h-16 opacity-25" style={{ color: theme?.accent ?? "#b8860b" }} />
                <span className="text-xs uppercase tracking-[0.3em] opacity-30">Your Vision, Realized</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
