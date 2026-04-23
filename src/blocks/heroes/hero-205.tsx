import type { BlockProps } from "@/blocks/types";
import { Gamepad2, Swords } from "lucide-react";

const glitchKeyframes = `
@keyframes glitchType205 {
  0% { width: 0 }
  100% { width: 100% }
}
@keyframes glitchBlink205 {
  0%, 100% { border-color: #0ff }
  50% { border-color: transparent }
}
@keyframes glitch205 {
  0%, 100% {
    text-shadow: 2px 0 #ff0040, -2px 0 #0ff;
    transform: translate(0);
  }
  20% {
    text-shadow: -3px 2px #ff0040, 3px -2px #0ff;
    transform: translate(-2px, 1px);
  }
  40% {
    text-shadow: 3px -1px #ff0040, -3px 1px #0ff;
    transform: translate(2px, -1px);
  }
  60% {
    text-shadow: -2px 3px #ff0040, 2px -3px #0ff;
    transform: translate(1px, 2px);
  }
  80% {
    text-shadow: 4px -2px #ff0040, -4px 2px #0ff;
    transform: translate(-1px, -2px);
  }
}
@keyframes scanline205 {
  0% { top: -100% }
  100% { top: 100% }
}
@keyframes fadeInGlitch205 {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes pulse205 {
  0%, 100% { opacity: 0.6 }
  50% { opacity: 1 }
}
`;

export default function Hero205(props: BlockProps) {
  const {
    theme,
    heading = "ENTER THE VOID",
    subheading = "Season 4 drops now. Are you ready to dominate?",
    bodyText = "Next-gen competitive gaming awaits. Join 2M+ players in the arena that never sleeps.",
    buttonText = "Play Now",
    buttonUrl = "#",
    secondaryButtonText = "Watch Trailer",
    secondaryButtonUrl = "#",
  } = props;

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
      style={{
        backgroundColor: theme?.background ?? "#0a0010",
        color: theme?.foreground ?? "#e0e0ff",
      }}
    >
      <style>{glitchKeyframes}</style>

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,255,255,0.03) 0px, transparent 2px, transparent 4px)",
        }}
      />
      {/* Moving scanline */}
      <div
        className="absolute left-0 right-0 h-1 pointer-events-none z-10 opacity-20"
        style={{
          background: "linear-gradient(transparent, #0ff, transparent)",
          animation: "scanline205 3s linear infinite",
          position: "absolute",
        }}
      />

      {/* Neon glow bg elements */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#ff0040" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#0ff" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded border text-xs font-mono uppercase tracking-widest mb-8"
          style={{
            borderColor: theme?.accent ?? "#0ff",
            color: theme?.accent ?? "#0ff",
            animation: "pulse205 2s ease-in-out infinite",
          }}
        >
          <Gamepad2 className="w-3.5 h-3.5" />
          Live Now
        </div>

        {/* Glitch typewriter heading */}
        <div className="inline-block mb-6">
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-black uppercase overflow-hidden whitespace-nowrap tracking-wider"
            style={{
              borderRight: "4px solid #0ff",
              width: "0",
              animation: "glitchType205 2s steps(15) 0.5s forwards, glitchBlink205 0.5s step-end infinite, glitch205 0.3s ease-in-out infinite 2.5s",
              color: theme?.foreground ?? "#ffffff",
            }}
          >
            {heading}
          </h1>
        </div>

        <p
          className="text-lg sm:text-2xl font-semibold mb-3 uppercase tracking-wide"
          style={{
            color: theme?.primary ?? "#ff0040",
            animation: "fadeInGlitch205 0.5s ease-out 3s both",
          }}
        >
          {subheading}
        </p>

        <p
          className="text-sm sm:text-base opacity-50 max-w-lg mx-auto mb-10 font-mono"
          style={{ animation: "fadeInGlitch205 0.5s ease-out 3.3s both" }}
        >
          {bodyText}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeInGlitch205 0.5s ease-out 3.6s both" }}
        >
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-black uppercase tracking-widest transition-transform hover:scale-105"
            style={{
              background: theme?.primary
                ? theme.primary
                : "linear-gradient(135deg, #ff0040, #ff4080)",
              color: "#ffffff",
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
            }}
          >
            <Swords className="w-4 h-4" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-bold uppercase tracking-widest border-2 transition-opacity hover:opacity-100 opacity-70"
            style={{
              borderColor: theme?.accent ?? "#0ff",
              color: theme?.accent ?? "#0ff",
              clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
            }}
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
