"use client";

import type { BlockProps } from "@/blocks/types";
import { Target, Award, TrendingUp, Calendar, Shield, ChevronRight } from "lucide-react";

export default function Hero466(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Mark",
    subheading = "Precision Archery for All Skill Levels",
    bodyText = "From first-timers to competitive archers, our indoor and outdoor ranges offer world-class equipment, expert coaching, and a welcoming community. Draw, aim, release.",
    buttonText = "Start Shooting",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Intro to Archery", description: "Equipment basics, stance, and first shots", label: "Beginner" },
      { title: "Recurve Program", description: "Olympic-style technique and form", label: "Intermediate" },
      { title: "Compound Mastery", description: "Advanced sighting and release mechanics", label: "Advanced" },
      { title: "Competition Prep", description: "Tournament scoring and mental game", label: "Elite" },
    ],
  } = props;

  const tournaments = [
    { name: "Spring Open", date: "May 10", type: "Indoor 18m" },
    { name: "City Championship", date: "June 7", type: "Outdoor 70m" },
    { name: "Youth Qualifier", date: "June 21", type: "Indoor 25m" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0F1923", color: theme?.foreground ?? "#E8EDF2" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Target ring decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px]">
        {[500, 400, 300, 200, 100].map((size, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: i === 4
                ? (theme?.primary ?? "#E63946") + "40"
                : (theme?.primary ?? "#E63946") + `${10 + i * 5}`,
            }}
          />
        ))}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
          style={{ backgroundColor: theme?.primary ?? "#E63946" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5" style={{ color: theme?.primary ?? "#E63946" }} />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: theme?.primary ?? "#E63946" }}
            >
              Bullseye Archery Range
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-xl opacity-70 mb-2">{subheading}</p>
          <p className="text-base opacity-50 mb-8">{bodyText}</p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#E63946" }}
            >
              <Target className="w-5 h-5" />
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border transition-opacity hover:opacity-80"
              style={{ borderColor: theme?.primary ? `${theme.primary}40` : "#E6394640", color: theme?.primary ?? "#E63946" }}
            >
              Free Trial Lesson
            </a>
          </div>

          {/* Program levels */}
          <div className="mb-10">
            <h3 className="text-sm font-bold uppercase tracking-wider opacity-50 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Program Levels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#E6394620" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme?.primary ?? "#E63946" }}
                      />
                      <h4 className="font-bold text-sm">{item.title}</h4>
                    </div>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: theme?.primary ? `${theme.primary}20` : "#E6394620",
                        color: theme?.primary ?? "#E63946",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs opacity-50 ml-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tournaments */}
          <div
            className="p-5 rounded-xl"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#E6394610" }}
          >
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" style={{ color: theme?.primary ?? "#E63946" }} />
              Upcoming Tournaments
            </h3>
            <div className="space-y-2">
              {tournaments.map((t, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 opacity-40" />
                    <span className="font-semibold text-sm">{t.name}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs opacity-50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {t.date}
                    </span>
                    <span>{t.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
