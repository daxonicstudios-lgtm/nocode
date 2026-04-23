import type { BlockProps } from "@/blocks/types";
import { Car, MapPin, Calendar, Shield, Star, Clock } from "lucide-react";

export default function Hero171(props: BlockProps) {
  const {
    theme,
    heading = "Rent the Perfect Car for Every Journey",
    subheading = "From compact city cars to luxury SUVs — pick up anywhere, drop off everywhere. No hidden fees, ever.",
    buttonText = "Rent Now",
    buttonUrl = "#",
  } = props;

  return (
    <section
      className="relative px-4 py-16 sm:py-24 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
    >
      {/* Decorative top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#2563eb"}10`, color: theme?.primary ?? "#2563eb" }}
          >
            <Car className="w-3.5 h-3.5" />
            Car Rental Made Simple
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-60 leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Booking form card */}
        <div
          className="rounded-3xl p-6 sm:p-8 mb-10 shadow-xl"
          style={{
            backgroundColor: theme?.background ?? "#ffffff",
            border: `1px solid ${theme?.foreground ?? "#111827"}10`,
            boxShadow: `0 20px 60px ${theme?.foreground ?? "#111827"}08`,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Pick-up location */}
            <div className="lg:col-span-2 flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider opacity-40 mb-2">Pick-up Location</label>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3.5"
                style={{ backgroundColor: `${theme?.foreground ?? "#111827"}04`, border: `1px solid ${theme?.foreground ?? "#111827"}10` }}
              >
                <MapPin className="w-4 h-4 opacity-40 shrink-0" />
                <span className="text-sm opacity-50">City, airport, or address</span>
              </div>
            </div>

            {/* Drop-off location */}
            <div className="lg:col-span-2 flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider opacity-40 mb-2">Drop-off Location</label>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3.5"
                style={{ backgroundColor: `${theme?.foreground ?? "#111827"}04`, border: `1px solid ${theme?.foreground ?? "#111827"}10` }}
              >
                <MapPin className="w-4 h-4 opacity-40 shrink-0" />
                <span className="text-sm opacity-50">Same as pick-up</span>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-col">
              <label className="text-xs font-medium uppercase tracking-wider opacity-40 mb-2">Dates</label>
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3.5"
                style={{ backgroundColor: `${theme?.foreground ?? "#111827"}04`, border: `1px solid ${theme?.foreground ?? "#111827"}10` }}
              >
                <Calendar className="w-4 h-4 opacity-40 shrink-0" />
                <span className="text-sm opacity-50">Select dates</span>
              </div>
            </div>
          </div>

          {/* Search button */}
          <div className="mt-5 flex justify-center">
            <a
              href={buttonUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#2563eb",
                color: "#ffffff",
                boxShadow: `0 4px 20px ${theme?.primary ?? "#2563eb"}30`,
              }}
            >
              <Car className="w-4 h-4" />
              {buttonText}
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Shield className="w-5 h-5" />, label: "Full Insurance Included" },
            { icon: <Star className="w-5 h-5" />, label: "4.9 Star Rating" },
            { icon: <Clock className="w-5 h-5" />, label: "24/7 Roadside Assist" },
            { icon: <Car className="w-5 h-5" />, label: "3,000+ Vehicles" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 py-4 px-3 rounded-xl"
              style={{ backgroundColor: `${theme?.foreground ?? "#111827"}03` }}
            >
              <div style={{ color: theme?.primary ?? "#2563eb" }}>{badge.icon}</div>
              <span className="text-xs sm:text-sm font-medium opacity-60">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
