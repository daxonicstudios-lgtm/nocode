import type { BlockProps } from "@/blocks/types";
import { ArrowDown, BookOpen } from "lucide-react";

export default function Hero143(props: BlockProps) {
  const {
    theme,
    heading = "Annual Report",
    subheading = "Driving impact through innovation and sustainable growth across all sectors",
    bodyText = "This year marked a transformative chapter for our organization. Revenue grew 34%, we expanded into 12 new markets, and our community reached over 2 million members worldwide.",
    buttonText = "Read the Full Report",
    buttonUrl = "#",
    secondaryButtonText = "Download PDF",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#fafaf9";
  const fg = theme?.foreground ?? "#1c1917";
  const primary = theme?.primary ?? "#0f766e";
  const accent = theme?.accent ?? "#14b8a6";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Large background year */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[20rem] sm:text-[28rem] md:text-[36rem] font-black leading-none opacity-[0.04]"
          style={{ color: fg }}
        >
          2026
        </span>
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium uppercase tracking-widest mb-10"
          style={{
            backgroundColor: `${primary}15`,
            color: primary,
            border: `1px solid ${primary}30`,
          }}
        >
          <BookOpen className="w-4 h-4" />
          <span>Fiscal Year 2025–2026</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
          style={{ color: fg }}
        >
          {heading}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 max-w-3xl mx-auto opacity-70">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 max-w-3xl mx-auto">
          {[
            { value: "+34%", label: "Revenue Growth" },
            { value: "12", label: "New Markets" },
            { value: "2M+", label: "Community" },
            { value: "98%", label: "Retention" },
          ].map((stat) => (
            <div key={stat.label} className="py-4">
              <div
                className="text-3xl sm:text-4xl font-black"
                style={{ color: primary }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider opacity-50 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: primary, color: "#ffffff" }}
          >
            {buttonText}
            <ArrowDown className="w-5 h-5" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-colors hover:opacity-80"
            style={{ borderColor: `${primary}44`, color: primary }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Subtle corner accents */}
      <div
        className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 opacity-20 z-0"
        style={{ borderColor: primary }}
      />
      <div
        className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 opacity-20 z-0"
        style={{ borderColor: primary }}
      />
    </section>
  );
}
