"use client";

import type { BlockProps } from "@/blocks/types";
import { Rocket, Clock, ArrowRight, Zap, Shield, Globe } from "lucide-react";

export default function Hero291(props: BlockProps) {
  const {
    theme,
    heading = "We're Launching Something Big",
    subheading = "Early Access Now Open",
    bodyText = "Join the founders building the next generation of digital experiences. Get in early and shape the product with us before public launch.",
    buttonText = "Get Early Access",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "14", description: "Days Until Launch" },
      { title: "06", description: "Hours" },
      { title: "32", description: "Minutes" },
      { title: "48", description: "Seconds" },
    ],
  } = props;

  const features = [
    { icon: Zap, label: "Lightning Fast Setup" },
    { icon: Shield, label: "Enterprise Security" },
    { icon: Globe, label: "Global CDN" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen flex items-center justify-center px-5 py-20 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 border"
          style={{
            borderColor: theme?.primary ?? "#6366f1",
            color: theme?.primary ?? "#6366f1",
            backgroundColor: `${theme?.primary ?? "#6366f1"}15`,
          }}
        >
          <Rocket className="w-3.5 h-3.5" />
          {subheading}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-60 max-w-2xl mx-auto mb-12 leading-relaxed">
          {bodyText}
        </p>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12">
          {items.slice(0, 4).map((item, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-6">
              <div className="text-center">
                <div
                  className="text-3xl sm:text-5xl font-bold tabular-nums mb-1"
                  style={{ color: theme?.primary ?? "#6366f1" }}
                >
                  {item.title}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-50">
                  {item.description}
                </div>
              </div>
              {i < items.slice(0, 4).length - 1 && (
                <span className="text-2xl sm:text-4xl font-light opacity-20 -mt-5">:</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: theme?.primary ?? "#6366f1",
              color: "#ffffff",
            }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-2 text-xs opacity-50">
            <Clock className="w-3.5 h-3.5" />
            <span>Limited to first 500 users</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-sm opacity-60">
              <f.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
              {f.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
