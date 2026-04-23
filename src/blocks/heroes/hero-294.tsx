"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Quote, Sparkles, Target, TrendingUp } from "lucide-react";

export default function Hero294(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Life in 90 Days",
    subheading = "Executive & Life Coach",
    bodyText = "I help ambitious professionals break through their limiting beliefs, build unshakable confidence, and design a life that truly excites them. No fluff. Real transformation.",
    buttonText = "Start Your Transformation",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Clarity", description: "Define your true vision", icon: "target" },
      { title: "Confidence", description: "Overcome self-doubt", icon: "sparkles" },
      { title: "Results", description: "Achieve measurable growth", icon: "trending" },
    ],
  } = props;

  const iconMap: Record<string, typeof Target> = {
    target: Target,
    sparkles: Sparkles,
    trending: TrendingUp,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#faf9f6" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — personal brand */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.3em] mb-8"
              style={{ color: theme?.primary ?? "#d97706" }}
            >
              {subheading}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-10 max-w-lg">
              {bodyText}
            </p>

            {/* Transformation pillars */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              {items.slice(0, 3).map((item, i) => {
                const IconComp = iconMap[item.icon ?? "target"] ?? Target;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${theme?.primary ?? "#d97706"}20` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: theme?.primary ?? "#d97706" }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{item.title}</div>
                      <div className="text-xs opacity-50">{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-transform hover:scale-105"
              style={{
                backgroundColor: theme?.primary ?? "#d97706",
                color: "#ffffff",
              }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right — image + testimonial */}
          <div className="space-y-6">
            {/* Profile image */}
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden border-2"
              style={{
                borderColor: `${theme?.primary ?? "#d97706"}30`,
                backgroundColor: `${theme?.primary ?? "#d97706"}10`,
              }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Sparkles className="w-16 h-16 opacity-20" style={{ color: theme?.primary ?? "#d97706" }} />
                </div>
              )}
            </div>

            {/* Testimonial */}
            <div
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: `${theme?.primary ?? "#d97706"}08`,
                borderColor: `${theme?.primary ?? "#d97706"}15`,
              }}
            >
              <Quote className="w-6 h-6 mb-3 opacity-30" style={{ color: theme?.primary ?? "#d97706" }} />
              <p className="text-sm italic opacity-70 leading-relaxed mb-4">
                &ldquo;Working with this coach completely changed my trajectory. I went from feeling stuck to
                launching my own company in 6 months. The clarity was life-changing.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: theme?.primary ?? "#d97706", color: "#ffffff" }}
                >
                  JM
                </div>
                <div>
                  <div className="text-xs font-bold">Jessica Morales</div>
                  <div className="text-[10px] opacity-40">CEO, Bloom Studios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
