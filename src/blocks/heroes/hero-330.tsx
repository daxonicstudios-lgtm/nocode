"use client";

import type { BlockProps } from "@/blocks/types";
import { Flower2, Truck, Heart, Gift, Calendar, ArrowRight, Star, Clock } from "lucide-react";

export default function Hero330(props: BlockProps) {
  const {
    theme,
    heading = "Beautiful Blooms for Every Occasion",
    subheading = "Petal & Stem Floral Studio",
    bodyText = "Hand-arranged bouquets crafted by our floral designers using the freshest seasonal flowers. Same-day delivery available across the metro area. From weddings to sympathy, we arrange with care.",
    buttonText = "Shop Bouquets",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Birthdays", description: "Bright, cheerful arrangements", icon: "gift" },
      { title: "Weddings", description: "Bridal bouquets & venue florals", icon: "heart" },
      { title: "Sympathy", description: "Elegant tributes & wreaths", icon: "flower" },
      { title: "Just Because", description: "Surprise someone special today", icon: "calendar" },
    ],
  } = props;

  const iconMap: Record<string, typeof Flower2> = {
    gift: Gift,
    heart: Heart,
    flower: Flower2,
    calendar: Calendar,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fdf2f8", color: theme?.foreground ?? "#2d1f2d" }}
      className="min-h-screen px-5 py-16 lg:py-24 relative overflow-hidden"
    >
      {/* Decorative botanical accents */}
      <Flower2 className="absolute top-16 right-12 w-24 h-24 opacity-[0.04] rotate-12" style={{ color: theme?.primary ?? "#db2777" }} />
      <Flower2 className="absolute bottom-24 left-6 w-16 h-16 opacity-[0.04] -rotate-45" style={{ color: theme?.primary ?? "#db2777" }} />

      <div className="max-w-6xl mx-auto relative">
        {/* Delivery info bar */}
        <div
          className="rounded-full px-5 py-2.5 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs"
          style={{
            backgroundColor: `${theme?.primary ?? "#db2777"}08`,
            border: `1px solid ${theme?.primary ?? "#db2777"}15`,
          }}
        >
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#db2777" }} />
            <span className="font-semibold">Same-Day Delivery</span>
            <span className="opacity-50">— order by 1pm</span>
          </div>
          <span className="hidden sm:inline opacity-20">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#db2777" }} />
            <span className="opacity-50">Free delivery on orders $75+</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{
              backgroundColor: `${theme?.primary ?? "#db2777"}10`,
              color: theme?.primary ?? "#db2777",
            }}
          >
            <Flower2 className="w-3.5 h-3.5" />
            {subheading}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-3xl mx-auto">
            {heading}
          </h1>

          <p className="text-base opacity-55 leading-relaxed max-w-2xl mx-auto mb-8">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#db2777", color: "#ffffff" }}
            >
              <Flower2 className="w-4 h-4" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border transition-colors hover:opacity-80"
              style={{ borderColor: `${theme?.foreground ?? "#2d1f2d"}12` }}
            >
              Wedding Consultations
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-current" style={{ color: "#facc15" }} />
              ))}
            </div>
            <span className="text-xs opacity-40">Loved by 3,200+ customers</span>
          </div>
        </div>

        {/* Image with floating elements */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div
            className="rounded-3xl overflow-hidden aspect-[16/7]"
            style={{ backgroundColor: `${theme?.primary ?? "#db2777"}06` }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center gap-6">
                <Flower2 className="w-12 h-12 opacity-10 rotate-12" style={{ color: theme?.primary ?? "#db2777" }} />
                <Flower2 className="w-16 h-16 opacity-10" style={{ color: theme?.primary ?? "#db2777" }} />
                <Flower2 className="w-12 h-12 opacity-10 -rotate-12" style={{ color: theme?.primary ?? "#db2777" }} />
              </div>
            )}
          </div>
        </div>

        {/* Occasion browsing cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[item.icon ?? "flower"] ?? Flower2;
            return (
              <a
                key={i}
                href="#"
                className="rounded-2xl p-5 text-center border transition-all hover:shadow-md hover:-translate-y-0.5"
                style={{
                  borderColor: `${theme?.primary ?? "#db2777"}12`,
                  backgroundColor: `${theme?.primary ?? "#db2777"}03`,
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${theme?.primary ?? "#db2777"}10` }}
                >
                  <Icon className="w-5 h-5" style={{ color: theme?.primary ?? "#db2777" }} />
                </div>
                <h3 className="text-sm font-bold mb-0.5">{item.title}</h3>
                <p className="text-[10px] opacity-40">{item.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
