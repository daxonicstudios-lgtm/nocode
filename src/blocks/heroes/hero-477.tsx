"use client";

import type { BlockProps } from "@/blocks/types";
import { Gift, Heart, Sparkles, ShoppingBag, Star, Award } from "lucide-react";

export default function Hero477(props: BlockProps) {
  const {
    theme,
    heading = "Handcrafted Chocolate, Made with Love",
    subheading = "Artisan Chocolatier Since 2008",
    bodyText = "Each piece is hand-tempered, hand-filled, and hand-finished in our atelier. We use single-origin cacao from ethical farms to create chocolates that are as beautiful as they are delicious.",
    buttonText = "Shop Gift Boxes",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Signature Collection", description: "Our 12-piece assortment of ganaches, pralines, and caramels", value: "$42", label: "Best Seller" },
      { title: "Single Origin Bars", description: "Bean-to-bar tablets from Madagascar, Ecuador, and Vietnam", value: "$16", label: "New" },
      { title: "Seasonal Truffle Box", description: "Limited edition spring flavors: lavender, rose, and earl grey", value: "$38", label: "Seasonal" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#2c1810", color: theme?.foreground ?? "#f5ebe0" }}
      className="min-h-screen relative"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: theme?.primary ?? "#c5965a" }} />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-5" style={{ backgroundColor: theme?.primary ?? "#c5965a" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-center gap-3 py-6 border-b" style={{ borderColor: `${theme?.primary ?? "#c5965a"}20` }}>
          <div className="h-px flex-1" style={{ backgroundColor: `${theme?.primary ?? "#c5965a"}30` }} />
          <Sparkles className="w-4 h-4" style={{ color: theme?.primary ?? "#c5965a" }} />
          <span className="text-xs uppercase tracking-[0.3em] font-medium" style={{ color: theme?.primary ?? "#c5965a" }}>
            {subheading}
          </span>
          <Sparkles className="w-4 h-4" style={{ color: theme?.primary ?? "#c5965a" }} />
          <div className="h-px flex-1" style={{ backgroundColor: `${theme?.primary ?? "#c5965a"}30` }} />
        </div>

        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold leading-tight mb-6">
                {heading}
              </h1>
              <p className="text-base sm:text-lg opacity-60 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {bodyText}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href={buttonUrl}
                  style={{ backgroundColor: theme?.primary ?? "#c5965a" }}
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  {buttonText}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border transition-colors"
                  style={{ borderColor: `${theme?.primary ?? "#c5965a"}40` }}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Full Collection
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm opacity-40">
                <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> Gold Medal 2024</span>
                <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> Ethically Sourced</span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> 4.9 Star Reviews</span>
              </div>
            </div>

            {/* Gift box cards */}
            <div className="space-y-5">
              {imageUrl ? (
                <img src={imageUrl} alt={heading} className="w-full rounded-2xl object-cover max-h-[500px]" />
              ) : (
                items.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border transition-all hover:translate-x-1 cursor-pointer"
                    style={{
                      borderColor: `${theme?.primary ?? "#c5965a"}25`,
                      backgroundColor: `${theme?.primary ?? "#c5965a"}08`,
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {item.label && (
                          <span
                            className="text-xs font-bold uppercase px-2 py-0.5 rounded"
                            style={{ backgroundColor: `${theme?.primary ?? "#c5965a"}25`, color: theme?.primary ?? "#c5965a" }}
                          >
                            {item.label}
                          </span>
                        )}
                      </div>
                      <span className="text-xl font-serif font-bold" style={{ color: theme?.primary ?? "#c5965a" }}>
                        {item.value}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-sm opacity-60">{item.description}</p>
                  </div>
                ))
              )}

              <div className="text-center text-sm opacity-40 pt-2">
                Free gift wrapping on all orders &middot; Ships nationwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
