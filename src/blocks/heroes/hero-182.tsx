import type { BlockProps } from "@/blocks/types";
import { Mountain, Camera, MapPin } from "lucide-react";

export default function Hero182(props: BlockProps) {
  const {
    theme,
    heading = "Exploring the World, One Frame at a Time",
    subheading = "Landscape & Travel Photography",
    bodyText = "From the volcanic highlands of Iceland to the windswept peaks of Patagonia, I chase light across the globe to capture nature at its most extraordinary.",
    buttonText = "Gallery",
    buttonUrl = "#",
    secondaryButtonText = "Prints",
    secondaryButtonUrl = "#",
    items = [
      { label: "Iceland" },
      { label: "Patagonia" },
      { label: "Dolomites" },
      { label: "Faroe Islands" },
      { label: "Lofoten" },
      { label: "New Zealand" },
    ],
  } = props;

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden px-4 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: theme?.background ?? "#0c0c0c",
        color: theme?.foreground ?? "#e8e8e8",
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${theme?.primary ?? "#2d5a3d"} 0%, transparent 70%)`,
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3">
              <Mountain className="w-5 h-5" style={{ color: theme?.primary ?? "#6ba368" }} />
              <span className="text-xs tracking-widest uppercase opacity-50">{subheading}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed opacity-60 max-w-xl">
              {bodyText}
            </p>

            {/* Location tags */}
            <div className="flex flex-wrap gap-2">
              {items.map((loc, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs tracking-wide border border-white/10"
                >
                  <MapPin className="w-3 h-3" style={{ color: theme?.primary ?? "#6ba368" }} />
                  {loc.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: theme?.primary ?? "#6ba368",
                  color: "#ffffff",
                }}
              >
                <Camera className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-widest uppercase border transition-opacity hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#6ba368",
                  color: theme?.primary ?? "#6ba368",
                }}
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right — vertical image stack */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div
              className="aspect-[3/4] rounded-sm flex items-center justify-center"
              style={{ backgroundColor: theme?.accent ?? "#1a2a1e" }}
            >
              <Mountain className="w-10 h-10 opacity-20" />
            </div>
            <div
              className="aspect-[3/4] rounded-sm mt-8 flex items-center justify-center"
              style={{ backgroundColor: theme?.accent ?? "#1a2a1e" }}
            >
              <Camera className="w-10 h-10 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
