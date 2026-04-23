"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { useState } from "react";

export default function Hero422(props: BlockProps) {
  const {
    theme,
    heading = "See the transformation for yourself",
    subheading = "Our platform turns cluttered workflows into streamlined operations — in days, not months.",
    bodyText,
    buttonText = "Get Started Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Manual spreadsheets", description: "Automated dashboards", icon: "before" },
      { title: "3-day turnaround", description: "Instant delivery", icon: "before" },
      { title: "5 disconnected tools", description: "1 unified platform", icon: "before" },
    ],
  } = props;

  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(234,88,12,0.08)", color: theme?.primary ?? "#ea580c" }}
          >
            <ArrowLeftRight className="w-4 h-4" />
            Before &amp; After
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-current/10 max-w-3xl mx-auto mb-10">
          <div className="grid grid-cols-2 min-h-[320px] sm:min-h-[380px]">
            {/* Before side */}
            <div
              className="p-6 sm:p-8 flex flex-col justify-center"
              style={{ backgroundColor: theme?.foreground ? `${theme.foreground}08` : "rgba(0,0,0,0.03)" }}
            >
              <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-4">Before</span>
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 bg-red-400" />
                    <div>
                      <p className="font-medium text-sm line-through opacity-60">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After side */}
            <div
              className="p-6 sm:p-8 flex flex-col justify-center"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(234,88,12,0.04)" }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: theme?.primary ?? "#ea580c" }}
              >
                After
              </span>
              <div className="space-y-4">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: theme?.primary ?? "#ea580c" }}
                    />
                    <div>
                      <p className="font-medium text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center divider with slider */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-current/10 flex items-center justify-center">
              <div
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                style={{ backgroundColor: theme?.primary ?? "#ea580c" }}
              >
                <ArrowLeftRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-10 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#ea580c" }}>10x</p>
            <p className="text-xs opacity-60 mt-1">Faster delivery</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#ea580c" }}>85%</p>
            <p className="text-xs opacity-60 mt-1">Less manual work</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme?.primary ?? "#ea580c" }}>4.9/5</p>
            <p className="text-xs opacity-60 mt-1">Customer rating</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#ea580c" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
