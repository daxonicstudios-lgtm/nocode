"use client";

import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, Globe, Zap, ArrowRight, BarChart3, PieChart, Activity } from "lucide-react";

export default function Hero415(props: BlockProps) {
  const {
    theme,
    heading = "The State of Digital Growth in 2026",
    subheading = "Annual Industry Report",
    bodyText = "Our comprehensive analysis of 10,000+ companies reveals the strategies driving exponential growth. Download the full report to see where your business stands.",
    buttonText = "Download Report",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Revenue Growth", value: "247%", description: "Average increase for adopters" },
      { title: "Time Saved", value: "18hrs", description: "Per employee per week" },
      { title: "Global Reach", value: "140+", description: "Countries represented" },
      { title: "ROI", value: "12x", description: "Average return on investment" },
    ],
  } = props;

  const barData = [40, 55, 45, 65, 78, 90, 85, 95];
  const statIcons = [TrendingUp, Zap, Globe, BarChart3];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top section */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}20`, color: theme?.primary ?? "#3b82f6" }}
          >
            <Activity className="h-3.5 w-3.5" />
            {subheading}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-50 max-w-2xl mx-auto mb-8">{bodyText}</p>
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {items.map((item, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6 border text-center"
                style={{ borderColor: `${theme?.primary ?? "#3b82f6"}20`, backgroundColor: `${theme?.primary ?? "#3b82f6"}08` }}
              >
                <Icon className="h-6 w-6 mx-auto mb-3" style={{ color: theme?.primary ?? "#3b82f6" }} />
                <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: theme?.primary ?? "#3b82f6" }}>
                  {item.value ?? "—"}
                </div>
                <div className="text-sm font-semibold mb-0.5">{item.title}</div>
                <div className="text-xs opacity-40">{item.description}</div>
              </div>
            );
          })}
        </div>

        {/* Infographic section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar chart visualization */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{ borderColor: `${theme?.primary ?? "#3b82f6"}15` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold">Growth Trajectory</h3>
                <p className="text-xs opacity-40">Q1 2024 – Q4 2025</p>
              </div>
              <BarChart3 className="h-5 w-5 opacity-30" />
            </div>
            <div className="flex items-end gap-2 sm:gap-3 h-40">
              {barData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md transition-all"
                    style={{
                      height: `${val}%`,
                      backgroundColor: i >= 6 ? (theme?.primary ?? "#3b82f6") : `${theme?.primary ?? "#3b82f6"}40`,
                    }}
                  />
                  <span className="text-[9px] opacity-30">Q{(i % 4) + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Donut chart + legend */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{ borderColor: `${theme?.primary ?? "#3b82f6"}15` }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold">Adoption by Sector</h3>
                <p className="text-xs opacity-40">Market breakdown</p>
              </div>
              <PieChart className="h-5 w-5 opacity-30" />
            </div>
            <div className="flex items-center gap-8">
              {/* Donut chart */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke={`${theme?.primary ?? "#3b82f6"}15`} strokeWidth="4" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke={theme?.primary ?? "#3b82f6"} strokeWidth="4" strokeDasharray="35 65" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke={theme?.accent ?? "#8b5cf6"} strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-35" />
                  <circle cx="18" cy="18" r="14" fill="none" stroke={`${theme?.primary ?? "#3b82f6"}60`} strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-60" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-black">10K+</div>
                    <div className="text-[8px] opacity-40">COMPANIES</div>
                  </div>
                </div>
              </div>
              {/* Legend */}
              <div className="space-y-3 flex-1">
                {[
                  { label: "SaaS & Technology", pct: "35%", color: theme?.primary ?? "#3b82f6" },
                  { label: "E-Commerce", pct: "25%", color: theme?.accent ?? "#8b5cf6" },
                  { label: "Financial Services", pct: "20%", color: `${theme?.primary ?? "#3b82f6"}60` },
                  { label: "Other Industries", pct: "20%", color: `${theme?.primary ?? "#3b82f6"}20` },
                ].map((seg) => (
                  <div key={seg.label} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                    <div className="flex-1">
                      <div className="text-xs font-medium">{seg.label}</div>
                    </div>
                    <span className="text-xs font-bold opacity-60">{seg.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div
          className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}10`, borderLeft: `4px solid ${theme?.primary ?? "#3b82f6"}` }}
        >
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 flex-shrink-0" style={{ color: theme?.primary ?? "#3b82f6" }} />
            <div>
              <div className="font-bold">Based on data from 10,247 companies across 140 countries</div>
              <div className="text-xs opacity-40 mt-0.5">Research conducted January – December 2025</div>
            </div>
          </div>
          <a
            href={buttonUrl}
            className="text-sm font-semibold whitespace-nowrap flex items-center gap-1 hover:opacity-70 transition-opacity"
            style={{ color: theme?.primary ?? "#3b82f6" }}
          >
            Full methodology
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
