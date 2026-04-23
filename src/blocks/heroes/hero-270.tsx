"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight, Star, Circle } from "lucide-react";

export default function Hero270(props: BlockProps) {
  const {
    theme,
    heading = "Make Something Wonderful",
    subheading = "Creativity Unleashed",
    bodyText = "Bring your boldest ideas to life with tools that match your ambition. Start creating today and see what you can achieve.",
    buttonText = "Start Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "10K+", description: "Active Users" },
      { title: "50M+", description: "Creations Made" },
      { title: "4.9/5", description: "User Rating" },
    ],
  } = props;

  return (
    <section
      className="relative overflow-hidden min-h-[85vh] flex items-center"
      style={{
        backgroundColor: theme?.background ?? "#0f0720",
        color: theme?.foreground ?? "#ffffff",
      }}
    >
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${theme?.primary ?? "#8b5cf6"}44 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${theme?.accent ?? "#ec4899"}33 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, #3b82f633 0%, transparent 60%),
            radial-gradient(circle at 70% 20%, #06b6d422 0%, transparent 40%)
          `,
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full animate-bounce opacity-40"
          style={{ backgroundColor: theme?.primary ?? "#8b5cf6", animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full animate-bounce opacity-30"
          style={{ backgroundColor: theme?.accent ?? "#ec4899", animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-[20%] left-[20%] w-4 h-4 rounded-full animate-bounce opacity-20"
          style={{ backgroundColor: "#3b82f6", animationDelay: "0.5s", animationDuration: "3.5s" }}
        />
        <div
          className="absolute top-[40%] right-[8%] w-2.5 h-2.5 rounded-full animate-bounce opacity-35"
          style={{ backgroundColor: "#06b6d4", animationDelay: "1.5s", animationDuration: "2.8s" }}
        />
        <div
          className="absolute bottom-[30%] right-[25%] w-3.5 h-3.5 rounded-full animate-bounce opacity-25"
          style={{ backgroundColor: theme?.primary ?? "#8b5cf6", animationDelay: "2s", animationDuration: "4.2s" }}
        />

        {/* Floating icons */}
        <Star
          className="absolute top-[18%] right-[30%] w-5 h-5 opacity-15 animate-pulse"
          style={{ color: theme?.accent ?? "#ec4899", animationDelay: "0.5s" }}
        />
        <Circle
          className="absolute bottom-[25%] left-[35%] w-6 h-6 opacity-10 animate-pulse"
          style={{ color: "#3b82f6", animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute top-[35%] left-[15%] w-5 h-5 opacity-15 animate-pulse"
          style={{ color: theme?.primary ?? "#8b5cf6", animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
          style={{
            background: `linear-gradient(135deg, ${theme?.primary ?? "#8b5cf6"}30, ${theme?.accent ?? "#ec4899"}30)`,
            border: `1px solid ${theme?.primary ?? "#8b5cf6"}33`,
          }}
        >
          <Sparkles className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
          {subheading}
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[1] tracking-tight mb-6">
          <span
            style={{
              background: `linear-gradient(135deg, ${theme?.foreground ?? "#ffffff"}, ${theme?.primary ?? "#8b5cf6"}, ${theme?.accent ?? "#ec4899"})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {heading}
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl opacity-50 max-w-2xl mx-auto leading-relaxed mb-10">
          {bodyText}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#8b5cf6"}, ${theme?.accent ?? "#ec4899"})`,
              color: "#fff",
              boxShadow: `0 8px 32px ${theme?.primary ?? "#8b5cf6"}44`,
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border transition-all hover:opacity-80"
            style={{
              borderColor: `${theme?.foreground ?? "#ffffff"}20`,
              color: theme?.foreground ?? "#ffffff",
            }}
          >
            Watch Demo
          </a>
        </div>

        {/* Stats */}
        <div
          className="inline-flex flex-wrap justify-center gap-8 sm:gap-12 px-8 py-5 rounded-2xl"
          style={{
            backgroundColor: `${theme?.foreground ?? "#ffffff"}08`,
            border: `1px solid ${theme?.foreground ?? "#ffffff"}10`,
            backdropFilter: "blur(10px)",
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-xl sm:text-2xl font-black">
                {item.title}
              </div>
              <div className="text-[10px] uppercase tracking-wider opacity-40 mt-1">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
