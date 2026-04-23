"use client";

import type { BlockProps } from "@/blocks/types";
import { Server, Shield, Zap, Globe, CheckCircle, ArrowUpRight } from "lucide-react";

export default function Hero382(props: BlockProps) {
  const {
    theme,
    heading = "Cloud Hosting That Never Sleeps",
    subheading = "Enterprise-Grade Infrastructure",
    bodyText = "Deploy globally in seconds with 99.99% uptime guarantee. Auto-scaling servers that grow with your traffic, backed by 24/7 expert support.",
    buttonText = "Deploy Now",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Starter", value: "$12/mo", description: "2 vCPU, 4GB RAM, 80GB SSD" },
      { title: "Pro", value: "$49/mo", description: "4 vCPU, 16GB RAM, 320GB SSD" },
      { title: "Enterprise", value: "$199/mo", description: "16 vCPU, 64GB RAM, 1TB SSD" },
    ],
  } = props;

  const features = [
    "Auto-scaling infrastructure",
    "DDoS protection included",
    "One-click SSL certificates",
    "Daily automated backups",
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Server rack pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-12 gap-1 h-full p-4">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="rounded-sm border border-current" />
          ))}
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: `${theme?.primary || "#0ea5e9"}12`, color: theme?.primary || "#0ea5e9" }}
          >
            <Shield className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-lg opacity-60 mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary || "#0ea5e9" }}
            >
              <Zap className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold border-2 opacity-70 hover:opacity-100 transition-opacity"
              style={{ borderColor: `${theme?.foreground || "#000"}20` }}
            >
              Compare Plans
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Uptime bar */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="opacity-50">Uptime last 90 days</span>
              <span className="font-bold" style={{ color: "#10b981" }}>99.99%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${theme?.foreground || "#000"}10` }}>
              <div className="h-full rounded-full" style={{ width: "99.99%", backgroundColor: "#10b981" }} />
            </div>
            <div className="flex gap-0.5 mt-2">
              {Array.from({ length: 90 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full"
                  style={{ backgroundColor: i === 47 ? "#f59e0b" : "#10b981" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom grid: Plans + Features */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Plans */}
          {items.map((plan, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border transition-transform hover:scale-[1.02]"
              style={{
                borderColor: i === 1 ? (theme?.primary || "#0ea5e9") : `${theme?.foreground || "#000"}10`,
                backgroundColor: i === 1 ? `${theme?.primary || "#0ea5e9"}08` : "transparent",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Server className="w-4 h-4" style={{ color: theme?.primary || "#0ea5e9" }} />
                <span className="font-semibold text-sm">{plan.title}</span>
                {i === 1 && (
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full text-white font-bold"
                    style={{ backgroundColor: theme?.primary || "#0ea5e9" }}
                  >
                    POPULAR
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold mb-1">{plan.value}</div>
              <div className="text-xs opacity-50">{plan.description}</div>
            </div>
          ))}

          {/* Features column */}
          <div className="lg:col-span-2 rounded-xl p-5 border" style={{ borderColor: `${theme?.foreground || "#000"}10` }}>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4" style={{ color: theme?.primary || "#0ea5e9" }} />
              <span className="font-semibold text-sm">All Plans Include</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#10b981" }} />
                  <span className="opacity-70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
