import type { BlockProps } from "@/blocks/types";
import { BookOpen, Star, ArrowRight } from "lucide-react";

export default function Hero135(props: BlockProps) {
  const {
    theme,
    heading = "Learning Made Joyful",
    subheading = "Where curious minds grow every day",
    bodyText = "Interactive lessons, creative activities, and personalized learning paths designed to inspire children aged 4 to 12. Watch them discover their potential through play.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "See How It Works",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#6c5ce7";
  const accent = theme?.accent ?? "#fd79a8";
  const bg = theme?.background ?? "#fffef9";
  const fg = theme?.foreground ?? "#2d3436";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Blob shapes */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-3xl opacity-20 z-0"
        style={{ backgroundColor: primary }}
      />
      <div
        className="absolute top-1/3 -right-16 w-48 h-48 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-15 z-0"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute -bottom-10 left-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-15 z-0"
        style={{ backgroundColor: "#ffeaa7" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-3xl opacity-10 z-0"
        style={{ backgroundColor: "#55efc4" }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[
          { top: "15%", left: "10%", size: "w-3 h-3", color: accent, delay: "0s" },
          { top: "25%", left: "85%", size: "w-4 h-4", color: primary, delay: "1s" },
          { top: "70%", left: "15%", size: "w-2 h-2", color: "#ffeaa7", delay: "0.5s" },
          { top: "60%", left: "80%", size: "w-3 h-3", color: "#55efc4", delay: "1.5s" },
          { top: "80%", left: "50%", size: "w-2 h-2", color: accent, delay: "2s" },
        ].map((dot, i) => (
          <div
            key={i}
            className={`absolute ${dot.size} rounded-full animate-bounce`}
            style={{
              top: dot.top,
              left: dot.left,
              backgroundColor: dot.color,
              animationDelay: dot.delay,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-1 mb-6">
          {[accent, "#ffeaa7", "#55efc4", primary, accent].map((c, i) => (
            <Star
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5"
              style={{ color: c }}
              fill={c}
            />
          ))}
        </div>

        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: `${primary}15`,
            color: primary,
          }}
        >
          <BookOpen className="w-4 h-4" />
          <span>Ages 4 to 12</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
          <span>{heading.split(" ").slice(0, -1).join(" ")} </span>
          <span style={{ color: primary }}>{heading.split(" ").slice(-1)}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 opacity-60">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 opacity-45 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: primary,
              color: "#ffffff",
              boxShadow: `0 8px 30px ${primary}44`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-colors hover:opacity-80"
            style={{
              border: `2px solid ${accent}44`,
              color: fg,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs opacity-40">
          <span>Trusted by 50,000+ families</span>
          <span className="hidden sm:inline">|</span>
          <span>Award-winning curriculum</span>
          <span className="hidden sm:inline">|</span>
          <span>100% ad-free</span>
        </div>
      </div>
    </section>
  );
}
