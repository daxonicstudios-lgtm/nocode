"use client";

import type { BlockProps } from "@/blocks/types";
import { Waves, Droplets, Sun, ArrowRight, Phone, Calendar, CheckCircle, ThermometerSun } from "lucide-react";

export default function Hero359(props: BlockProps) {
  const {
    theme,
    heading = "Crystal Clear Pools, Year Round",
    subheading = "AquaPro Pool Services",
    bodyText = "Professional pool cleaning, maintenance, and repair trusted by over 1,200 homeowners. Dive into hassle-free pool ownership with our tailored service plans and certified technicians.",
    buttonText = "Get a Free Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Weekly Cleaning", description: "Skim, vacuum, chemical balance, filter check", value: "$45/week" },
      { title: "Monthly Maintenance", description: "Deep clean, equipment inspection, tile scrub", value: "$150/mo" },
      { title: "Full Season Plan", description: "Opening, weekly service, winterization", value: "$1,200/yr" },
    ],
  } = props;

  const seasonalOffers = [
    { offer: "Spring Opening Special", detail: "Pool opening + first month free", code: "SPRING25" },
    { offer: "Refer a Neighbor", detail: "Both get 1 month free service", code: "REFER" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#eff6ff", color: theme?.foreground ?? "#0c4a6e" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Water ripple effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-[0.06]">
        <div
          className="absolute bottom-0 w-full h-20 rounded-[50%]"
          style={{ backgroundColor: theme?.primary ?? "#0284c7" }}
        />
        <div
          className="absolute bottom-4 w-full h-16 rounded-[50%]"
          style={{ backgroundColor: theme?.primary ?? "#0284c7", opacity: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#0284c7"}12`, color: theme?.primary ?? "#0284c7" }}
            >
              <Waves className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-55 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#0284c7" }}
              >
                <Droplets className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5555551234"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#0284c7"}30`, color: theme?.primary ?? "#0284c7" }}
              >
                <Phone className="w-4 h-4" />
                (555) 555-1234
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { label: "Happy Clients", value: "1,200+" },
                { label: "Pools Serviced", value: "5K+" },
                { label: "Years Experience", value: "12" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-black" style={{ color: theme?.primary ?? "#0284c7" }}>{s.value}</div>
                  <div className="text-xs opacity-40 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Seasonal offers */}
            <div className="space-y-3">
              {seasonalOffers.map((promo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ borderColor: `${theme?.primary ?? "#0284c7"}15`, backgroundColor: `${theme?.primary ?? "#0284c7"}06` }}
                >
                  <div className="flex items-center gap-3">
                    <Sun className="w-5 h-5" style={{ color: theme?.primary ?? "#0284c7" }} />
                    <div>
                      <div className="font-bold text-sm">{promo.offer}</div>
                      <div className="text-xs opacity-40">{promo.detail}</div>
                    </div>
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: `${theme?.primary ?? "#0284c7"}12`, color: theme?.primary ?? "#0284c7" }}
                  >
                    {promo.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — maintenance plans */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Clean swimming pool" className="w-full h-56 object-cover" />
              </div>
            )}

            <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4" style={{ color: theme?.primary ?? "#0284c7" }} />
              Maintenance Plans
            </h3>

            <div className="space-y-4">
              {items.slice(0, 3).map((plan, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border transition-all hover:scale-[1.01] cursor-pointer"
                  style={{
                    borderColor: i === 1 ? `${theme?.primary ?? "#0284c7"}40` : `${theme?.primary ?? "#0284c7"}12`,
                    backgroundColor: i === 1 ? `${theme?.primary ?? "#0284c7"}08` : `${theme?.primary ?? "#0284c7"}03`,
                  }}
                >
                  {i === 1 && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block"
                      style={{ backgroundColor: theme?.primary ?? "#0284c7", color: "#ffffff" }}
                    >
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-base">{plan.title}</div>
                      <div className="text-xs opacity-40 mt-0.5">{plan.description}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-black" style={{ color: theme?.primary ?? "#0284c7" }}>{plan.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { text: "CPO Certified", icon: <CheckCircle className="w-3.5 h-3.5" /> },
                { text: "Fully Insured", icon: <CheckCircle className="w-3.5 h-3.5" /> },
                { text: "Chemical Safe", icon: <ThermometerSun className="w-3.5 h-3.5" /> },
                { text: "Same-Week Start", icon: <Calendar className="w-3.5 h-3.5" /> },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg text-xs font-semibold"
                  style={{ backgroundColor: `${theme?.primary ?? "#0284c7"}06`, color: theme?.primary ?? "#0284c7" }}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
