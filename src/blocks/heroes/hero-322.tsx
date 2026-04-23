"use client";

import type { BlockProps } from "@/blocks/types";
import { Smile, Phone, Star, Clock, ShieldCheck, CalendarCheck, ArrowRight } from "lucide-react";

export default function Hero322(props: BlockProps) {
  const {
    theme,
    heading = "Your Smile Deserves the Best Care",
    subheading = "Bright Smile Dental Clinic",
    bodyText = "From routine cleanings to cosmetic transformations, our team of experienced dentists uses the latest technology to give you a confident, healthy smile. New patients welcome — most insurance accepted.",
    buttonText = "Book Appointment",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "5-Star Rated", description: "Over 2,400 happy patient reviews", icon: "star" },
      { title: "Same-Day Visits", description: "Urgent dental care when you need it", icon: "clock" },
      { title: "Insurance Friendly", description: "We work with most major providers", icon: "shield" },
    ],
  } = props;

  const trustIcons = [Star, Clock, ShieldCheck];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f9ff", color: theme?.foreground ?? "#0f172a" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top badge */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#0ea5e9"}10`,
              color: theme?.primary ?? "#0ea5e9",
            }}
          >
            <Smile className="w-4 h-4" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base opacity-60 leading-relaxed max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#0ea5e9", color: "#ffffff" }}
            >
              <CalendarCheck className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-colors hover:opacity-80"
              style={{ borderColor: `${theme?.foreground ?? "#0f172a"}15` }}
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>
        </div>

        {/* Image area */}
        <div className="relative mb-12">
          <div
            className="rounded-3xl overflow-hidden aspect-[16/7] max-w-4xl mx-auto"
            style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}08` }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Smile
                  className="w-20 h-20 opacity-10"
                  style={{ color: theme?.primary ?? "#0ea5e9" }}
                />
              </div>
            )}
          </div>

          {/* Floating rating badge */}
          <div
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-3 shadow-lg flex items-center gap-3"
            style={{ backgroundColor: theme?.background ?? "#f0f9ff" }}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 fill-current"
                  style={{ color: "#facc15" }}
                />
              ))}
            </div>
            <span className="text-xs font-bold">4.9/5</span>
            <span className="text-[10px] opacity-40">2,400+ reviews</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.slice(0, 3).map((item, i) => {
            const Icon = trustIcons[i] ?? Star;
            return (
              <div
                key={i}
                className="rounded-xl p-5 text-center border"
                style={{
                  borderColor: `${theme?.foreground ?? "#0f172a"}08`,
                  backgroundColor: `${theme?.foreground ?? "#0f172a"}02`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}12` }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                </div>
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-xs opacity-50">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Services quick link */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-70"
            style={{ color: theme?.primary ?? "#0ea5e9" }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
