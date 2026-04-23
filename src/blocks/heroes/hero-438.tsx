"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero438(props: BlockProps) {
  const {
    theme,
    heading = "The Smarter Way to Manage Your Business",
    subheading = "All-in-One Platform",
    bodyText = "Streamline operations, automate workflows, and gain insights that drive growth. Everything you need in one powerful dashboard.",
    buttonText = "Request a Demo",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Automated Workflows" },
      { title: "Real-Time Reporting" },
      { title: "Team Collaboration" },
      { title: "Enterprise Security" },
    ],
  } = props;

  const primaryColor = theme?.primary ?? "#7c3aed";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#18181b" }}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-20"
    >
      <style>{`
        @keyframes hero438-fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero438-fadeRight {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hero438-scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero438-fade-1 { opacity: 0; animation: hero438-fadeUp 0.8s ease-out 0.2s forwards; }
        .hero438-fade-2 { opacity: 0; animation: hero438-fadeUp 0.8s ease-out 0.4s forwards; }
        .hero438-fade-3 { opacity: 0; animation: hero438-fadeUp 0.8s ease-out 0.6s forwards; }
        .hero438-fade-4 { opacity: 0; animation: hero438-fadeUp 0.8s ease-out 0.8s forwards; }
        .hero438-fade-5 { opacity: 0; animation: hero438-fadeUp 0.8s ease-out 1.0s forwards; }
        .hero438-item-0 { opacity: 0; animation: hero438-fadeRight 0.6s ease-out 1.2s forwards; }
        .hero438-item-1 { opacity: 0; animation: hero438-fadeRight 0.6s ease-out 1.4s forwards; }
        .hero438-item-2 { opacity: 0; animation: hero438-fadeRight 0.6s ease-out 1.6s forwards; }
        .hero438-item-3 { opacity: 0; animation: hero438-fadeRight 0.6s ease-out 1.8s forwards; }
        .hero438-card { opacity: 0; animation: hero438-scaleIn 0.8s ease-out 0.5s forwards; }
      `}</style>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content with staggered animations */}
        <div className="space-y-6">
          <span
            className="hero438-fade-1 inline-block text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            {subheading}
          </span>

          <h1 className="hero438-fade-2 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>

          <p className="hero438-fade-3 text-lg opacity-60 max-w-lg leading-relaxed">
            {bodyText}
          </p>

          <div className="hero438-fade-4 flex flex-wrap gap-4 pt-2">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: primaryColor, boxShadow: `0 8px 25px ${primaryColor}35` }}
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-current/20 hover:bg-black/5 transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Feature checklist */}
          <div className="hero438-fade-5 grid grid-cols-2 gap-3 pt-4">
            {items.slice(0, 4).map((item, i) => (
              <div key={i} className={`hero438-item-${i} flex items-center gap-2`}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: primaryColor }} />
                <span className="text-sm font-medium opacity-70">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Dashboard card */}
        <div className="hero438-card rounded-3xl border border-black/10 shadow-2xl overflow-hidden bg-white">
          <div className="p-6 border-b border-black/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-50">Total Revenue</p>
                <p className="text-3xl font-bold" style={{ color: primaryColor }}>$124,500</p>
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "#dcfce7", color: "#166534" }}
              >
                +23.5%
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {/* Mini chart bars */}
            <div className="flex items-end gap-2 h-24">
              {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm transition-all" style={{
                  height: `${h}%`,
                  backgroundColor: i >= 10 ? primaryColor : `${primaryColor}30`,
                }} />
              ))}
            </div>
            <div className="flex justify-between text-xs opacity-40">
              <span>Jan</span><span>Jun</span><span>Dec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
