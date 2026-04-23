import type { BlockProps } from "@/blocks/types";
import { Gamepad2, Zap, Trophy, Users, ArrowRight } from "lucide-react";

export default function Hero085(props: BlockProps) {
  const {
    theme,
    heading = "Enter a World Beyond Imagination",
    subheading = "Dive into breathtaking open-world adventures, compete in ranked arenas, and join millions of players worldwide.",
    buttonText = "Play Now",
    buttonUrl = "#",
    secondaryButtonText = "Watch Trailer",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-[80vh] flex items-center px-5 py-16 relative overflow-hidden"
    >
      {/* Neon glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#22d3ee" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-[100px] opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#f43f5e" }}
      />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Text side */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider border"
            style={{ borderColor: theme?.primary ?? "#22d3ee", color: theme?.primary ?? "#22d3ee" }}
          >
            <Zap className="w-4 h-4" />
            <span>Season 4 Live</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <span className="inline-flex items-center gap-1.5" style={{ color: theme?.primary ?? "#22d3ee" }}>
              <Users className="w-4 h-4" /> 2.4M active players
            </span>
            <span className="inline-flex items-center gap-1.5" style={{ color: theme?.accent ?? "#f43f5e" }}>
              <Trophy className="w-4 h-4" /> $500K prize pool
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-black font-bold text-base uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ backgroundColor: theme?.primary ?? "#22d3ee" }}
            >
              <Gamepad2 className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border font-bold text-base uppercase tracking-wider hover:bg-white/5 transition-colors"
              style={{ borderColor: theme?.accent ?? "#f43f5e", color: theme?.accent ?? "#f43f5e" }}
            >
              {secondaryButtonText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Game screenshot area */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Game screenshot"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-2xl border-2"
              style={{ borderColor: theme?.primary ?? "#22d3ee" }}
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl flex items-center justify-center relative overflow-hidden border-2"
              style={{
                borderColor: theme?.primary ?? "#22d3ee",
                background: `linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a)`,
              }}
            >
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(${theme?.primary ?? "#22d3ee"} 1px, transparent 1px), linear-gradient(90deg, ${theme?.primary ?? "#22d3ee"} 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 text-center">
                <Gamepad2 className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#22d3ee" }} />
                <p className="text-xl font-black uppercase tracking-wider" style={{ color: theme?.primary ?? "#22d3ee" }}>
                  Nexus Arena
                </p>
                <p className="text-sm opacity-50 mt-2">4K Ultra HD Gameplay</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase"
                  style={{ backgroundColor: `${theme?.accent ?? "#f43f5e"}33`, color: theme?.accent ?? "#f43f5e" }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: theme?.accent ?? "#f43f5e" }} />
                  Live Tournament
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
