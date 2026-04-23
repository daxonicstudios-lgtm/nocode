"use client";

import type { BlockProps } from "@/blocks/types";
import { Smartphone, Wifi, Shield, Zap, Star, Download } from "lucide-react";

export default function Hero280(props: BlockProps) {
  const {
    theme,
    heading = "Your Life, One Tap Away",
    subheading = "The smartest app for modern living",
    bodyText = "Manage finances, track habits, and stay connected — all from a beautifully designed app that fits your lifestyle.",
    buttonText = "Download Free",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Instant Sync", description: "Real-time across all devices", icon: "wifi" },
      { title: "Bank-Level Security", description: "Your data stays yours", icon: "shield" },
      { title: "Lightning Fast", description: "No lag, no waiting", icon: "zap" },
    ],
  } = props;

  const primary = theme?.primary ?? "#6366f1";

  const iconMap: Record<string, React.ReactNode> = {
    wifi: <Wifi className="h-5 w-5" />,
    shield: <Shield className="h-5 w-5" />,
    zap: <Zap className="h-5 w-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div
        className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: primary }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ borderColor: theme?.border ?? "#e2e8f0" }}
            >
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-current"
                    style={{ color: "#f59e0b" }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium opacity-60">4.9 rating, 50K+ reviews</span>
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-2 text-lg font-medium" style={{ color: primary }}>
              {subheading}
            </p>
            <p className="mb-8 max-w-lg text-base leading-relaxed opacity-60">
              {bodyText}
            </p>

            {/* Download Buttons */}
            <div className="mb-10 flex flex-wrap gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: primary }}
              >
                <Download className="h-4 w-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-black/5"
                style={{ borderColor: theme?.border ?? "#e2e8f0" }}
              >
                <Smartphone className="h-4 w-4" />
                View Demo
              </a>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${primary}12`, color: primary }}
                  >
                    {iconMap[item.icon ?? ""] ?? <Zap className="h-5 w-5" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-sm opacity-50">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div
                className="relative mx-auto w-[280px] overflow-hidden rounded-[3rem] border-[6px] p-2 shadow-2xl sm:w-[300px]"
                style={{
                  borderColor: theme?.cardForeground ?? "#1e293b",
                  backgroundColor: theme?.cardForeground ?? "#1e293b",
                }}
              >
                {/* Notch */}
                <div
                  className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: theme?.cardForeground ?? "#1e293b" }}
                />

                {/* Screen Content */}
                <div
                  className="relative overflow-hidden rounded-[2.4rem]"
                  style={{ backgroundColor: theme?.card ?? "#ffffff" }}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={heading}
                      className="aspect-[9/19] w-full object-cover"
                    />
                  ) : (
                    <div className="aspect-[9/19] p-5 pt-10">
                      {/* Mock App UI */}
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <p className="text-xs opacity-40" style={{ color: theme?.cardForeground ?? "#0f172a" }}>Good morning</p>
                          <p className="text-sm font-bold" style={{ color: theme?.cardForeground ?? "#0f172a" }}>Alex Johnson</p>
                        </div>
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: primary }}
                        >
                          AJ
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div
                        className="mb-5 rounded-2xl p-4 text-white"
                        style={{
                          background: `linear-gradient(135deg, ${primary}, ${theme?.accent ?? "#8b5cf6"})`,
                        }}
                      >
                        <p className="mb-1 text-[10px] uppercase tracking-wider opacity-70">Balance</p>
                        <p className="text-2xl font-extrabold">$12,847</p>
                        <p className="text-xs opacity-60">+$1,240 this month</p>
                      </div>

                      {/* Quick Actions */}
                      <div className="mb-5 grid grid-cols-4 gap-2">
                        {["Send", "Receive", "Bills", "More"].map((a, i) => (
                          <div key={i} className="flex flex-col items-center gap-1">
                            <div
                              className="flex h-9 w-9 items-center justify-center rounded-xl"
                              style={{ backgroundColor: `${primary}12` }}
                            >
                              <div
                                className="h-3 w-3 rounded-sm"
                                style={{ backgroundColor: primary, opacity: 0.6 }}
                              />
                            </div>
                            <span className="text-[9px] opacity-50" style={{ color: theme?.cardForeground ?? "#0f172a" }}>{a}</span>
                          </div>
                        ))}
                      </div>

                      {/* Transaction List */}
                      <p className="mb-3 text-xs font-bold" style={{ color: theme?.cardForeground ?? "#0f172a" }}>Recent</p>
                      {[
                        { name: "Coffee Shop", amount: "-$4.50" },
                        { name: "Salary", amount: "+$3,200" },
                        { name: "Groceries", amount: "-$62.30" },
                      ].map((tx, i) => (
                        <div
                          key={i}
                          className="mb-2 flex items-center justify-between rounded-xl border p-2.5"
                          style={{
                            borderColor: theme?.border ?? "#e2e8f0",
                            color: theme?.cardForeground ?? "#0f172a",
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="h-7 w-7 rounded-lg"
                              style={{ backgroundColor: `${primary}10` }}
                            />
                            <span className="text-[10px] font-medium">{tx.name}</span>
                          </div>
                          <span className="text-[10px] font-bold">{tx.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Floating badges around phone */}
              <div
                className="absolute -left-8 top-1/4 rounded-xl border p-3 shadow-lg sm:-left-16"
                style={{
                  backgroundColor: theme?.card ?? "#ffffff",
                  borderColor: theme?.border ?? "#e2e8f0",
                  color: theme?.cardForeground ?? theme?.foreground,
                }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" style={{ color: "#22c55e" }} />
                  <span className="text-xs font-semibold">Secured</span>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-1/3 rounded-xl border p-3 shadow-lg sm:-right-14"
                style={{
                  backgroundColor: theme?.card ?? "#ffffff",
                  borderColor: theme?.border ?? "#e2e8f0",
                  color: theme?.cardForeground ?? theme?.foreground,
                }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" style={{ color: primary }} />
                  <span className="text-xs font-semibold">Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
