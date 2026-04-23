import type { BlockProps } from "@/blocks/types";
import { Play, Volume2 } from "lucide-react";

export default function Hero102(props: BlockProps) {
  const {
    theme,
    heading = "Experience the Difference",
    subheading = "Premium quality that speaks for itself",
    bodyText = "We craft digital experiences that captivate audiences and drive results. See what we can do for your brand.",
    buttonText = "Start Your Project",
    buttonUrl = "#",
    secondaryButtonText = "Learn More",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#000000", color: theme?.foreground ?? "#ffffff" }}
    >
      {/* Simulated video background with animated gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, ${theme?.primary ?? "#1e3a5f"}44 0%, transparent 50%),
              linear-gradient(225deg, ${theme?.accent ?? "#2d1b69"}44 0%, transparent 50%),
              linear-gradient(315deg, ${theme?.primary ?? "#1e3a5f"}22 0%, transparent 50%)
            `,
            animation: "pulse 8s ease-in-out infinite",
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Mute indicator */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="p-3 rounded-full backdrop-blur-sm transition-colors hover:bg-white/20"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          aria-label="Toggle sound"
        >
          <Volume2 className="w-5 h-5" style={{ color: theme?.foreground ?? "#ffffff" }} />
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
          {heading}
        </h1>

        <p className="text-xl sm:text-2xl font-light mb-3 opacity-80">
          {subheading}
        </p>

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 opacity-50 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="px-8 py-4 rounded-lg text-base font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#3b82f6",
              color: "#ffffff",
            }}
          >
            {buttonText}
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base font-semibold transition-colors hover:bg-white/10"
            style={{ color: theme?.foreground ?? "#ffffff" }}
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                border: `2px solid ${theme?.foreground ?? "#ffffff"}`,
              }}
            >
              <Play className="w-4 h-4 ml-0.5" />
            </span>
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10"
        style={{
          background: `linear-gradient(to top, ${theme?.background ?? "#000000"}, transparent)`,
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
