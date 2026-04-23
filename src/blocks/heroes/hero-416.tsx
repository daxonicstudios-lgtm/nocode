"use client";

import type { BlockProps } from "@/blocks/types";
import { X, Check, ArrowRight, Frown, Smile } from "lucide-react";

export default function Hero416(props: BlockProps) {
  const {
    theme,
    heading = "Stop Struggling. Start Scaling.",
    subheading = "See the Difference",
    bodyText = "The gap between where you are and where you could be is smaller than you think. Our platform bridges it in days, not months.",
    buttonText = "Make the Switch",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Manual data entry eating your day", description: "Automated workflows saving 20+ hours/week" },
      { title: "Scattered tools and broken processes", description: "One unified platform for everything" },
      { title: "Guessing what customers want", description: "Real-time analytics and AI insights" },
      { title: "Scaling means hiring more people", description: "Scale 10x without growing your team" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-3 block">{subheading}</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">{heading}</h1>
          <p className="text-base sm:text-lg opacity-50 max-w-2xl mx-auto">{bodyText}</p>
        </div>

        {/* Comparison panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 mb-12 rounded-2xl overflow-hidden shadow-lg">
          {/* Without us */}
          <div
            className="p-8 sm:p-10"
            style={{ backgroundColor: theme?.muted ?? "#fef2f2", color: theme?.foreground ?? "#111827" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <Frown className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-red-700">Without Us</h2>
                <p className="text-xs text-red-400">The daily reality for most teams</p>
              </div>
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-800">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration */}
            <div className="mt-8 rounded-xl bg-red-100/50 p-6 text-center">
              <div className="text-4xl font-black text-red-200 mb-2">62%</div>
              <div className="text-xs text-red-400">of teams report burnout from manual processes</div>
            </div>
          </div>

          {/* With us */}
          <div
            className="p-8 sm:p-10"
            style={{ backgroundColor: `${theme?.primary ?? "#059669"}08` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#059669"}15` }}
              >
                <Smile className="h-5 w-5" style={{ color: theme?.primary ?? "#059669" }} />
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: theme?.primary ?? "#059669" }}>With Us</h2>
                <p className="text-xs opacity-50">What your team looks like after</p>
              </div>
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: `${theme?.primary ?? "#059669"}15` }}
                  >
                    <Check className="h-3.5 w-3.5" style={{ color: theme?.primary ?? "#059669" }} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration */}
            <div
              className="mt-8 rounded-xl p-6 text-center"
              style={{ backgroundColor: `${theme?.primary ?? "#059669"}10` }}
            >
              <div className="text-4xl font-black mb-2" style={{ color: `${theme?.primary ?? "#059669"}40` }}>247%</div>
              <div className="text-xs opacity-50">average productivity increase reported</div>
            </div>
          </div>
        </div>

        {/* Center arrow divider (visual) */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-3 rounded-full px-10 py-4 font-bold text-white text-sm transition-transform hover:scale-105 shadow-lg"
            style={{ backgroundColor: theme?.primary ?? "#059669" }}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs opacity-30 mt-4">Free 14-day trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
