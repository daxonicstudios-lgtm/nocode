"use client";

import type { BlockProps } from "@/blocks/types";
import { Globe, ArrowRight, BookOpen, Award, Users, MessageCircle, GraduationCap } from "lucide-react";

export default function Hero365(props: BlockProps) {
  const {
    theme,
    heading = "Speak the World's Languages",
    subheading = "Polyglot Language School",
    bodyText = "Immersive, conversation-first language courses taught by native speakers. From absolute beginner to business fluency, we meet you where you are.",
    buttonText = "Free Placement Test",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "English", description: "General, Business & IELTS prep", value: "A1–C2", label: "Most Popular" },
      { title: "French", description: "Conversational, DELF/DALF prep", value: "A1–C1", label: "" },
      { title: "Spanish", description: "Latin American & European variants", value: "A1–B2", label: "" },
      { title: "Mandarin", description: "HSK prep & business Chinese", value: "A1–B2", label: "Growing Fast" },
      { title: "Arabic", description: "Modern Standard & dialects", value: "A1–B1", label: "" },
      { title: "Portuguese", description: "Brazilian & European Portuguese", value: "A1–B2", label: "" },
    ],
  } = props;

  const greetings = ["Hello", "Bonjour", "Hola", "你好", "مرحبا", "Olá", "Ciao", "Hallo"];

  const levels = [
    { code: "A1–A2", name: "Beginner", weeks: "8–12 weeks" },
    { code: "B1–B2", name: "Intermediate", weeks: "12–16 weeks" },
    { code: "C1–C2", name: "Advanced", weeks: "16–24 weeks" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbf5", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Floating greetings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {greetings.map((g, i) => (
          <span
            key={i}
            className="absolute text-lg sm:text-2xl font-light opacity-[0.05] select-none"
            style={{
              top: `${10 + (i * 12) % 80}%`,
              left: `${5 + (i * 15) % 90}%`,
              transform: `rotate(${-15 + i * 8}deg)`,
              color: theme?.primary ?? "#8b5cf6",
            }}
          >
            {g}
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}10`, color: theme?.primary ?? "#8b5cf6" }}
          >
            <Globe className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-4 tracking-tight">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 leading-relaxed max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105 text-white"
              style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
            >
              <GraduationCap className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border-2"
              style={{ borderColor: theme?.primary ?? "#8b5cf6", color: theme?.primary ?? "#8b5cf6" }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat with Us
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm opacity-50">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 5,000+ Students</span>
            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> 12 Languages</span>
            <span className="flex items-center gap-1"><Award className="w-4 h-4" /> CEFR Certified</span>
          </div>
        </div>

        {/* Level pathway */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {levels.map((level, i) => (
            <div
              key={i}
              className="relative p-5 rounded-2xl border text-center"
              style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}15`, backgroundColor: `${theme?.primary ?? "#8b5cf6"}04` }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: theme?.primary ?? "#8b5cf6" }}
              >
                {level.code}
              </div>
              <div className="font-semibold text-sm">{level.name}</div>
              <div className="text-xs opacity-40 mt-1">{level.weeks}</div>
              {i < 2 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 opacity-20" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Language grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {items.slice(0, 6).map((lang, i) => (
            <a
              key={i}
              href={buttonUrl}
              className="group p-4 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
              style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}12` }}
            >
              {lang.label && (
                <span
                  className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
                >
                  {lang.label}
                </span>
              )}
              <div className="text-lg font-bold mb-1">{lang.title}</div>
              <div className="text-xs opacity-40 mb-2">{lang.description}</div>
              <div
                className="text-xs font-bold"
                style={{ color: theme?.primary ?? "#8b5cf6" }}
              >
                Levels {lang.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
