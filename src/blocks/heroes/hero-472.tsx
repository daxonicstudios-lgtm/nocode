"use client";

import type { BlockProps } from "@/blocks/types";
import { Flame, Droplets, Wheat, Timer, CalendarDays, ChefHat } from "lucide-react";

export default function Hero472(props: BlockProps) {
  const {
    theme,
    heading = "Healthy Meals, Zero Effort",
    subheading = "Meal Prep & Delivery",
    bodyText = "Chef-crafted meals designed by nutritionists, portioned perfectly for your goals. Choose your plan, pick your meals, and we handle the rest — delivered fresh every week.",
    buttonText = "Build Your Plan",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "High Protein", description: "45g protein per meal", icon: "flame", value: "2,100 cal" },
      { title: "Keto Friendly", description: "Under 20g net carbs", icon: "droplets", value: "1,800 cal" },
      { title: "Plant Based", description: "100% vegan ingredients", icon: "wheat", value: "1,900 cal" },
      { title: "Balanced", description: "Perfect macro split", icon: "timer", value: "2,000 cal" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    flame: <Flame className="w-5 h-5" />,
    droplets: <Droplets className="w-5 h-5" />,
    wheat: <Wheat className="w-5 h-5" />,
    timer: <Timer className="w-5 h-5" />,
  };

  const macros = [
    { label: "Protein", grams: "45g", percent: 40, color: theme?.primary ?? "#e63946" },
    { label: "Carbs", grams: "55g", percent: 35, color: theme?.accent ?? "#457b9d" },
    { label: "Fat", grams: "22g", percent: 25, color: "#f4a261" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fafafa", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: `${theme?.primary ?? "#e63946"}15`, color: theme?.primary ?? "#e63946" }}
          >
            <ChefHat className="w-4 h-4" />
            {subheading}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">{heading}</h1>
          <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">{bodyText}</p>
        </div>

        {/* Main grid: meal preview + macro info */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Meal preview card */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-lg" style={{ backgroundColor: theme?.background ?? "#fff" }}>
            {imageUrl ? (
              <img src={imageUrl} alt="Meal preview" className="w-full h-64 sm:h-80 object-cover" />
            ) : (
              <div
                className="w-full h-64 sm:h-80 flex items-center justify-center"
                style={{ backgroundColor: `${theme?.primary ?? "#e63946"}10` }}
              >
                <div className="text-center">
                  <ChefHat className="w-16 h-16 mx-auto mb-3 opacity-30" />
                  <p className="text-sm opacity-50">Grilled Salmon Bowl with Quinoa</p>
                </div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">This Week&apos;s Top Pick</h3>
                <span className="text-sm px-3 py-1 rounded-full font-medium" style={{ backgroundColor: `${theme?.primary ?? "#e63946"}15`, color: theme?.primary ?? "#e63946" }}>520 cal</span>
              </div>

              {/* Macro bars */}
              <div className="space-y-3">
                {macros.map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{m.label}</span>
                      <span className="opacity-60">{m.grams}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${m.percent}%`, backgroundColor: m.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Diet type cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                style={{ backgroundColor: theme?.background ?? "#fff" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${theme?.primary ?? "#e63946"}15`, color: theme?.primary ?? "#e63946" }}
                >
                  {iconMap[item.icon ?? "flame"] ?? <Flame className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.description}</p>
                </div>
                <span className="text-sm font-mono opacity-50 flex-shrink-0">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#e63946" }}
            className="inline-flex items-center px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          >
            <CalendarDays className="w-5 h-5 mr-2" />
            {buttonText}
          </a>
          <span className="text-sm opacity-50">Starting at $8.99/meal &middot; Free delivery on 10+ meals</span>
        </div>
      </div>
    </section>
  );
}
