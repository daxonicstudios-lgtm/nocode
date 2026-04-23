"use client";

import type { BlockProps } from "@/blocks/types";
import { Moon, CloudMoon, Thermometer, Star, ArrowRight } from "lucide-react";

export default function Hero492(props: BlockProps) {
  const {
    theme,
    heading = "Sleep Better Tonight, Wake Up Transformed",
    subheading = "DreamLayer Mattress",
    bodyText = "Our adaptive foam technology maps 1,200 pressure points to deliver personalized support that evolves with your body throughout the night.",
    buttonText = "Start 100-Night Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Cooling Gel Layer", description: "Stays 3° cooler all night", icon: "thermometer" },
      { title: "Adaptive Support", description: "5 comfort zones for spine alignment", icon: "moon" },
      { title: "Zero Motion Transfer", description: "Partner moves won't disturb you", icon: "cloud" },
      { title: "4.9 Star Rating", description: "Over 12,000 verified reviews", icon: "star" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    thermometer: <Thermometer className="w-5 h-5" />,
    moon: <Moon className="w-5 h-5" />,
    cloud: <CloudMoon className="w-5 h-5" />,
    star: <Star className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f1629", color: theme?.foreground ?? "#e8e6f0" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Gradient orbs for night sky feel */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{ backgroundColor: theme?.accent ?? "#818cf8" }}
      />

      {/* Stars decorative dots */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white"
          style={{
            top: `${5 + (i * 17) % 40}%`,
            left: `${3 + (i * 23) % 94}%`,
            opacity: 0.1 + (i % 5) * 0.06,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Moon className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
            <span className="text-xs tracking-wide uppercase">{subheading}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-2xl mx-auto">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-sm transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Compare Models
            </a>
          </div>
        </div>

        {/* Comfort comparison bars */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <p className="text-xs uppercase tracking-wider opacity-50 mb-4">Comfort Comparison</p>
            {[
              { label: "Pressure Relief", value: 96 },
              { label: "Temperature Control", value: 92 },
              { label: "Spinal Alignment", value: 98 },
              { label: "Edge Support", value: 88 },
            ].map((bar) => (
              <div key={bar.label} className="mb-3 last:mb-0">
                <div className="flex justify-between text-xs mb-1">
                  <span className="opacity-70">{bar.label}</span>
                  <span style={{ color: theme?.primary ?? "#6366f1" }}>{bar.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${bar.value}%`,
                      backgroundColor: theme?.primary ?? "#6366f1",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 text-center hover:bg-white/10 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20` }}
              >
                <span style={{ color: theme?.primary ?? "#6366f1" }}>
                  {iconMap[item.icon ?? "moon"]}
                </span>
              </div>
              <p className="text-sm font-semibold mb-1">{item.title}</p>
              <p className="text-xs opacity-50">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
