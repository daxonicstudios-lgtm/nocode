"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Layers } from "lucide-react";

export default function Hero306(props: BlockProps) {
  const {
    theme,
    heading = "Supercharge your workflow",
    subheading = "Next-Gen Development Platform",
    bodyText = "Write less code, ship more features. Our intelligent platform handles the complexity so your team can focus on innovation.",
    buttonText = "Request Early Access",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primary = theme?.primary ?? "#8b5cf6";
  const accent = theme?.accent ?? "#06b6d4";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#020617", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen flex items-center justify-center px-5 py-24 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: primary }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Animated gradient border card */}
        <div className="relative rounded-3xl p-[2px] overflow-hidden">
          {/* Rotating gradient border */}
          <div
            className="absolute inset-0 animate-[spin_4s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg, ${primary}, ${accent}, ${primary}, transparent, ${primary})`,
            }}
          />

          {/* Inner card */}
          <div
            className="relative rounded-3xl px-8 py-14 sm:px-14 sm:py-20"
            style={{ backgroundColor: theme?.background ?? "#020617" }}
          >
            <div className="text-center">
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{
                  backgroundColor: `${primary}15`,
                  color: primary,
                }}
              >
                <Layers className="w-7 h-7" />
              </div>

              {/* Badge */}
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
                style={{
                  border: `1px solid ${primary}30`,
                  color: primary,
                }}
              >
                {subheading}
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {heading}
              </h1>

              <p className="text-sm sm:text-base opacity-40 max-w-md mx-auto mb-10 leading-relaxed">
                {bodyText}
              </p>

              {/* CTA */}
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primary}, ${accent})`,
                  color: "#ffffff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg) scale(1.5); }
            to { transform: rotate(360deg) scale(1.5); }
          }
        `}</style>
      </div>
    </section>
  );
}
