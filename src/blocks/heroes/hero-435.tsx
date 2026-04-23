"use client";

import type { BlockProps } from "@/blocks/types";
import { ChevronDown, Play, Star } from "lucide-react";

export default function Hero435(props: BlockProps) {
  const {
    theme,
    heading = "Transform Your Digital Presence",
    subheading = "Award-Winning Design Studio",
    bodyText = "We craft stunning digital experiences that captivate audiences, drive engagement, and deliver measurable results for ambitious brands.",
    buttonText = "See Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const primaryColor = theme?.primary ?? "#f59e0b";

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a0a", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex flex-col justify-center px-4 py-20"
    >
      <style>{`
        @keyframes hero435-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(12px); opacity: 1; }
        }
        @keyframes hero435-fade-line {
          0%, 100% { transform: scaleY(0); opacity: 0; }
          50% { transform: scaleY(1); opacity: 0.5; }
        }
        .hero435-scroll-indicator {
          animation: hero435-bounce 2s ease-in-out infinite;
        }
        .hero435-line {
          animation: hero435-fade-line 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto w-full flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-5 gap-12 items-center">
          {/* Main content - 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: primaryColor }}
                  />
                ))}
              </div>
              <span className="text-sm opacity-60">Rated 4.9 by 2,000+ clients</span>
            </div>

            <p
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: primaryColor }}
            >
              {subheading}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
              {heading}
            </h1>

            <p className="text-lg opacity-60 max-w-xl leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: primaryColor }}
              >
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 group"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform"
                  style={{ borderColor: primaryColor, color: primaryColor }}
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span className="font-medium opacity-80">Watch Showreel</span>
              </a>
            </div>
          </div>

          {/* Right side stats - 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {[
              { number: "250+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Industry Awards" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-3xl font-bold" style={{ color: primaryColor }}>
                  {stat.number}
                </div>
                <div className="text-sm opacity-50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="flex flex-col items-center gap-2 pt-12">
        <span className="text-xs tracking-widest uppercase opacity-40">Scroll to explore</span>
        <div className="flex flex-col items-center">
          <div
            className="w-px h-8 origin-top hero435-line"
            style={{ backgroundColor: primaryColor }}
          />
          <ChevronDown
            className="w-5 h-5 hero435-scroll-indicator"
            style={{ color: primaryColor }}
          />
        </div>
      </div>
    </section>
  );
}
