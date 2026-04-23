"use client";

import type { BlockProps } from "@/blocks/types";
import { ChefHat, Flame, Clock, Users, UtensilsCrossed, ArrowRight } from "lucide-react";

export default function Hero464(props: BlockProps) {
  const {
    theme,
    heading = "Cook Like a Chef Tonight",
    subheading = "Hands-On Cooking Classes for Every Palate",
    bodyText = "Step into our professional kitchen and learn from world-class chefs. Whether you are mastering Italian pasta or exploring Thai street food, every class ends with a feast you made yourself.",
    buttonText = "Reserve Your Spot",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Italian", description: "Fresh pasta, risotto, tiramisu", icon: "pasta" },
      { title: "Thai", description: "Curries, pad thai, mango sticky rice", icon: "fire" },
      { title: "French", description: "Sauces, souffles, pastry arts", icon: "croissant" },
      { title: "Japanese", description: "Sushi, ramen, tempura", icon: "fish" },
      { title: "Mexican", description: "Mole, tacos al pastor, churros", icon: "pepper" },
      { title: "Indian", description: "Curries, naan, biryani", icon: "spice" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FFFBF5", color: theme?.foreground ?? "#2D1F12" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Warm gradient accent at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, ${theme?.primary ?? "#D4622B"}, ${theme?.accent ?? "#E8973E"})`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#D4622B" }}
              >
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <div>
                <span
                  className="text-sm font-bold tracking-wider uppercase block"
                  style={{ color: theme?.primary ?? "#D4622B" }}
                >
                  The Kitchen Collective
                </span>
                <span className="text-xs opacity-50">Chef-Led Culinary Experiences</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-lg opacity-80 mb-2">{subheading}</p>
            <p className="text-base opacity-60 mb-8 max-w-lg">{bodyText}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: ChefHat, stat: "12", label: "Expert Chefs" },
                { icon: UtensilsCrossed, stat: "30+", label: "Class Types" },
                { icon: Users, stat: "8-14", label: "Per Class" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <s.icon className="w-5 h-5" style={{ color: theme?.primary ?? "#D4622B" }} />
                  <div>
                    <p className="font-bold text-lg leading-none">{s.stat}</p>
                    <p className="text-xs opacity-50">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#D4622B" }}
              >
                <Flame className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#D4622B", color: theme?.primary ?? "#D4622B" }}
              >
                Gift a Class
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right - Cuisine grid */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider opacity-50 mb-4">
              Explore Cuisines
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="group relative p-5 rounded-2xl border cursor-pointer transition-all hover:shadow-lg"
                  style={{
                    borderColor: theme?.primary ? `${theme.primary}20` : "#D4622B20",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#D4622B15" }}
                  >
                    <UtensilsCrossed className="w-5 h-5" style={{ color: theme?.primary ?? "#D4622B" }} />
                  </div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Upcoming class */}
            <div
              className="mt-6 p-5 rounded-2xl flex items-center justify-between"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#D4622B10" }}
            >
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" style={{ color: theme?.primary ?? "#D4622B" }} />
                <div>
                  <p className="font-bold text-sm">Next Class: Italian Date Night</p>
                  <p className="text-xs opacity-60">This Saturday, 6:00 PM - 9:00 PM</p>
                </div>
              </div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: theme?.primary ? `${theme.primary}20` : "#D4622B20",
                  color: theme?.primary ?? "#D4622B",
                }}
              >
                3 spots left
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
