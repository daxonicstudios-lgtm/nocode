import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero101(props: BlockProps) {
  const {
    theme,
    heading = "Build Something Extraordinary",
    subheading = "The future belongs to those who create it",
    bodyText = "Join thousands of innovators who are transforming ideas into reality with our cutting-edge platform. No limits, no boundaries.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, ${theme?.primary ?? "#6366f1"}33 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, ${theme?.accent ?? "#8b5cf6"}22 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, ${theme?.primary ?? "#6366f1"}1a 0%, transparent 40%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            backgroundColor: `${theme?.primary ?? "#6366f1"}1a`,
            color: theme?.primary ?? "#6366f1",
            border: `1px solid ${theme?.primary ?? "#6366f1"}33`,
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Now Available Worldwide</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          {heading}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-light mb-4 opacity-70"
        >
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#6366f1",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${theme?.foreground ?? "#ffffff"}33`,
              color: theme?.foreground ?? "#ffffff",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background: `linear-gradient(to top, ${theme?.background ?? "#0a0a0a"}, transparent)`,
        }}
      />
    </section>
  );
}
