"use client";

import type { BlockProps } from "@/blocks/types";
import { MapPin, BedDouble, Bath, Maximize, Car, Trees, Waves, Shield, Play, ArrowRight } from "lucide-react";

export default function Hero398(props: BlockProps) {
  const {
    theme,
    heading = "Residences Beyond Extraordinary",
    subheading = "Curated Luxury Properties",
    bodyText = "Discover the world's most prestigious addresses. From waterfront penthouses to private island estates, experience real estate at its finest.",
    buttonText = "Schedule a Viewing",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Oceanfront Penthouse", value: "$12.8M", description: "Miami Beach, FL", label: "5 bed / 6 bath / 8,200 sqft" },
      { title: "Modern Estate", value: "$9.4M", description: "Beverly Hills, CA", label: "4 bed / 5 bath / 6,800 sqft" },
      { title: "Sky Villa", value: "$18.2M", description: "Manhattan, NY", label: "6 bed / 7 bath / 10,400 sqft" },
    ],
  } = props;

  const amenityIcons = [
    { icon: Waves, label: "Pool" },
    { icon: Car, label: "Garage" },
    { icon: Trees, label: "Gardens" },
    { icon: Shield, label: "Security" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0d0d0d", color: theme?.foreground ?? "#f5f0eb" }}
      className="min-h-screen px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className="text-sm font-medium uppercase tracking-[0.25em] mb-6"
            style={{ color: theme?.primary ?? "#c9a96e" }}
          >
            {subheading}
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-7xl mb-6" style={{ fontFamily: "serif" }}>
            {heading}
          </h1>
          <p className="text-base opacity-50 mb-10 leading-relaxed">{bodyText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center gap-2 rounded-none border-2 px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all hover:text-white"
              style={{
                borderColor: theme?.primary ?? "#c9a96e",
                color: theme?.primary ?? "#c9a96e",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme?.primary ?? "#c9a96e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
            >
              <Play className="h-4 w-4" />
              Virtual Tour
            </a>
          </div>
        </div>

        {/* Property cards */}
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {items.map((property) => (
            <div
              key={property.title}
              className="group relative overflow-hidden rounded-none border transition-all hover:border-opacity-50"
              style={{ borderColor: `${theme?.primary ?? "#c9a96e"}30` }}
            >
              {/* Image area */}
              <div
                className="h-64 relative"
                style={{
                  backgroundColor: theme?.muted ?? "#1a1a1a",
                  backgroundImage: property.imageUrl ? `url(${property.imageUrl})` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Price tag */}
                <div
                  className="absolute top-4 right-4 px-4 py-2 text-sm font-semibold backdrop-blur-md"
                  style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}cc`, color: "#fff" }}
                >
                  {property.value}
                </div>
                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm text-white">
                  <MapPin className="h-3.5 w-3.5" />
                  {property.description}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-3" style={{ fontFamily: "serif" }}>
                  {property.title}
                </h3>
                <div className="flex items-center gap-4 text-sm opacity-50">
                  <span className="flex items-center gap-1">
                    <BedDouble className="h-3.5 w-3.5" />
                    {property.label?.split("/")[0]?.trim()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" />
                    {property.label?.split("/")[1]?.trim()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" />
                    {property.label?.split("/")[2]?.trim()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities bar */}
        <div
          className="flex flex-wrap justify-center gap-8 py-8 border-t border-b"
          style={{ borderColor: `${theme?.primary ?? "#c9a96e"}15` }}
        >
          {amenityIcons.map((a) => (
            <div key={a.label} className="flex items-center gap-2 text-sm opacity-40">
              <a.icon className="h-5 w-5" style={{ color: theme?.primary ?? "#c9a96e" }} />
              <span className="uppercase tracking-wider text-xs">{a.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm opacity-40 mb-4 uppercase tracking-wider">Private viewings available by appointment</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider transition-opacity hover:opacity-70"
            style={{ color: theme?.primary ?? "#c9a96e" }}
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
