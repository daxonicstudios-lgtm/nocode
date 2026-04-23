"use client";

import type { BlockProps } from "@/blocks/types";
import { Beef, ShoppingCart, Clock, Award, Phone, Scissors } from "lucide-react";

export default function Hero479(props: BlockProps) {
  const {
    theme,
    heading = "Quality Cuts, Honest Craft",
    subheading = "Family Butcher & Deli",
    bodyText = "Three generations of butchery expertise. We source from local farms that raise animals humanely and naturally, then hand-cut every piece to your exact specifications.",
    buttonText = "Order Ahead",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Dry-Aged Ribeye", description: "28-day aged, marbled prime beef", value: "$34/lb", label: "Prime Cut" },
      { title: "Heritage Pork Chops", description: "Berkshire pork, bone-in, thick cut", value: "$18/lb", label: "Farm Fresh" },
      { title: "Lamb Rack", description: "Free-range New Zealand, frenched", value: "$28/lb", label: "Specialty" },
      { title: "House Sausages", description: "Made in-house daily, six rotating flavors", value: "$14/lb", label: "House Made" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#2d2420" }}
      className="min-h-screen"
    >
      {/* Top stripe */}
      <div className="h-1.5" style={{ backgroundColor: theme?.primary ?? "#8b1a1a" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5" style={{ color: theme?.primary ?? "#8b1a1a" }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#8b1a1a" }}>
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">{heading}</h1>
            <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg leading-relaxed">{bodyText}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#8b1a1a" }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#8b1a1a"}30` }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call to Order
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 opacity-50">
                <Award className="w-4 h-4" />
                <span>Est. 1967</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <Beef className="w-4 h-4" />
                <span>USDA Prime & Choice</span>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <Clock className="w-4 h-4" />
                <span>Same-Day Pickup</span>
              </div>
            </div>
          </div>

          {/* Right: cut guide / product cards */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-[600px]" />
            ) : (
              <div className="space-y-4">
                <div className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Featured Cuts</span>
                  <span className="opacity-30 font-normal normal-case">Price per pound</span>
                </div>

                {items.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border group hover:shadow-md transition-all cursor-pointer"
                    style={{ borderColor: `${theme?.primary ?? "#8b1a1a"}15`, backgroundColor: theme?.background ?? "#fff" }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${theme?.primary ?? "#8b1a1a"}10` }}
                      >
                        <Beef className="w-7 h-7" style={{ color: theme?.primary ?? "#8b1a1a" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold">{item.title}</h3>
                          <span
                            className="text-[10px] uppercase font-bold px-2 py-0.5 rounded"
                            style={{ backgroundColor: `${theme?.primary ?? "#8b1a1a"}12`, color: theme?.primary ?? "#8b1a1a" }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <p className="text-sm opacity-50">{item.description}</p>
                      </div>
                      <span className="text-lg font-bold flex-shrink-0" style={{ color: theme?.primary ?? "#8b1a1a" }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}

                <div
                  className="mt-4 p-4 rounded-xl text-center text-sm"
                  style={{ backgroundColor: `${theme?.primary ?? "#8b1a1a"}08` }}
                >
                  <p className="font-medium">Custom cuts available on request</p>
                  <p className="opacity-50 mt-1">Ask our butchers about special orders and whole animal shares</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
