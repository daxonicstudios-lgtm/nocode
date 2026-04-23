import type { BlockProps } from "@/blocks/types";
import { Coffee, MapPin } from "lucide-react";

export default function Hero157(props: BlockProps) {
  const {
    theme,
    heading = "Your Favorite Corner for Great Coffee",
    subheading = "The Grind House",
    bodyText = "Artisan roasts, freshly baked pastries, and a warm atmosphere to start your day right. Whether you work here or just pass through, you are always welcome.",
    buttonText = "Order Ahead",
    buttonUrl = "#order",
    secondaryButtonText = "Find Us",
    secondaryButtonUrl = "#location",
  } = props;

  return (
    <section
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
      style={{
        backgroundColor: theme?.background ?? "#faf6f1",
        color: theme?.foreground ?? "#3e2c23",
      }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-7">
            {/* Coffee icon + name */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#6f4e37" }}
              >
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: theme?.primary ?? "#6f4e37" }}
              >
                {subheading}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {heading}
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg leading-relaxed max-w-lg mb-8 opacity-70">
              {bodyText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: theme?.primary ?? "#6f4e37",
                  color: "#ffffff",
                }}
              >
                <Coffee className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href={secondaryButtonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold border-2 transition-all duration-300 hover:opacity-80"
                style={{
                  borderColor: theme?.primary ?? "#6f4e37",
                  color: theme?.primary ?? "#6f4e37",
                }}
              >
                <MapPin className="w-4 h-4" />
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Opening hours card */}
          <div className="lg:col-span-5">
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: theme?.primary ?? "#6f4e37",
                color: "#ffffff",
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Coffee className="w-3 h-3" />
                Open Now
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-6">Opening Hours</h3>

              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday - Friday", time: "6:30 AM - 8:00 PM" },
                  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
                  { day: "Sunday", time: "8:00 AM - 6:00 PM" },
                ].map((slot) => (
                  <div key={slot.day} className="flex justify-between items-center">
                    <span className="opacity-80">{slot.day}</span>
                    <span className="font-semibold">{slot.time}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-6 border-t flex items-center gap-2 text-sm"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <MapPin className="w-4 h-4 opacity-70" />
                <span className="opacity-80">123 Brew Lane, Downtown District</span>
              </div>
            </div>

            {/* Mini feature tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Free Wi-Fi", "Pet Friendly", "Vegan Options"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#6f4e37"}12`,
                    color: theme?.primary ?? "#6f4e37",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
