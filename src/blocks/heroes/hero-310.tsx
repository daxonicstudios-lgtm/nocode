"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero310(props: BlockProps) {
  const {
    theme,
    heading = "Simple tools for complex problems",
    subheading = "Built for modern teams",
    bodyText = "Streamline your operations with an integrated platform that adapts to how your team actually works.",
    buttonText = "Get Started",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Unlimited team members included" },
      { title: "99.9% uptime guaranteed" },
      { title: "Free migration from any platform" },
      { title: "24/7 priority support" },
    ],
  } = props;

  const primary = theme?.primary ?? "#6366f1";
  const topBg = theme?.accent ?? "#1e1b4b";
  const bottomBg = theme?.background ?? "#ffffff";
  const topText = "#f1f5f9";
  const bottomText = theme?.foreground ?? "#1e293b";

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Top half — dark tone */}
      <div
        className="flex-1 min-h-[50vh] flex items-end px-5 pb-24 relative"
        style={{ backgroundColor: topBg, color: topText }}
      >
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 border"
            style={{ borderColor: `${primary}40`, color: primary }}
          >
            {subheading}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-2xl">
            {heading}
          </h1>
        </div>

        {/* Decorative gradient spill */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent, ${bottomBg})`,
          }}
        />
      </div>

      {/* Content bridge — centered card overlapping both halves */}
      <div className="relative z-20 -mt-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl border shadow-2xl p-8 sm:p-10"
            style={{
              backgroundColor: bottomBg,
              borderColor: `${bottomText}10`,
              color: bottomText,
            }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm sm:text-base opacity-60 leading-relaxed mb-6">
                  {bodyText}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={buttonUrl}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                    style={{ backgroundColor: primary, color: "#ffffff" }}
                  >
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold border transition-colors hover:opacity-70"
                    style={{ borderColor: `${bottomText}15` }}
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="space-y-3">
                {items.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: primary }}
                    />
                    <span className="text-sm font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom half — light tone */}
      <div
        className="flex-1 min-h-[30vh]"
        style={{ backgroundColor: bottomBg }}
      />
    </section>
  );
}
