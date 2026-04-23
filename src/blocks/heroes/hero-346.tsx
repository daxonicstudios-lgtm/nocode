"use client";

import type { BlockProps } from "@/blocks/types";
import { Dumbbell, ArrowRight, Flame, Heart, Trophy, TrendingUp, Zap } from "lucide-react";

export default function Hero346(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Body, Transform Your Life",
    subheading = "Certified Personal Trainer",
    bodyText = "No cookie-cutter plans. I create custom training programs built around your body, your goals, and your schedule. Whether you want to lose weight, build muscle, or boost performance — let's make it happen.",
    buttonText = "Start Your Transformation",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Fat Loss", description: "HIIT + Nutrition coaching", icon: "flame", value: "12 weeks" },
      { title: "Muscle Building", description: "Progressive overload training", icon: "trophy", value: "16 weeks" },
      { title: "Athletic Performance", description: "Sport-specific conditioning", icon: "zap", value: "Ongoing" },
      { title: "Post-Rehab", description: "Safe recovery programs", icon: "heart", value: "8 weeks" },
    ],
  } = props;

  const transformStats = [
    { label: "Clients Transformed", val: "500+" },
    { label: "Avg Weight Lost", val: "28 lbs" },
    { label: "Years Experience", val: "12" },
  ];

  const iconMap: Record<string, typeof Flame> = {
    flame: Flame,
    trophy: Trophy,
    zap: Zap,
    heart: Heart,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full opacity-5 -skew-x-12 origin-top-right"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: theme?.primary ?? "#ef4444" }}
            >
              <Dumbbell className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Before / After visual concept */}
            <div className="flex gap-4 mb-8">
              <div
                className="flex-1 rounded-xl p-4 text-center border"
                style={{ borderColor: `${theme?.primary ?? "#ef4444"}30` }}
              >
                <div className="text-xs uppercase tracking-wider opacity-40 mb-2">Before</div>
                <div className="text-3xl font-black opacity-30">Day 1</div>
                <div className="w-full h-1 rounded-full mt-3 opacity-20" style={{ backgroundColor: theme?.foreground ?? "#fafafa" }} />
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-6 h-6" style={{ color: theme?.primary ?? "#ef4444" }} />
              </div>
              <div
                className="flex-1 rounded-xl p-4 text-center border"
                style={{
                  borderColor: theme?.primary ?? "#ef4444",
                  backgroundColor: `${theme?.primary ?? "#ef4444"}10`,
                }}
              >
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: theme?.primary ?? "#ef4444" }}>After</div>
                <div className="text-3xl font-black" style={{ color: theme?.primary ?? "#ef4444" }}>Day 90</div>
                <div className="w-full h-1 rounded-full mt-3" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
              </div>
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm font-black uppercase tracking-wider transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#ef4444", color: "#ffffff" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {transformStats.map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: theme?.primary ?? "#ef4444" }}>{s.val}</div>
                  <div className="text-[11px] uppercase tracking-wider opacity-40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Program grid */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 border" style={{ borderColor: `${theme?.primary ?? "#ef4444"}20` }}>
                <img src={imageUrl} alt="Personal training" className="w-full h-56 object-cover" />
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 4).map((program, i) => {
                const IconComp = iconMap[program.icon ?? "flame"] ?? Flame;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl border transition-all hover:scale-[1.03] cursor-pointer"
                    style={{
                      borderColor: `${theme?.primary ?? "#ef4444"}15`,
                      backgroundColor: `${theme?.primary ?? "#ef4444"}05`,
                    }}
                  >
                    <IconComp className="w-6 h-6 mb-3" style={{ color: theme?.primary ?? "#ef4444" }} />
                    <h3 className="font-bold text-sm mb-1">{program.title}</h3>
                    <p className="text-xs opacity-40 mb-2">{program.description}</p>
                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#ef4444" }}>
                      <TrendingUp className="w-3 h-3" />
                      {program.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
