"use client";

import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, Zap, Globe, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero426(props: BlockProps) {
  const {
    theme,
    heading = "Build something remarkable",
    subheading = "The all-in-one workspace for modern teams to plan, build, and ship products faster than ever.",
    bodyText = "Trusted by 40,000+ teams worldwide",
    buttonText = "Start Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Analytics", description: "Real-time insights into every metric that matters to your business.", icon: "chart" },
      { title: "Collaboration", description: "Work together seamlessly across teams, time zones, and tools.", icon: "users" },
      { title: "Automation", description: "Eliminate repetitive tasks with intelligent workflow automation.", icon: "zap" },
      { title: "Global Scale", description: "Deploy to 30+ regions with built-in CDN and edge computing.", icon: "globe" },
    ],
  } = props;

  const iconMap = [BarChart3, Users, Zap, Globe];
  const spanClasses = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{
              backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(244,63,94,0.1)",
              color: theme?.primary ?? "#f43f5e",
            }}
          >
            <Sparkles className="w-4 h-4" />
            {bodyText}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          {items.map((item, i) => {
            const Icon = iconMap[i] ?? BarChart3;
            const isLarge = i === 0;
            return (
              <div
                key={i}
                className={`rounded-2xl p-5 sm:p-6 border border-current/5 relative group cursor-pointer transition-all hover:scale-[1.02] ${
                  isLarge ? "sm:col-span-2 sm:row-span-2" : ""
                } ${i === 3 ? "col-span-2 sm:col-span-1" : ""}`}
                style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "rgba(0,0,0,0.02)" }}
              >
                <div
                  className={`${isLarge ? "w-12 h-12" : "w-10 h-10"} rounded-xl flex items-center justify-center mb-4`}
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(244,63,94,0.1)" }}
                >
                  <Icon
                    className={isLarge ? "w-6 h-6" : "w-5 h-5"}
                    style={{ color: theme?.primary ?? "#f43f5e" }}
                  />
                </div>

                <h3 className={`font-bold ${isLarge ? "text-xl sm:text-2xl" : "text-base"} mb-2`}>
                  {item.title}
                </h3>
                <p className={`opacity-60 leading-relaxed ${isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>
                  {item.description}
                </p>

                <ArrowUpRight
                  className="absolute top-5 right-5 w-4 h-4 opacity-0 group-hover:opacity-50 transition-opacity"
                />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#f43f5e" }}
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
