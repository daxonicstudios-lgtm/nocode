"use client";

import type { BlockProps } from "@/blocks/types";
import { Package, MapPin, Truck, Clock, ArrowRight, LocateFixed } from "lucide-react";

export default function Hero264(props: BlockProps) {
  const {
    theme,
    heading = "Ship Anywhere, Track Everything",
    subheading = "Global Logistics Solutions",
    bodyText = "Real-time tracking, optimized routes, and guaranteed delivery windows. We move your goods across borders with speed and precision.",
    buttonText = "Get a Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "195+", description: "Countries Served" },
      { title: "24h", description: "Express Delivery" },
      { title: "99.7%", description: "On-Time Rate" },
      { title: "2M+", description: "Packages Monthly" },
    ],
  } = props;

  return (
    <section
      style={{
        backgroundColor: theme?.background ?? "#0f172a",
        color: theme?.foreground ?? "#e2e8f0",
      }}
      className="relative overflow-hidden"
    >
      {/* Route line decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 Q300 100 600 300 T1200 300"
          stroke={theme?.primary ?? "#3b82f6"}
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <path
          d="M0 400 Q400 200 800 350 T1200 200"
          stroke={theme?.primary ?? "#3b82f6"}
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Tracking bar mock */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-mono mb-10"
          style={{
            backgroundColor: `${theme?.primary ?? "#3b82f6"}15`,
            border: `1px solid ${theme?.primary ?? "#3b82f6"}30`,
            color: theme?.primary ?? "#3b82f6",
          }}
        >
          <LocateFixed className="w-3.5 h-3.5 animate-pulse" />
          <span>TRACKING: SHP-2024-8847</span>
          <span className="opacity-40">|</span>
          <span className="text-green-400">In Transit</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-sm font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: theme?.primary ?? "#3b82f6" }}
            >
              {subheading}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: theme?.primary ?? "#3b82f6",
                  color: "#fff",
                }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-sm border transition-all hover:opacity-80"
                style={{
                  borderColor: `${theme?.foreground ?? "#e2e8f0"}22`,
                  color: theme?.foreground ?? "#e2e8f0",
                }}
              >
                <Package className="w-4 h-4" />
                Track Package
              </a>
            </div>
          </div>

          {/* Stats / route visualization */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl" />
            ) : (
              <div className="space-y-4">
                {/* Route steps */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: `${theme?.foreground ?? "#e2e8f0"}08`,
                    border: `1px solid ${theme?.foreground ?? "#e2e8f0"}10`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#fff" }}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div
                        className="w-px h-12 my-1"
                        style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}44` }}
                      />
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}30`, color: theme?.primary ?? "#3b82f6" }}
                      >
                        <Truck className="w-4 h-4" />
                      </div>
                      <div
                        className="w-px h-12 my-1"
                        style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}22` }}
                      />
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-dashed"
                        style={{ borderColor: `${theme?.primary ?? "#3b82f6"}44`, color: `${theme?.primary ?? "#3b82f6"}88` }}
                      >
                        <Package className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-8 pt-1">
                      <div>
                        <div className="font-bold text-sm">Lagos, Nigeria</div>
                        <div className="text-xs opacity-50 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" /> Picked up at 08:30 AM
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm" style={{ color: theme?.primary ?? "#3b82f6" }}>
                          In Transit — Accra Hub
                        </div>
                        <div className="text-xs opacity-50 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" /> Last scanned 2h ago
                        </div>
                      </div>
                      <div className="opacity-50">
                        <div className="font-bold text-sm">Nairobi, Kenya</div>
                        <div className="text-xs opacity-60 mt-0.5">Est. arrival: Tomorrow, 3 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl text-center"
                      style={{
                        backgroundColor: `${theme?.foreground ?? "#e2e8f0"}06`,
                        border: `1px solid ${theme?.foreground ?? "#e2e8f0"}0a`,
                      }}
                    >
                      <div
                        className="text-xl sm:text-2xl font-black"
                        style={{ color: theme?.primary ?? "#3b82f6" }}
                      >
                        {item.title}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider opacity-50 mt-1">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
