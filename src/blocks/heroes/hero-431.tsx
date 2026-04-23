"use client";

import type { BlockProps } from "@/blocks/types";
import { RotateCw, Zap, Shield, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
  rotate: <RotateCw className="w-6 h-6" />,
};

export default function Hero431(props: BlockProps) {
  const {
    theme,
    heading = "Solutions That Rotate Around Your Needs",
    subheading = "Powerful Platform",
    bodyText = "Discover our comprehensive suite of tools designed to accelerate your business growth and streamline operations.",
    buttonText = "Explore Features",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Fast", description: "Deploy in seconds with zero downtime", icon: "zap" },
      { title: "Enterprise Security", description: "Bank-grade encryption for all your data", icon: "shield" },
      { title: "Real-Time Analytics", description: "Track performance with live dashboards", icon: "chart" },
      { title: "Auto Scaling", description: "Infrastructure that grows with your traffic", icon: "rotate" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="relative min-h-screen flex items-center overflow-hidden py-16 px-4"
    >
      <style>{`
        @keyframes hero431-rotate {
          0% { transform: rotateY(0deg); }
          25% { transform: rotateY(90deg); }
          50% { transform: rotateY(180deg); }
          75% { transform: rotateY(270deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes hero431-card-float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
          50% { transform: translateY(-12px) rotate(var(--rotation)); }
        }
        .hero431-card-0 { --rotation: -6deg; animation: hero431-card-float 4s ease-in-out infinite; }
        .hero431-card-1 { --rotation: 3deg; animation: hero431-card-float 4.5s ease-in-out 0.5s infinite; }
        .hero431-card-2 { --rotation: -4deg; animation: hero431-card-float 5s ease-in-out 1s infinite; }
        .hero431-card-3 { --rotation: 5deg; animation: hero431-card-float 4.2s ease-in-out 1.5s infinite; }
        .hero431-showcase {
          animation: hero431-rotate 20s linear infinite;
          transform-style: preserve-3d;
        }
      `}</style>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20`, color: theme?.primary ?? "#6366f1" }}
          >
            {subheading}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="text-lg opacity-70 max-w-lg">{bodyText}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
          </a>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px] perspective-[1000px]">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {items.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className={`hero431-card-${i} rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm`}
                style={{
                  backgroundColor: `${theme?.primary ?? "#6366f1"}10`,
                  borderColor: `${theme?.primary ?? "#6366f1"}30`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20`, color: theme?.primary ?? "#6366f1" }}
                >
                  {iconMap[item.icon ?? "zap"] ?? <Zap className="w-6 h-6" />}
                </div>
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
