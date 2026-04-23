import type { BlockProps } from "@/blocks/types";
import { Layers, ArrowRight } from "lucide-react";

export default function Hero050(props: BlockProps) {
  const {
    theme,
    heading = "Design the Future",
    subheading = "A multi-dimensional platform that layers strategy, design, and engineering into products that move the world forward.",
    buttonText = "Explore Now",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#f8fafc" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Layer 1: Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Layer 2: Mid-layer decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-10 blur-xl"
          style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
        />
        <div
          className="absolute top-[45%] left-[35%] w-48 h-48 sm:w-72 sm:h-72 border rounded-full opacity-10"
          style={{ borderColor: theme?.accent ?? "#8b5cf6" }}
        />
        <div
          className="absolute top-[40%] right-[30%] w-40 h-40 sm:w-60 sm:h-60 border rounded-full opacity-[0.07]"
          style={{ borderColor: theme?.primary ?? "#3b82f6" }}
        />
        {/* Floating diamond */}
        <div
          className="absolute top-[20%] right-[15%] w-12 h-12 sm:w-16 sm:h-16 rotate-45 opacity-15"
          style={{ backgroundColor: theme?.accent ?? "#8b5cf6" }}
        />
        {/* Floating square */}
        <div
          className="absolute bottom-[25%] left-[12%] w-10 h-10 sm:w-14 sm:h-14 opacity-10 rounded-sm"
          style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
        />
      </div>

      {/* Layer 3: Foreground content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}33` }}
          >
            <Layers className="w-6 h-6" style={{ color: theme?.primary ?? "#3b82f6" }} />
          </div>
        </div>

        <p
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: theme?.accent ?? "#8b5cf6" }}
        >
          Multi-Layer Experience
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-lg mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#3b82f6"}, ${theme?.accent ?? "#8b5cf6"})`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-base border border-white/15 hover:border-white/30 transition-colors backdrop-blur-sm"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
