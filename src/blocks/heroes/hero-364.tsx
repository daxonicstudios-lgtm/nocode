"use client";

import type { BlockProps } from "@/blocks/types";
import { Trophy, ArrowRight, Users, Target, Timer, Zap, Medal, TrendingUp } from "lucide-react";

export default function Hero364(props: BlockProps) {
  const {
    theme,
    heading = "Train Like a Champion",
    subheading = "Apex Sports Academy",
    bodyText = "World-class coaching, cutting-edge facilities, and a proven development pathway. Whether you are a beginner or a competitive athlete, we build champions at every level.",
    buttonText = "Start Your Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance Training", description: "Speed, agility & strength programs", icon: "speed", value: "Ages 8+" },
      { title: "Team Sports", description: "Football, basketball, volleyball & more", icon: "team", value: "All Levels" },
      { title: "Elite Development", description: "Competition prep & scholarship pathways", icon: "elite", value: "By Invite" },
      { title: "Youth Academy", description: "Fun-first fundamentals for young athletes", icon: "youth", value: "Ages 4–12" },
    ],
  } = props;

  const stats = [
    { number: "200+", label: "Athletes Trained" },
    { number: "15", label: "Pro Coaches" },
    { number: "92%", label: "Competition Win Rate" },
    { number: "3", label: "Olympic Alumni" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Dynamic diagonal stripe */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full opacity-[0.03] -skew-x-12 origin-top-right"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />
      {/* Energy glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full blur-[150px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-black uppercase tracking-widest mb-6"
              style={{ backgroundColor: theme?.primary ?? "#ef4444", color: "#ffffff" }}
            >
              <Zap className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] mb-6 uppercase tracking-tighter">
              {heading.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 2 ? (
                    <span style={{ color: theme?.primary ?? "#ef4444" }}>{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg opacity-40 leading-relaxed mb-8 max-w-md">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-black uppercase tracking-wider transition-transform hover:scale-105 text-white"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider border-2 transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#ef4444"}60`, color: theme?.primary ?? "#ef4444" }}
              >
                <Trophy className="w-4 h-4" />
                View Programs
              </a>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t" style={{ borderColor: `${theme?.primary ?? "#ef4444"}15` }}>
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-black" style={{ color: theme?.primary ?? "#ef4444" }}>
                    {stat.number}
                  </div>
                  <div className="text-xs opacity-40 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Programs */}
          <div>
            {imageUrl ? (
              <div className="relative mb-8 rounded-xl overflow-hidden">
                <img src={imageUrl} alt="Athletes training" className="w-full h-64 object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${theme?.background ?? "#0a0a0a"}, transparent)`,
                  }}
                />
              </div>
            ) : null}

            <h3 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" style={{ color: theme?.primary ?? "#ef4444" }} />
              Training Programs
            </h3>

            <div className="space-y-3">
              {items.slice(0, 4).map((program, i) => (
                <a
                  key={i}
                  href={buttonUrl}
                  className="flex items-center gap-4 p-4 rounded-xl border transition-all hover:scale-[1.02] group"
                  style={{
                    borderColor: `${theme?.primary ?? "#ef4444"}15`,
                    backgroundColor: `${theme?.primary ?? "#ef4444"}05`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}15` }}
                  >
                    {i === 0 ? <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} /> :
                     i === 1 ? <Users className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} /> :
                     i === 2 ? <Medal className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} /> :
                     <Timer className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm">{program.title}</div>
                    <div className="text-xs opacity-40">{program.description}</div>
                  </div>
                  <div className="text-xs font-bold shrink-0 px-3 py-1 rounded-full" style={{ backgroundColor: `${theme?.primary ?? "#ef4444"}12`, color: theme?.primary ?? "#ef4444" }}>
                    {program.value}
                  </div>
                </a>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-xl text-center border"
              style={{ borderColor: `${theme?.primary ?? "#ef4444"}20`, backgroundColor: `${theme?.primary ?? "#ef4444"}08` }}
            >
              <span className="text-sm font-bold">Free 1-week trial</span>
              <span className="text-sm opacity-40"> — no commitment required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
