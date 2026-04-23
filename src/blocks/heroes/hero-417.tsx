"use client";

import type { BlockProps } from "@/blocks/types";
import { Rocket, Bell, ArrowRight, Sparkles, Mail } from "lucide-react";

export default function Hero417(props: BlockProps) {
  const {
    theme,
    heading = "Something Big Is Coming",
    subheading = "Launching Soon",
    bodyText = "We have been working behind the scenes on something that will change the way you build products. Be the first to know when we go live.",
    buttonText = "Notify Me",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Days", value: "12" },
      { title: "Hours", value: "08" },
      { title: "Minutes", value: "34" },
      { title: "Seconds", value: "57" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl w-full text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest"
            style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}20`, color: theme?.primary ?? "#8b5cf6" }}
          >
            <Rocket className="h-3.5 w-3.5" />
            {subheading}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          {heading}
        </h1>

        <p className="text-base sm:text-lg opacity-40 max-w-xl mx-auto mb-12">{bodyText}</p>

        {/* Countdown timer */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-12">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center text-2xl sm:text-4xl font-mono font-black border"
                style={{
                  backgroundColor: `${theme?.primary ?? "#8b5cf6"}10`,
                  borderColor: `${theme?.primary ?? "#8b5cf6"}30`,
                  color: theme?.primary ?? "#8b5cf6",
                }}
              >
                {item.value ?? "00"}
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider opacity-30 mt-2 block">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Email signup */}
        <div className="max-w-md mx-auto mb-8">
          <div
            className="flex flex-col sm:flex-row rounded-xl overflow-hidden border"
            style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}30` }}
          >
            <div className="flex-1 flex items-center gap-3 px-4 py-3">
              <Mail className="h-4 w-4 opacity-30 flex-shrink-0" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-sm outline-none placeholder:opacity-30"
                style={{ color: theme?.foreground ?? "#ffffff" }}
                readOnly
              />
            </div>
            <a
              href={buttonUrl}
              className="flex items-center justify-center gap-2 px-6 py-3 font-bold text-white text-sm whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
            >
              <Bell className="h-3.5 w-3.5" />
              {buttonText}
            </a>
          </div>
          <p className="text-xs opacity-20 mt-3">Join 4,200+ people on the waitlist. No spam, ever.</p>
        </div>

        {/* Features preview */}
        <div
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}10`, backgroundColor: `${theme?.primary ?? "#8b5cf6"}05` }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-4 w-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
            <span className="text-xs font-bold uppercase tracking-wider opacity-50">What to expect</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "AI-Powered", desc: "Built with intelligence at every layer" },
              { title: "Lightning Fast", desc: "Performance that sets new standards" },
              { title: "Open Platform", desc: "Extensible APIs and integrations" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-4">
                <h3 className="text-sm font-bold mb-1">{feature.title}</h3>
                <p className="text-xs opacity-30">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                style={{
                  borderColor: theme?.background ?? "#0a0a0a",
                  backgroundColor: `${theme?.primary ?? "#8b5cf6"}${20 + i * 15}`,
                  color: theme?.foreground ?? "#ffffff",
                }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span className="text-xs opacity-30">4,200+ on the waitlist</span>
        </div>
      </div>
    </section>
  );
}
