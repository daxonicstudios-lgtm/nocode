"use client";

import type { BlockProps } from "@/blocks/types";
import { Bike, Wrench, Users, ArrowLeftRight, MapPin, ChevronRight } from "lucide-react";

export default function Hero487(props: BlockProps) {
  const {
    theme,
    heading = "Ride Faster, Go Further",
    subheading = "Premium Bikes, Expert Service & Community Rides",
    bodyText = "Whether you commute, compete, or cruise — we have the perfect bike and the expertise to keep it running smooth. Full-service workshop with same-day repairs.",
    buttonText = "Shop Bikes",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Road Bikes", description: "Carbon & alloy frames for speed", value: "From $899" },
      { title: "Mountain Bikes", description: "Full suspension trail-ready", value: "From $1,199" },
      { title: "E-Bikes", description: "Pedal-assist city & cargo", value: "From $1,499" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#f0f0f0" }}
      className="relative overflow-hidden"
    >
      {/* Dynamic diagonal accent */}
      <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: theme?.primary ?? "#ff5722" }} />
      <div className="absolute top-0 left-0 w-2 h-full opacity-30" style={{ backgroundColor: theme?.primary ?? "#ff5722" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#ff5722" }}>
                <Bike className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: theme?.primary ?? "#ff5722" }}>
                Velocity Cycle Co.
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-4 uppercase tracking-tight">
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-3" style={{ color: theme?.primary ?? "#ff5722" }}>
              {subheading}
            </p>
            <p className="text-base opacity-70 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white uppercase tracking-wide transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#ff5722" }}
              >
                <Bike className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wide border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#ff5722", color: theme?.primary ?? "#ff5722" }}
              >
                <Wrench className="w-5 h-5" />
                Book Service
              </a>
            </div>

            {/* Quick services */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Wrench, label: "Same-Day Repair" },
                { icon: Users, label: "Group Rides" },
                { icon: ArrowLeftRight, label: "Trade-In" },
                { icon: MapPin, label: "Bike Fitting" },
              ].map((svc, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-lg border border-white/10 cursor-pointer hover:border-white/20 transition-colors">
                  <svc.icon className="w-4 h-4 flex-shrink-0" style={{ color: theme?.primary ?? "#ff5722" }} />
                  <span className="text-xs font-semibold">{svc.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-xl object-cover max-h-64" />
            ) : (
              <div className="w-full h-48 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${theme?.primary ?? "#ff5722"}12` }}>
                <Bike className="w-20 h-20 opacity-15" style={{ color: theme?.primary ?? "#ff5722" }} />
              </div>
            )}

            {/* Bike categories */}
            <div className="space-y-3">
              {items.map((bike, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/10 cursor-pointer group hover:border-white/20 transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme?.primary ?? "#ff5722"}15` }}>
                    <Bike className="w-7 h-7" style={{ color: theme?.primary ?? "#ff5722" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold">{bike.title}</p>
                    <p className="text-xs opacity-50">{bike.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-sm" style={{ color: theme?.primary ?? "#ff5722" }}>{bike.value}</p>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-80 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

            {/* Group ride banner */}
            <div className="rounded-xl p-4 flex items-center gap-4" style={{ backgroundColor: theme?.primary ?? "#ff5722" }}>
              <Users className="w-10 h-10 text-white flex-shrink-0 opacity-80" />
              <div className="text-white">
                <p className="font-bold text-sm">Saturday Group Ride</p>
                <p className="text-xs opacity-80">Every Sat @ 7 AM — All levels welcome. 30km route through the valley.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
