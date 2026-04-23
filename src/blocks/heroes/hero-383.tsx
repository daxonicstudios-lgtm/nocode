"use client";

import type { BlockProps } from "@/blocks/types";
import { Users, DollarSign, Target, ArrowRight, ChevronRight, TrendingUp } from "lucide-react";

export default function Hero383(props: BlockProps) {
  const {
    theme,
    heading = "Close More Deals, Build Lasting Relationships",
    subheading = "Smart CRM Platform",
    bodyText = "Manage your entire sales pipeline from first touch to closed-won. Automate follow-ups, track engagement, and forecast revenue with confidence.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Qualified Lead", value: "$24,000", label: "Acme Corp" },
      { title: "Proposal Sent", value: "$18,500", label: "TechFlow Inc" },
      { title: "Negotiation", value: "$42,000", label: "GlobalDev" },
      { title: "Closed Won", value: "$31,200", label: "Nextera" },
    ],
  } = props;

  const stats = [
    { icon: Users, label: "Active Contacts", value: "48,290" },
    { icon: DollarSign, label: "Pipeline Value", value: "$2.4M" },
    { icon: TrendingUp, label: "Avg. ROI", value: "340%" },
  ];

  const pipelineStages = ["Lead", "Qualified", "Proposal", "Negotiation", "Won"];
  const pipelineWidths = [100, 78, 56, 38, 24];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Pipeline visualization */}
          <div className="order-2 lg:order-1">
            <div
              className="rounded-2xl border p-6 shadow-xl"
              style={{ borderColor: `${theme?.foreground || "#000"}08` }}
            >
              {/* Pipeline funnel */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-semibold text-sm">Sales Pipeline</span>
                <span className="text-xs opacity-40">Q4 2026</span>
              </div>

              <div className="space-y-2 mb-6">
                {pipelineStages.map((stage, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs w-20 opacity-50 text-right">{stage}</span>
                    <div className="flex-1">
                      <div
                        className="h-7 rounded-md flex items-center px-3 transition-all"
                        style={{
                          width: `${pipelineWidths[i]}%`,
                          backgroundColor: `${theme?.primary || "#8b5cf6"}${i === 4 ? "" : String(20 + i * 15)}`,
                          color: i === 4 ? "#fff" : (theme?.foreground || "#000"),
                        }}
                      >
                        <span className="text-[11px] font-medium truncate">
                          {i === 4 ? "$312K" : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deal cards */}
              <div className="space-y-2">
                {items.slice(0, 3).map((deal, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: `${theme?.foreground || "#000"}05` }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ backgroundColor: theme?.primary || "#8b5cf6" }}
                      >
                        {deal.label?.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{deal.label}</div>
                        <div className="text-xs opacity-40">{deal.title}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold">{deal.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: `${theme?.primary || "#8b5cf6"}12`, color: theme?.primary || "#8b5cf6" }}
            >
              <Target className="w-4 h-4" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-lg opacity-60 mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon
                    className="w-5 h-5 mx-auto mb-2"
                    style={{ color: theme?.primary || "#8b5cf6" }}
                  />
                  <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs opacity-40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary || "#8b5cf6" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                See It In Action
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
