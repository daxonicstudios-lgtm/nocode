"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, Scale, Award, Phone, ChevronRight } from "lucide-react";

export default function Hero286(props: BlockProps) {
  const {
    theme,
    heading = "Justice You Deserve, Counsel You Trust",
    subheading = "Established 1987",
    bodyText = "For over 35 years, our firm has defended the rights of individuals and businesses alike. We combine legal expertise with unwavering dedication to deliver results that matter.",
    buttonText = "Free Consultation",
    buttonUrl = "#",
    secondaryButtonText = "(555) 234-5678",
    secondaryButtonUrl = "tel:+15552345678",
    imageUrl,
    items = [
      { title: "2,500+", description: "Cases Won" },
      { title: "35+", description: "Years Experience" },
      { title: "$180M+", description: "Recovered" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: theme?.primary ?? "#b8860b" }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${theme?.foreground ?? "#e2e8f0"} 0, ${theme?.foreground ?? "#e2e8f0"} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6" style={{ color: theme?.primary ?? "#b8860b" }} />
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ backgroundColor: theme?.primary ?? "#b8860b" }}
              />
              <span
                className="text-xs tracking-[0.25em] uppercase font-medium"
                style={{ color: theme?.primary ?? "#b8860b" }}
              >
                {subheading}
              </span>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 max-w-lg mb-10 leading-relaxed font-light">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#b8860b", color: "#0f172a" }}
              >
                <Scale className="w-4 h-4" />
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border text-sm font-medium tracking-wide transition-colors"
                style={{ borderColor: theme?.primary ? `${theme.primary}40` : "rgba(184,134,11,0.25)", color: theme?.primary ?? "#b8860b" }}
              >
                <Phone className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {items.map((item, i) => (
                <div key={i}>
                  <p
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: theme?.primary ?? "#b8860b", fontFamily: "Georgia, serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs uppercase tracking-widest opacity-40 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full object-cover aspect-[3/4]" />
            ) : (
              <div
                className="w-full aspect-[3/4] flex flex-col items-center justify-center gap-6 border"
                style={{
                  backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(184,134,11,0.03)",
                  borderColor: theme?.primary ? `${theme.primary}20` : "rgba(184,134,11,0.12)",
                }}
              >
                <Scale className="w-24 h-24 opacity-10" style={{ color: theme?.primary ?? "#b8860b" }} />
              </div>
            )}

            {/* Practice areas */}
            <div
              className="absolute -bottom-6 -right-4 sm:right-4 p-6 max-w-xs"
              style={{ backgroundColor: theme?.background ?? "#0f172a", border: `1px solid ${theme?.primary ? `${theme.primary}30` : "rgba(184,134,11,0.2)"}` }}
            >
              <p className="text-xs uppercase tracking-widest opacity-40 mb-3">Practice Areas</p>
              {["Corporate Law", "Criminal Defense", "Family Law", "Personal Injury"].map((area, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-2 border-b last:border-b-0 text-sm opacity-70"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <Award className="w-3.5 h-3.5 shrink-0" style={{ color: theme?.primary ?? "#b8860b" }} />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
