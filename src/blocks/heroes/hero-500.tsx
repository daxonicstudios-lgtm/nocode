"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, Blocks, Layers, Palette, Code, Rocket, ArrowRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero500(props: BlockProps) {
  const {
    theme,
    heading = "Component #500. And We're Just Getting Started.",
    subheading = "A Milestone Worth Celebrating",
    bodyText = "Five hundred production-ready hero components. Each one unique, responsive, and theme-aware. Built to power the next generation of no-code websites.",
    buttonText = "Explore All Components",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "500", description: "Hero Components", icon: "blocks" },
      { title: "128", description: "Categories Planned", icon: "layers" },
      { title: "15,780", description: "Total Target", icon: "palette" },
      { title: "100%", description: "Mobile-First", icon: "code" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    blocks: <Blocks className="w-5 h-5" />,
    layers: <Layers className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
    code: <Code className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#030712", color: theme?.foreground ?? "#f9fafb" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Celebratory gradient mesh */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, ${theme?.primary ?? "#f59e0b"}40, transparent 40%),
            radial-gradient(circle at 80% 80%, ${theme?.accent ?? "#ec4899"}40, transparent 40%),
            radial-gradient(circle at 50% 50%, #6366f140, transparent 50%)
          `,
        }}
      />

      {/* Floating sparkle dots */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            top: `${(i * 13 + 7) % 95}%`,
            left: `${(i * 19 + 3) % 97}%`,
            backgroundColor: i % 3 === 0
              ? theme?.primary ?? "#f59e0b"
              : i % 3 === 1
              ? theme?.accent ?? "#ec4899"
              : "#6366f1",
            opacity: 0.15 + (i % 5) * 0.05,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        {/* Giant number */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.4em]"
              style={{ color: theme?.primary ?? "#f59e0b" }}
            >
              {subheading}
            </span>
            <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
          </div>

          {/* Massive 500 */}
          <div className="relative mb-8">
            <p
              className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none tracking-tighter select-none"
              style={{
                background: `linear-gradient(135deg, ${theme?.primary ?? "#f59e0b"}, ${theme?.accent ?? "#ec4899"}, #6366f1)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              500
            </p>
            <div className="absolute inset-0 flex items-center justify-center">
              <p
                className="text-[120px] sm:text-[180px] lg:text-[240px] font-black leading-none tracking-tighter select-none blur-[60px] opacity-30"
                style={{ color: theme?.primary ?? "#f59e0b" }}
              >
                500
              </p>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-10 max-w-2xl mx-auto">
            {bodyText}
          </p>

          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold text-sm transition-transform hover:scale-105 shadow-2xl"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#f59e0b"}, ${theme?.accent ?? "#ec4899"})`,
            }}
          >
            <Rocket className="w-4 h-4" />
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats counter cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {items.map((item, i) => {
            const numericValue = parseInt(item.title?.replace(/[^0-9]/g, "") ?? "0", 10);
            const hasSuffix = (item.title ?? "").includes("%");
            return (
              <div
                key={i}
                className="text-center p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#f59e0b"}20`,
                    color: theme?.primary ?? "#f59e0b",
                  }}
                >
                  {iconMap[item.icon ?? "blocks"]}
                </div>
                <p className="text-2xl sm:text-3xl font-black mb-1">
                  <AnimatedCounter target={numericValue} suffix={hasSuffix ? "%" : "+"} />
                </p>
                <p className="text-xs opacity-40">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Celebration timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-px flex-1 bg-white/10" />
            <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <span className="text-xs uppercase tracking-widest opacity-40">The Journey</span>
            <Star className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center">
            {[
              { num: "001", label: "First Hero" },
              { num: "100", label: "Milestone" },
              { num: "250", label: "Halfway" },
              { num: "400", label: "Closing In" },
              { num: "500", label: "This One" },
            ].map((step, i) => (
              <div key={step.num} className="py-3">
                <p
                  className="text-lg font-bold mb-0.5"
                  style={{
                    color: i === 4 ? theme?.primary ?? "#f59e0b" : undefined,
                    opacity: i === 4 ? 1 : 0.5,
                  }}
                >
                  #{step.num}
                </p>
                <p className="text-[10px] opacity-30">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xs uppercase tracking-[0.3em] opacity-20">
            Every component hand-crafted. Every pixel intentional. Every user empowered.
          </p>
        </div>
      </div>
    </section>
  );
}
