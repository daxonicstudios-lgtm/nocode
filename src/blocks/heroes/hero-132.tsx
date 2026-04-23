import type { BlockProps } from "@/blocks/types";
import { Gamepad2, Zap } from "lucide-react";

export default function Hero132(props: BlockProps) {
  const {
    theme,
    heading = "LEVEL UP YOUR GAME",
    subheading = "Next-gen gaming experiences await",
    bodyText = "Push boundaries with cutting-edge graphics, seamless multiplayer, and worlds that respond to every move you make. The future of gaming starts here.",
    buttonText = "Play Now",
    buttonUrl = "#",
    secondaryButtonText = "Watch Trailer",
    secondaryButtonUrl = "#",
  } = props;

  const primary = theme?.primary ?? "#00ff41";
  const accent = theme?.accent ?? "#ff0055";
  const bg = theme?.background ?? "#0d0d0d";
  const fg = theme?.foreground ?? "#ffffff";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      <style>{`
        @keyframes hero132-glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @keyframes hero132-glitch-skew {
          0% { transform: skew(0deg); }
          20% { transform: skew(-2deg); }
          40% { transform: skew(0.5deg); }
          60% { transform: skew(-0.5deg); }
          80% { transform: skew(2deg); }
          100% { transform: skew(0deg); }
        }
        @keyframes hero132-scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .hero132-glitch-text {
          animation: hero132-glitch-skew 4s infinite linear alternate-reverse;
        }
        .hero132-glitch-text::before,
        .hero132-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .hero132-glitch-text::before {
          color: ${accent};
          animation: hero132-glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
          opacity: 0.8;
        }
        .hero132-glitch-text::after {
          color: ${primary};
          animation: hero132-glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
          opacity: 0.8;
        }
      `}</style>

      {/* Scanline overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div
          className="absolute left-0 w-full h-[2px] opacity-10"
          style={{
            backgroundColor: primary,
            animation: "hero132-scanline 3s linear infinite",
          }}
        />
      </div>

      {/* CRT line pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${fg} 2px, ${fg} 4px)`,
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(${primary}44 1px, transparent 1px), linear-gradient(90deg, ${primary}44 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded mb-8 text-xs uppercase tracking-widest font-mono"
          style={{
            border: `1px solid ${primary}66`,
            color: primary,
          }}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>Press Start</span>
        </div>

        <h1
          className="hero132-glitch-text relative text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6 font-mono"
          data-text={heading}
        >
          {heading}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-mono mb-4"
          style={{ color: `${primary}bb` }}
        >
          {subheading}
        </p>

        <p className="text-sm sm:text-base max-w-2xl mx-auto mb-10 opacity-50 leading-relaxed font-mono">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold transition-all hover:scale-105"
            style={{
              backgroundColor: primary,
              color: bg,
              boxShadow: `0 0 20px ${primary}44, 0 0 40px ${primary}22`,
            }}
          >
            <Zap className="w-4 h-4" />
            {buttonText}
          </a>

          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold border transition-colors hover:opacity-80"
            style={{
              borderColor: `${accent}88`,
              color: accent,
            }}
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Score-like decorative element */}
        <div className="mt-16 flex items-center justify-center gap-8 font-mono text-xs opacity-30">
          <span>HP ████████░░ 80%</span>
          <span>|</span>
          <span>LVL 99</span>
          <span>|</span>
          <span>XP 14,280</span>
        </div>
      </div>
    </section>
  );
}
