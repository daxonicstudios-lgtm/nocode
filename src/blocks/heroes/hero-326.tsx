"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight, Star, CheckCircle, Home, Building2, SprayCan } from "lucide-react";

export default function Hero326(props: BlockProps) {
  const {
    theme,
    heading = "A Spotless Space, Every Single Time",
    subheading = "Professional Cleaning Services",
    bodyText = "Residential and commercial cleaning you can trust. Our trained teams use eco-friendly products and a 50-point checklist to leave every surface gleaming. Book online in 60 seconds.",
    buttonText = "Get Instant Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Standard Clean", value: "$99", description: "Perfect for regular upkeep", label: "Most Popular" },
      { title: "Deep Clean", value: "$179", description: "Thorough top-to-bottom clean", label: "" },
      { title: "Move-In/Out", value: "$249", description: "Get your deposit back guaranteed", label: "" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1e293b" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#6366f1"}10`,
              color: theme?.primary ?? "#6366f1",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base opacity-55 leading-relaxed max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
              style={{ borderColor: `${theme?.foreground ?? "#1e293b"}12` }}
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Before / After concept */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <div
            className="rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: `${theme?.foreground ?? "#1e293b"}06` }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover opacity-60" />
            ) : (
              <Home className="w-16 h-16 opacity-10" />
            )}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold"
              style={{ backgroundColor: `${theme?.foreground ?? "#1e293b"}80`, color: "#ffffff" }}
            >
              Before
            </div>
          </div>
          <div
            className="rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: `${theme?.primary ?? "#6366f1"}06` }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <Sparkles className="w-16 h-16 opacity-15" style={{ color: theme?.primary ?? "#6366f1" }} />
            )}
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold"
              style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
            >
              After
            </div>
          </div>
        </div>

        {/* Pricing preview */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5 border text-center relative"
              style={{
                borderColor: i === 0 ? `${theme?.primary ?? "#6366f1"}30` : `${theme?.foreground ?? "#1e293b"}08`,
                backgroundColor: i === 0 ? `${theme?.primary ?? "#6366f1"}05` : "transparent",
              }}
            >
              {item.label && (
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold"
                  style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#ffffff" }}
                >
                  {item.label}
                </div>
              )}
              <h3 className="text-sm font-bold mb-1 mt-1">{item.title}</h3>
              <div className="text-2xl font-bold mb-1" style={{ color: theme?.primary ?? "#6366f1" }}>
                {item.value}
              </div>
              <p className="text-[11px] opacity-40">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs opacity-50">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
            Insured & Bonded
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
            4.9/5 Rating
          </div>
          <div className="flex items-center gap-1.5">
            <SprayCan className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
            Eco-Friendly Products
          </div>
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#6366f1" }} />
            Residential & Commercial
          </div>
        </div>
      </div>
    </section>
  );
}
