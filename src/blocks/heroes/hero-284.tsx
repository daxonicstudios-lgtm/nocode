"use client";

import type { BlockProps } from "@/blocks/types";
import { Search, MapPin, Home, BedDouble, Bath, ArrowRight } from "lucide-react";

export default function Hero284(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Home",
    subheading = "Trusted Real Estate Since 2005",
    bodyText = "Search thousands of properties across top locations. Whether you are buying, selling, or renting, we make the process seamless.",
    buttonText = "Search Properties",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Lagos", description: "2,400+ listings" },
      { title: "Nairobi", description: "1,800+ listings" },
      { title: "Accra", description: "950+ listings" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f8f9fa", color: theme?.foreground ?? "#1c2331" }}
      className="min-h-screen flex items-center relative"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-5 h-5" style={{ color: theme?.primary ?? "#0d6efd" }} />
              <span className="text-sm font-medium opacity-60">{subheading}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-60 max-w-lg mb-10 leading-relaxed">
              {bodyText}
            </p>

            {/* Search bar */}
            <div
              className="rounded-2xl p-4 shadow-lg mb-10"
              style={{ backgroundColor: theme?.background ?? "#ffffff", border: `1px solid ${theme?.primary ? `${theme.primary}15` : "rgba(13,110,253,0.08)"}` }}
            >
              <div className="grid sm:grid-cols-3 gap-3 mb-3">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(13,110,253,0.04)" }}>
                  <MapPin className="w-4 h-4 opacity-40" />
                  <span className="text-sm opacity-50">Location</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(13,110,253,0.04)" }}>
                  <BedDouble className="w-4 h-4 opacity-40" />
                  <span className="text-sm opacity-50">Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ backgroundColor: theme?.primary ? `${theme.primary}08` : "rgba(13,110,253,0.04)" }}>
                  <Bath className="w-4 h-4 opacity-40" />
                  <span className="text-sm opacity-50">Bathrooms</span>
                </div>
              </div>
              <a
                href={buttonUrl}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#0d6efd" }}
              >
                <Search className="w-4 h-4" />
                {buttonText}
              </a>
            </div>

            {/* Popular locations */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-40 mb-3">Popular Locations</p>
              <div className="flex flex-wrap gap-3">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm cursor-pointer transition-colors hover:border-opacity-60"
                    style={{ borderColor: theme?.primary ? `${theme.primary}30` : "rgba(13,110,253,0.2)" }}
                  >
                    <MapPin className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#0d6efd" }} />
                    <span className="font-medium">{item.title}</span>
                    <span className="opacity-40 text-xs">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Property card grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Modern Villa", price: "$425,000", beds: 4, baths: 3 },
              { label: "City Apartment", price: "$185,000", beds: 2, baths: 1 },
              { label: "Family Home", price: "$320,000", beds: 3, baths: 2 },
              { label: "Penthouse Suite", price: "$890,000", beds: 5, baths: 4 },
            ].map((prop, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-sm border transition-shadow hover:shadow-md"
                style={{ borderColor: theme?.primary ? `${theme.primary}10` : "rgba(0,0,0,0.05)" }}
              >
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}${["08","0a","0c","06"][i]}` : `rgba(13,110,253,${[0.03,0.05,0.04,0.02][i]})` }}
                >
                  <Home className="w-8 h-8 opacity-15" style={{ color: theme?.primary ?? "#0d6efd" }} />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm">{prop.label}</p>
                  <p className="text-sm font-bold mt-1" style={{ color: theme?.primary ?? "#0d6efd" }}>{prop.price}</p>
                  <div className="flex gap-3 mt-2 text-xs opacity-40">
                    <span>{prop.beds} beds</span>
                    <span>{prop.baths} baths</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
