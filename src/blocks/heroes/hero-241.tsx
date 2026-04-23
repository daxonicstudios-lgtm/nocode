"use client";

import type { BlockProps } from "@/blocks/types";
import { Cpu, Sparkles, Zap } from "lucide-react";

export default function Hero241(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Intelligence is Here",
    subheading = "AI-Powered Platform",
    bodyText = "Harness the power of next-generation artificial intelligence to automate workflows, generate insights, and scale your business beyond human limits.",
    buttonText = "Start Building Free",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "10B+", description: "Parameters trained" },
      { title: "99.7%", description: "Accuracy rate" },
      { title: "50ms", description: "Avg response time" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: theme?.background ?? "#0a0a1a", color: theme?.foreground ?? "#e2e8f0" }}
    >
      {/* Animated gradient mesh */}
      <style>{`
        @keyframes hero241mesh1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(10%, -15%) scale(1.1); }
          50% { transform: translate(-5%, 10%) scale(0.95); }
          75% { transform: translate(-10%, -5%) scale(1.05); }
        }
        @keyframes hero241mesh2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          25% { transform: translate(-15%, 10%) scale(1.15); }
          50% { transform: translate(10%, -10%) scale(0.9); }
          75% { transform: translate(5%, 15%) scale(1.1); }
        }
        @keyframes hero241mesh3 {
          0%, 100% { transform: translate(0%, 0%) scale(1.05); }
          33% { transform: translate(15%, 10%) scale(0.95); }
          66% { transform: translate(-10%, -15%) scale(1.1); }
        }
        @keyframes hero241mesh4 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(-20%, 10%) scale(1.2); }
        }
      `}</style>

      <div className="absolute inset-0">
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{
            background: `radial-gradient(circle, ${theme?.primary ?? "#7c3aed"}, transparent)`,
            top: "-10%",
            left: "-10%",
            animation: "hero241mesh1 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-35"
          style={{
            background: `radial-gradient(circle, ${theme?.accent ?? "#06b6d4"}, transparent)`,
            top: "30%",
            right: "-5%",
            animation: "hero241mesh2 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-[110px] opacity-30"
          style={{
            background: `radial-gradient(circle, #ec4899, transparent)`,
            bottom: "-10%",
            left: "30%",
            animation: "hero241mesh3 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-[90px] opacity-25"
          style={{
            background: `radial-gradient(circle, #10b981, transparent)`,
            top: "50%",
            left: "10%",
            animation: "hero241mesh4 20s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
            style={{
              borderColor: `${theme?.primary ?? "#7c3aed"}44`,
              backgroundColor: `${theme?.primary ?? "#7c3aed"}15`,
              color: theme?.primary ?? "#a78bfa",
            }}
          >
            <Sparkles className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 opacity-70 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#7c3aed",
                color: "#ffffff",
                boxShadow: `0 10px 40px ${theme?.primary ?? "#7c3aed"}40`,
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                {buttonText}
              </span>
            </a>
            <a
              href={secondaryButtonUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg border transition-all hover:scale-105"
              style={{ borderColor: `${theme?.foreground ?? "#e2e8f0"}30` }}
            >
              {secondaryButtonText}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {items.map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold mb-1"
                  style={{ color: theme?.primary ?? "#a78bfa" }}
                >
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm opacity-50">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-2xl border"
            style={{
              borderColor: `${theme?.foreground ?? "#e2e8f0"}15`,
              backgroundColor: `${theme?.foreground ?? "#e2e8f0"}08`,
            }}
          >
            <Cpu className="w-5 h-5 opacity-50" />
            <span className="text-sm opacity-50">Trusted by 2,400+ AI teams worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
