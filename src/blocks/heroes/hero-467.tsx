"use client";

import type { BlockProps } from "@/blocks/types";
import { Dice5, Coffee, BookOpen, Users, Clock, Star, ArrowRight } from "lucide-react";

export default function Hero467(props: BlockProps) {
  const {
    theme,
    heading = "Roll the Dice, Grab a Bite",
    subheading = "Board Game Cafe & Social Hub",
    bodyText = "Over 800 games to choose from, craft beverages on tap, and delicious eats. Whether you are into strategy epics or quick party games, pull up a chair and play.",
    buttonText = "Reserve a Table",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Strategy", description: "Catan, Terraforming Mars, Wingspan", value: "120+" },
      { title: "Party Games", description: "Codenames, Wavelength, Telestrations", value: "85+" },
      { title: "Co-op", description: "Pandemic, Spirit Island, Gloomhaven", value: "60+" },
      { title: "Family", description: "Ticket to Ride, Azul, Kingdomino", value: "95+" },
      { title: "Card Games", description: "Dominion, Exploding Kittens, Ark Nova", value: "150+" },
      { title: "RPGs", description: "D&D night every Wednesday", value: "30+" },
    ],
  } = props;

  const menuHighlights = [
    { item: "Loaded Nachos", price: "$12" },
    { item: "Margherita Flatbread", price: "$14" },
    { item: "Cookie Skillet", price: "$9" },
    { item: "Craft Root Beer Float", price: "$7" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#FFF8E7", color: theme?.foreground ?? "#2C1810" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Playful dotted background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Top banner */}
        <div className="text-center mb-10 sm:mb-14">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
            style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#E8590C15" }}
          >
            <Dice5 className="w-5 h-5" style={{ color: theme?.primary ?? "#E8590C" }} />
            <span className="font-bold text-sm" style={{ color: theme?.primary ?? "#E8590C" }}>
              Meeple & Munch
            </span>
            <Coffee className="w-5 h-5" style={{ color: theme?.primary ?? "#E8590C" }} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-xl opacity-70 mb-2">{subheading}</p>
          <p className="text-base opacity-50 max-w-xl mx-auto mb-8">{bodyText}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: theme?.primary ?? "#E8590C" }}
            >
              <Dice5 className="w-5 h-5" />
              {buttonText}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold border-2 transition-opacity hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#E8590C", color: theme?.primary ?? "#E8590C" }}
            >
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Info bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm opacity-60">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              800+ Games
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              $5 table fee / person
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Open daily 11 AM - Midnight
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Game Library - spans 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#E8590C" }} />
              Game Library
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border-2 border-dashed transition-all hover:border-solid cursor-pointer"
                  style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#E8590C30" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold">{item.title}</h4>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: theme?.primary ? `${theme.primary}15` : "#E8590C15",
                        color: theme?.primary ?? "#E8590C",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs opacity-50">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Food menu sidebar */}
          <div className="lg:col-span-1">
            <div
              className="p-6 rounded-2xl"
              style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#E8590C10" }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#E8590C" }} />
                Fan Favorites
              </h3>
              <div className="space-y-3">
                {menuHighlights.map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2 border-b last:border-0"
                    style={{ borderColor: theme?.primary ? `${theme.primary}15` : "#E8590C15" }}
                  >
                    <span className="font-medium text-sm">{m.item}</span>
                    <span className="font-bold" style={{ color: theme?.primary ?? "#E8590C" }}>
                      {m.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl text-center text-sm" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#E8590C10" }}>
                <Coffee className="w-5 h-5 mx-auto mb-1" style={{ color: theme?.primary ?? "#E8590C" }} />
                <p className="font-semibold">Happy Hour 4-6 PM</p>
                <p className="text-xs opacity-50">$2 off all craft drinks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
