"use client";

import type { BlockProps } from "@/blocks/types";
import { Gem, Sparkles, ArrowRight, Crown, Star, Heart } from "lucide-react";

export default function Hero361(props: BlockProps) {
  const {
    theme,
    heading = "Timeless Elegance, Handcrafted for You",
    subheading = "Maison Aurelle Fine Jewelry",
    bodyText = "Each piece in our collection is meticulously crafted by master artisans using ethically sourced gemstones and recycled precious metals. Discover jewelry that tells your story.",
    buttonText = "Explore Collection",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Engagement Rings", description: "Bespoke designs with certified diamonds", icon: "ring" },
      { title: "Heritage Necklaces", description: "18K gold with hand-set gemstones", icon: "necklace" },
      { title: "Signature Bracelets", description: "Stackable pieces for everyday luxury", icon: "bracelet" },
      { title: "Heirloom Earrings", description: "From classic studs to statement drops", icon: "earring" },
    ],
  } = props;

  const craftSteps = [
    { step: "01", label: "Design", detail: "Sketched by hand" },
    { step: "02", label: "Source", detail: "Ethically mined gems" },
    { step: "03", label: "Craft", detail: "40+ hours per piece" },
    { step: "04", label: "Polish", detail: "Mirror-grade finish" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0a09", color: theme?.foreground ?? "#fafaf9" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Gold ambient glow */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#d4a853" }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full blur-[160px] opacity-8"
        style={{ backgroundColor: theme?.primary ?? "#d4a853" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-8 border"
              style={{
                borderColor: `${theme?.primary ?? "#d4a853"}40`,
                color: theme?.primary ?? "#d4a853",
              }}
            >
              <Crown className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 tracking-tight">
              {heading.split(",").map((part, i) => (
                <span key={i}>
                  {i === 1 ? (
                    <span className="italic font-normal" style={{ color: theme?.primary ?? "#d4a853" }}>
                      {part}
                    </span>
                  ) : (
                    part
                  )}
                  {i === 0 && ","}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-10 max-w-md font-light">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#d4a853", color: "#0c0a09" }}
              >
                <Gem className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wider uppercase border transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#d4a853"}50`, color: theme?.primary ?? "#d4a853" }}
              >
                <Heart className="w-4 h-4" />
                Book Consultation
              </a>
            </div>

            {/* Craftsmanship steps */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] opacity-30 mb-4">Our Craft</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {craftSteps.map((s, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="text-2xl font-light mb-1"
                      style={{ color: theme?.primary ?? "#d4a853" }}
                    >
                      {s.step}
                    </div>
                    <div className="text-sm font-semibold">{s.label}</div>
                    <div className="text-xs opacity-40">{s.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Featured collection */}
          <div>
            {imageUrl && (
              <div className="relative mb-8">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{ border: `1px solid ${theme?.primary ?? "#d4a853"}20` }}
                />
                <img
                  src={imageUrl}
                  alt="Featured jewelry collection"
                  className="w-full h-72 sm:h-96 object-cover rounded-sm"
                />
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{ backgroundColor: `${theme?.primary ?? "#d4a853"}20`, color: theme?.primary ?? "#d4a853" }}
                >
                  <Sparkles className="w-3 h-3" />
                  New Arrivals
                </div>
              </div>
            )}

            <div className="space-y-3">
              {items.slice(0, 4).map((item, i) => (
                <a
                  key={i}
                  href={buttonUrl}
                  className="flex items-center gap-4 p-4 border transition-all hover:scale-[1.01] group"
                  style={{
                    borderColor: `${theme?.primary ?? "#d4a853"}15`,
                    backgroundColor: `${theme?.primary ?? "#d4a853"}05`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme?.primary ?? "#d4a853"}12` }}
                  >
                    <Gem className="w-5 h-5" style={{ color: theme?.primary ?? "#d4a853" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm tracking-wide">{item.title}</div>
                    <div className="text-xs opacity-40">{item.description}</div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 opacity-20 group-hover:opacity-60 transition-opacity shrink-0"
                    style={{ color: theme?.primary ?? "#d4a853" }}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t" style={{ borderColor: `${theme?.primary ?? "#d4a853"}10` }}>
              {[
                { num: "25+", label: "Years" },
                { num: "5,000+", label: "Pieces Crafted" },
                { num: "4.9", label: "Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-semibold" style={{ color: theme?.primary ?? "#d4a853" }}>{stat.num}</div>
                  <div className="text-xs opacity-40">{stat.label}</div>
                </div>
              ))}
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" style={{ color: theme?.primary ?? "#d4a853" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
