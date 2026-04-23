"use client";

import type { BlockProps } from "@/blocks/types";
import { Battery, Gauge, MapPin, Leaf, Zap, Calendar, ArrowRight } from "lucide-react";

export default function Hero494(props: BlockProps) {
  const {
    theme,
    heading = "Drive the Future. Zero Emissions.",
    subheading = "VoltArc EV Series",
    bodyText = "Experience 400+ miles of pure electric range, 0-60 in 3.2 seconds, and a cabin designed to feel like the future arrived early.",
    buttonText = "Book a Test Drive",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "412 mi", description: "EPA Range", icon: "gauge" },
      { title: "3.2s", description: "0-60 mph", icon: "zap" },
      { title: "15 min", description: "10-80% Charge", icon: "battery" },
      { title: "Zero", description: "Tailpipe Emissions", icon: "leaf" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    gauge: <Gauge className="w-4 h-4" />,
    zap: <Zap className="w-4 h-4" />,
    battery: <Battery className="w-4 h-4" />,
    leaf: <Leaf className="w-4 h-4" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0c0c", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Green energy gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 opacity-10"
        style={{
          background: `linear-gradient(to top, ${theme?.primary ?? "#22c55e"}30, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: theme?.primary ?? "#22c55e" }}
            >
              <Leaf className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {items.map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#22c55e"}20`,
                      color: theme?.primary ?? "#22c55e",
                    }}
                  >
                    {iconMap[item.icon ?? "gauge"]}
                  </div>
                  <p className="text-lg sm:text-xl font-bold">{item.title}</p>
                  <p className="text-[10px] sm:text-xs opacity-40">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-black font-bold text-sm transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
              >
                <Calendar className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/5 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Find Charging Stations
              </a>
            </div>
          </div>

          {/* Right — Vehicle silhouette / range calculator */}
          <div>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={heading}
                className="w-full h-auto rounded-2xl"
              />
            ) : (
              <div className="space-y-6">
                {/* Range calculator mockup */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
                  <h3 className="text-sm font-semibold mb-1">Range Calculator</h3>
                  <p className="text-xs opacity-40 mb-6">Estimate your daily range needs</p>

                  <div className="space-y-5">
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="opacity-60">Daily Commute</span>
                        <span style={{ color: theme?.primary ?? "#22c55e" }}>35 mi</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{ width: "8.5%", backgroundColor: theme?.primary ?? "#22c55e" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="opacity-60">Weekend Trips</span>
                        <span style={{ color: theme?.primary ?? "#22c55e" }}>120 mi</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{ width: "29%", backgroundColor: theme?.primary ?? "#22c55e" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="opacity-60">Remaining Range</span>
                        <span style={{ color: theme?.primary ?? "#22c55e" }}>257 mi</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full opacity-30"
                          style={{ width: "62.5%", backgroundColor: theme?.primary ?? "#22c55e" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#22c55e" }}>
                        2.6 days
                      </p>
                      <p className="text-xs opacity-40">Between charges on average</p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-30" />
                  </div>
                </div>

                {/* Price badge */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs opacity-40">Starting from</p>
                    <p className="text-xl font-bold">$44,900</p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#22c55e"}20`,
                      color: theme?.primary ?? "#22c55e",
                    }}
                  >
                    $7,500 Tax Credit
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
