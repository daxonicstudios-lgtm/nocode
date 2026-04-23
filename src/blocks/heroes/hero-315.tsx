"use client";

import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, DollarSign, Activity, ArrowUpRight, BarChart3 } from "lucide-react";

export default function Hero315(props: BlockProps) {
  const {
    theme,
    heading = "Your business intelligence, simplified",
    subheading = "Analytics Platform",
    bodyText = "Connect all your data sources and get real-time insights with AI-powered dashboards. Make data-driven decisions in seconds, not hours.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary || "#6366f1";
  const bgColor = theme?.background || "#0f1117";
  const fgColor = theme?.foreground || "#e5e7eb";
  const cardBg = `${fgColor}06`;
  const cardBorder = `${fgColor}10`;

  const miniChartBars = [35, 50, 42, 65, 55, 78, 60, 85, 72, 90, 82, 95];

  const metrics = items.length > 0 ? items : [
    { title: "$284.5K", description: "Monthly Revenue", icon: "dollar", value: "+12.5%" },
    { title: "18,249", description: "Active Users", icon: "users", value: "+8.2%" },
    { title: "94.2%", description: "Uptime Score", icon: "activity", value: "+0.3%" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    dollar: <DollarSign className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    activity: <Activity className="w-4 h-4" />,
  };

  return (
    <section
      style={{ backgroundColor: bgColor, color: fgColor }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-50 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor, color: "#fff" }}
              >
                {buttonText}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium border transition-opacity hover:opacity-70"
                style={{ borderColor: cardBorder }}
              >
                View Live Demo
              </button>
            </div>
          </div>

          {/* Right - dashboard widgets */}
          <div className="space-y-4">
            {/* Metric cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 border"
                  style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                    >
                      {iconMap[metric.icon || ""] || <TrendingUp className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-medium" style={{ color: "#22c55e" }}>
                      {metric.value || "+5%"}
                    </span>
                  </div>
                  <div className="text-lg font-bold">{metric.title}</div>
                  <div className="text-xs opacity-40 mt-0.5">{metric.description}</div>
                </div>
              ))}
            </div>

            {/* Chart widget */}
            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-semibold">Revenue Trend</div>
                  <div className="text-xs opacity-40 mt-0.5">Last 12 months</div>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium" style={{ color: "#22c55e" }}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  +23.4%
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-24">
                {miniChartBars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t transition-all"
                    style={{
                      height: `${height}%`,
                      backgroundColor: i === miniChartBars.length - 1 ? primaryColor : `${primaryColor}30`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Activity feed */}
            <div
              className="rounded-xl p-5 border"
              style={{ backgroundColor: cardBg, borderColor: cardBorder }}
            >
              <div className="text-sm font-semibold mb-3">Recent Activity</div>
              {[
                { text: "New signup from Lagos, Nigeria", time: "2m ago" },
                { text: "Payment processed — $2,400", time: "15m ago" },
                { text: "Dashboard export completed", time: "1h ago" },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                  style={{ borderColor: cardBorder }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <span className="text-xs opacity-60">{activity.text}</span>
                  </div>
                  <span className="text-xs opacity-30">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
