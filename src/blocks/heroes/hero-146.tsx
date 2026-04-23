import type { BlockProps } from "@/blocks/types";
import { Trophy, ArrowRight, Flame } from "lucide-react";

export default function Hero146(props: BlockProps) {
  const {
    theme,
    heading = "Push Beyond Your Limits",
    subheading = "Elite athletic training for champions",
    bodyText = "Train with world-class coaches, access state-of-the-art facilities, and join a community of athletes who refuse to settle. Your next personal record starts here.",
    buttonText = "Start Training",
    buttonUrl = "#",
    secondaryButtonText = "View Programs",
    secondaryButtonUrl = "#",
  } = props;

  const bg = theme?.background ?? "#0c0c0c";
  const fg = theme?.foreground ?? "#f5f5f5";
  const primary = theme?.primary ?? "#ef4444";
  const accent = theme?.accent ?? "#f97316";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Diagonal stripe pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stripes146" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="8" height="20" fill={fg} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stripes146)" />
        </svg>
      </div>

      {/* Bold diagonal slash */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${primary}15 40%, ${primary}15 42%, transparent 42%)`,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, transparent 44%, ${accent}10 44%, ${accent}10 45%, transparent 45%)`,
        }}
      />

      {/* Top red accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{ background: `linear-gradient(90deg, ${primary}, ${accent})` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-black uppercase tracking-[0.2em] mb-8"
              style={{ backgroundColor: primary, color: "#ffffff" }}
            >
              <Flame className="w-4 h-4" />
              <span>Season 2026</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6">
              {heading}
            </h1>

            <p className="text-lg sm:text-xl font-medium uppercase tracking-wide mb-4 opacity-70">
              {subheading}
            </p>

            <p className="text-base sm:text-lg max-w-xl mb-10 opacity-50 leading-relaxed normal-case">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-10 py-4 text-base font-black uppercase tracking-wider transition-transform hover:scale-105 skew-x-[-4deg]"
                style={{ backgroundColor: primary, color: "#ffffff" }}
              >
                <span className="skew-x-[4deg] inline-flex items-center gap-2">
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center gap-2 px-10 py-4 text-base font-bold uppercase tracking-wider border-2 transition-colors hover:opacity-80 skew-x-[-4deg]"
                style={{ borderColor: fg, color: fg }}
              >
                <span className="skew-x-[4deg]">{secondaryButtonText}</span>
              </a>
            </div>
          </div>

          {/* Right side: large trophy icon */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <div className="relative">
              <Trophy className="w-48 h-48 opacity-10" style={{ color: primary }} />
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: primary }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-0"
        style={{ background: `linear-gradient(to top, ${bg}, transparent)` }}
      />
    </section>
  );
}
