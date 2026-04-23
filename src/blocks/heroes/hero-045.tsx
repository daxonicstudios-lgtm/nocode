import type { BlockProps } from "@/blocks/types";
import { Music, Play } from "lucide-react";

export default function Hero045(props: BlockProps) {
  const {
    theme,
    heading = "Feel the Beat",
    subheading = "Stream millions of tracks, discover emerging artists, and experience live performances like never before.",
    buttonText = "Start Listening",
    buttonUrl = "#",
    secondaryButtonText = "Explore Events",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Equalizer bars */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 sm:gap-1.5 opacity-15 px-4">
        {Array.from({ length: 40 }).map((_, i) => {
          const heights = [40, 70, 30, 90, 55, 80, 25, 65, 95, 45, 75, 35, 85, 50, 60, 88, 28, 72, 42, 68];
          const h = heights[i % heights.length];
          return (
            <div
              key={i}
              className="w-1 sm:w-1.5 rounded-t-sm"
              style={{
                height: `${h}px`,
                backgroundColor: theme?.primary ?? "#a855f7",
                animation: `eqPulse ${1.2 + (i % 5) * 0.3}s ease-in-out infinite alternate`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes eqPulse {
          0% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
        }
      `}</style>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <Music className="w-10 h-10" style={{ color: theme?.primary ?? "#a855f7" }} />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg opacity-50 leading-relaxed max-w-lg mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#a855f7" }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base hover:opacity-90 transition-opacity"
          >
            <Play className="w-5 h-5 fill-current" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base border border-white/20 hover:border-white/40 transition-colors"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
