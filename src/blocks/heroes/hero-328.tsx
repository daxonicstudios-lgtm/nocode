"use client";

import type { BlockProps } from "@/blocks/types";
import { Wrench, PhoneCall, Clock, ShieldCheck, Droplets, Flame, Wind, ArrowRight, CheckCircle } from "lucide-react";

export default function Hero328(props: BlockProps) {
  const {
    theme,
    heading = "Fast, Reliable Plumbing & HVAC — Day or Night",
    subheading = "Licensed Plumbing & HVAC Professionals",
    bodyText = "Burst pipe at 2 AM? AC down in a heat wave? Our certified technicians respond within 60 minutes, 24 hours a day, 7 days a week. Upfront pricing, no overtime charges, satisfaction guaranteed.",
    buttonText = "Schedule Service",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Plumbing Repair", description: "Leaks, drains, water heaters & more", icon: "water" },
      { title: "AC & Heating", description: "Installation, repair & maintenance", icon: "flame" },
      { title: "Air Quality", description: "Duct cleaning & ventilation", icon: "wind" },
      { title: "Maintenance Plans", description: "Annual service starting at $12/mo", icon: "shield" },
    ],
  } = props;

  const iconMap: Record<string, typeof Wrench> = {
    water: Droplets,
    flame: Flame,
    wind: Wind,
    shield: ShieldCheck,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f1b2d", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* 24/7 Emergency banner */}
        <div
          className="rounded-xl px-5 py-4 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ backgroundColor: "#dc2626", color: "#ffffff" }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <PhoneCall className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
            </div>
            <div>
              <span className="text-sm font-bold block">24/7 Emergency Service</span>
              <span className="text-xs opacity-80">60-minute response time guaranteed</span>
            </div>
          </div>
          <a
            href="tel:+15559119999"
            className="text-lg font-black tracking-wide hover:opacity-80 transition-opacity"
          >
            (555) 911-9999
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold mb-6"
              style={{
                backgroundColor: `${theme?.primary ?? "#f59e0b"}15`,
                color: theme?.primary ?? "#f59e0b",
              }}
            >
              <Wrench className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-sm opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                "Licensed & Insured",
                "No Overtime Fees",
                "Satisfaction Guaranteed",
                "Free Estimates",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs">
                  <CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  <span className="opacity-60">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#000000" }}
              >
                <Wrench className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#e2e8f0"}15` }}
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — services + 24/7 badge */}
          <div className="relative">
            {/* 24/7 floating badge */}
            <div
              className="absolute -top-4 -right-2 sm:right-4 z-10 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg"
              style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#000000" }}
            >
              <Clock className="w-4 h-4 mb-0.5" />
              <span className="text-lg font-black leading-none">24/7</span>
              <span className="text-[8px] font-bold uppercase">Service</span>
            </div>

            {/* Service cards */}
            <div className="space-y-3">
              {items.slice(0, 4).map((item, i) => {
                const Icon = iconMap[item.icon ?? "water"] ?? Wrench;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-5 border flex items-start gap-4 transition-colors hover:border-opacity-30"
                    style={{
                      borderColor: `${theme?.foreground ?? "#e2e8f0"}08`,
                      backgroundColor: `${theme?.foreground ?? "#e2e8f0"}04`,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-0.5">{item.title}</h3>
                      <p className="text-xs opacity-40">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick stats bar */}
            <div
              className="rounded-xl p-4 mt-4 grid grid-cols-3 gap-4 text-center"
              style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}08` }}
            >
              <div>
                <div className="text-lg font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>15+</div>
                <div className="text-[9px] opacity-40 uppercase tracking-wider">Years Exp</div>
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>12K+</div>
                <div className="text-[9px] opacity-40 uppercase tracking-wider">Jobs Done</div>
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>4.8</div>
                <div className="text-[9px] opacity-40 uppercase tracking-wider">Star Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
