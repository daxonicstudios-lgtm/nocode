"use client";

import type { BlockProps } from "@/blocks/types";
import { Citrus, Droplets, Leaf, Sparkles, ArrowRight, Heart } from "lucide-react";

export default function Hero474(props: BlockProps) {
  const {
    theme,
    heading = "Freshly Pressed. Naturally Vibrant.",
    subheading = "Cold-Pressed Juice Bar",
    bodyText = "Made to order from 100% organic fruits and vegetables. No added sugars, no preservatives, no compromises. Just pure, cold-pressed goodness in every sip.",
    buttonText = "View Our Menu",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Green Detox", description: "Kale, spinach, cucumber, apple, ginger, lemon", label: "Cleanse", value: "120 cal" },
      { title: "Tropical Sunrise", description: "Mango, pineapple, turmeric, coconut water", label: "Energy", value: "180 cal" },
      { title: "Berry Bliss", description: "Blueberry, acai, banana, almond milk, flax", label: "Antioxidant", value: "210 cal" },
      { title: "Citrus Immunity", description: "Orange, grapefruit, carrot, ginger, cayenne", label: "Immunity", value: "95 cal" },
    ],
  } = props;

  const colorAccents = ["#4ade80", "#fb923c", "#a78bfa", "#fbbf24"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fffbf0", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen overflow-hidden"
    >
      {/* Top decorative gradient */}
      <div
        className="h-2 w-full"
        style={{
          background: `linear-gradient(90deg, #4ade80, #fbbf24, #fb923c, #a78bfa, ${theme?.primary ?? "#22c55e"})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Citrus className="w-5 h-5" style={{ color: theme?.primary ?? "#22c55e" }} />
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#22c55e" }}>
              {subheading}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-60 max-w-xl mx-auto mb-8">{bodyText}</p>
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#22c55e" }}
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Juice cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 lg:w-auto rounded-3xl overflow-hidden snap-center"
              style={{ backgroundColor: `${colorAccents[i % colorAccents.length]}15` }}
            >
              {/* Color top band */}
              <div className="h-32 relative flex items-center justify-center" style={{ backgroundColor: `${colorAccents[i % colorAccents.length]}25` }}>
                <Droplets className="w-16 h-16 opacity-20" style={{ color: colorAccents[i % colorAccents.length] }} />
                <span
                  className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: colorAccents[i % colorAccents.length] }}
                >
                  {item.label}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className="text-sm font-mono opacity-40">{item.value}</span>
                </div>
                <p className="text-sm opacity-60 mb-4">{item.description}</p>
                <div className="flex items-center gap-3">
                  <Leaf className="w-4 h-4 opacity-40" />
                  <span className="text-xs opacity-40">100% Organic</span>
                  <Heart className="w-4 h-4 opacity-40 ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cleanse programs banner */}
        <div
          className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ backgroundColor: `${theme?.primary ?? "#22c55e"}10` }}
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6" style={{ color: theme?.primary ?? "#22c55e" }} />
            <div>
              <h3 className="font-bold">3-Day Juice Cleanse Programs</h3>
              <p className="text-sm opacity-60">Reset your body with our curated cleanse kits. 18 juices delivered fresh.</p>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-semibold flex items-center gap-1 flex-shrink-0"
            style={{ color: theme?.primary ?? "#22c55e" }}
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
