"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Award, ShieldCheck, Globe2, TrendingUp, Heart, Sparkles } from "lucide-react";

const badgeIcons: Record<string, React.ReactNode> = {
  award: <Award className="w-4 h-4" />,
  shield: <ShieldCheck className="w-4 h-4" />,
  globe: <Globe2 className="w-4 h-4" />,
  trending: <TrendingUp className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
  sparkles: <Sparkles className="w-4 h-4" />,
};

export default function Hero440(props: BlockProps) {
  const {
    theme,
    heading = "Trusted by Industry Leaders Worldwide",
    subheading = "The Platform of Choice",
    bodyText = "Join thousands of companies that rely on our platform to power their digital transformation. Proven results, enterprise reliability.",
    buttonText = "Get Started Today",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "SOC 2 Certified", icon: "shield" },
      { title: "Award Winning", icon: "award" },
      { title: "Global CDN", icon: "globe" },
      { title: "99.99% Uptime", icon: "trending" },
      { title: "Loved by Teams", icon: "heart" },
      { title: "AI Powered", icon: "sparkles" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#6366f1";

  const floatConfigs = [
    { top: "8%", left: "5%", delay: "0s", dur: "6s" },
    { top: "15%", right: "8%", delay: "1s", dur: "7s" },
    { top: "55%", left: "3%", delay: "2s", dur: "5.5s" },
    { top: "65%", right: "5%", delay: "0.5s", dur: "6.5s" },
    { top: "85%", left: "10%", delay: "1.5s", dur: "7.5s" },
    { top: "80%", right: "12%", delay: "2.5s", dur: "5s" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafaff", color: theme?.foreground ?? "#1e1b4b" }}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      <style>{`
        @keyframes hero440-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-20px) rotate(1deg); }
        }
        .hero440-badge {
          animation: hero440-float var(--dur) ease-in-out infinite;
          animation-delay: var(--delay);
        }
      `}</style>

      {/* Floating badges */}
      {items.slice(0, 6).map((item, i) => {
        const config = floatConfigs[i] ?? floatConfigs[0];
        return (
          <div
            key={i}
            className="hero440-badge absolute hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border backdrop-blur-sm z-10"
            style={{
              top: config.top,
              left: "left" in config ? config.left : undefined,
              right: "right" in config ? config.right : undefined,
              "--delay": config.delay,
              "--dur": config.dur,
              backgroundColor: `${theme?.background ?? "#fafaff"}e6`,
              borderColor: `${primaryColor}25`,
              boxShadow: `0 4px 20px ${primaryColor}10`,
            } as React.CSSProperties}
          >
            <span style={{ color: primaryColor }}>
              {badgeIcons[item.icon ?? "award"] ?? <Award className="w-4 h-4" />}
            </span>
            <span className="text-xs font-semibold whitespace-nowrap">{item.title}</span>
          </div>
        );
      })}

      {/* Subtle gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
      />

      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-10">
        <span
          className="inline-block text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border"
          style={{
            borderColor: `${primaryColor}30`,
            color: primaryColor,
            backgroundColor: `${primaryColor}08`,
          }}
        >
          {subheading}
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {heading}
        </h1>

        <p className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
          {bodyText}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-white font-semibold transition-all hover:scale-105 shadow-xl"
            style={{ backgroundColor: primaryColor, boxShadow: `0 8px 30px ${primaryColor}40` }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-semibold border-2 transition-colors hover:bg-black/5"
            style={{ borderColor: `${primaryColor}30` }}
          >
            View Case Studies
          </a>
        </div>

        {/* Trust logos placeholder row */}
        <div className="pt-8 space-y-4">
          <p className="text-xs tracking-widest uppercase opacity-30 font-semibold">
            Trusted by 5,000+ companies
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-25">
            {["Acme Corp", "TechFlow", "DataSync", "CloudBase", "NetScale"].map((name) => (
              <span key={name} className="text-lg font-bold tracking-wider">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
