import type { BlockProps } from "@/blocks/types";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

export default function Hero111(props: BlockProps) {
  const {
    theme,
    heading = "The Future of Digital Finance",
    subheading = "Seamless payments, intelligent analytics, and enterprise-grade security — all in one platform built for scale.",
    buttonText = "Start Free Trial",
    buttonUrl = "#",
    secondaryButtonText = "Watch Demo",
    secondaryButtonUrl = "#",
    items = [
      { title: "$4.2B+", description: "Processed annually" },
      { title: "99.99%", description: "Uptime guaranteed" },
      { title: "180+", description: "Countries supported" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0f", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 py-20"
    >
      {/* Geometric shapes overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large rotating diamond */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 border opacity-10 rotate-45"
          style={{ borderColor: theme?.primary ?? "#3b82f6" }}
        />
        {/* Triangle outline top-left */}
        <div
          className="absolute top-16 left-10 w-0 h-0 opacity-10"
          style={{
            borderLeft: "60px solid transparent",
            borderRight: "60px solid transparent",
            borderBottom: `100px solid ${theme?.accent ?? "#8b5cf6"}`,
          }}
        />
        {/* Horizontal lines */}
        <div className="absolute top-1/3 left-0 w-full flex flex-col gap-24 opacity-[0.04]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-full h-px bg-current" />
          ))}
        </div>
        {/* Circle outlines */}
        <div
          className="absolute bottom-20 left-16 w-48 h-48 rounded-full border-2 opacity-10"
          style={{ borderColor: theme?.primary ?? "#3b82f6" }}
        />
        <div
          className="absolute top-40 right-1/4 w-24 h-24 rounded-full border opacity-[0.07]"
          style={{ borderColor: theme?.accent ?? "#8b5cf6" }}
        />
        {/* Small squares grid */}
        <div className="absolute bottom-1/4 right-10 grid grid-cols-4 gap-3 opacity-10">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3"
              style={{ backgroundColor: i % 3 === 0 ? (theme?.primary ?? "#3b82f6") : "transparent", border: `1px solid ${theme?.primary ?? "#3b82f6"}` }}
            />
          ))}
        </div>
        {/* Large hex-like shape */}
        <div
          className="absolute -bottom-32 left-1/3 w-72 h-72 rotate-12 opacity-[0.05]"
          style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-8"
          style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}20`, color: theme?.primary ?? "#3b82f6" }}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Next-Gen Fintech
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          {heading}
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl opacity-60 leading-relaxed max-w-2xl mx-auto">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border border-current opacity-50 hover:opacity-80 transition-opacity"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs opacity-40">
          <span className="inline-flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" /> PCI DSS Certified
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> SOC 2 Compliant
          </span>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 border-t border-current/10 pt-10">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: theme?.primary ?? "#3b82f6" }}
              >
                {item.title}
              </div>
              <div className="mt-1 text-sm opacity-50">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
