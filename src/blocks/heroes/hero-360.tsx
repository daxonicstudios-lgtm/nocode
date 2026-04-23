"use client";

import type { BlockProps } from "@/blocks/types";
import { Shield, Bug, ArrowRight, Phone, MapPin, CheckCircle, Award, Clock, BadgeCheck } from "lucide-react";

export default function Hero360(props: BlockProps) {
  const {
    theme,
    heading = "Protect Your Home From Unwanted Guests",
    subheading = "Guardian Pest Control",
    bodyText = "Family-safe, eco-friendly pest elimination backed by our 100% satisfaction guarantee. Serving residential and commercial properties with same-day and emergency service available.",
    buttonText = "Get Protected Today",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Termites", description: "Inspection, treatment, damage prevention" },
      { title: "Rodents", description: "Trapping, exclusion, sanitization" },
      { title: "Roaches & Ants", description: "Baiting, barrier treatment, monitoring" },
      { title: "Mosquitoes", description: "Yard treatment, misting systems" },
      { title: "Bed Bugs", description: "Heat treatment, full elimination" },
      { title: "Wildlife", description: "Humane removal, entry sealing" },
    ],
  } = props;

  const serviceArea = ["Downtown", "Northside", "Westlake", "Eastview", "South Hills", "Midtown"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#171717" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Shield watermark */}
      <div className="absolute top-16 right-10 opacity-[0.03]">
        <Shield className="w-[280px] h-[280px]" style={{ color: theme?.primary ?? "#059669" }} />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Guarantee banner */}
        <div
          className="flex items-center justify-center gap-3 mb-10 p-3 rounded-xl text-sm font-bold"
          style={{ backgroundColor: `${theme?.primary ?? "#059669"}10`, color: theme?.primary ?? "#059669" }}
        >
          <BadgeCheck className="w-5 h-5" />
          <span>100% Satisfaction Guarantee — If pests return, so do we. Free of charge.</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#059669"}12`, color: theme?.primary ?? "#059669" }}
            >
              <Shield className="w-3.5 h-3.5" />
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
                style={{ backgroundColor: theme?.primary ?? "#059669" }}
              >
                <Shield className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:5557654321"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#059669"}30`, color: theme?.primary ?? "#059669" }}
              >
                <Phone className="w-4 h-4" />
                (555) 765-4321
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: <CheckCircle className="w-4 h-4" />, text: "Family & Pet Safe" },
                { icon: <Award className="w-4 h-4" />, text: "State Licensed" },
                { icon: <Clock className="w-4 h-4" />, text: "Same-Day Service" },
                { icon: <BadgeCheck className="w-4 h-4" />, text: "Money-Back Guarantee" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-lg text-xs font-bold"
                  style={{ backgroundColor: `${theme?.primary ?? "#059669"}08`, color: theme?.primary ?? "#059669" }}
                >
                  {badge.icon}
                  {badge.text}
                </div>
              ))}
            </div>

            {/* Service area */}
            <div
              className="p-5 rounded-xl border"
              style={{ borderColor: `${theme?.primary ?? "#059669"}15`, backgroundColor: `${theme?.primary ?? "#059669"}04` }}
            >
              <h3 className="text-sm font-bold flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" style={{ color: theme?.primary ?? "#059669" }} />
                Service Area
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceArea.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border"
                    style={{ borderColor: `${theme?.primary ?? "#059669"}20`, color: theme?.primary ?? "#059669" }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={imageUrl} alt="Pest control service" className="w-full h-56 object-cover" />
              </div>
            )}

            <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
              <Bug className="w-4 h-4" style={{ color: theme?.primary ?? "#059669" }} />
              Pests We Eliminate
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.slice(0, 6).map((pest, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer group"
                  style={{ borderColor: `${theme?.primary ?? "#059669"}12`, backgroundColor: `${theme?.primary ?? "#059669"}04` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: theme?.primary ?? "#059669" }} />
                    <span className="font-bold text-sm">{pest.title}</span>
                  </div>
                  <div className="text-xs opacity-40 pl-5">{pest.description}</div>
                </div>
              ))}
            </div>

            {/* Guarantee badge */}
            <div
              className="mt-6 p-5 rounded-xl border text-center"
              style={{ borderColor: `${theme?.primary ?? "#059669"}20`, backgroundColor: `${theme?.primary ?? "#059669"}06` }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${theme?.primary ?? "#059669"}15` }}
              >
                <Shield className="w-7 h-7" style={{ color: theme?.primary ?? "#059669" }} />
              </div>
              <div className="font-black text-base mb-1">Pest-Free Guarantee</div>
              <div className="text-xs opacity-45 max-w-xs mx-auto">
                If pests return between treatments, we come back at no extra cost. No questions asked.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
