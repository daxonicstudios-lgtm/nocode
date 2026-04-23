"use client";

import type { BlockProps } from "@/blocks/types";
import { Waves, Ruler, PenTool, Clock, Anchor, ArrowRight } from "lucide-react";

export default function Hero488(props: BlockProps) {
  const {
    theme,
    heading = "Shaped by Hand, Built for Waves",
    subheading = "Custom Surfboards Crafted in Our Coastal Workshop",
    bodyText = "Every board starts as a blank and becomes a one-of-a-kind craft shaped to your height, weight, and riding style. From glassy longboard glides to critical shortboard turns.",
    buttonText = "Design Your Board",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Shortboard", description: "5'6\"–6'4\" — High performance, tight turns", value: "From $650" },
      { title: "Fish", description: "5'4\"–6'0\" — Speed in small surf, retro feel", value: "From $580" },
      { title: "Longboard", description: "8'0\"–9'6\" — Classic nose riding, smooth glide", value: "From $780" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d1b2a", color: theme?.foreground ?? "#e0e8f0" }}
      className="relative overflow-hidden"
    >
      {/* Wave-inspired curves */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full opacity-5" fill="currentColor">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Waves className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                Pacific Edge Surfboards
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: "Georgia, serif" }}>
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#0ea5e9" }}>
              {subheading}
            </p>
            <p className="text-base opacity-70 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
              >
                <PenTool className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#0ea5e9", color: theme?.primary ?? "#0ea5e9" }}
              >
                <Anchor className="w-4 h-4" />
                Stock Boards
              </a>
            </div>

            {/* Custom order process */}
            <div className="rounded-xl border border-white/10 p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-3">Custom Order Process</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { step: "1", label: "Consultation", detail: "Free 20 min" },
                  { step: "2", label: "Shape & Design", detail: "Pick your specs" },
                  { step: "3", label: "Handcraft", detail: "4-6 weeks" },
                  { step: "4", label: "Ride", detail: "Hit the water" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}>
                      {s.step}
                    </div>
                    <p className="text-xs font-semibold">{s.label}</p>
                    <p className="text-[10px] opacity-50">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — board types */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl mb-6 object-cover max-h-64" />
            ) : (
              <div className="w-full h-52 rounded-2xl mb-6 flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#0ea5e9"}15, ${theme?.primary ?? "#0ea5e9"}05)` }}>
                <Waves className="w-20 h-20 opacity-15" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              </div>
            )}

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest opacity-50">Board Types</p>
              {items.map((board, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-xl border border-white/10 cursor-pointer group hover:border-white/20 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="w-12 h-16 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}15` }}>
                    <Ruler className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold">{board.title}</p>
                    <p className="text-xs opacity-50 mt-0.5">{board.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color: theme?.primary ?? "#0ea5e9" }}>{board.value}</p>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-70 transition-opacity mt-1" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}10` }}>
              <Clock className="w-5 h-5 flex-shrink-0" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              <p className="text-sm"><span className="font-semibold">Current lead time:</span> <span className="opacity-70">4–6 weeks for custom shapes</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
