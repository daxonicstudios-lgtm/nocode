"use client";

import type { BlockProps } from "@/blocks/types";
import { Flame, Dumbbell, Timer, ChevronRight } from "lucide-react";

export default function Hero281(props: BlockProps) {
  const {
    theme,
    heading = "PUSH YOUR LIMITS",
    subheading = "TRAIN HARDER. GET STRONGER.",
    bodyText = "Join the most intense training program designed to transform your body and mindset. No shortcuts. No excuses. Just results.",
    buttonText = "START FREE TRIAL",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "500+", description: "Workouts" },
      { title: "50K+", description: "Members" },
      { title: "98%", description: "Retention" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Diagonal accent stripe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 -skew-x-12 translate-x-20"
        style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Flame className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: theme?.primary ?? "#ef4444" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-70 max-w-md mb-10 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              >
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {items.map((item, i) => (
                <div key={i}>
                  <p
                    className="text-3xl sm:text-4xl font-black"
                    style={{ color: theme?.primary ?? "#ef4444" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs uppercase tracking-widest opacity-50 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Placeholder */}
          <div className="relative">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full rounded-lg object-cover aspect-[3/4]" />
            ) : (
              <div
                className="w-full aspect-[3/4] rounded-lg flex flex-col items-center justify-center gap-4"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(239,68,68,0.08)" }}
              >
                <Dumbbell className="w-20 h-20 opacity-20" style={{ color: theme?.primary ?? "#ef4444" }} />
                <div className="flex items-center gap-3 opacity-30">
                  <Timer className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">Ready to Train</span>
                </div>
              </div>
            )}
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -left-4 px-6 py-3 font-bold text-sm uppercase tracking-wider text-white"
              style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
            >
              7-Day Free Pass
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
