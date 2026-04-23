"use client";

import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, TrendingUp, Bell, Search, Settings } from "lucide-react";

export default function Hero271(props: BlockProps) {
  const {
    theme,
    heading = "Your Business Dashboard, Simplified",
    subheading = "Real-time analytics at your fingertips",
    bodyText = "Monitor performance, track growth, and make data-driven decisions with an intuitive dashboard designed for modern teams.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Active Users", value: "12,847", label: "+18%" },
      { title: "Revenue", value: "$84.2K", label: "+24%" },
      { title: "Conversion", value: "3.6%", label: "+7%" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="relative z-10">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
              style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20`, color: theme?.primary ?? "#6366f1" }}
            >
              <BarChart3 className="h-4 w-4" />
              SaaS Analytics Platform
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-2 text-lg font-medium opacity-80 sm:text-xl">{subheading}</p>
            <p className="mb-8 max-w-lg text-base opacity-60">{bodyText}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
              >
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold opacity-80 transition-colors hover:opacity-100"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div
              className="relative rounded-2xl border p-6 shadow-2xl"
              style={{
                backgroundColor: theme?.card ?? "#ffffff",
                borderColor: theme?.border ?? "#e5e7eb",
                color: theme?.cardForeground ?? theme?.foreground,
              }}
            >
              {/* Top bar */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-3 opacity-50">
                  <Search className="h-4 w-4" />
                  <Bell className="h-4 w-4" />
                  <Settings className="h-4 w-4" />
                </div>
              </div>

              {/* Stat Cards */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {items.map((item, i) => {
                  const icons = [Users, TrendingUp, BarChart3];
                  const Icon = icons[i % icons.length];
                  return (
                    <div
                      key={i}
                      className="rounded-xl border p-3"
                      style={{ borderColor: theme?.border ?? "#e5e7eb" }}
                    >
                      <Icon className="mb-2 h-4 w-4 opacity-50" />
                      <p className="text-xs opacity-50">{item.title}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                      <span
                        className="text-xs font-medium"
                        style={{ color: theme?.primary ?? "#22c55e" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Chart Mockup */}
              <div
                className="rounded-xl border p-4"
                style={{ borderColor: theme?.border ?? "#e5e7eb" }}
              >
                <p className="mb-3 text-sm font-medium opacity-70">Revenue Overview</p>
                <div className="flex items-end gap-2" style={{ height: "80px" }}>
                  {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{
                        height: `${h}%`,
                        backgroundColor: theme?.primary ?? "#6366f1",
                        opacity: 0.3 + (h / 100) * 0.7,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Notification Card */}
            <div
              className="absolute -left-6 top-1/3 z-20 rounded-xl border p-3 shadow-lg sm:-left-10"
              style={{
                backgroundColor: theme?.card ?? "#ffffff",
                borderColor: theme?.border ?? "#e5e7eb",
                color: theme?.cardForeground ?? theme?.foreground,
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}20` }}
                >
                  <TrendingUp className="h-4 w-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
                <div>
                  <p className="text-xs font-semibold">Revenue up 24%</p>
                  <p className="text-xs opacity-50">This month</p>
                </div>
              </div>
            </div>

            {/* Floating Users Card */}
            <div
              className="absolute -right-4 bottom-16 z-20 rounded-xl border p-3 shadow-lg sm:-right-8"
              style={{
                backgroundColor: theme?.card ?? "#ffffff",
                borderColor: theme?.border ?? "#e5e7eb",
                color: theme?.cardForeground ?? theme?.foreground,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-bold text-white"
                      style={{
                        backgroundColor: theme?.primary ?? "#6366f1",
                        borderColor: theme?.card ?? "#ffffff",
                      }}
                    >
                      {["S", "A", "M"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-xs font-medium">+847 active now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
