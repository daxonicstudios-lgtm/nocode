"use client";

import type { BlockProps } from "@/blocks/types";
import { Target, Shield, Users, MapPin, Crosshair, ChevronRight } from "lucide-react";

export default function Hero462(props: BlockProps) {
  const {
    theme,
    heading = "Lock & Load for Battle",
    subheading = "Tactical Paintball Experiences for Every Squad",
    bodyText = "Gear up and hit the field. From speedball arenas to massive woodland scenarios, our paintball park delivers adrenaline-pumping action for groups of all sizes.",
    buttonText = "Book Your Battle",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Speedball Arena", description: "Fast-paced inflatable bunker field", icon: "target" },
      { title: "Woodland Warfare", description: "5-acre natural terrain course", icon: "treePine" },
      { title: "Urban Assault", description: "Multi-story building complex", icon: "building" },
      { title: "Capture the Flag", description: "Classic team objective scenarios", icon: "flag" },
    ],
  } = props;

  const packages = [
    { name: "Squad (4-8)", price: "$35/person", includes: "Gear, 200 rounds, 2 hrs" },
    { name: "Platoon (9-16)", price: "$29/person", includes: "Gear, 300 rounds, 3 hrs" },
    { name: "Battalion (17+)", price: "$25/person", includes: "Gear, 500 rounds, 4 hrs, private field" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1A1A1A", color: theme?.foreground ?? "#E8E4D9" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Camo pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/3 h-1/2 rounded-full bg-green-800 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-1/2 h-1/3 rounded-full bg-amber-900 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 rounded-full bg-green-900 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Top bar */}
        <div className="flex items-center gap-3 mb-8">
          <Crosshair className="w-6 h-6" style={{ color: theme?.primary ?? "#C9B037" }} />
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: theme?.primary ?? "#C9B037" }}
          >
            Warzone Paintball Park
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main content - spans 7 cols */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-6 uppercase tracking-tight">
              {heading}
            </h1>
            <p className="text-xl sm:text-2xl font-medium opacity-80 mb-3">{subheading}</p>
            <p className="text-base opacity-60 mb-8 max-w-xl">{bodyText}</p>

            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-black uppercase tracking-wider text-sm transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#C9B037" }}
            >
              <Target className="w-5 h-5" />
              {buttonText}
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Field types */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border text-center"
                  style={{
                    borderColor: theme?.primary ? `${theme.primary}30` : "#C9B03730",
                    backgroundColor: theme?.primary ? `${theme.primary}08` : "#C9B03708",
                  }}
                >
                  <Target className="w-6 h-6 mx-auto mb-2" style={{ color: theme?.primary ?? "#C9B037" }} />
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-xs opacity-50 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - group packages */}
          <div className="lg:col-span-5">
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#C9B03710" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5" style={{ color: theme?.primary ?? "#C9B037" }} />
                <h3 className="font-bold text-lg uppercase tracking-wider">Group Packages</h3>
              </div>

              <div className="space-y-4">
                {packages.map((pkg, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border"
                    style={{ borderColor: theme?.primary ? `${theme.primary}25` : "#C9B03725" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold">{pkg.name}</span>
                      <span
                        className="font-black text-lg"
                        style={{ color: theme?.primary ?? "#C9B037" }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-sm opacity-60 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      {pkg.includes}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg text-center" style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#C9B03715" }}>
                <MapPin className="w-5 h-5 mx-auto mb-2" style={{ color: theme?.primary ?? "#C9B037" }} />
                <p className="text-sm font-semibold">Open Sat & Sun, 9 AM - 6 PM</p>
                <p className="text-xs opacity-60 mt-1">Walk-ins welcome. Private bookings available weekdays.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
