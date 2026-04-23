"use client";

import type { BlockProps } from "@/blocks/types";
import { GraduationCap, BookOpen, Award, Users, Play, Clock, Star, ArrowRight, BarChart } from "lucide-react";

export default function Hero390(props: BlockProps) {
  const {
    theme,
    heading = "Learn Without Limits, Grow Without Boundaries",
    subheading = "Learning Management System",
    bodyText = "Create, deliver, and track online courses with ease. Engage learners with interactive content, certifications, and real-time progress analytics.",
    buttonText = "Start Teaching",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Full-Stack Web Development", description: "42 lessons", value: "4.9", label: "1,280 students", icon: "code" },
      { title: "UX Design Fundamentals", description: "28 lessons", value: "4.8", label: "890 students", icon: "design" },
      { title: "Data Science with Python", description: "36 lessons", value: "4.7", label: "2,100 students", icon: "data" },
    ],
  } = props;

  const platformStats = [
    { icon: BookOpen, label: "Courses", value: "850+" },
    { icon: Users, label: "Students", value: "124K" },
    { icon: Award, label: "Certificates Issued", value: "48K" },
    { icon: Star, label: "Avg. Rating", value: "4.8" },
  ];

  const progressData = [
    { module: "Introduction", progress: 100 },
    { module: "Core Concepts", progress: 100 },
    { module: "Advanced Topics", progress: 72 },
    { module: "Final Project", progress: 15 },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Hero top */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary || "#2563eb"}10`, color: theme?.primary || "#2563eb" }}
          >
            <GraduationCap className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-lg opacity-60 mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#2563eb" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border-2 opacity-70 hover:opacity-100 transition-opacity"
              style={{ borderColor: `${theme?.foreground || "#000"}15` }}
            >
              <Play className="w-4 h-4" />
              Browse Courses
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {platformStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <stat.icon className="w-5 h-5 mb-1" style={{ color: theme?.primary || "#2563eb" }} />
                <span className="text-xl sm:text-2xl font-bold">{stat.value}</span>
                <span className="text-xs opacity-40">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Course cards + Progress + Certificate */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Course cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {items.map((course, i) => (
              <div
                key={i}
                className="rounded-xl border overflow-hidden transition-transform hover:scale-[1.02]"
                style={{ borderColor: `${theme?.foreground || "#000"}08` }}
              >
                {/* Course thumbnail placeholder */}
                <div
                  className="h-28 flex items-center justify-center relative"
                  style={{ backgroundColor: `${theme?.primary || "#2563eb"}${10 + i * 5}` }}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <Play
                      className="w-8 h-8 opacity-30"
                      style={{ color: theme?.primary || "#2563eb" }}
                    />
                  )}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 text-white">
                    <Clock className="w-3 h-3" />
                    {course.description}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 leading-snug">{course.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" style={{ color: "#f59e0b" }} />
                      <span className="text-xs font-medium">{course.value}</span>
                    </div>
                    <span className="text-[10px] opacity-40">{course.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column: Progress + Certificate */}
          <div className="space-y-4">
            {/* Student progress */}
            <div
              className="rounded-xl border p-5"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BarChart className="w-4 h-4" style={{ color: theme?.primary || "#2563eb" }} />
                <span className="font-semibold text-sm">Your Progress</span>
              </div>
              <div className="space-y-3">
                {progressData.map((mod, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="opacity-60">{mod.module}</span>
                      <span className="font-medium">{mod.progress}%</span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: `${theme?.foreground || "#000"}08` }}
                    >
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${mod.progress}%`,
                          backgroundColor: mod.progress === 100 ? "#10b981" : (theme?.primary || "#2563eb"),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate preview */}
            <div
              className="rounded-xl border p-5 text-center"
              style={{
                borderColor: `${theme?.primary || "#2563eb"}30`,
                background: `linear-gradient(135deg, ${theme?.primary || "#2563eb"}05, ${theme?.primary || "#2563eb"}10)`,
              }}
            >
              <Award
                className="w-10 h-10 mx-auto mb-3"
                style={{ color: theme?.primary || "#2563eb" }}
              />
              <div className="text-sm font-bold mb-1">Certificate of Completion</div>
              <div className="text-[10px] opacity-50 mb-3">Full-Stack Web Development</div>
              <div
                className="text-xs border-t pt-3 opacity-40"
                style={{ borderColor: `${theme?.foreground || "#000"}08` }}
              >
                Awarded upon course completion. Share on LinkedIn and add to your portfolio.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
