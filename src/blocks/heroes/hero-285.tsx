"use client";

import type { BlockProps } from "@/blocks/types";
import { ShieldCheck, Phone, Clock, Heart, Star, ArrowRight } from "lucide-react";

export default function Hero285(props: BlockProps) {
  const {
    theme,
    heading = "Your Health, Our Priority",
    subheading = "Compassionate Care You Can Trust",
    bodyText = "Experience world-class healthcare with our team of board-certified specialists. From preventive care to advanced treatments, we are here for you and your family.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    secondaryButtonText = "Call Us Now",
    secondaryButtonUrl = "tel:+1234567890",
    imageUrl,
    items = [
      { title: "Board Certified", description: "All physicians are board-certified specialists", icon: "shield" },
      { title: "24/7 Emergency", description: "Round-the-clock emergency care available", icon: "clock" },
      { title: "Patient First", description: "Compassionate, patient-centered approach", icon: "heart" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a2332" }}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Subtle medical cross pattern */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03] -translate-y-1/4 translate-x-1/4"
        style={{ backgroundColor: theme?.primary ?? "#0891b2" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-3">
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8"
              style={{
                backgroundColor: theme?.primary ? `${theme.primary}10` : "rgba(8,145,178,0.06)",
                color: theme?.primary ?? "#0891b2",
              }}
            >
              <ShieldCheck className="w-4 h-4" />
              Accredited Healthcare Facility
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
              {heading}
            </h1>

            <p
              className="text-lg sm:text-xl font-medium mb-4"
              style={{ color: theme?.primary ?? "#0891b2" }}
            >
              {subheading}
            </p>

            <p className="text-base sm:text-lg opacity-60 max-w-xl mb-10 leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#0891b2" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold border transition-colors"
                style={{ borderColor: theme?.primary ? `${theme.primary}30` : "rgba(8,145,178,0.2)", color: theme?.primary ?? "#0891b2" }}
              >
                <Phone className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid sm:grid-cols-3 gap-6">
              {items.map((item, i) => {
                const icons = [
                  <ShieldCheck key="s" className="w-5 h-5" />,
                  <Clock key="c" className="w-5 h-5" />,
                  <Heart key="h" className="w-5 h-5" />,
                ];
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: theme?.primary ? `${theme.primary}10` : "rgba(8,145,178,0.06)",
                        color: theme?.primary ?? "#0891b2",
                      }}
                    >
                      {icons[i]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs opacity-50 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - Doctor image / placeholder */}
          <div className="lg:col-span-2 relative">
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full rounded-2xl object-cover aspect-[3/4]" />
            ) : (
              <div
                className="w-full aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-4"
                style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(8,145,178,0.04)" }}
              >
                <Heart className="w-16 h-16 opacity-10" style={{ color: theme?.primary ?? "#0891b2" }} />
              </div>
            )}
            {/* Rating badge */}
            <div
              className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-sm"
              style={{ backgroundColor: theme?.background ? `${theme.background}e6` : "rgba(255,255,255,0.9)" }}
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#f59e0b" }} />
                ))}
              </div>
              <p className="text-sm font-semibold">4.9 out of 5 — 2,500+ patient reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
