import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

export default function Hero020(props: BlockProps) {
  const {
    theme,
    heading = "Create Without Limits",
    subheading = "The next generation of website building is here. Powered by AI, designed for everyone.",
    buttonText = "Start Creating",
    buttonUrl = "#start",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#learn",
  } = props;

  const primaryColor = theme?.primary ?? "#8b5cf6";
  const accentColor = theme?.accent ?? "#ec4899";

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
      style={{ color: "#ffffff" }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, ${primaryColor}90 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 70%, ${accentColor}80 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%, ${primaryColor}50 0%, transparent 70%),
            linear-gradient(135deg, #0f0720 0%, #1a0a2e 50%, #0d1117 100%)
          `,
        }}
      />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <Sparkles className="w-7 h-7 text-white/70" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
          {heading}
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-12 leading-relaxed">
          {subheading}
        </p>

        {/* Glassmorphism CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base text-white transition-all hover:scale-105 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
              boxShadow: `0 8px 32px ${primaryColor}50`,
            }}
          >
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base text-white/90 transition-all hover:scale-105"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Subtle bottom note */}
        <p className="mt-14 text-xs text-white/30 tracking-wide">
          No credit card required. Free forever plan available.
        </p>
      </div>
    </section>
  );
}
