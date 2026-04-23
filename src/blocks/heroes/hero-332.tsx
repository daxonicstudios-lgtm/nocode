"use client";

import type { BlockProps } from "@/blocks/types";
import { Truck, MapPin, Package, ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Hero332(props: BlockProps) {
  const {
    theme,
    heading = "Your Move, Made Easy",
    subheading = "Licensed & Insured Movers",
    bodyText = "From packing to unloading, we handle every detail of your move with care. Local or long-distance, residential or commercial — get your free quote in 60 seconds.",
    buttonText = "Get Instant Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Local Moves", description: "Same-city relocations with same-day availability" },
      { title: "Long Distance", description: "Cross-country moves with GPS tracking" },
      { title: "Commercial", description: "Office & warehouse moves, nights and weekends" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0F172A", color: theme?.foreground ?? "#F1F5F9" }}
      className="relative overflow-hidden"
    >
      {/* Road stripe accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: theme?.primary ?? "#F59E0B" }} />
      <div className="absolute top-0 left-0 right-0 h-1 opacity-40" style={{ backgroundColor: theme?.primary ?? "#F59E0B" }} />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Truck className="w-6 h-6" style={{ color: theme?.primary ?? "#F59E0B" }} />
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: theme?.primary ?? "#F59E0B" }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-none mb-5">
              {heading}
            </h1>

            <p className="text-base md:text-lg opacity-70 mb-8 max-w-md leading-relaxed">
              {bodyText}
            </p>

            {/* Quick quote form hint */}
            <div className="rounded-xl p-5 mb-8" style={{ backgroundColor: theme?.foreground ? `${theme.foreground}10` : "#FFFFFF10" }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10">
                  <MapPin className="w-4 h-4 opacity-50" />
                  <span className="text-sm opacity-50">Moving from...</span>
                </div>
                <div className="flex-1 flex items-center gap-2 px-4 py-3 rounded-lg bg-white/10">
                  <MapPin className="w-4 h-4 opacity-50" />
                  <span className="text-sm opacity-50">Moving to...</span>
                </div>
                <a
                  href={buttonUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-black font-bold text-sm whitespace-nowrap"
                  style={{ backgroundColor: theme?.primary ?? "#F59E0B" }}
                >
                  {buttonText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm opacity-70">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" style={{ color: theme?.primary ?? "#F59E0B" }} /> Free Estimates</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" style={{ color: theme?.primary ?? "#F59E0B" }} /> Fully Insured</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" style={{ color: theme?.primary ?? "#F59E0B" }} /> No Hidden Fees</span>
            </div>
          </div>

          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                style={{ backgroundColor: theme?.foreground ? `${theme.foreground}05` : "#FFFFFF05" }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg shrink-0"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}20` : "#F59E0B20" }}
                >
                  {i === 0 && <Truck className="w-6 h-6" style={{ color: theme?.primary ?? "#F59E0B" }} />}
                  {i === 1 && <MapPin className="w-6 h-6" style={{ color: theme?.primary ?? "#F59E0B" }} />}
                  {i === 2 && <Package className="w-6 h-6" style={{ color: theme?.primary ?? "#F59E0B" }} />}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-4">
              <Phone className="w-5 h-5" style={{ color: theme?.primary ?? "#F59E0B" }} />
              <div>
                <div className="text-xs opacity-50 uppercase tracking-wide">Call for rush moves</div>
                <div className="text-lg font-bold" style={{ color: theme?.primary ?? "#F59E0B" }}>(555) 123-MOVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
