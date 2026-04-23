"use client";

import type { BlockProps } from "@/blocks/types";
import { Check, Star, Zap, Shield } from "lucide-react";

export default function Hero421(props: BlockProps) {
  const {
    theme,
    heading = "Everything you need, one simple price",
    subheading = "No hidden fees. No contracts. Cancel anytime.",
    bodyText = "Join over 25,000 teams who ship faster with our platform. Start your 14-day free trial today.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unlimited projects", icon: "check" },
      { title: "Priority support", icon: "check" },
      { title: "Advanced analytics", icon: "check" },
      { title: "Custom integrations", icon: "check" },
      { title: "Team collaboration", icon: "check" },
      { title: "99.9% uptime SLA", icon: "check" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-current/10 px-4 py-1.5 text-sm mb-6 opacity-80">
          <Star className="w-4 h-4" />
          <span>Most Popular Plan</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-70 max-w-xl mx-auto mb-10">
          {subheading}
        </p>

        <div
          className="rounded-2xl p-8 sm:p-10 mx-auto max-w-lg border border-current/5"
          style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(99,102,241,0.04)" }}
        >
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-lg opacity-60">$</span>
            <span
              className="text-6xl sm:text-7xl font-extrabold tracking-tight"
              style={{ color: theme?.primary }}
            >
              49
            </span>
            <span className="text-lg opacity-60">/mo</span>
          </div>

          <p className="text-sm opacity-50 mb-8">per seat, billed annually</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}
                >
                  <Check className="w-3 h-3" />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>

          <a
            href={buttonUrl}
            className="block w-full py-3.5 rounded-xl text-center font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: theme?.primary ?? "#6366f1" }}
          >
            {buttonText}
          </a>

          <p className="text-xs opacity-50 mt-4">{bodyText}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm opacity-60">
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Instant setup</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> SOC 2 compliant</span>
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> 4.9/5 rating</span>
        </div>
      </div>
    </section>
  );
}
