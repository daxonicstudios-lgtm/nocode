import type { BlockProps } from "@/blocks/types";
import { Eye, ArrowRight } from "lucide-react";

export default function Hero140(props: BlockProps) {
  const {
    theme,
    heading = "What Lurks Beneath",
    subheading = "Some secrets are better left undiscovered",
    bodyText = "Dive into gripping tales of suspense, deception, and the unknown. Our collection of mystery and thriller titles will keep you on the edge until the very last page.",
    buttonText = "Enter If You Dare",
    buttonUrl = "#",
    secondaryButtonText = "Browse Collection",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#8b0000";
  const accent = theme?.accent ?? "#4a0e0e";
  const bg = theme?.background ?? "#0a0a0a";
  const fg = theme?.foreground ?? "#d4d4d4";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        @keyframes hero140-smoke1 {
          0% { transform: translateY(0) scaleX(1); opacity: 0.07; }
          50% { transform: translateY(-80px) scaleX(1.5); opacity: 0.03; }
          100% { transform: translateY(-160px) scaleX(1); opacity: 0; }
        }
        @keyframes hero140-smoke2 {
          0% { transform: translateY(0) scaleX(1.2); opacity: 0.05; }
          50% { transform: translateY(-100px) scaleX(1.8); opacity: 0.025; }
          100% { transform: translateY(-200px) scaleX(1); opacity: 0; }
        }
        @keyframes hero140-fog {
          0% { transform: translateX(-10%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }
        @keyframes hero140-flicker {
          0%, 100% { opacity: 1; }
          92% { opacity: 1; }
          93% { opacity: 0.6; }
          94% { opacity: 1; }
          96% { opacity: 0.8; }
          97% { opacity: 1; }
        }
      `}</style>

      {/* Smoke/fog layers */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-full h-[50%]"
          style={{
            background: `radial-gradient(ellipse 120% 50% at 50% 100%, ${fg}08 0%, transparent 70%)`,
            animation: "hero140-fog 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-[10%] w-[40%] h-[30%] rounded-full blur-3xl"
          style={{
            backgroundColor: `${fg}06`,
            animation: "hero140-smoke1 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 right-[15%] w-[35%] h-[25%] rounded-full blur-3xl"
          style={{
            backgroundColor: `${fg}05`,
            animation: "hero140-smoke2 14s ease-in-out infinite 3s",
          }}
        />
        <div
          className="absolute bottom-0 left-[30%] w-[50%] h-[20%] rounded-full blur-3xl"
          style={{
            backgroundColor: `${primary}08`,
            animation: "hero140-smoke1 12s ease-in-out infinite 5s",
          }}
        />
      </div>

      {/* Dark vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, transparent 30%, ${bg} 80%)`,
        }}
      />

      {/* Faint red top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${primary}15 0%, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 mb-8"
          style={{
            animation: "hero140-flicker 5s ease-in-out infinite",
          }}
        >
          <Eye className="w-5 h-5" style={{ color: primary }} />
          <span
            className="text-xs uppercase tracking-[0.3em] font-medium"
            style={{ color: `${primary}cc` }}
          >
            Mystery &amp; Thriller
          </span>
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none mb-6"
          style={{
            textShadow: `0 0 40px ${primary}22`,
          }}
        >
          {heading}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-light italic mb-6"
          style={{ color: `${fg}66` }}
        >
          {subheading}
        </p>

        <div
          className="w-8 h-[1px] mx-auto mb-6"
          style={{ backgroundColor: `${primary}66` }}
        />

        <p className="text-sm sm:text-base max-w-xl mx-auto mb-12 opacity-35 leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 text-sm uppercase tracking-widest font-bold transition-transform hover:scale-105"
            style={{
              backgroundColor: primary,
              color: "#ffffff",
              boxShadow: `0 0 30px ${primary}33`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 text-sm uppercase tracking-widest font-bold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${fg}15`,
              color: `${fg}77`,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Atmospheric tagline */}
        <p
          className="mt-20 text-xs uppercase tracking-[0.4em] opacity-20"
          style={{ animation: "hero140-flicker 7s ease-in-out infinite 2s" }}
        >
          Not everything is as it seems
        </p>
      </div>
    </section>
  );
}
