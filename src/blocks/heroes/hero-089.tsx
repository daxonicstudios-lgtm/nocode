import type { BlockProps } from "@/blocks/types";
import { Truck, Package, MapPin, ArrowRight, Clock, Shield } from "lucide-react";

export default function Hero089(props: BlockProps) {
  const {
    theme,
    heading = "Reliable Delivery, Anywhere You Need It",
    subheading = "From warehouse to doorstep, we handle your shipments with speed and precision. Real-time tracking, competitive rates, and guaranteed delivery.",
    buttonText = "Track Shipment",
    buttonUrl = "#",
    secondaryButtonText = "Get a Quote",
    secondaryButtonUrl = "#",
    imageUrl,
    items = [
      { icon: "clock", title: "24-48hr", description: "Express delivery" },
      { icon: "shield", title: "99.8%", description: "Safe arrivals" },
      { icon: "mappin", title: "35+", description: "Countries served" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    clock: <Clock className="w-5 h-5" />,
    shield: <Shield className="w-5 h-5" />,
    mappin: <MapPin className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#f0f9ff", color: theme?.foreground ?? "#0c4a6e" }}
      className="min-h-[80vh] flex items-center px-5 py-16"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text side */}
        <div className="flex-1 w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: theme?.accent ?? "#dbeafe", color: theme?.primary ?? "#1d4ed8" }}
          >
            <Truck className="w-4 h-4" />
            <span>Fast and Reliable Logistics</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="mt-5 text-base sm:text-lg opacity-60 leading-relaxed max-w-lg">
            {subheading}
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2"
                  style={{ backgroundColor: theme?.accent ?? "#dbeafe", color: theme?.primary ?? "#1d4ed8" }}
                >
                  {iconMap[item.icon ?? "clock"] ?? <Clock className="w-5 h-5" />}
                </div>
                <p className="text-xl font-bold" style={{ color: theme?.primary ?? "#1d4ed8" }}>{item.title}</p>
                <p className="text-xs opacity-60">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Tracking input hint */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="flex-1 relative">
              <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
              <input
                type="text"
                readOnly
                placeholder="Enter tracking number (e.g., NG-2026-48571)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border text-sm bg-white"
                style={{ borderColor: theme?.primary ?? "#93c5fd" }}
              />
            </div>
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#1d4ed8" }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <a
            href={secondaryButtonUrl}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: theme?.primary ?? "#1d4ed8" }}
          >
            {secondaryButtonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Map/shipping visual side */}
        <div className="flex-1 w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Logistics and shipping"
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] object-cover rounded-2xl"
            />
          ) : (
            <div
              className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: theme?.accent ?? "#dbeafe" }}
            >
              {/* Route lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400">
                <path d="M 50 300 Q 150 100 200 200 Q 250 300 350 100" stroke={theme?.primary ?? "#1d4ed8"} strokeWidth="2" fill="none" strokeDasharray="8 4" />
                <path d="M 80 350 Q 200 150 320 250" stroke={theme?.primary ?? "#1d4ed8"} strokeWidth="1.5" fill="none" strokeDasharray="6 3" />
                <circle cx="50" cy="300" r="6" fill={theme?.primary ?? "#1d4ed8"} />
                <circle cx="350" cy="100" r="6" fill={theme?.primary ?? "#1d4ed8"} />
                <circle cx="200" cy="200" r="4" fill={theme?.primary ?? "#1d4ed8"} />
              </svg>
              <div className="relative z-10 text-center">
                <Truck className="w-20 h-20 mx-auto mb-4" style={{ color: theme?.primary ?? "#1d4ed8" }} />
                <p className="text-lg font-bold opacity-70">Global Shipping</p>
                <p className="text-sm opacity-50 mt-1">Your package, tracked every step</p>
                <div className="mt-4 px-4 py-2 rounded-lg bg-white/80 inline-block text-xs font-mono"
                  style={{ color: theme?.primary ?? "#1d4ed8" }}
                >
                  NG-2026-48571 — In Transit
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
