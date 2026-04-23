import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Hero099(props: BlockProps) {
  const {
    theme,
    heading = "Between Light and Shadow",
    subheading = "A curated exhibition exploring the intersection of contemporary sculpture and immersive digital art. Seventeen artists, one shared vision.",
    bodyText = "Now Showing — Through August 2026",
    buttonText = "View Exhibition",
    buttonUrl = "#",
    secondaryButtonText = "Plan Your Visit",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background || "#fafaf9",
        color: theme?.foreground || "#1c1917",
      }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Text Side — minimal aesthetic */}
        <div className="flex-1 text-center md:text-left">
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-8"
            style={{ color: theme?.primary || "#78716c" }}
          >
            {bodyText}
          </p>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
          >
            {heading}
          </h1>

          <div
            className="w-12 h-px mt-8 mx-auto md:mx-0"
            style={{ backgroundColor: theme?.primary || "#78716c" }}
          />

          <p className="mt-8 text-base sm:text-lg opacity-60 leading-relaxed max-w-md font-light">
            {subheading}
          </p>

          <div className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start">
            <a
              href={buttonUrl}
              style={{ borderColor: theme?.foreground || "#1c1917" }}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide uppercase border hover:opacity-70 transition-opacity"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium tracking-wide uppercase opacity-50 hover:opacity-80 transition-opacity"
            >
              {secondaryButtonText}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center md:justify-start text-xs tracking-widest uppercase opacity-40">
            <span>Gallery A</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>17 Artists</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>Free Entry</span>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="overflow-hidden aspect-[3/4] bg-gradient-to-b from-stone-100 to-stone-200">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Abstract geometric placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    <div
                      className="absolute inset-0 rounded-full border"
                      style={{ borderColor: theme?.primary || "#a8a29e" }}
                    />
                    <div
                      className="absolute inset-4 rounded-full border"
                      style={{ borderColor: theme?.primary || "#a8a29e", opacity: 0.6 }}
                    />
                    <div
                      className="absolute inset-8 rounded-full border"
                      style={{ borderColor: theme?.primary || "#a8a29e", opacity: 0.3 }}
                    />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme?.primary || "#78716c" }}
                    />
                  </div>
                </div>
                <p className="absolute bottom-6 text-xs font-medium opacity-30 tracking-widest uppercase">
                  Exhibition Preview
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
