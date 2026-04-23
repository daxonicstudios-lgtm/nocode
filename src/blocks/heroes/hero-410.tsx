"use client";

import type { BlockProps } from "@/blocks/types";
import { Ruler, PenTool, ArrowRight } from "lucide-react";

export default function Hero410(props: BlockProps) {
  const {
    theme,
    heading = "Engineered to Precision",
    subheading = "Technical Design Lab",
    bodyText = "Every measurement matters. We apply engineering rigor to digital product design, ensuring pixel-perfect execution at every scale.",
    buttonText = "View Specifications",
    buttonUrl = "#",
    imageUrl,
    items = [],
  } = props;

  const bg = theme?.background ?? "#1a2744";
  const fg = theme?.foreground ?? "#c8d8f0";
  const primary = theme?.primary ?? "#5b9cf0";

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{ backgroundColor: bg, color: fg }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${primary}12 1px, transparent 1px),
            linear-gradient(90deg, ${primary}12 1px, transparent 1px),
            linear-gradient(${primary}06 1px, transparent 1px),
            linear-gradient(90deg, ${primary}06 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
        }}
      />

      {/* Dimension annotations - decorative */}
      <div className="absolute top-12 right-12 hidden sm:flex items-start gap-1 opacity-20">
        <div className="flex flex-col items-center">
          <div className="w-px h-16" style={{ backgroundColor: fg }} />
          <div className="text-[10px] tracking-wider mt-1">1440px</div>
          <div className="w-px h-16" style={{ backgroundColor: fg }} />
        </div>
      </div>

      {/* Circle annotation */}
      <div
        className="absolute bottom-[20%] right-[18%] w-28 h-28 rounded-full border border-dashed opacity-15 hidden lg:block"
        style={{ borderColor: primary }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-px" style={{ backgroundColor: `${primary}40` }} />
        <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ backgroundColor: `${primary}40` }} />
        <span
          className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] tracking-wider"
          style={{ color: primary }}
        >
          R=56
        </span>
      </div>

      {/* Angle annotation */}
      <div className="absolute top-[25%] left-[8%] opacity-15 hidden lg:block">
        <div className="w-20 h-px rotate-[30deg] origin-left" style={{ backgroundColor: primary }} />
        <div className="w-20 h-px origin-left" style={{ backgroundColor: primary }} />
        <span className="text-[9px] ml-6 -mt-1 block" style={{ color: primary }}>30&deg;</span>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-6 opacity-50">
              <PenTool className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2 font-mono">
              {heading}
            </h1>

            {/* Dimension line under heading */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 border-l border-b" style={{ borderColor: primary }} />
              <div className="flex-1 max-w-[200px] h-px" style={{ backgroundColor: primary, opacity: 0.4 }} />
              <span className="text-[10px] font-mono" style={{ color: primary }}>w: 480</span>
              <div className="flex-1 max-w-[50px] h-px" style={{ backgroundColor: primary, opacity: 0.4 }} />
              <div className="w-2 h-2 border-r border-b" style={{ borderColor: primary }} />
            </div>

            <p className="text-sm sm:text-base opacity-50 leading-relaxed max-w-md mb-10 font-mono">
              {bodyText}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold px-7 py-3 border transition-colors"
              style={{ borderColor: primary, color: primary }}
            >
              <Ruler className="w-4 h-4" />
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative hidden lg:block">
            {imageUrl ? (
              <div className="relative">
                <img src={imageUrl} alt="" className="w-full rounded border" style={{ borderColor: `${primary}33` }} />
                {/* Crosshair overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-px" style={{ backgroundColor: `${primary}20` }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-full w-px" style={{ backgroundColor: `${primary}20` }} />
                </div>
              </div>
            ) : (
              /* Technical drawing placeholder */
              <div className="relative w-full aspect-square">
                {/* Outer frame */}
                <div
                  className="absolute inset-4 border"
                  style={{ borderColor: `${primary}30` }}
                />
                {/* Inner rectangle */}
                <div
                  className="absolute inset-12 border border-dashed flex items-center justify-center"
                  style={{ borderColor: `${primary}25` }}
                >
                  {/* Center crosshair */}
                  <div className="relative w-16 h-16">
                    <div className="absolute top-1/2 left-0 right-0 h-px" style={{ backgroundColor: `${primary}40` }} />
                    <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ backgroundColor: `${primary}40` }} />
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border"
                      style={{ borderColor: `${primary}50` }}
                    />
                  </div>
                </div>
                {/* Measurement labels */}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono" style={{ color: `${primary}60` }}>
                  320 units
                </span>
                <span className="absolute top-1/2 -right-1 translate-x-full -translate-y-1/2 text-[9px] font-mono rotate-90 origin-left" style={{ color: `${primary}60` }}>
                  320 units
                </span>
              </div>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item, i) => (
              <div key={i} className="p-4 border font-mono" style={{ borderColor: `${primary}20` }}>
                <div className="text-lg font-bold" style={{ color: primary }}>
                  {item.value ?? "0.01mm"}
                </div>
                <div className="text-[10px] uppercase tracking-widest opacity-40 mt-1">
                  {item.label ?? "Tolerance"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
