"use client";

import type { BlockProps } from "@/blocks/types";
import { Palette, Sun, Moon, Paintbrush, Layers } from "lucide-react";

export default function Hero247(props: BlockProps) {
  const {
    theme,
    heading = "Design Without Boundaries",
    subheading = "Professional Design Suite",
    bodyText = "Create stunning interfaces, illustrations, and brand assets with our intuitive design platform. Real-time collaboration, smart components, and pixel-perfect exports.",
    buttonText = "Try Free for 14 Days",
    buttonUrl = "#",
    secondaryButtonText = "See Pricing",
    secondaryButtonUrl = "#",
  } = props;

  const bgColor = theme?.background ?? "#fafafa";
  const fgColor = theme?.foreground ?? "#18181b";
  const primaryColor = theme?.primary ?? "#8b5cf6";
  const accentColor = theme?.accent ?? "#ec4899";

  const toggleId = "hero247-toggle";

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: bgColor, color: fgColor }}
    >
      <style>{`
        .hero247-checkbox { display: none; }
        .hero247-light-preview { display: block; }
        .hero247-dark-preview { display: none; }
        .hero247-sun-icon { opacity: 1; }
        .hero247-moon-icon { opacity: 0.3; }
        .hero247-toggle-track { background-color: #e2e8f0; }
        .hero247-toggle-thumb { transform: translateX(2px); }

        .hero247-checkbox:checked ~ .hero247-main .hero247-light-preview { display: none; }
        .hero247-checkbox:checked ~ .hero247-main .hero247-dark-preview { display: block; }
        .hero247-checkbox:checked ~ .hero247-main .hero247-sun-icon { opacity: 0.3; }
        .hero247-checkbox:checked ~ .hero247-main .hero247-moon-icon { opacity: 1; }
        .hero247-checkbox:checked ~ .hero247-main .hero247-toggle-track { background-color: ${primaryColor}; }
        .hero247-checkbox:checked ~ .hero247-main .hero247-toggle-thumb { transform: translateX(26px); }
      `}</style>

      <input type="checkbox" id={toggleId} className="hero247-checkbox" />

      <div className="hero247-main w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Paintbrush className="w-5 h-5" style={{ color: primaryColor }} />
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: primaryColor }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="px-8 py-4 rounded-2xl font-semibold text-base transition-all hover:scale-105 text-center"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                  color: "#ffffff",
                  boxShadow: `0 8px 30px ${primaryColor}30`,
                }}
              >
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="px-8 py-4 rounded-2xl font-semibold text-base border transition-all hover:scale-105 text-center"
                style={{ borderColor: `${fgColor}15` }}
              >
                {secondaryButtonText}
              </a>
            </div>

            <div className="flex items-center gap-3 opacity-50">
              <Layers className="w-4 h-4" />
              <span className="text-sm">Used by 30,000+ designers worldwide</span>
            </div>
          </div>

          {/* Right preview with toggle */}
          <div>
            {/* Toggle switch */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sun className="w-5 h-5 hero247-sun-icon transition-all" style={{ color: "#f59e0b" }} />
              <label htmlFor={toggleId} className="cursor-pointer">
                <div className="hero247-toggle-track relative w-14 h-8 rounded-full transition-all">
                  <div className="hero247-toggle-thumb absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all" />
                </div>
              </label>
              <Moon className="w-5 h-5 hero247-moon-icon transition-all" style={{ color: primaryColor }} />
            </div>

            {/* Light mode preview */}
            <div className="hero247-light-preview rounded-2xl border shadow-2xl overflow-hidden"
              style={{ borderColor: `${fgColor}10` }}>
              <div className="bg-white p-1">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-gray-50 rounded-lg p-6 m-2">
                  <div className="flex gap-4 mb-4">
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: primaryColor }} />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded bg-gray-200 w-3/4" />
                      <div className="h-3 rounded bg-gray-200 w-1/2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-gray-200" />
                    <div className="h-20 rounded-lg" style={{ backgroundColor: `${primaryColor}20` }} />
                    <div className="h-20 rounded-lg bg-gray-200" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 rounded-lg flex-1" style={{ backgroundColor: primaryColor }} />
                    <div className="h-8 rounded-lg flex-1 border border-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dark mode preview */}
            <div className="hero247-dark-preview rounded-2xl border shadow-2xl overflow-hidden"
              style={{ borderColor: `${fgColor}10` }}>
              <div className="bg-gray-900 p-1">
                <div className="flex items-center gap-1.5 px-3 py-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-gray-800 rounded-lg p-6 m-2">
                  <div className="flex gap-4 mb-4">
                    <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: primaryColor }} />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 rounded bg-gray-700 w-3/4" />
                      <div className="h-3 rounded bg-gray-700 w-1/2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-gray-700" />
                    <div className="h-20 rounded-lg" style={{ backgroundColor: `${primaryColor}30` }} />
                    <div className="h-20 rounded-lg bg-gray-700" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-8 rounded-lg flex-1" style={{ backgroundColor: primaryColor }} />
                    <div className="h-8 rounded-lg flex-1 border border-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
