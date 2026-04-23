"use client";

import type { BlockProps } from "@/blocks/types";
import { Globe, ArrowRight, Languages, CheckCircle, Shield, Clock, FileCheck, Award } from "lucide-react";

export default function Hero378(props: BlockProps) {
  const {
    theme,
    heading = "Break Language Barriers, Build Global Reach",
    subheading = "LinguaBridge",
    bodyText = "Professional translation and localization services in 120+ languages. Certified translators, industry-specific expertise, and guaranteed accuracy for businesses expanding globally.",
    buttonText = "Get a Free Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "English", description: "French", value: "98.7%", label: "accuracy" },
      { title: "Spanish", description: "Portuguese", value: "99.1%", label: "accuracy" },
      { title: "Arabic", description: "English", value: "97.9%", label: "accuracy" },
      { title: "Mandarin", description: "English", value: "98.4%", label: "accuracy" },
      { title: "Swahili", description: "French", value: "97.5%", label: "accuracy" },
      { title: "German", description: "Japanese", value: "98.2%", label: "accuracy" },
    ],
  } = props;

  const certifications = ["ISO 17100", "ATA Certified", "GDPR Compliant", "NDA Protected"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Globe decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]">
        <div
          className="w-full h-full rounded-full border-[3px]"
          style={{ borderColor: theme?.primary ?? "#0891b2" }}
        />
        <div
          className="absolute inset-[15%] rounded-full border-[2px]"
          style={{ borderColor: theme?.primary ?? "#0891b2" }}
        />
        <div
          className="absolute inset-[30%] rounded-full border-[1px]"
          style={{ borderColor: theme?.primary ?? "#0891b2" }}
        />
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[60%] border-[1px] rounded-full"
          style={{ borderColor: theme?.primary ?? "#0891b2" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#0891b2"}10`, color: theme?.primary ?? "#0891b2" }}
            >
              <Globe className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { val: "120+", label: "Languages", icon: Languages },
                { val: "2,500+", label: "Certified Translators", icon: Award },
                { val: "24h", label: "Avg Turnaround", icon: Clock },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary ?? "#0891b2"}10` }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#0891b2" }} />
                  </div>
                  <div>
                    <div className="text-xl font-black">{s.val}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-30">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#0891b2", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#0891b2"}30`, color: theme?.primary ?? "#0891b2" }}
              >
                <FileCheck className="w-4 h-4" />
                View Sample Work
              </a>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border"
                  style={{ borderColor: `${theme?.primary ?? "#0891b2"}15`, color: theme?.primary ?? "#0891b2" }}
                >
                  <Shield className="w-3 h-3" />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Language pairs */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img src={imageUrl} alt="Translation services" className="w-full h-48 object-cover" />
              </div>
            )}

            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4">Popular Language Pairs</h3>

            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 6).map((pair, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#0891b2"}10`,
                    backgroundColor: `${theme?.primary ?? "#0891b2"}04`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold">{pair.title}</span>
                    <ArrowRight className="w-3 h-3 opacity-30" />
                    <span className="text-sm font-bold">{pair.description}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" style={{ color: theme?.primary ?? "#0891b2" }} />
                      <span className="text-xs font-semibold" style={{ color: theme?.primary ?? "#0891b2" }}>
                        {pair.value}
                      </span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider opacity-30">{pair.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 p-4 rounded-xl border text-center"
              style={{
                borderColor: `${theme?.primary ?? "#0891b2"}12`,
                backgroundColor: `${theme?.primary ?? "#0891b2"}04`,
              }}
            >
              <span className="text-sm font-bold">Need a different language?</span>
              <span className="text-xs opacity-40 ml-2">We cover 120+ languages and dialects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
