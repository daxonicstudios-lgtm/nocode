"use client";

import type { BlockProps } from "@/blocks/types";
import { Droplets, Shirt, Clock, ArrowRight, Truck, Sparkles, Star } from "lucide-react";

export default function Hero344(props: BlockProps) {
  const {
    theme,
    heading = "Fresh, Clean & Ready to Wear",
    subheading = "Modern Laundry Service",
    bodyText = "From self-service washers to professional dry cleaning and free pickup — we make laundry day the easiest part of your week.",
    buttonText = "Schedule Pickup",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Self-Service", description: "Walk in, wash & dry at your pace", value: "$3.50/load" },
      { title: "Wash & Fold", description: "Drop off and we handle everything", value: "$1.75/lb" },
      { title: "Dry Cleaning", description: "Professional care for delicates", value: "$6.99/item" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f9ff", color: theme?.foreground ?? "#0c4a6e" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Bubble decorations */}
      {[
        "top-20 left-10 w-16 h-16 opacity-10",
        "top-40 right-20 w-24 h-24 opacity-[0.07]",
        "bottom-32 left-1/4 w-20 h-20 opacity-[0.06]",
        "bottom-16 right-10 w-12 h-12 opacity-[0.08]",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${cls}`}
          style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
        />
      ))}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}15`, color: theme?.primary ?? "#0ea5e9" }}
            >
              <Droplets className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Pickup service highlight */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl mb-8 border"
              style={{
                borderColor: `${theme?.primary ?? "#0ea5e9"}20`,
                backgroundColor: `${theme?.primary ?? "#0ea5e9"}06`,
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}15` }}
              >
                <Truck className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
              </div>
              <div>
                <div className="font-bold text-sm">Free Pickup & Delivery</div>
                <div className="text-xs opacity-50">Schedule via app — same-day turnaround available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#ffffff" }}
              >
                <Shirt className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-2 text-sm opacity-50">
                <Clock className="w-4 h-4" />
                <span>Open 6 AM – 10 PM Daily</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                ))}
              </div>
              <span className="text-sm font-medium">4.9 from 2,400+ reviews</span>
            </div>
          </div>

          {/* Right — Pricing tiers */}
          <div className="space-y-4">
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img src={imageUrl} alt="Clean laundry" className="w-full h-48 object-cover" />
              </div>
            )}

            <h3 className="text-xs font-bold uppercase tracking-widest opacity-40 mb-3">Pricing</h3>

            {items.slice(0, 3).map((tier, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border transition-all hover:shadow-md"
                style={{
                  borderColor: `${theme?.primary ?? "#0ea5e9"}15`,
                  backgroundColor: theme?.background ?? "#ffffff",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}12` }}
                    >
                      <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                    </div>
                    <div>
                      <h4 className="font-bold">{tier.title}</h4>
                      <p className="text-xs opacity-50">{tier.description}</p>
                    </div>
                  </div>
                  <div
                    className="text-lg font-bold whitespace-nowrap"
                    style={{ color: theme?.primary ?? "#0ea5e9" }}
                  >
                    {tier.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
