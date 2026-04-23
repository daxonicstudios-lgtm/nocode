import type { BlockProps } from "@/blocks/types";
import { Mountain, ArrowRight, Compass } from "lucide-react";

export default function Hero150(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Summit",
    subheading = "Guided hiking adventures through untouched wilderness",
    bodyText = "From weekend trail walks to multi-day alpine expeditions, our experienced guides lead you through the most breathtaking landscapes on Earth. Disconnect from the noise and reconnect with nature.",
    buttonText = "Plan Your Trek",
    buttonUrl = "#",
    secondaryButtonText = "View Trail Map",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#0f172a";
  const fg = theme?.foreground ?? "#f1f5f9";
  const primary = theme?.primary ?? "#22c55e";
  const accent = theme?.accent ?? "#4ade80";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Sky gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, #0c1220 0%, ${bg} 60%, ${bg} 100%)`,
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {[
          { top: "5%", left: "10%", size: 2 },
          { top: "8%", left: "30%", size: 1.5 },
          { top: "3%", left: "55%", size: 1 },
          { top: "12%", left: "72%", size: 2 },
          { top: "6%", left: "88%", size: 1 },
          { top: "15%", left: "20%", size: 1 },
          { top: "10%", left: "45%", size: 1.5 },
          { top: "18%", left: "65%", size: 1 },
          { top: "4%", left: "80%", size: 2 },
          { top: "20%", left: "15%", size: 1 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              backgroundColor: `${fg}88`,
            }}
          />
        ))}
      </div>

      {/* Layered mountain silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 z-[1]">
        {/* Far mountain layer (darkest, tallest) */}
        <svg
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          className="w-full h-40 sm:h-52 md:h-64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,300 L0,180 L100,120 L200,160 L300,80 L400,130 L500,60 L600,100 L700,40 L800,90 L900,50 L1000,110 L1100,70 L1200,140 L1200,300 Z"
            fill="#0d1424"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        {/* Mid mountain layer */}
        <svg
          viewBox="0 0 1200 250"
          preserveAspectRatio="none"
          className="w-full h-32 sm:h-40 md:h-52"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,250 L0,160 L80,130 L180,170 L280,100 L380,140 L500,80 L620,120 L720,70 L830,110 L940,90 L1050,130 L1150,100 L1200,120 L1200,250 Z"
            fill="#111b30"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        {/* Near mountain layer (lightest shade) */}
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="w-full h-24 sm:h-32 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 L0,140 L120,110 L240,150 L360,90 L480,130 L600,100 L720,140 L840,105 L960,135 L1080,115 L1200,145 L1200,200 Z"
            fill="#162036"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[4]">
        {/* Foreground hill */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 md:h-28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 L0,80 Q300,40 600,70 Q900,100 1200,60 L1200,120 Z"
            fill={bg}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-32 md:pb-40">
        <div className="flex justify-center mb-6">
          <Mountain className="w-10 h-10 opacity-50" style={{ color: primary }} />
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: `${primary}15`,
            color: accent,
            border: `1px solid ${primary}33`,
          }}
        >
          <Compass className="w-4 h-4" />
          <span>2026 Season Now Open</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-60 max-w-2xl mx-auto">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-40 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#0f172a" }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium border transition-colors hover:opacity-80"
            style={{ borderColor: `${fg}33`, color: fg }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
