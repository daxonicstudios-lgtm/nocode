"use client";

import type { BlockProps } from "@/blocks/types";
import { BookOpen, Clock, ChefHat, Flame, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function Hero475(props: BlockProps) {
  const {
    theme,
    heading = "Recipes Worth Sharing",
    subheading = "A Food Blog by Sarah Chen",
    bodyText = "Simple, tested recipes for real home cooks. From 30-minute weeknight dinners to weekend baking projects, find your next favorite dish right here.",
    buttonText = "Browse All Recipes",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Crispy Garlic Butter Salmon", description: "Ready in 25 minutes with just 5 ingredients. Weeknight perfection.", label: "Dinner", value: "25 min", icon: "flame" },
      { title: "Sourdough Focaccia", description: "Pillowy, olive-oil-rich flatbread with rosemary and flaky salt.", label: "Baking", value: "3 hrs", icon: "clock" },
      { title: "Thai Basil Chicken Stir-Fry", description: "Spicy, fragrant, and faster than takeout. A reader all-time favorite.", label: "Quick Meals", value: "15 min", icon: "flame" },
    ],
  } = props;

  const categories = ["Quick Meals", "Baking", "Vegetarian", "Comfort Food", "Desserts", "Meal Prep"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fefcf9", color: theme?.foreground ?? "#2c2c2c" }}
      className="min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Blog header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <UtensilsCrossed className="w-5 h-5" style={{ color: theme?.primary ?? "#d97706" }} />
            <span className="text-sm font-medium tracking-wide" style={{ color: theme?.primary ?? "#d97706" }}>
              {subheading}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">{heading}</h1>
          <p className="text-base sm:text-lg opacity-60 max-w-xl mx-auto">{bodyText}</p>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:text-white"
              style={{
                borderColor: `${theme?.primary ?? "#d97706"}40`,
                color: i === 0 ? "#fff" : theme?.primary ?? "#d97706",
                backgroundColor: i === 0 ? (theme?.primary ?? "#d97706") : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe cards — featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured recipe */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden group cursor-pointer relative">
            {imageUrl ? (
              <img src={imageUrl} alt={items[0]?.title} className="w-full h-full object-cover absolute inset-0" />
            ) : (
              <div
                className="absolute inset-0"
                style={{ backgroundColor: `${theme?.primary ?? "#d97706"}15` }}
              />
            )}
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[320px] sm:min-h-[420px] p-6 sm:p-8 bg-gradient-to-t from-black/60 to-transparent">
              <span
                className="self-start px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                style={{ backgroundColor: theme?.primary ?? "#d97706" }}
              >
                {items[0]?.label ?? "Featured"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {items[0]?.title}
              </h2>
              <p className="text-sm text-white/80 mb-4 max-w-md">{items[0]?.description}</p>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {items[0]?.value ?? "25 min"}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" /> Read Recipe
                </span>
              </div>
            </div>
          </div>

          {/* Side recipe cards */}
          {items.slice(1).map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
              style={{ backgroundColor: theme?.background ?? "#fff" }}
            >
              <div
                className="h-36 flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#d97706"}${10 + i * 5}` }}
              >
                <ChefHat className="w-12 h-12 opacity-20" />
              </div>
              <div className="p-5">
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: theme?.primary ?? "#d97706" }}
                >
                  {item.label}
                </span>
                <h3 className="font-serif font-bold text-lg mt-1 mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 mb-3">{item.description}</p>
                <div className="flex items-center justify-between text-sm opacity-50">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.value}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={buttonUrl}
            className="inline-flex items-center gap-2 text-base font-semibold hover:gap-3 transition-all"
            style={{ color: theme?.primary ?? "#d97706" }}
          >
            {buttonText} <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm opacity-40 mt-2">Over 350 tested recipes and counting</p>
        </div>
      </div>
    </section>
  );
}
