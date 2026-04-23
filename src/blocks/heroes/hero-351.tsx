"use client";

import type { BlockProps } from "@/blocks/types";
import { Cross, Pill, Clock, Phone, ArrowRight, Heart, ShieldCheck, Truck } from "lucide-react";

export default function Hero351(props: BlockProps) {
  const {
    theme,
    heading = "Your Health, Our Priority",
    subheading = "Greenleaf Pharmacy",
    bodyText = "Trusted by thousands of families for over 20 years. Fast prescription refills, expert pharmacist consultations, and a wide range of health and wellness products delivered to your door.",
    buttonText = "Refill Prescription",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Prescription Refills", description: "Quick refill in under 15 minutes", icon: "pill" },
      { title: "Free Consultations", description: "Speak with a licensed pharmacist", icon: "heart" },
      { title: "Home Delivery", description: "Same-day delivery available", icon: "truck" },
      { title: "Health Screenings", description: "Blood pressure, glucose & more", icon: "shield" },
    ],
  } = props;

  const hours = [
    { day: "Mon–Fri", time: "8:00 AM – 9:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    pill: <Pill className="w-5 h-5" />,
    heart: <Heart className="w-5 h-5" />,
    truck: <Truck className="w-5 h-5" />,
    shield: <ShieldCheck className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0fdf4", color: theme?.foreground ?? "#14532d" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Green cross motif background */}
      <div className="absolute top-10 right-10 opacity-[0.04]">
        <Cross className="w-[300px] h-[300px]" style={{ color: theme?.primary ?? "#16a34a" }} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-[0.03]">
        <Cross className="w-[200px] h-[200px]" style={{ color: theme?.primary ?? "#16a34a" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}15`, color: theme?.primary ?? "#16a34a" }}
            >
              <Cross className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#16a34a" }}
              >
                <Pill className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors"
                style={{ borderColor: `${theme?.primary ?? "#16a34a"}40`, color: theme?.primary ?? "#16a34a" }}
              >
                <Phone className="w-4 h-4" />
                Talk to a Pharmacist
              </a>
            </div>

            {/* Opening hours */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: `${theme?.primary ?? "#16a34a"}20`, backgroundColor: `${theme?.primary ?? "#16a34a"}08` }}
            >
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#16a34a" }} />
                Pharmacy Hours
              </h3>
              <div className="space-y-1.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{h.day}</span>
                    <span className="opacity-60">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Pharmacy interior" className="w-full h-56 sm:h-64 object-cover" />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#16a34a"}15`,
                    backgroundColor: `${theme?.primary ?? "#16a34a"}06`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${theme?.primary ?? "#16a34a"}15`, color: theme?.primary ?? "#16a34a" }}
                  >
                    {iconMap[item.icon ?? "pill"] ?? <Pill className="w-5 h-5" />}
                  </div>
                  <div className="font-bold text-sm mb-1">{item.title}</div>
                  <div className="text-xs opacity-50">{item.description}</div>
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 rounded-xl flex items-center gap-3 border"
              style={{ borderColor: `${theme?.primary ?? "#16a34a"}15`, backgroundColor: `${theme?.primary ?? "#16a34a"}06` }}
            >
              <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: theme?.primary ?? "#16a34a" }} />
              <div className="text-sm">
                <span className="font-bold">Insurance accepted.</span>
                <span className="opacity-50"> We work with all major health plans.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
