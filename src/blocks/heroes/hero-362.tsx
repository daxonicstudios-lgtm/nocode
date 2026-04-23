"use client";

import type { BlockProps } from "@/blocks/types";
import { Eye, ArrowRight, Search, ScanFace, Glasses, Shield } from "lucide-react";

export default function Hero362(props: BlockProps) {
  const {
    theme,
    heading = "See the World in Style",
    subheading = "ClearVision Eyewear",
    bodyText = "Premium frames from the world's leading designers, paired with precision lenses crafted to your exact prescription. Walk in or try on virtually from home.",
    buttonText = "Virtual Try-On",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Prescription Glasses", description: "500+ frame styles with custom lenses", value: "From $89" },
      { title: "Sunglasses", description: "UV400 protection, polarized options", value: "From $120" },
      { title: "Contact Lenses", description: "Daily, monthly & specialty fits", value: "From $30/box" },
      { title: "Kids Eyewear", description: "Durable, flexible frames for ages 4–16", value: "From $59" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Subtle accent circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}10`, color: theme?.primary ?? "#3b82f6" }}
          >
            <Eye className="w-3.5 h-3.5" />
            {subheading}
          </div>
          <div className="flex items-center gap-4 text-xs opacity-50">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Insurance Accepted</span>
            <span>|</span>
            <span>Free Eye Exams</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight">
              {heading.split(" ").map((word, i) => (
                <span key={i}>
                  {i === 3 || i === 4 ? (
                    <span style={{ color: theme?.primary ?? "#3b82f6" }}>{word} </span>
                  ) : (
                    <span>{word} </span>
                  )}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-xl">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105 text-white"
                style={{ backgroundColor: theme?.primary ?? "#3b82f6" }}
              >
                <ScanFace className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border-2 transition-colors"
                style={{ borderColor: theme?.primary ?? "#3b82f6", color: theme?.primary ?? "#3b82f6" }}
              >
                <Search className="w-4 h-4" />
                Browse Frames
              </a>
            </div>

            {/* Frame categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {items.slice(0, 4).map((item, i) => (
                <a
                  key={i}
                  href={buttonUrl}
                  className="group p-4 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1"
                  style={{
                    borderColor: `${theme?.primary ?? "#3b82f6"}15`,
                    backgroundColor: `${theme?.primary ?? "#3b82f6"}04`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}10` }}
                  >
                    <Glasses className="w-5 h-5" style={{ color: theme?.primary ?? "#3b82f6" }} />
                  </div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-xs opacity-40 mb-2 line-clamp-2">{item.description}</div>
                  <div className="text-xs font-bold" style={{ color: theme?.primary ?? "#3b82f6" }}>
                    {item.value}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — 2 cols */}
          <div className="lg:col-span-2">
            <div className="relative">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Eyewear showcase"
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl"
                />
              ) : (
                <div
                  className="w-full h-[400px] sm:h-[500px] rounded-3xl flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}08` }}
                >
                  <Glasses className="w-24 h-24 opacity-20" style={{ color: theme?.primary ?? "#3b82f6" }} />
                </div>
              )}

              {/* Floating card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-lg"
                style={{ backgroundColor: `${theme?.background ?? "#f8fafc"}e0` }}
              >
                <div className="flex items-center gap-3">
                  <ScanFace className="w-8 h-8 shrink-0" style={{ color: theme?.primary ?? "#3b82f6" }} />
                  <div>
                    <div className="font-bold text-sm">Try Before You Buy</div>
                    <div className="text-xs opacity-50">Upload a selfie and preview any frame instantly</div>
                  </div>
                  <ArrowRight className="w-5 h-5 shrink-0 opacity-40" />
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              {[
                { value: "10,000+", label: "Happy Customers" },
                { value: "30-Day", label: "Free Returns" },
                { value: "2-Year", label: "Warranty" },
              ].map((badge, i) => (
                <div key={i} className="py-3">
                  <div className="text-lg font-bold" style={{ color: theme?.primary ?? "#3b82f6" }}>{badge.value}</div>
                  <div className="text-xs opacity-40">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
