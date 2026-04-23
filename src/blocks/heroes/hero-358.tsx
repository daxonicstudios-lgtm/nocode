"use client";

import type { BlockProps } from "@/blocks/types";
import { Home, Shield, ArrowRight, Phone, CheckCircle, CloudRain, Award, Eye } from "lucide-react";

export default function Hero358(props: BlockProps) {
  const {
    theme,
    heading = "Built to Protect What Matters Most",
    subheading = "Summit Roofing Co.",
    bodyText = "From storm damage repairs to complete roof replacements, our certified crews deliver durable, weather-tough roofing backed by an industry-leading 25-year warranty. Free inspections for all homeowners.",
    buttonText = "Free Roof Inspection",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Asphalt Shingles", description: "Affordable, durable, 30-year rated" },
      { title: "Metal Roofing", description: "Standing seam, 50-year lifespan" },
      { title: "Flat Roofing", description: "TPO & EPDM commercial systems" },
      { title: "Storm Damage", description: "Insurance claim assistance included" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#18181b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Bold angular accent — roofline motif */}
      <div
        className="absolute top-0 left-0 w-full h-48 opacity-10"
        style={{
          background: `linear-gradient(135deg, ${theme?.primary ?? "#dc2626"} 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute top-0 right-0 w-full h-48 opacity-5"
        style={{
          background: `linear-gradient(225deg, ${theme?.primary ?? "#dc2626"} 0%, transparent 40%)`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider mb-6"
              style={{ backgroundColor: theme?.primary ?? "#dc2626", color: "#ffffff" }}
            >
              <Home className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm font-black uppercase tracking-wide text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#dc2626" }}
              >
                <Eye className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5559876543"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm font-bold uppercase tracking-wide border"
                style={{ borderColor: `${theme?.primary ?? "#dc2626"}50`, color: theme?.primary ?? "#dc2626" }}
              >
                <Phone className="w-4 h-4" />
                (555) 987-6543
              </a>
            </div>

            {/* Weather protection features */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: "25-Year Warranty" },
                { icon: <CloudRain className="w-4 h-4" />, text: "Storm Resistant" },
                { icon: <Award className="w-4 h-4" />, text: "GAF Certified" },
                { icon: <CheckCircle className="w-4 h-4" />, text: "Licensed & Bonded" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-sm text-xs font-bold border"
                  style={{ borderColor: `${theme?.primary ?? "#dc2626"}20`, color: theme?.primary ?? "#dc2626" }}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {imageUrl ? (
              <div className="rounded-sm overflow-hidden mb-8 shadow-2xl border-2" style={{ borderColor: `${theme?.primary ?? "#dc2626"}30` }}>
                <img src={imageUrl} alt="Roofing project" className="w-full h-64 sm:h-72 object-cover" />
              </div>
            ) : (
              <div
                className="mb-8 h-64 sm:h-72 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#dc2626"}10` }}
              >
                <Home className="w-20 h-20 opacity-20" style={{ color: theme?.primary ?? "#dc2626" }} />
              </div>
            )}

            {/* Services */}
            <h3 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: theme?.primary ?? "#dc2626" }}>
              Roofing Services
            </h3>

            <div className="space-y-3">
              {items.slice(0, 4).map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-sm border transition-all hover:scale-[1.01] cursor-pointer"
                  style={{ borderColor: `${theme?.primary ?? "#dc2626"}12`, backgroundColor: `${theme?.primary ?? "#dc2626"}05` }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 font-black text-sm"
                    style={{ backgroundColor: `${theme?.primary ?? "#dc2626"}15`, color: theme?.primary ?? "#dc2626" }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{service.title}</div>
                    <div className="text-xs opacity-40">{service.description}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-20" />
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-sm text-center text-sm font-bold"
              style={{ backgroundColor: theme?.primary ?? "#dc2626", color: "#ffffff" }}
            >
              Emergency Storm Damage? We respond within 2 hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
