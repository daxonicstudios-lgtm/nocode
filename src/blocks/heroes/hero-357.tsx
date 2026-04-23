"use client";

import type { BlockProps } from "@/blocks/types";
import { Zap, Phone, ArrowRight, ShieldCheck, Award, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export default function Hero357(props: BlockProps) {
  const {
    theme,
    heading = "Powering Homes & Businesses Safely",
    subheading = "Spark Electric Co.",
    bodyText = "Licensed master electricians with over 15 years of experience. From emergency repairs to complete rewiring, we deliver safe, code-compliant work with upfront pricing and no surprises.",
    buttonText = "Get Free Estimate",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Panel Upgrades", description: "200-amp service, breaker replacements" },
      { title: "Whole-Home Rewiring", description: "Knob & tube removal, modern wiring" },
      { title: "EV Charger Install", description: "Level 2 charger, dedicated circuit" },
      { title: "Lighting Design", description: "Recessed, track, landscape lighting" },
      { title: "Generator Install", description: "Whole-home backup power systems" },
      { title: "Smart Home Wiring", description: "Automation, security, networking" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0c0a09", color: theme?.foreground ?? "#fafaf9" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Electric bolt accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06]">
        <Zap className="w-full h-full" style={{ color: theme?.primary ?? "#eab308" }} />
      </div>
      {/* Spark line */}
      <div
        className="absolute top-0 left-0 w-full h-0.5"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${theme?.primary ?? "#eab308"} 50%, transparent 100%)`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Emergency banner */}
        <div
          className="flex items-center justify-center gap-3 mb-10 p-3 rounded-lg text-sm font-bold"
          style={{ backgroundColor: `${theme?.primary ?? "#eab308"}12`, color: theme?.primary ?? "#eab308" }}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>24/7 Emergency Service Available</span>
          <span className="opacity-50">|</span>
          <a href="tel:5551234567" className="flex items-center gap-1 underline">
            <Phone className="w-3.5 h-3.5" />
            (555) 123-4567
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#eab308"}15`, color: theme?.primary ?? "#eab308" }}
            >
              <Zap className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-black transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#eab308" }}
              >
                <Zap className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#eab308"}40`, color: theme?.primary ?? "#eab308" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Licensed & Insured badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Licensed & Insured" },
                { icon: <Award className="w-4 h-4" />, text: "Master Electrician" },
                { icon: <Clock className="w-4 h-4" />, text: "Same-Day Service" },
                { icon: <CheckCircle className="w-4 h-4" />, text: "Upfront Pricing" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold border"
                  style={{ borderColor: `${theme?.primary ?? "#eab308"}25`, color: theme?.primary ?? "#eab308" }}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {imageUrl && (
              <div className="rounded-xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="Electrician at work" className="w-full h-52 object-cover" />
              </div>
            )}

            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4">Our Services</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.slice(0, 6).map((service, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{ borderColor: `${theme?.primary ?? "#eab308"}12`, backgroundColor: `${theme?.primary ?? "#eab308"}05` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#eab308" }} />
                    <span className="font-bold text-sm">{service.title}</span>
                  </div>
                  <div className="text-xs opacity-40 pl-5">{service.description}</div>
                </div>
              ))}
            </div>

            {/* Trust rating */}
            <div
              className="mt-6 p-4 rounded-lg border flex items-center gap-4"
              style={{ borderColor: `${theme?.primary ?? "#eab308"}15`, backgroundColor: `${theme?.primary ?? "#eab308"}06` }}
            >
              <div className="text-3xl font-black" style={{ color: theme?.primary ?? "#eab308" }}>4.9</div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: theme?.primary ?? "#eab308" }} />
                  ))}
                </div>
                <div className="text-xs opacity-40">Based on 520+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
