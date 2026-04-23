"use client";

import type { BlockProps } from "@/blocks/types";
import { MapPin, Globe, ArrowRight, Building, Users, Wifi } from "lucide-react";

export default function Hero418(props: BlockProps) {
  const {
    theme,
    heading = "Global Presence, Local Expertise",
    subheading = "Operating in 40+ Countries",
    bodyText = "From Lagos to London, Nairobi to New York — our teams on the ground ensure you get world-class service with local market understanding wherever you operate.",
    buttonText = "Find Your Region",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lagos", description: "West Africa HQ", value: "120+ team members" },
      { title: "London", description: "Europe HQ", value: "85+ team members" },
      { title: "New York", description: "Americas HQ", value: "60+ team members" },
      { title: "Nairobi", description: "East Africa HQ", value: "95+ team members" },
      { title: "Dubai", description: "MENA HQ", value: "40+ team members" },
      { title: "Singapore", description: "Asia-Pacific HQ", value: "50+ team members" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f1729", color: theme?.foreground ?? "#e2e8f0" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}15`, color: theme?.primary ?? "#0ea5e9" }}
          >
            <Globe className="h-3.5 w-3.5" />
            {subheading}
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">{heading}</h1>
          <p className="text-base sm:text-lg opacity-40 max-w-2xl mx-auto">{bodyText}</p>
        </div>

        {/* Stylized world map area */}
        <div
          className="rounded-2xl p-6 sm:p-10 mb-10 relative overflow-hidden border"
          style={{ borderColor: `${theme?.primary ?? "#0ea5e9"}15` }}
        >
          {/* Dot grid simulating a map */}
          <div className="grid grid-cols-12 sm:grid-cols-16 gap-2 sm:gap-3 opacity-10 mb-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                style={{ backgroundColor: theme?.foreground ?? "#e2e8f0" }}
              />
            ))}
          </div>

          {/* Location markers overlaid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4 border transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer group"
                style={{
                  borderColor: `${theme?.primary ?? "#0ea5e9"}20`,
                  backgroundColor: `${theme?.primary ?? "#0ea5e9"}05`,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: theme?.primary ?? "#0ea5e9" }} />
                  <span className="font-bold text-sm">{item.title}</span>
                </div>
                <p className="text-xs opacity-50 mb-1">{item.description}</p>
                <p className="text-xs font-semibold" style={{ color: theme?.primary ?? "#0ea5e9" }}>
                  {item.value}
                </p>
                {/* Pulse dot */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
                    />
                  </span>
                  <span className="text-[10px] opacity-30">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
          style={{ backgroundColor: `${theme?.primary ?? "#0ea5e9"}08` }}
        >
          {[
            { icon: Globe, val: "40+", label: "Countries" },
            { icon: Building, val: "12", label: "Regional Offices" },
            { icon: Users, val: "450+", label: "Team Members" },
            { icon: Wifi, val: "99.9%", label: "Global Uptime" },
          ].map(({ icon: Icon, val, label }) => (
            <div key={label} className="text-center">
              <Icon className="h-5 w-5 mx-auto mb-2 opacity-40" />
              <div className="text-2xl sm:text-3xl font-black" style={{ color: theme?.primary ?? "#0ea5e9" }}>{val}</div>
              <div className="text-xs opacity-40 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white text-sm transition-transform hover:scale-105"
            style={{ backgroundColor: theme?.primary ?? "#0ea5e9" }}
          >
            <MapPin className="h-4 w-4" />
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-xs opacity-20 mt-4">Available in English, French, Arabic, Swahili, and 12 more languages</p>
        </div>
      </div>
    </section>
  );
}
