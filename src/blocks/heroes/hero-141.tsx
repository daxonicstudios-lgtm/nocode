import type { BlockProps } from "@/blocks/types";
import { HardHat, ArrowRight, Wrench } from "lucide-react";

export default function Hero141(props: BlockProps) {
  const {
    theme,
    heading = "Building the Future, One Project at a Time",
    subheading = "Industrial-grade construction solutions",
    bodyText = "From commercial developments to infrastructure projects, we deliver excellence in every build. Trusted by over 500 companies across the continent.",
    buttonText = "Request a Quote",
    buttonUrl = "#",
    secondaryButtonText = "View Projects",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#1a1a1a";
  const fg = theme?.foreground ?? "#ffffff";
  const primary = theme?.primary ?? "#f59e0b";
  const accent = theme?.accent ?? "#d97706";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Zigzag/chevron pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zigzag141" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
              <polyline
                points="0,40 20,0 40,40 60,0 80,40"
                fill="none"
                stroke={primary}
                strokeWidth="3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zigzag141)" />
        </svg>
      </div>

      {/* Diagonal accent bar */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-20 hidden md:block"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${primary}44 50%, transparent 70%)`,
        }}
      />

      {/* Hazard stripe top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 z-20">
        <svg width="100%" height="8" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hazard141" x="0" y="0" width="16" height="8" patternUnits="userSpaceOnUse">
              <rect width="8" height="8" fill={primary} />
              <rect x="8" width="8" height="8" fill={bg} />
            </pattern>
          </defs>
          <rect width="100%" height="8" fill="url(#hazard141)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-bold uppercase tracking-widest mb-8"
              style={{ backgroundColor: primary, color: bg }}
            >
              <HardHat className="w-4 h-4" />
              <span>Est. 2005</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl font-medium mb-4 opacity-80">
              {subheading}
            </p>

            <p className="text-base sm:text-lg max-w-xl mb-10 opacity-60 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wide transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: bg }}
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold uppercase tracking-wide border-2 transition-colors hover:opacity-80"
                style={{ borderColor: primary, color: primary }}
              >
                <Wrench className="w-5 h-5" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right side decorative element */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <div
              className="w-64 h-64 rounded-sm flex items-center justify-center border-4"
              style={{ borderColor: primary, backgroundColor: `${primary}11` }}
            >
              <HardHat className="w-32 h-32 opacity-30" style={{ color: primary }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom chevron divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L600 0L1200 60H0Z" fill={bg} />
        </svg>
      </div>
    </section>
  );
}
