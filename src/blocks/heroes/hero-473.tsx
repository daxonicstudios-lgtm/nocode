"use client";

import type { BlockProps } from "@/blocks/types";
import { Coffee, MapPin, Package, Star, ArrowRight, Mountain } from "lucide-react";

export default function Hero473(props: BlockProps) {
  const {
    theme,
    heading = "Roasted with Purpose, Brewed with Passion",
    subheading = "Small-Batch Artisan Coffee",
    bodyText = "Every bag tells a story. We source single-origin beans directly from farmers in Ethiopia, Colombia, and Guatemala, then roast them in small batches to unlock their unique character.",
    buttonText = "Start Your Subscription",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Ethiopian Yirgacheffe", description: "Bright citrus, floral jasmine, silky body", label: "Light Roast", value: "Origin: Sidamo" },
      { title: "Colombian Huila", description: "Caramel sweetness, red apple, chocolate finish", label: "Medium Roast", value: "Origin: Huila" },
      { title: "Guatemalan Antigua", description: "Dark cocoa, smoky, full-bodied richness", label: "Dark Roast", value: "Origin: Antigua" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1b1106", color: theme?.foreground ?? "#f5f0eb" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Decorative circle */}
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full -translate-y-1/2 translate-x-1/3 opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#c9a96e" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Coffee className="w-5 h-5" style={{ color: theme?.primary ?? "#c9a96e" }} />
              <span
                className="text-sm uppercase tracking-[0.2em] font-medium"
                style={{ color: theme?.primary ?? "#c9a96e" }}
              >
                {subheading}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight mb-6">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-70 mb-10 max-w-lg leading-relaxed">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                style={{ backgroundColor: theme?.primary ?? "#c9a96e", color: "#1b1106" }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Package className="w-5 h-5 mr-2" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border border-current opacity-60 hover:opacity-100 transition-opacity"
              >
                Our Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: "3", label: "Origin Countries" },
                { num: "12", label: "Single Origins" },
                { num: "48hr", label: "Roast to Ship" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold" style={{ color: theme?.primary ?? "#c9a96e" }}>{stat.num}</p>
                  <p className="text-xs uppercase tracking-wider opacity-50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Origin cards */}
          <div className="space-y-4">
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-[500px]" />
            ) : (
              items.map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#c9a96e"}30`,
                    backgroundColor: `${theme?.primary ?? "#c9a96e"}08`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span
                        className="text-xs uppercase tracking-wider font-medium px-2 py-1 rounded"
                        style={{ backgroundColor: `${theme?.primary ?? "#c9a96e"}20`, color: theme?.primary ?? "#c9a96e" }}
                      >
                        {item.label}
                      </span>
                      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                    </div>
                    <Mountain className="w-5 h-5 opacity-30" />
                  </div>
                  <p className="text-sm opacity-60 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm opacity-50">
                      <MapPin className="w-3 h-3" />
                      <span>{item.value}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className="w-3 h-3"
                          style={{ color: theme?.primary ?? "#c9a96e" }}
                          fill={s < 4 + (i === 0 ? 1 : 0) ? (theme?.primary ?? "#c9a96e") : "none"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}

            <div className="text-center pt-4">
              <p className="text-sm opacity-40">
                Subscriptions ship every 2 or 4 weeks &middot; Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
