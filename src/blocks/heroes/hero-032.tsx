import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

export default function Hero032(props: BlockProps) {
  const {
    theme,
    heading = "Build Something Beautiful",
    subheading = "Create stunning websites in minutes with our intuitive drag-and-drop builder. No coding required.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: theme?.background || "#f0f4ff", color: theme?.foreground }}
    >
      <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 pb-32 sm:pb-40 text-center">
        <div className="max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 uppercase tracking-wider"
            style={{
              backgroundColor: theme?.accent || "#e0e7ff",
              color: theme?.primary || "#4f46e5",
            }}
          >
            Now in Beta
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-70 mb-10 max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: theme?.primary || "#4f46e5" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base border-2 transition-colors hover:opacity-80"
              style={{
                borderColor: theme?.primary || "#4f46e5",
                color: theme?.primary || "#4f46e5",
              }}
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>

      {/* Wavy bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,160 720,0 1080,80 C1260,120 1380,100 1440,80 L1440,180 L0,180 Z"
            fill={theme?.primary || "#4f46e5"}
            fillOpacity="0.1"
          />
          <path
            d="M0,120 C240,60 480,160 720,100 C960,40 1200,140 1440,100 L1440,180 L0,180 Z"
            fill={theme?.primary || "#4f46e5"}
            fillOpacity="0.15"
          />
          <path
            d="M0,140 C180,100 360,170 540,130 C720,90 900,160 1080,120 C1260,80 1380,150 1440,130 L1440,180 L0,180 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
