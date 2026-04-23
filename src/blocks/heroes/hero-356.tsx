"use client";

import type { BlockProps } from "@/blocks/types";
import { Shirt, Sparkles, Truck, Clock, ArrowRight, Check, CalendarCheck, Star } from "lucide-react";

export default function Hero356(props: BlockProps) {
  const {
    theme,
    heading = "Crisp, Clean, Delivered",
    subheading = "PressWell Dry Cleaners",
    bodyText = "Premium garment care with a personal touch. From everyday shirts to delicate fabrics, we treat every piece like it belongs to us. Free pickup and delivery on all orders over $30.",
    buttonText = "Schedule Pickup",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Express Service", description: "Same-day turnaround by 5 PM", value: "+$5" },
      { title: "Standard Service", description: "Ready in 2 business days", value: "Included" },
      { title: "Specialty Care", description: "Wedding gowns, leather, suede", value: "Custom" },
    ],
  } = props;

  const pricing = [
    { item: "Dress Shirt", price: "$4.50" },
    { item: "Suit (2-piece)", price: "$16.00" },
    { item: "Dress / Gown", price: "$18.00" },
    { item: "Coat / Jacket", price: "$14.00" },
    { item: "Pants / Slacks", price: "$7.50" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8fafc", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Clean lines decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}10`, color: theme?.primary ?? "#0ea5e9" }}
            >
              <Sparkles className="w-3.5 h-3.5" />
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
                style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
              >
                <CalendarCheck className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#0ea5e9"}30`, color: theme?.primary ?? "#0ea5e9" }}
              >
                <Truck className="w-4 h-4" />
                Free Delivery Info
              </a>
            </div>

            {/* Service tiers */}
            <div className="space-y-3">
              {items.slice(0, 3).map((tier, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl border"
                  style={{ borderColor: `${theme?.primary ?? "#0ea5e9"}12`, backgroundColor: `${theme?.primary ?? "#0ea5e9"}04` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}12`, color: theme?.primary ?? "#0ea5e9" }}
                    >
                      {i === 0 ? <Clock className="w-4 h-4" /> : i === 1 ? <Shirt className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{tier.title}</div>
                      <div className="text-xs opacity-40">{tier.description}</div>
                    </div>
                  </div>
                  <span className="text-sm font-bold shrink-0" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                    {tier.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Dry cleaning service" className="w-full h-56 object-cover" />
              </div>
            )}

            {/* Pricing table */}
            <div
              className="p-6 rounded-2xl border mb-6"
              style={{ borderColor: `${theme?.primary ?? "#0ea5e9"}15`, backgroundColor: `${theme?.primary ?? "#0ea5e9"}04` }}
            >
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Shirt className="w-4 h-4" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                Standard Pricing
              </h3>
              <div className="space-y-2.5">
                {pricing.map((p, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="opacity-60">{p.item}</span>
                    <div className="flex-1 mx-3 border-b border-dotted opacity-15" />
                    <span className="font-bold">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { text: "Eco-Friendly Solvents", icon: <Sparkles className="w-4 h-4" /> },
                { text: "Satisfaction Guaranteed", icon: <Star className="w-4 h-4" /> },
                { text: "Free Pickup & Delivery", icon: <Truck className="w-4 h-4" /> },
                { text: "Expert Stain Removal", icon: <Check className="w-4 h-4" /> },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg text-xs font-semibold"
                  style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}06`, color: theme?.primary ?? "#0ea5e9" }}
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
