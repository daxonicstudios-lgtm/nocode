"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, ChevronRight } from "lucide-react";

export default function Hero402(props: BlockProps) {
  const {
    theme,
    heading = "Create without boundaries",
    subheading = "Next-Gen Creative Suite",
    bodyText = "Unleash your imagination with tools designed for the modern creator. From concept to launch in record time.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0f0f1a", color: theme?.foreground ?? "#fff" }}
    >
      {/* Gradient mesh blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
          style={{ backgroundColor: theme?.primary ?? "#7c3aed" }}
        />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
          style={{ backgroundColor: theme?.accent ?? "#06b6d4" }}
        />
        <div
          className="absolute -bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full blur-[110px] opacity-35"
          style={{ backgroundColor: "#ec4899" }}
        />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[90px] opacity-25"
          style={{ backgroundColor: "#f59e0b" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" style={{ color: theme?.primary ?? "#7c3aed" }} />
            {subheading}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            {heading}
          </h1>

          <p className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mb-10">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 text-base font-semibold px-8 py-4 rounded-xl transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#7c3aed", color: "#fff" }}
            >
              {buttonText}
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {items.length > 0 && (
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {items.map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-5">
                  <div className="text-2xl font-bold" style={{ color: theme?.primary ?? "#7c3aed" }}>
                    {item.value ?? "99%"}
                  </div>
                  <div className="text-sm opacity-60 mt-1">{item.label ?? "Satisfaction"}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5">
          <img src={imageUrl} alt="" className="w-full h-auto rounded-2xl shadow-2xl" />
        </div>
      )}
    </section>
  );
}
