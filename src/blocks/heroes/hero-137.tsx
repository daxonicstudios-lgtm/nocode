import type { BlockProps } from "@/blocks/types";
import { Mountain, Compass, ArrowRight } from "lucide-react";

export default function Hero137(props: BlockProps) {
  const {
    theme,
    heading = "Explore the Uncharted",
    subheading = "Adventure awaits beyond the trail",
    bodyText = "From mountain summits to hidden valleys, discover guided expeditions designed for every skill level. Gear up, step out, and let nature transform you.",
    buttonText = "Plan Your Adventure",
    buttonUrl = "#",
    secondaryButtonText = "Browse Trails",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#2d6a4f";
  const accent = theme?.accent ?? "#95d5b2";
  const bg = theme?.background ?? "#f5f1eb";
  const fg = theme?.foreground ?? "#1b2a1f";

  // Generate topographic lines
  const topoLines = Array.from({ length: 12 }).map((_, i) => {
    const y = 10 + i * 7;
    const wave = i % 2 === 0 ? 1 : -1;
    return `M0 ${y} Q180 ${y + wave * 8}, 360 ${y} T720 ${y} T1080 ${y + wave * 5} T1440 ${y}`;
  });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Topographic map lines */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <svg
          viewBox="0 0 1440 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {topoLines.map((d, i) => (
            <path
              key={i}
              d={d}
              stroke={primary}
              strokeWidth="0.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Soft gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${accent}15 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Compass className="w-5 h-5" style={{ color: primary }} />
          <span
            className="text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ color: primary }}
          >
            Outdoor Adventures Since 2008
          </span>
          <Mountain className="w-5 h-5" style={{ color: primary }} />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-tight mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-60">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-45 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: primary,
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${primary}33`,
              color: fg,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
          {[
            { value: "200+", label: "Trails" },
            { value: "15K", label: "Explorers" },
            { value: "32", label: "Countries" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: primary }}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider opacity-50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[1]">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200L0 140L120 100L240 130L360 80L480 110L600 60L720 90L840 50L960 80L1080 40L1200 70L1320 55L1440 90L1440 200Z"
            fill={primary}
            fillOpacity="0.06"
          />
          <path
            d="M0 200L0 160L180 120L360 150L540 100L720 130L900 90L1080 110L1260 85L1440 120L1440 200Z"
            fill={primary}
            fillOpacity="0.04"
          />
        </svg>
      </div>
    </section>
  );
}
