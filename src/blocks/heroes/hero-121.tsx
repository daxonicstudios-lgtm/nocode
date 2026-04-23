import type { BlockProps } from "@/blocks/types";
import { Anchor, Ship, Waves } from "lucide-react";

export default function Hero121(props: BlockProps) {
  const {
    theme,
    heading = "Navigate the Future of Maritime Logistics",
    subheading = "Streamlined shipping solutions powered by real-time tracking and smart route optimization across every ocean.",
    buttonText = "Explore Our Fleet",
    buttonUrl = "#",
    secondaryButtonText = "Get a Quote",
    secondaryButtonUrl = "#",
    imageUrl,
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a2540", color: theme?.foreground ?? "#ffffff" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      )}

      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 py-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ backgroundColor: theme?.primary ?? "#0070f3", color: "#ffffff" }}
        >
          <Ship className="w-4 h-4" />
          Global Shipping Solutions
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#0070f3" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <Anchor className="w-5 h-5" />
            {buttonText}
          </a>
          <a
            href={secondaryButtonUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-current opacity-70 hover:opacity-100 transition-opacity"
          >
            {secondaryButtonText}
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "150+", label: "Vessels" },
            { value: "80+", label: "Ports" },
            { value: "99.7%", label: "On-Time Delivery" },
            { value: "24/7", label: "Live Tracking" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold" style={{ color: theme?.accent ?? "#38bdf8" }}>
                {stat.value}
              </div>
              <div className="text-sm opacity-60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L48 74.7C96 69.3 192 58.7 288 64C384 69.3 480 90.7 576 101.3C672 112 768 112 864 101.3C960 90.7 1056 69.3 1152 64C1248 58.7 1344 69.3 1392 74.7L1440 80V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0V80Z"
            fill={theme?.accent ?? "#38bdf8"}
            fillOpacity="0.15"
          />
          <path
            d="M0 120L48 114.7C96 109.3 192 98.7 288 101.3C384 104 480 120 576 128C672 136 768 136 864 128C960 120 1056 104 1152 98.7C1248 93.3 1344 98.7 1392 101.3L1440 104V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0V120Z"
            fill={theme?.accent ?? "#38bdf8"}
            fillOpacity="0.25"
          />
          <path
            d="M0 150L48 147.3C96 144.7 192 139.3 288 141.3C384 143.3 480 152.7 576 156C672 159.3 768 156.7 864 152.7C960 148.7 1056 143.3 1152 141.3C1248 139.3 1344 140.7 1392 141.3L1440 142V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0V150Z"
            fill={theme?.accent ?? "#38bdf8"}
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* Floating wave icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Waves className="w-6 h-6 opacity-50" />
      </div>
    </section>
  );
}
