import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Ruler, Building2 } from "lucide-react";

export default function Hero073(props: BlockProps) {
  const {
    theme,
    heading = "Designing Spaces That Inspire",
    subheading = "Award-winning architecture studio crafting timeless structures since 2005",
    bodyText = "We blend innovation with tradition to create buildings that stand the test of time — both structurally and aesthetically.",
    buttonText = "Our Projects",
    buttonUrl = "#",
    secondaryButtonText = "Contact Us",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-[80vh] flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-8">
              <div
                className="w-10 h-[2px]"
                style={{ backgroundColor: theme?.primary ?? "#78716c" }}
              />
              <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60">
                Architecture Studio
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
              {heading}
            </h1>
            <p className="mt-6 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg mx-auto md:mx-0">
              {subheading}
            </p>
            <p className="mt-4 text-sm opacity-40 max-w-md mx-auto md:mx-0 leading-relaxed">
              {bodyText}
            </p>

            {/* Minimal divider */}
            <div
              className="mt-8 w-12 h-[1px] mx-auto md:mx-0"
              style={{ backgroundColor: theme?.primary ?? "#78716c" }}
            />

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:opacity-80 transition-opacity"
                style={{
                  backgroundColor: theme?.primary ?? "#1c1917",
                  color: theme?.background ?? "#fafaf9",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-wide uppercase border hover:opacity-80 transition-opacity"
                style={{ borderColor: theme?.foreground ?? "#1c1917" }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full max-w-md md:max-w-none relative">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Architecture"
                className="w-full h-[300px] sm:h-[400px] md:h-[520px] object-cover"
              />
            ) : (
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[520px] flex flex-col items-center justify-center gap-6"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#78716c10" }}
              >
                <Building2 className="w-20 h-20 opacity-20" style={{ color: theme?.foreground ?? "#1c1917" }} />
                <Ruler className="w-10 h-10 opacity-10" style={{ color: theme?.foreground ?? "#1c1917" }} />
              </div>
            )}
            {/* Clean line accent */}
            <div
              className="absolute -bottom-3 -left-3 w-full h-full border pointer-events-none hidden md:block"
              style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#78716c30" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
