"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Users, Award, Play, ArrowRight } from "lucide-react";

export default function Hero283(props: BlockProps) {
  const {
    theme,
    heading = "Learn Without Limits",
    subheading = "Online Courses for Everyone",
    bodyText = "Master new skills from world-class instructors. Our bite-sized lessons fit your schedule, with certificates to prove your expertise.",
    buttonText = "Browse Courses",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { title: "200+", description: "Courses", icon: "book" },
      { title: "15K", description: "Students", icon: "users" },
      { title: "95%", description: "Completion Rate", icon: "award" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a1a2e" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${theme?.foreground ?? "#1a1a2e"} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
            style={{
              backgroundColor: theme?.primary ? `${theme.primary}12` : "rgba(67,56,202,0.07)",
              color: theme?.primary ?? "#4338ca",
            }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 max-w-xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#4338ca" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold border transition-colors"
              style={{ borderColor: theme?.primary ? `${theme.primary}30` : "rgba(67,56,202,0.2)", color: theme?.primary ?? "#4338ca" }}
            >
              <Play className="w-4 h-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="max-w-2xl mx-auto rounded-2xl p-6 grid grid-cols-3 gap-6"
          style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(67,56,202,0.03)" }}
        >
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#4338ca" }}>
                {item.title}
              </p>
              <p className="text-xs sm:text-sm opacity-50 mt-1">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="max-w-lg mx-auto mt-12 space-y-4">
          {["Web Development", "Data Science", "UX Design"].map((course, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-sm opacity-60 w-32 shrink-0">{course}</span>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(67,56,202,0.08)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${[85, 72, 90][i]}%`,
                    backgroundColor: theme?.primary ?? "#4338ca",
                    opacity: 0.7 + i * 0.1,
                  }}
                />
              </div>
              <span className="text-xs font-semibold opacity-50 w-10">{[85, 72, 90][i]}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
