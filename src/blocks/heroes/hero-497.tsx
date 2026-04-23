"use client";

import type { BlockProps } from "@/blocks/types";
import {
  MapPin,
  Wifi,
  Coffee,
  Monitor,
  Users,
  Printer,
  Search,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Hero497(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Perfect Workspace",
    subheading = "FlexDesk",
    bodyText = "Discover and book coworking spaces, private offices, and meeting rooms in 200+ cities. Work from anywhere, on your terms.",
    buttonText = "Find a Space",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "High-Speed WiFi", icon: "wifi" },
      { title: "Free Coffee", icon: "coffee" },
      { title: "4K Monitors", icon: "monitor" },
      { title: "Meeting Rooms", icon: "users" },
      { title: "Print & Scan", icon: "printer" },
    ],
  } = props;

  const [activePass, setActivePass] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    wifi: <Wifi className="w-4 h-4" />,
    coffee: <Coffee className="w-4 h-4" />,
    monitor: <Monitor className="w-4 h-4" />,
    users: <Users className="w-4 h-4" />,
    printer: <Printer className="w-4 h-4" />,
  };

  const passes = [
    { name: "Day Pass", price: "$25", per: "/day", features: ["Desk access", "WiFi", "Coffee"] },
    { name: "Weekly", price: "$89", per: "/week", features: ["Dedicated desk", "All amenities", "Meeting room 2h"] },
    { name: "Monthly", price: "$299", per: "/month", features: ["Private space", "24/7 access", "Unlimited meetings"] },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Top section */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#f59e0b"}15`,
              color: theme?.primary ?? "#f59e0b",
            }}
          >
            <MapPin className="w-3.5 h-3.5" />
            {subheading} — 200+ locations
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-50 max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>

          {/* Search bar */}
          <div
            className="max-w-xl mx-auto flex items-center gap-2 px-4 py-3 rounded-xl border shadow-sm"
            style={{ borderColor: `${theme?.primary ?? "#f59e0b"}30` }}
          >
            <Search className="w-5 h-5 opacity-30 shrink-0" />
            <input
              type="text"
              placeholder="Search by city, neighborhood, or zip code..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:opacity-40"
              style={{ color: theme?.foreground ?? "#1a1a1a" }}
              readOnly
            />
            <a
              href={buttonUrl}
              className="px-5 py-2 rounded-lg text-white text-sm font-semibold shrink-0"
              style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
            >
              {buttonText}
            </a>
          </div>
        </div>

        {/* Amenity filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors hover:bg-gray-50"
              style={{ borderColor: `${theme?.primary ?? "#f59e0b"}30` }}
            >
              <span style={{ color: theme?.primary ?? "#f59e0b" }}>
                {iconMap[item.icon ?? "wifi"]}
              </span>
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Day pass pricing */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest opacity-30 mb-6">
            Flexible Pricing
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {passes.map((pass, i) => (
              <button
                key={i}
                onClick={() => setActivePass(i)}
                className="text-left rounded-xl p-5 border-2 transition-all"
                style={{
                  borderColor: activePass === i ? theme?.primary ?? "#f59e0b" : "transparent",
                  backgroundColor: activePass === i ? `${theme?.primary ?? "#f59e0b"}08` : "#f9fafb",
                }}
              >
                <p className="text-sm font-semibold mb-1">{pass.name}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl font-bold">{pass.price}</span>
                  <span className="text-xs opacity-40">{pass.per}</span>
                </div>
                <ul className="space-y-1">
                  {pass.features.map((f) => (
                    <li key={f} className="text-xs opacity-50 flex items-center gap-1.5">
                      <div
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
              style={{ color: theme?.primary ?? "#f59e0b" }}
            >
              View all plans and enterprise pricing
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
