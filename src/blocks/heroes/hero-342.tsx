"use client";

import type { BlockProps } from "@/blocks/types";
import { Wifi, Coffee, Users, ArrowRight, MapPin, Monitor, Calendar } from "lucide-react";

export default function Hero342(props: BlockProps) {
  const {
    theme,
    heading = "Your Best Work Starts Here",
    subheading = "Community-Driven Co-Working",
    bodyText = "Join a vibrant community of creators, developers, and entrepreneurs. Flexible desks, private offices, and meeting rooms designed for productivity and collaboration.",
    buttonText = "Book a Tour",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Hot Desk", description: "Flexible seating, any available spot", value: "$199/mo" },
      { title: "Dedicated Desk", description: "Your own permanent workspace", value: "$349/mo" },
      { title: "Private Office", description: "Lockable office for your team", value: "$899/mo" },
    ],
  } = props;

  const amenities = [
    { icon: Wifi, label: "Gigabit WiFi" },
    { icon: Coffee, label: "Free Coffee & Tea" },
    { icon: Monitor, label: "Meeting Rooms" },
    { icon: Calendar, label: "24/7 Access" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf9f6", color: theme?.foreground ?? "#1c1917" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
              <span className="text-sm font-medium opacity-60">{subheading}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Amenities row */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {amenities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15` }}
                  >
                    <a.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                  </div>
                  <span className="font-medium">{a.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#ffffff" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors"
                style={{ borderColor: theme?.primary ?? "#f59e0b", color: theme?.primary ?? "#f59e0b" }}
              >
                <Users className="w-4 h-4" />
                Join Community
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm opacity-50">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                    style={{
                      borderColor: theme?.background ?? "#faf9f6",
                      backgroundColor: `${theme?.primary ?? "#f59e0b"}${20 + i * 15}`,
                      color: theme?.primary ?? "#f59e0b",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>320+ members and growing</span>
            </div>
          </div>

          {/* Right — Desk plans */}
          <div className="space-y-4">
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6">
                <img src={imageUrl} alt="Co-working space" className="w-full h-52 object-cover" />
              </div>
            )}

            <h3 className="text-sm font-bold uppercase tracking-wider opacity-40 mb-3">Desk Plans</h3>

            {items.slice(0, 3).map((plan, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border transition-all hover:shadow-lg cursor-pointer"
                style={{
                  borderColor: i === 1 ? (theme?.primary ?? "#f59e0b") : "rgba(0,0,0,0.08)",
                  backgroundColor: i === 1 ? `${theme?.primary ?? "#f59e0b"}08` : "transparent",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">{plan.title}</h3>
                      {i === 1 && (
                        <span
                          className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#fff" }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm opacity-50 mt-1">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold" style={{ color: theme?.primary ?? "#f59e0b" }}>{plan.value}</div>
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xs text-center opacity-40 mt-4">Day passes available from $25/day</p>
          </div>
        </div>
      </div>
    </section>
  );
}
