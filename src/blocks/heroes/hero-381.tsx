"use client";

import type { BlockProps } from "@/blocks/types";
import { BarChart3, TrendingUp, PieChart, Activity, ArrowRight } from "lucide-react";

export default function Hero381(props: BlockProps) {
  const {
    theme,
    heading = "Turn Raw Data Into Actionable Insights",
    subheading = "Analytics Platform",
    bodyText = "Visualize, analyze, and share your data with powerful dashboards that update in real time. No SQL required.",
    buttonText = "Start Analyzing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Data Points Processed", value: "2.4B+" },
      { title: "Avg. Query Speed", value: "0.3s" },
      { title: "Active Dashboards", value: "18K" },
      { title: "Uptime", value: "99.99%" },
    ],
  } = props;

  const metrics = [
    { label: "Revenue", value: "$84.2K", change: "+12.4%", color: theme?.primary || "#6366f1" },
    { label: "Users", value: "14,832", change: "+8.7%", color: "#10b981" },
    { label: "Conversion", value: "3.24%", change: "+2.1%", color: "#f59e0b" },
  ];

  const chartBars = [35, 52, 44, 68, 58, 75, 62, 82, 70, 90, 78, 95];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#6366f1"}15`, color: theme?.primary || "#6366f1" }}
            >
              <BarChart3 className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-70 mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary || "#6366f1" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border border-current/20 opacity-80 hover:opacity-100 transition-opacity"
              >
                View Live Demo
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {items.map((item, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-bold" style={{ color: theme?.primary || "#6366f1" }}>
                    {item.value}
                  </div>
                  <div className="text-xs opacity-50 mt-1">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="relative">
            <div
              className="rounded-2xl border p-5 shadow-2xl"
              style={{
                backgroundColor: theme?.background || "#ffffff",
                borderColor: `${theme?.foreground || "#000"}10`,
              }}
            >
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5" style={{ color: theme?.primary || "#6366f1" }} />
                  <span className="font-semibold text-sm">Analytics Overview</span>
                </div>
                <span className="text-xs opacity-40">Last 30 days</span>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3"
                    style={{ backgroundColor: `${m.color}10` }}
                  >
                    <div className="text-xs opacity-50 mb-1">{m.label}</div>
                    <div className="font-bold text-sm">{m.value}</div>
                    <div className="text-xs font-medium mt-1" style={{ color: m.color }}>
                      <TrendingUp className="w-3 h-3 inline mr-1" />
                      {m.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="rounded-lg p-4" style={{ backgroundColor: `${theme?.foreground || "#000"}05` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium opacity-60">Monthly Trends</span>
                  <PieChart className="w-4 h-4 opacity-30" />
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {chartBars.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i === chartBars.length - 1
                          ? (theme?.primary || "#6366f1")
                          : `${theme?.primary || "#6366f1"}40`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] opacity-30">Jan</span>
                  <span className="text-[10px] opacity-30">Dec</span>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: theme?.primary || "#6366f1" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
