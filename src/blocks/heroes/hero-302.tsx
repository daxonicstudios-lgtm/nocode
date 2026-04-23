"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";

export default function Hero302(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need to grow your business",
    subheading = "All-in-One Platform",
    bodyText = "Powerful tools that work together seamlessly so you can focus on what matters most — your customers.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Fast", description: "Sub-second load times with global edge deployment", icon: "zap" },
      { title: "Enterprise Security", description: "SOC 2 compliant with end-to-end encryption", icon: "shield" },
      { title: "Real-time Analytics", description: "Track every metric that moves the needle", icon: "chart" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-6 h-6" />,
    shield: <Shield className="w-6 h-6" />,
    chart: <BarChart3 className="w-6 h-6" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="min-h-screen relative overflow-hidden px-5 py-24 flex items-center"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#3b82f6"}30, transparent 50%, ${theme?.accent ?? "#8b5cf6"}20)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top text */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
              color: theme?.primary ?? "#3b82f6",
            }}
          >
            {subheading}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-50 max-w-xl mx-auto mb-8">
            {bodyText}
          </p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#ffffff" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Floating feature cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border backdrop-blur-sm transition-transform hover:-translate-y-1"
              style={{
                borderColor: `${theme?.foreground ?? "#f1f5f9"}10`,
                backgroundColor: `${theme?.foreground ?? "#f1f5f9"}05`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
                  color: theme?.primary ?? "#3b82f6",
                }}
              >
                {iconMap[item.icon ?? "zap"] ?? <Zap className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
