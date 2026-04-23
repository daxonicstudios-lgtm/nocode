"use client";

import type { BlockProps } from "@/blocks/types";
import { Rocket, ArrowRight } from "lucide-react";

export default function Hero436(props: BlockProps) {
  const {
    theme,
    heading = "Launch Into the Future of Computing",
    subheading = "Next-Gen Infrastructure",
    bodyText = "Harness distributed cloud computing with our particle-scale architecture. Every node works together to deliver unmatched performance.",
    buttonText = "Launch Now",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#3b82f6";

  // Generate deterministic dot positions
  const dots = Array.from({ length: 60 }, (_, i) => ({
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    delay: `${(i * 0.3) % 5}s`,
    size: (i % 3) + 1,
  }));

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030712", color: theme?.foreground ?? "#f9fafb" }}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      <style>{`
        @keyframes hero436-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes hero436-drift {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100vh); }
        }
        .hero436-dot {
          animation: hero436-twinkle var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }
        @keyframes hero436-glow {
          0%, 100% { box-shadow: 0 0 20px var(--glow-color); }
          50% { box-shadow: 0 0 60px var(--glow-color), 0 0 100px var(--glow-color); }
        }
        .hero436-glow-ring {
          animation: hero436-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Particle field */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="hero436-dot absolute rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: i % 5 === 0 ? primaryColor : theme?.foreground ?? "#ffffff",
              "--delay": dot.delay,
              "--dur": `${2 + (i % 4)}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(90deg, ${primaryColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-10">
        {/* Glowing icon */}
        <div className="flex justify-center">
          <div
            className="hero436-glow-ring w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor,
              "--glow-color": `${primaryColor}40`,
            } as React.CSSProperties}
          >
            <Rocket className="w-10 h-10" />
          </div>
        </div>

        <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase opacity-50">
          {subheading}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto">
          {heading}
        </h1>

        <p className="text-lg md:text-xl opacity-50 max-w-2xl mx-auto leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: primaryColor, boxShadow: `0 0 30px ${primaryColor}50` }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Bottom connector nodes */}
        <div className="flex justify-center items-center gap-4 pt-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: primaryColor,
                  opacity: 0.3 + i * 0.15,
                  boxShadow: `0 0 8px ${primaryColor}60`,
                }}
              />
              {i < 4 && (
                <div className="w-8 h-px" style={{ backgroundColor: `${primaryColor}30` }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
