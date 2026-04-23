import type { BlockProps } from "@/blocks/types";
import { Bike, Flame, ChevronRight } from "lucide-react";

export default function Hero170(props: BlockProps) {
  const {
    theme,
    heading = "Ride Your Dream",
    subheading = "From sport bikes to cruisers — find the machine that matches your soul. New arrivals weekly.",
    buttonText = "View Bikes",
    buttonUrl = "#",
    secondaryButtonText = "Book Test Ride",
    secondaryButtonUrl = "#",
    items = [
      { title: "Sport", description: "Track-ready performance" },
      { title: "Cruiser", description: "Open road freedom" },
      { title: "Adventure", description: "Go anywhere capability" },
      { title: "Touring", description: "Long-distance comfort" },
    ],
  } = props;

  return (
    <section
      className="relative min-h-screen flex items-end px-4 py-16 sm:py-24 overflow-hidden"
      style={{ backgroundColor: theme?.background ?? "#0d0d0d", color: theme?.foreground ?? "#f5f5f5" }}
    >
      {/* Diagonal red accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${theme?.accent ?? "#ef4444"} 100%)`,
        }}
      />

      {/* Grit texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(${theme?.foreground ?? "#f5f5f5"} 1px, transparent 1px)`,
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3 mb-8">
              <Flame className="w-5 h-5" style={{ color: theme?.accent ?? "#ef4444" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: theme?.accent ?? "#ef4444" }}
              >
                Motorcycle Dealer
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.9] mb-6 tracking-tight">
              {heading}
            </h1>

            <div
              className="w-20 h-1 mb-6"
              style={{ backgroundColor: theme?.accent ?? "#ef4444" }}
            />

            <p className="text-base sm:text-lg opacity-50 max-w-md leading-relaxed mb-10">
              {subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.accent ?? "#ef4444", color: "#ffffff" }}
              >
                <Bike className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none text-sm font-bold uppercase tracking-wider border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: theme?.accent ?? "#ef4444", color: theme?.accent ?? "#ef4444" }}
              >
                <Flame className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Right: Bike categories */}
          <div className="flex flex-col gap-0">
            {items.map((item, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center justify-between py-5 border-b transition-colors"
                style={{ borderColor: `${theme?.foreground ?? "#f5f5f5"}12` }}
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide group-hover:translate-x-2 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-40 mt-1">{item.description}</p>
                </div>
                <ChevronRight
                  className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity"
                  style={{ color: theme?.accent ?? "#ef4444" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          className="mt-16 pt-8 flex flex-wrap items-center gap-8 sm:gap-12 text-xs uppercase tracking-widest opacity-30"
          style={{ borderTop: `1px solid ${theme?.foreground ?? "#f5f5f5"}10` }}
        >
          <span>500+ Bikes in Stock</span>
          <span>40+ Brands</span>
          <span>Financing Available</span>
          <span>Nationwide Shipping</span>
        </div>
      </div>
    </section>
  );
}
