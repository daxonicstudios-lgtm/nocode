import type { BlockProps } from "@/blocks/types";
import { Home, MapPin, BedDouble, Bath, Maximize } from "lucide-react";

export default function Hero125(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Dream Home in the Perfect Neighborhood",
    subheading = "Browse thousands of curated listings with virtual tours, neighborhood insights, and expert guidance every step of the way.",
    buttonText = "Browse Listings",
    buttonUrl = "#",
    secondaryButtonText = "Book a Viewing",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#1a1a2e" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero image (full background on mobile, right half on desktop) */}
      <div className="absolute inset-0 lg:left-1/2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(135deg, ${theme?.primary ?? "#2563eb"}22 0%, ${theme?.accent ?? "#06b6d4"}22 100%)`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Home className="w-32 h-32 opacity-10" />
            </div>
          </div>
        )}
      </div>

      {/* Overlay for text readability */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{ backgroundColor: `${theme?.background ?? "#faf8f5"}dd` }}
      />
      <div
        className="absolute inset-y-0 left-0 w-3/5 hidden lg:block"
        style={{ background: `linear-gradient(to right, ${theme?.background ?? "#faf8f5"} 60%, transparent)` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ backgroundColor: theme?.primary ?? "#2563eb", color: "#ffffff" }}
          >
            <MapPin className="w-4 h-4" />
            2,400+ Properties Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>

          <p className="mt-6 text-lg opacity-60 leading-relaxed">
            {subheading}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
            >
              {buttonText}
            </a>
            <a
              href={secondaryButtonUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 hover:opacity-80 transition-opacity"
              style={{ borderColor: theme?.primary ?? "#2563eb", color: theme?.primary ?? "#2563eb" }}
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Featured property card */}
          <div
            className="mt-12 p-5 rounded-2xl border shadow-lg max-w-md"
            style={{
              backgroundColor: theme?.background ?? "#faf8f5",
              borderColor: `${theme?.foreground ?? "#1a1a2e"}15`,
            }}
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider opacity-50 mb-3">
              <Home className="w-3.5 h-3.5" />
              Featured Property
            </div>
            <div className="text-lg font-bold">Modern Villa with Garden</div>
            <div className="text-sm opacity-50 mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Westlands, Nairobi
            </div>
            <div className="mt-4 flex items-center gap-5 text-sm opacity-60">
              <span className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" /> 4 Beds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" /> 3 Baths
              </span>
              <span className="flex items-center gap-1">
                <Maximize className="w-4 h-4" /> 3,200 sqft
              </span>
            </div>
            <div className="mt-3 text-xl font-bold" style={{ color: theme?.primary ?? "#2563eb" }}>
              $485,000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
