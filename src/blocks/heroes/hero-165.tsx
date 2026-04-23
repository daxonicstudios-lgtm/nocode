import type { BlockProps } from "@/blocks/types";
import { Car, Search } from "lucide-react";

export default function Hero165(props: BlockProps) {
  const {
    theme,
    heading = "Find Your Perfect Drive",
    subheading = "Browse thousands of vehicles from trusted dealers near you",
    buttonText = "Search Inventory",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 sm:py-24"
      style={{ backgroundColor: theme?.background ?? "#0f0f0f", color: theme?.foreground ?? "#f5f5f5" }}
    >
      {/* Decorative gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${theme?.primary ?? "#3b82f6"} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Icon badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{ backgroundColor: `${theme?.primary ?? "#3b82f6"}20`, color: theme?.primary ?? "#3b82f6" }}
        >
          <Car className="w-4 h-4" />
          <span>Premium Auto Dealership</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
          {heading}
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 opacity-70">
          {subheading}
        </p>

        {/* Vehicle search bar */}
        <div
          className="w-full max-w-4xl mx-auto rounded-2xl p-4 sm:p-6 mb-8"
          style={{ backgroundColor: `${theme?.foreground ?? "#f5f5f5"}10`, border: `1px solid ${theme?.foreground ?? "#f5f5f5"}15` }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-4">
            {/* Make dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-medium mb-1 opacity-50 uppercase tracking-wider">Make</label>
              <div
                className="rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer"
                style={{ backgroundColor: `${theme?.foreground ?? "#f5f5f5"}08`, border: `1px solid ${theme?.foreground ?? "#f5f5f5"}12` }}
              >
                <span className="opacity-60">All Makes</span>
                <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Model dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-medium mb-1 opacity-50 uppercase tracking-wider">Model</label>
              <div
                className="rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer"
                style={{ backgroundColor: `${theme?.foreground ?? "#f5f5f5"}08`, border: `1px solid ${theme?.foreground ?? "#f5f5f5"}12` }}
              >
                <span className="opacity-60">All Models</span>
                <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Year dropdown */}
            <div className="flex flex-col text-left">
              <label className="text-xs font-medium mb-1 opacity-50 uppercase tracking-wider">Year</label>
              <div
                className="rounded-lg px-4 py-3 text-sm flex items-center justify-between cursor-pointer"
                style={{ backgroundColor: `${theme?.foreground ?? "#f5f5f5"}08`, border: `1px solid ${theme?.foreground ?? "#f5f5f5"}12` }}
              >
                <span className="opacity-60">Any Year</span>
                <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Search button */}
            <div className="flex flex-col justify-end">
              <a
                href={buttonUrl}
                className="rounded-lg px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#3b82f6", color: "#ffffff" }}
              >
                <Search className="w-4 h-4" />
                {buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm opacity-50">
          <span>2,400+ Vehicles</span>
          <span className="hidden sm:inline">|</span>
          <span>50+ Brands</span>
          <span className="hidden sm:inline">|</span>
          <span>Nationwide Delivery</span>
        </div>
      </div>
    </section>
  );
}
