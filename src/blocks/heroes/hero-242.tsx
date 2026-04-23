"use client";

import type { BlockProps } from "@/blocks/types";
import { Star, Telescope, Rocket } from "lucide-react";

export default function Hero242(props: BlockProps) {
  const {
    theme,
    heading = "Explore the Infinite Cosmos",
    subheading = "Your Gateway to the Stars",
    bodyText = "Join thousands of astronomers, space enthusiasts, and scientists tracking celestial events, mapping constellations, and discovering the mysteries of deep space.",
    buttonText = "Begin Stargazing",
    buttonUrl = "#",
    secondaryButtonText = "View Star Map",
    secondaryButtonUrl = "#",
    items = [
      { title: "500K+", description: "Stars catalogued" },
      { title: "12,000", description: "Active observers" },
      { title: "340", description: "New discoveries" },
    ],
  } = props;

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: theme?.background ?? "#050514", color: theme?.foreground ?? "#e2e8f0" }}
    >
      <style>{`
        @keyframes hero242float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: var(--particle-opacity); }
          50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
        }
        @keyframes hero242twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes hero242drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, -15px); }
          50% { transform: translate(-10px, -30px); }
          75% { transform: translate(-20px, -10px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes hero242glow {
          0%, 100% { box-shadow: 0 0 4px 1px rgba(147,130,255,0.3); }
          50% { box-shadow: 0 0 12px 4px rgba(147,130,255,0.6); }
        }
      `}</style>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.x}%`,
              top: `${p.y}%`,
              backgroundColor: p.id % 5 === 0 ? (theme?.accent ?? "#c084fc") : "#ffffff",
              animation: `${p.id % 3 === 0 ? "hero242float" : p.id % 3 === 1 ? "hero242twinkle" : "hero242drift"} ${p.duration}s ease-in-out ${p.delay}s infinite`,
              ["--particle-opacity" as string]: p.opacity,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Nebula glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{
          background: `radial-gradient(circle, ${theme?.primary ?? "#7c3aed"}, transparent)`,
          top: "20%",
          right: "-10%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{
          background: `radial-gradient(circle, ${theme?.accent ?? "#06b6d4"}, transparent)`,
          bottom: "10%",
          left: "-5%",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-5 h-5" style={{ color: theme?.accent ?? "#fbbf24" }} />
            <span className="text-sm font-medium tracking-widest uppercase opacity-70">{subheading}</span>
            <Star className="w-5 h-5" style={{ color: theme?.accent ?? "#fbbf24" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-60 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                backgroundColor: theme?.primary ?? "#7c3aed",
                color: "#ffffff",
                boxShadow: `0 0 30px ${theme?.primary ?? "#7c3aed"}50`,
              }}
            >
              <Rocket className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base border transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{ borderColor: `${theme?.foreground ?? "#e2e8f0"}25` }}
            >
              <Telescope className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#a78bfa" }}>
                  {item.title}
                </div>
                <div className="text-xs opacity-50 mt-1">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
