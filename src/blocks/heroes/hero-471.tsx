"use client";

import type { BlockProps } from "@/blocks/types";
import { Leaf, Truck, MapPin, ShieldCheck, Clock, Sprout } from "lucide-react";

export default function Hero471(props: BlockProps) {
  const {
    theme,
    heading = "Farm-Fresh Groceries, Delivered to Your Door",
    subheading = "From Local Farms to Your Table",
    bodyText = "We partner with over 40 local producers to bring you the freshest organic fruits, vegetables, dairy, and pantry staples. No middlemen, no long supply chains — just honest food grown with care.",
    buttonText = "Shop This Week's Harvest",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "100% Organic", description: "Certified organic produce from trusted farms", icon: "leaf" },
      { title: "Same-Day Delivery", description: "Order by 10am, receive by 6pm in your zone", icon: "truck" },
      { title: "Local Producers", description: "Supporting 40+ family farms within 50 miles", icon: "map" },
      { title: "Freshness Guaranteed", description: "Harvested within 24 hours of your delivery", icon: "shield" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    leaf: <Leaf className="w-6 h-6" />,
    truck: <Truck className="w-6 h-6" />,
    map: <MapPin className="w-6 h-6" />,
    shield: <ShieldCheck className="w-6 h-6" />,
    clock: <Clock className="w-6 h-6" />,
    sprout: <Sprout className="w-6 h-6" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex flex-col"
    >
      {/* Top banner */}
      <div
        style={{ backgroundColor: theme?.primary ?? "#2d6a4f", color: "#fff" }}
        className="py-2 px-4 text-center text-sm font-medium"
      >
        <Clock className="w-4 h-4 inline mr-1 -mt-0.5" />
        Free delivery on orders over $50 — Order by 10am for same-day delivery
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Content side */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 xl:px-24">
          <div className="flex items-center gap-2 mb-6">
            <Sprout className="w-5 h-5" style={{ color: theme?.primary ?? "#2d6a4f" }} />
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: theme?.primary ?? "#2d6a4f" }}
            >
              {subheading}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {heading}
          </h1>

          <p className="text-base sm:text-lg opacity-80 mb-8 max-w-xl leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={buttonUrl}
              style={{ backgroundColor: theme?.primary ?? "#2d6a4f" }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <Leaf className="w-5 h-5 mr-2" />
              {buttonText}
            </a>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <MapPin className="w-4 h-4" />
              <span>Delivering to 12 zones across the metro area</span>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 p-4 rounded-xl"
                style={{ backgroundColor: `${theme?.primary ?? "#2d6a4f"}10` }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${theme?.primary ?? "#2d6a4f"}20`, color: theme?.primary ?? "#2d6a4f" }}
                >
                  {iconMap[item.icon ?? "leaf"] ?? <Leaf className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs opacity-70 mt-0.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-0">
          {imageUrl ? (
            <img src={imageUrl} alt={heading} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{ backgroundColor: `${theme?.primary ?? "#2d6a4f"}15` }}
            >
              <div className="grid grid-cols-3 gap-4 max-w-sm w-full">
                {["Avocados", "Tomatoes", "Kale", "Berries", "Eggs", "Honey", "Bread", "Cheese", "Herbs"].map(
                  (product, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl flex flex-col items-center justify-center p-2"
                      style={{ backgroundColor: `${theme?.primary ?? "#2d6a4f"}${15 + i * 5}` }}
                    >
                      <Sprout className="w-6 h-6 mb-1" style={{ color: theme?.primary ?? "#2d6a4f" }} />
                      <span className="text-xs font-medium text-center">{product}</span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-6 text-sm opacity-60 text-center">This week: 127 fresh items available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
