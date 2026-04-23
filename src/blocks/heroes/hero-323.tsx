"use client";

import type { BlockProps } from "@/blocks/types";
import { PawPrint, PhoneCall, Heart, Clock, Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero323(props: BlockProps) {
  const {
    theme,
    heading = "Compassionate Care for Your Furry Family",
    subheading = "Paws & Claws Veterinary Hospital",
    bodyText = "From wellness exams to emergency surgery, our board-certified veterinarians treat every pet like their own. Open 7 days a week with after-hours emergency services available.",
    buttonText = "Book a Visit",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Wellness Exams", description: "Preventive care & vaccinations", icon: "stethoscope" },
      { title: "Emergency Care", description: "24/7 critical care available", icon: "clock" },
      { title: "Surgery", description: "Soft tissue & orthopedic procedures", icon: "shield" },
      { title: "Dental Care", description: "Cleanings, extractions & more", icon: "heart" },
    ],
  } = props;

  const iconMap: Record<string, typeof Stethoscope> = {
    stethoscope: Stethoscope,
    clock: Clock,
    shield: ShieldCheck,
    heart: Heart,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf7f2", color: theme?.foreground ?? "#2d2418" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Emergency banner */}
        <div
          className="rounded-xl px-5 py-3 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ backgroundColor: "#dc2626", color: "#ffffff" }}
        >
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-bold">Pet Emergency?</span>
            <span className="text-sm opacity-80">Call us immediately</span>
          </div>
          <a
            href="tel:+15559112222"
            className="text-sm font-bold underline underline-offset-2 hover:opacity-80"
          >
            (555) 911-2222
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PawPrint className="w-5 h-5" style={{ color: theme?.primary ?? "#b45309" }} />
              <span className="text-xs font-bold uppercase tracking-wider opacity-50">
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#b45309", color: "#ffffff" }}
              >
                <PawPrint className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#2d2418"}15` }}
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 4).map((item, i) => {
                const Icon = iconMap[item.icon ?? "stethoscope"] ?? Stethoscope;
                return (
                  <div
                    key={i}
                    className="rounded-xl p-4 border"
                    style={{
                      borderColor: `${theme?.foreground ?? "#2d2418"}08`,
                      backgroundColor: `${theme?.foreground ?? "#2d2418"}03`,
                    }}
                  >
                    <Icon className="w-4 h-4 mb-2" style={{ color: theme?.primary ?? "#b45309" }} />
                    <h3 className="text-xs font-bold mb-0.5">{item.title}</h3>
                    <p className="text-[11px] opacity-40">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image + floating elements */}
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden aspect-square"
              style={{ backgroundColor: `${theme?.primary ?? "#b45309"}08` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <PawPrint className="w-20 h-20 opacity-10" style={{ color: theme?.primary ?? "#b45309" }} />
                  <p className="text-sm opacity-20 mt-4">Happy pets, happy families</p>
                </div>
              )}
            </div>

            {/* Floating hours card */}
            <div
              className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-56 rounded-2xl p-4 shadow-xl"
              style={{ backgroundColor: theme?.background ?? "#faf7f2" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#b45309" }} />
                <span className="text-xs font-bold">Open Hours</span>
              </div>
              <div className="space-y-1 text-[11px] opacity-60">
                <div className="flex justify-between">
                  <span>Mon — Fri</span>
                  <span className="font-semibold">8am — 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sat — Sun</span>
                  <span className="font-semibold">9am — 5pm</span>
                </div>
                <div className="flex justify-between" style={{ color: "#dc2626" }}>
                  <span className="font-semibold">Emergency</span>
                  <span className="font-bold">24/7</span>
                </div>
              </div>
            </div>

            {/* Floating paw prints decorative */}
            <PawPrint
              className="absolute top-4 right-8 w-8 h-8 opacity-10 rotate-12"
              style={{ color: theme?.primary ?? "#b45309" }}
            />
            <PawPrint
              className="absolute top-20 -left-2 w-6 h-6 opacity-10 -rotate-12"
              style={{ color: theme?.primary ?? "#b45309" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
