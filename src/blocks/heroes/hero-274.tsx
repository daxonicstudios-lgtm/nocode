"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, Zap, Shield, ArrowUpRight } from "lucide-react";

export default function Hero274(props: BlockProps) {
  const {
    theme,
    heading = "Stack Your Success",
    subheading = "Everything you need, layered for impact",
    bodyText = "Our platform brings together the tools, insights, and automation your team needs to ship faster and grow smarter.",
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lightning Fast", description: "Sub-second response times across every interaction", icon: "zap" },
      { title: "Enterprise Security", description: "Bank-grade encryption and compliance built in", icon: "shield" },
      { title: "Modular Design", description: "Mix and match features to fit your exact workflow", icon: "layers" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="h-5 w-5" />,
    shield: <Shield className="h-5 w-5" />,
    layers: <Layers className="h-5 w-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f9fafb", color: theme?.foreground ?? "#111827" }}
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 max-w-2xl text-center sm:mx-auto">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: `${theme?.primary ?? "#4f46e5"}12`, color: theme?.primary ?? "#4f46e5" }}
          >
            Platform Overview
          </span>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>

        {/* Stacked Cards */}
        <div className="relative mx-auto max-w-4xl">
          {/* Background Card (deepest layer) */}
          <div
            className="absolute inset-x-8 top-4 h-full rounded-2xl opacity-40"
            style={{ backgroundColor: theme?.primary ?? "#4f46e5" }}
          />
          {/* Middle Card */}
          <div
            className="absolute inset-x-4 top-2 h-full rounded-2xl border opacity-60"
            style={{
              backgroundColor: theme?.card ?? "#ffffff",
              borderColor: theme?.border ?? "#e5e7eb",
            }}
          />
          {/* Front Card */}
          <div
            className="relative rounded-2xl border p-6 shadow-xl sm:p-10"
            style={{
              backgroundColor: theme?.card ?? "#ffffff",
              borderColor: theme?.border ?? "#e5e7eb",
              color: theme?.cardForeground ?? theme?.foreground,
            }}
          >
            <div className="mb-8">
              <p className="mb-4 max-w-xl text-base leading-relaxed opacity-60">{bodyText}</p>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#4f46e5" }}
              >
                {buttonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Feature Cards Row */}
            <div className="grid gap-4 sm:grid-cols-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-xl border p-5 transition-all hover:shadow-md"
                  style={{ borderColor: theme?.border ?? "#e5e7eb" }}
                >
                  <div
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${theme?.primary ?? "#4f46e5"}12`,
                      color: theme?.primary ?? "#4f46e5",
                    }}
                  >
                    {iconMap[item.icon ?? ""] ?? <Layers className="h-5 w-5" />}
                  </div>
                  <h3 className="mb-1.5 text-sm font-bold">{item.title}</h3>
                  <p className="text-xs leading-relaxed opacity-50">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Bottom Bar */}
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl p-4"
              style={{ backgroundColor: `${theme?.primary ?? "#4f46e5"}08` }}
            >
              <div className="flex items-center gap-6">
                {[
                  { v: "99.9%", l: "Uptime" },
                  { v: "50ms", l: "Latency" },
                  { v: "24/7", l: "Support" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-sm font-extrabold" style={{ color: theme?.primary ?? "#4f46e5" }}>{s.v}</p>
                    <p className="text-xs opacity-50">{s.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs font-medium opacity-40">Trusted by 10,000+ teams worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
