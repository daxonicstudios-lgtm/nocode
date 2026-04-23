"use client";

import type { BlockProps } from "@/blocks/types";
import { UtensilsCrossed, ArrowRight, Users, CalendarDays, ChefHat, Star, CheckCircle, Heart } from "lucide-react";

export default function Hero369(props: BlockProps) {
  const {
    theme,
    heading = "Unforgettable Events, Exceptional Cuisine",
    subheading = "Savory Affairs Catering",
    bodyText = "From intimate dinners to grand celebrations, we craft bespoke menus that delight every guest. Fresh, locally sourced ingredients prepared by our team of experienced chefs.",
    buttonText = "Request a Quote",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Weddings", description: "Custom menus, cake & bar packages", value: "50–500 guests", icon: "heart" },
      { title: "Corporate Events", description: "Lunches, galas & conference catering", value: "20–1,000 guests", icon: "building" },
      { title: "Private Parties", description: "Birthdays, anniversaries & milestones", value: "10–200 guests", icon: "party" },
      { title: "Festival & Outdoor", description: "Food trucks, stalls & buffet stations", value: "100–5,000 guests", icon: "tent" },
    ],
  } = props;

  const menuHighlights = [
    { category: "Starters", dishes: "Bruschetta, spring rolls, caprese skewers" },
    { category: "Mains", dishes: "Grilled salmon, herb chicken, vegetable risotto" },
    { category: "Desserts", dishes: "Tiramisu, fruit tart, chocolate fondant" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#fef9f4", color: theme?.foreground ?? "#292524" }}
      className="min-h-screen px-5 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Warm glow */}
      <div
        className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full blur-[200px] opacity-8"
        style={{ backgroundColor: theme?.primary ?? "#dc6b37" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#dc6b37"}12`, color: theme?.primary ?? "#dc6b37" }}
            >
              <ChefHat className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold transition-transform hover:scale-105 text-white"
                style={{ backgroundColor: theme?.primary ?? "#dc6b37" }}
              >
                <CalendarDays className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border-2 transition-colors"
                style={{ borderColor: theme?.primary ?? "#dc6b37", color: theme?.primary ?? "#dc6b37" }}
              >
                <UtensilsCrossed className="w-4 h-4" />
                View Full Menu
              </a>
            </div>

            {/* Capacity info */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t" style={{ borderColor: `${theme?.primary ?? "#dc6b37"}15` }}>
              {[
                { num: "10–5,000", label: "Guest Capacity" },
                { num: "500+", label: "Events Catered" },
                { num: "4.9", label: "Average Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold" style={{ color: theme?.primary ?? "#dc6b37" }}>{stat.num}</div>
                  <div className="text-xs opacity-40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Event types grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {items.slice(0, 4).map((event, i) => (
                <a
                  key={i}
                  href={buttonUrl}
                  className="group p-4 rounded-2xl border transition-all hover:shadow-md hover:-translate-y-1"
                  style={{ borderColor: `${theme?.primary ?? "#dc6b37"}12`, backgroundColor: `${theme?.primary ?? "#dc6b37"}04` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${theme?.primary ?? "#dc6b37"}12` }}
                  >
                    {i === 0 ? <Heart className="w-5 h-5" style={{ color: theme?.primary ?? "#dc6b37" }} /> :
                     i === 1 ? <Users className="w-5 h-5" style={{ color: theme?.primary ?? "#dc6b37" }} /> :
                     i === 2 ? <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#dc6b37" }} /> :
                     <UtensilsCrossed className="w-5 h-5" style={{ color: theme?.primary ?? "#dc6b37" }} />}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{event.title}</h4>
                  <p className="text-xs opacity-40 mb-2 line-clamp-2">{event.description}</p>
                  <div className="text-xs font-semibold" style={{ color: theme?.primary ?? "#dc6b37" }}>
                    {event.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Menu preview */}
            <div
              className="p-5 rounded-2xl border"
              style={{ borderColor: `${theme?.primary ?? "#dc6b37"}15`, backgroundColor: `${theme?.primary ?? "#dc6b37"}04` }}
            >
              <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
                <UtensilsCrossed className="w-4 h-4" style={{ color: theme?.primary ?? "#dc6b37" }} />
                Sample Menu Preview
              </h3>
              <div className="space-y-3">
                {menuHighlights.map((menu, i) => (
                  <div key={i}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: theme?.primary ?? "#dc6b37" }}>
                      {menu.category}
                    </div>
                    <div className="text-sm opacity-50">{menu.dishes}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div className="mt-4 flex flex-wrap gap-3">
              {["Setup & cleanup", "Staff included", "Dietary options", "Tastings available"].map((perk, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border"
                  style={{ borderColor: `${theme?.primary ?? "#dc6b37"}20`, color: theme?.primary ?? "#dc6b37" }}
                >
                  <CheckCircle className="w-3 h-3" />
                  {perk}
                </span>
              ))}
            </div>

            {imageUrl && (
              <div className="mt-6 rounded-2xl overflow-hidden">
                <img src={imageUrl} alt="Catering spread" className="w-full h-48 object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
