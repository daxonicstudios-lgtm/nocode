"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Star, Users, Award, Play, ChevronRight, GraduationCap, Clock } from "lucide-react";

export default function Hero317(props: BlockProps) {
  const {
    theme,
    heading = "Learn Without Limits",
    subheading = "Africa's Largest E-Learning Platform",
    bodyText = "Access 5,000+ courses from industry experts. Learn at your own pace, earn certificates, and advance your career from anywhere.",
    buttonText = "Browse Courses",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#0ea5e9";
  const bgColor = theme?.background || "#ffffff";
  const fgColor = theme?.foreground || "#0f172a";

  const categories = items.length > 0 ? items : [
    { title: "Business & Finance", description: "342 courses", icon: "award", value: "4.8" },
    { title: "Software Development", description: "518 courses", icon: "book", value: "4.9" },
    { title: "Design & Creative", description: "276 courses", icon: "star", value: "4.7" },
    { title: "Data Science & AI", description: "194 courses", icon: "graduation", value: "4.9" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    award: <Award className="w-5 h-5" />,
    book: <BookOpen className="w-5 h-5" />,
    star: <Star className="w-5 h-5" />,
    graduation: <GraduationCap className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(${fgColor} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* Top section */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
          >
            <GraduationCap className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            {heading}
          </h1>

          <p className="text-base md:text-lg opacity-60 max-w-xl mx-auto leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-lg"
              style={{
                backgroundColor: primaryColor,
                boxShadow: `0 8px 24px ${primaryColor}30`,
              }}
            >
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border transition-opacity hover:opacity-70"
              style={{ borderColor: `${fgColor}15` }}
            >
              <Play className="w-4 h-4" style={{ color: primaryColor }} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl border p-6 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ backgroundColor: `${fgColor}02`, borderColor: `${fgColor}08` }}
        >
          {[
            { icon: <BookOpen className="w-5 h-5" />, num: "5,000+", label: "Courses" },
            { icon: <Users className="w-5 h-5" />, num: "1.2M", label: "Students" },
            { icon: <Award className="w-5 h-5" />, num: "850+", label: "Instructors" },
            { icon: <Star className="w-5 h-5" />, num: "4.8/5", label: "Avg Rating" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
              >
                {stat.icon}
              </div>
              <div>
                <div className="text-lg font-bold">{stat.num}</div>
                <div className="text-xs opacity-50">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Course category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group rounded-2xl border p-5 cursor-pointer transition-all hover:shadow-lg"
              style={{
                backgroundColor: `${fgColor}02`,
                borderColor: `${fgColor}08`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}
              >
                {iconMap[cat.icon || "book"] || <BookOpen className="w-5 h-5" />}
              </div>
              <h3 className="font-bold text-sm mb-1">{cat.title}</h3>
              <p className="text-xs opacity-50 mb-3">{cat.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#fbbf24" }} />
                  <span className="text-xs font-semibold">{cat.value}</span>
                </div>
                <div className="flex items-center gap-1 text-xs opacity-40">
                  <Clock className="w-3 h-3" />
                  Self-paced
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
