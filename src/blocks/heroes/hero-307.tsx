"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero307(props: BlockProps) {
  const {
    theme,
    heading = "Numbers that speak for themselves",
    subheading = "Our Impact",
    bodyText = "We have helped hundreds of companies scale their operations and achieve record-breaking growth.",
    buttonText = "See Case Studies",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue Generated", value: "$2.4B+" },
      { title: "Active Users", value: "12M+" },
      { title: "Countries Served", value: "140+" },
      { title: "Uptime SLA", value: "99.99%" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ededed" }}
      className="min-h-screen flex items-center px-5 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#10b981" }} />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: theme?.primary ?? "#10b981" }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 max-w-2xl mx-auto">
            {heading}
          </h1>

          <p className="text-sm sm:text-base opacity-40 max-w-md mx-auto">
            {bodyText}
          </p>
        </div>

        {/* Stats grid — the main visual */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 sm:p-8 text-center border transition-transform hover:scale-[1.02]"
              style={{
                borderColor: `${theme?.primary ?? "#10b981"}15`,
                backgroundColor: `${theme?.primary ?? "#10b981"}05`,
              }}
            >
              <div
                className="text-3xl sm:text-5xl lg:text-6xl font-black mb-3 tabular-nums"
                style={{ color: theme?.primary ?? "#10b981" }}
              >
                {item.value ?? "0"}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-40 font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#10b981", color: "#ffffff" }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
