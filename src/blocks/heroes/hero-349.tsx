"use client";

import type { BlockProps } from "@/blocks/types";
import { Box, Layers, ArrowRight, Palette, Ruler, Upload, Settings } from "lucide-react";

export default function Hero349(props: BlockProps) {
  const {
    theme,
    heading = "From Idea to Object in Hours",
    subheading = "Professional 3D Printing Service",
    bodyText = "Upload your design or describe what you need — we print it in the material of your choice. Prototyping, custom parts, architectural models, and production runs.",
    buttonText = "Start Custom Order",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "PLA", description: "Standard, great for prototypes", value: "From $8" },
      { title: "ABS", description: "Durable, heat-resistant", value: "From $12" },
      { title: "Resin", description: "Ultra-fine detail finish", value: "From $18" },
      { title: "Nylon", description: "Industrial-grade strength", value: "From $22" },
      { title: "Metal", description: "Stainless steel, titanium", value: "From $45" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111827", color: theme?.foreground ?? "#e5e7eb" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Layered visual lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${5 + i * 5}%`,
              backgroundColor: theme?.primary ?? "#8b5cf6",
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      {/* Accent glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full blur-[150px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest mb-6 border"
              style={{
                borderColor: `${theme?.primary ?? "#8b5cf6"}30`,
                color: theme?.primary ?? "#8b5cf6",
              }}
            >
              <Layers className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* How it works */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              {[
                { icon: Upload, step: "1", label: "Upload Design" },
                { icon: Settings, step: "2", label: "Choose Material" },
                { icon: Box, step: "3", label: "We Print & Ship" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15` }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider opacity-30">Step {s.step}</div>
                    <div className="text-sm font-semibold">{s.label}</div>
                  </div>
                  {i < 2 && <ArrowRight className="w-4 h-4 opacity-20 hidden sm:block ml-2" />}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#8b5cf6", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}30`, color: theme?.primary ?? "#8b5cf6" }}
              >
                <Ruler className="w-4 h-4" />
                Instant Quote
              </a>
            </div>

            {/* Specs */}
            <div className="flex gap-6 mt-10 text-sm">
              <div>
                <div className="font-bold" style={{ color: theme?.primary ?? "#8b5cf6" }}>0.05mm</div>
                <div className="text-[10px] uppercase opacity-40">Layer Resolution</div>
              </div>
              <div>
                <div className="font-bold" style={{ color: theme?.primary ?? "#8b5cf6" }}>400×400mm</div>
                <div className="text-[10px] uppercase opacity-40">Max Build Size</div>
              </div>
              <div>
                <div className="font-bold" style={{ color: theme?.primary ?? "#8b5cf6" }}>24–72 hrs</div>
                <div className="text-[10px] uppercase opacity-40">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right — Material types */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 border" style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}15` }}>
                <img src={imageUrl} alt="3D printed objects" className="w-full h-48 object-cover" />
              </div>
            )}

            <h3 className="text-xs font-mono uppercase tracking-widest opacity-30 mb-4 flex items-center gap-2">
              <Palette className="w-3.5 h-3.5" />
              Available Materials
            </h3>

            <div className="space-y-3">
              {items.slice(0, 5).map((material, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#8b5cf6"}12`,
                    backgroundColor: `${theme?.primary ?? "#8b5cf6"}05`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Layered icon */}
                    <div className="relative w-8 h-8">
                      {[0, 1, 2].map((l) => (
                        <div
                          key={l}
                          className="absolute left-0 right-0 h-1.5 rounded-full"
                          style={{
                            top: `${l * 10 + 2}px`,
                            backgroundColor: theme?.primary ?? "#8b5cf6",
                            opacity: 0.2 + l * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{material.title}</div>
                      <div className="text-xs opacity-40">{material.description}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold whitespace-nowrap" style={{ color: theme?.primary ?? "#8b5cf6" }}>
                    {material.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
