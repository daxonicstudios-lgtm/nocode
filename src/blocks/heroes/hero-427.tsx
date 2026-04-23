"use client";

import type { BlockProps } from "@/blocks/types";
import { Circle, Minus, X, ArrowRight, Lock, RotateCcw, Star } from "lucide-react";

export default function Hero427(props: BlockProps) {
  const {
    theme,
    heading = "See your website come to life",
    subheading = "Build stunning, responsive websites in minutes — no coding required. What you see is what your visitors get.",
    bodyText,
    buttonText = "Try It Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Dashboard", description: "Analytics overview for your website" },
      { title: "Real-time visitors", value: "2,847" },
      { title: "Conversion rate", value: "4.2%" },
      { title: "Revenue today", value: "$12,430" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#0ea5e9";

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {heading}
        </h1>
        <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto mb-10">
          {subheading}
        </p>

        {/* Browser Window Frame */}
        <div className="rounded-2xl overflow-hidden border border-current/10 shadow-2xl max-w-3xl mx-auto mb-10">
          {/* Title bar */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-current/5"
            style={{ backgroundColor: theme?.foreground ? `${theme.foreground}06` : "rgba(0,0,0,0.03)" }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div
              className="flex-1 flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs mx-8"
              style={{ backgroundColor: theme?.foreground ? `${theme.foreground}06` : "rgba(0,0,0,0.04)" }}
            >
              <Lock className="w-3 h-3 opacity-40" />
              <span className="opacity-50">app.yourplatform.com/dashboard</span>
            </div>
            <RotateCcw className="w-3.5 h-3.5 opacity-30" />
          </div>

          {/* Browser content */}
          <div
            className="p-6 sm:p-8 min-h-[280px]"
            style={{ backgroundColor: theme?.foreground ? `${theme.foreground}03` : "rgba(0,0,0,0.015)" }}
          >
            {/* Simulated dashboard */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <p className="font-bold text-base sm:text-lg">{items[0]?.title ?? "Dashboard"}</p>
                <p className="text-xs opacity-50">{items[0]?.description ?? "Overview"}</p>
              </div>
              <div className="flex gap-2">
                <div
                  className="px-3 py-1 rounded-md text-xs font-medium text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Today
                </div>
                <div className="px-3 py-1 rounded-md text-xs font-medium opacity-40 border border-current/10">
                  Week
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {items.slice(1, 4).map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-left border border-current/5"
                  style={{ backgroundColor: theme?.background ?? "#fff" }}
                >
                  <p className="text-xs opacity-50 mb-1">{item.title}</p>
                  <p className="text-lg sm:text-xl font-bold" style={{ color: primaryColor }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Chart placeholder bars */}
            <div className="flex items-end gap-2 h-20 px-2">
              {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: `${h}%`,
                    backgroundColor: primaryColor,
                    opacity: 0.15 + (h / 100) * 0.6,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-1 text-sm opacity-50">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9/5 from 2,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
