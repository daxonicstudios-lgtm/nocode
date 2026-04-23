"use client";

import type { BlockProps } from "@/blocks/types";
import { Coffee, CakeSlice, Clock, MapPin, ArrowRight, Star, ShoppingBag, Croissant } from "lucide-react";

export default function Hero329(props: BlockProps) {
  const {
    theme,
    heading = "Freshly Baked, Made with Love, Served with a Smile",
    subheading = "The Cozy Corner Bakery & Cafe",
    bodyText = "Start your morning with the aroma of just-baked sourdough, hand-crafted pastries, and specialty coffee roasted in-house. Family-owned since 2008, serving warmth one cup at a time.",
    buttonText = "Order Online",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sourdough Loaf", description: "24-hour fermented, crispy crust", value: "$6.50" },
      { title: "Almond Croissant", description: "Flaky, buttery, toasted almond", value: "$4.25" },
      { title: "Flat White", description: "Double shot, velvety microfoam", value: "$5.00" },
      { title: "Berry Danish", description: "Seasonal berries, cream cheese", value: "$4.75" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf6ee", color: theme?.foreground ?? "#3d2c1e" }}
      className="min-h-screen px-5 py-16 lg:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-5 h-5" style={{ color: theme?.primary ?? "#b45309" }} />
              <span className="text-xs font-bold uppercase tracking-wider opacity-50">
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {heading}
            </h1>

            <p className="text-base opacity-55 leading-relaxed mb-6 max-w-lg">
              {bodyText}
            </p>

            {/* Open hours & location */}
            <div className="flex flex-wrap gap-5 mb-8 text-sm opacity-50">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#b45309" }} />
                Mon–Sat: 6:30am – 6pm
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" style={{ color: theme?.primary ?? "#b45309" }} />
                142 Main Street
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#b45309", color: "#ffffff" }}
              >
                <ShoppingBag className="w-4 h-4" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:opacity-80"
                style={{ borderColor: `${theme?.foreground ?? "#3d2c1e"}15` }}
              >
                Full Menu
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color: "#facc15" }} />
                ))}
              </div>
              <span className="text-xs opacity-50">&ldquo;Best croissants in the city!&rdquo; — 1,200+ reviews</span>
            </div>
          </div>

          {/* Right — image + daily specials */}
          <div>
            <div
              className="rounded-3xl overflow-hidden aspect-[4/3] mb-6 relative"
              style={{ backgroundColor: `${theme?.primary ?? "#b45309"}08` }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Croissant className="w-16 h-16 opacity-10" style={{ color: theme?.primary ?? "#b45309" }} />
                  <p className="text-sm opacity-15 mt-3">Fresh daily</p>
                </div>
              )}

              {/* Daily special badge */}
              <div
                className="absolute top-4 right-4 rounded-xl px-4 py-2 shadow-md"
                style={{ backgroundColor: theme?.primary ?? "#b45309", color: "#ffffff" }}
              >
                <CakeSlice className="w-4 h-4 mx-auto mb-0.5" />
                <span className="text-[10px] font-bold uppercase">Today&apos;s Special</span>
              </div>
            </div>

            {/* Daily specials / menu preview */}
            <div
              className="rounded-2xl p-5 border"
              style={{
                borderColor: `${theme?.primary ?? "#b45309"}15`,
                backgroundColor: `${theme?.primary ?? "#b45309"}04`,
              }}
            >
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <CakeSlice className="w-4 h-4" style={{ color: theme?.primary ?? "#b45309" }} />
                Popular Today
              </h3>
              <div className="space-y-3">
                {items.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold">{item.title}</span>
                      <span className="text-[11px] opacity-40 ml-2">{item.description}</span>
                    </div>
                    <span
                      className="text-sm font-bold shrink-0 ml-3"
                      style={{ color: theme?.primary ?? "#b45309" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
