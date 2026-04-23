"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero305(props: BlockProps) {
  const {
    theme,
    heading = "Design without limits",
    subheading = "Creative Studio",
    bodyText = "We blend strategy, design, and technology to craft digital experiences that captivate audiences and drive measurable growth.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-20 lg:py-0 lg:flex lg:items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left column — offset up */}
          <div className="lg:col-span-5 lg:-mt-24">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4" style={{ color: theme?.primary ?? "#e11d48" }} />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: theme?.primary ?? "#e11d48" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed mb-8 max-w-sm">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#e11d48", color: "#ffffff" }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Center — overlapping visual element */}
          <div className="lg:col-span-2 hidden lg:flex justify-center">
            <div
              className="w-px h-[400px] relative"
              style={{ backgroundColor: `${theme?.foreground ?? "#1c1917"}15` }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: theme?.primary ?? "#e11d48",
                  backgroundColor: theme?.background ?? "#fafaf9",
                }}
              >
                <span className="text-xs font-black" style={{ color: theme?.primary ?? "#e11d48" }}>
                  &times;
                </span>
              </div>
            </div>
          </div>

          {/* Right column — offset down */}
          <div className="lg:col-span-5 lg:mt-24">
            {/* Image block — overlapping out of bounds */}
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 lg:-mr-12"
              style={{ backgroundColor: `${theme?.primary ?? "#e11d48"}10` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full opacity-20"
                    style={{
                      background: `radial-gradient(circle, ${theme?.primary ?? "#e11d48"}, transparent)`,
                    }}
                  />
                </div>
              )}

              {/* Overlapping label */}
              <div
                className="absolute bottom-6 left-6 right-6 rounded-xl p-4 backdrop-blur-md"
                style={{ backgroundColor: `${theme?.background ?? "#fafaf9"}cc` }}
              >
                <p className="text-xs font-bold uppercase tracking-wider opacity-40 mb-1">Featured Project</p>
                <p className="text-sm font-bold">Rebranding campaign for a global fintech startup</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: "150+", label: "Projects" },
                { value: "12", label: "Awards" },
                { value: "98%", label: "Retention" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: theme?.primary ?? "#e11d48" }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
