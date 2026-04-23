"use client";

import type { BlockProps } from "@/blocks/types";
import { Sparkles, Rocket, CircleDot, Star, Ticket, Users, Zap } from "lucide-react";

export default function Hero454(props: BlockProps) {
  const {
    theme,
    heading = "Where Thrills Come Alive",
    subheading = "Starlight Adventure Park",
    bodyText = "Over 60 rides, live shows, and attractions for the whole family. From heart-pounding coasters to enchanting kiddie lands, every visit is unforgettable.",
    buttonText = "Buy Tickets",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Thrill Rides", description: "18 coasters & drops", icon: "rocket" },
      { title: "Family Fun", description: "24 gentle rides", icon: "star" },
      { title: "Water Park", description: "12 slides & pools", icon: "zap" },
      { title: "Live Shows", description: "8 daily performances", icon: "sparkles" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    rocket: <Rocket className="w-6 h-6" />,
    star: <Star className="w-6 h-6" />,
    zap: <Zap className="w-6 h-6" />,
    sparkles: <Sparkles className="w-6 h-6" />,
  };

  const categoryColors = ["#ef4444", "#f59e0b", "#3b82f6", "#a855f7"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1a0a2e", color: theme?.foreground ?? "#f0e6ff" }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Colorful dots decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              width: `${20 + (i * 15) % 40}px`,
              height: `${20 + (i * 15) % 40}px`,
              top: `${(i * 37) % 90}%`,
              left: `${(i * 29) % 95}%`,
              backgroundColor: categoryColors[i % 4],
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-8"
            style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}20`, color: theme?.primary ?? "#f59e0b" }}
          >
            <Sparkles className="w-4 h-4" />
            Now Open for the 2026 Season
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6">
            <span style={{ color: theme?.primary ?? "#f59e0b" }}>
              {heading.split(" ").slice(0, 2).join(" ")}
            </span>
            <br />
            {heading.split(" ").slice(2).join(" ")}
          </h1>

          <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-70">
            {subheading}
          </p>

          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-110 shadow-lg"
              style={{
                backgroundColor: theme?.primary ?? "#f59e0b",
                color: theme?.background ?? "#1a0a2e",
                boxShadow: `0 0 30px ${theme?.primary ?? "#f59e0b"}40`,
              }}
            >
              <Ticket className="w-5 h-5 mr-2" />
              {buttonText}
            </a>
            <a
              href="#groups"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg border-2 transition-colors hover:opacity-80"
              style={{ borderColor: theme?.primary ?? "#f59e0b", color: theme?.primary ?? "#f59e0b" }}
            >
              <Users className="w-5 h-5 mr-2" />
              Group Packages
            </a>
          </div>
        </div>

        {/* Ride categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.slice(0, 4).map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl text-center cursor-pointer transition-transform hover:scale-105 border"
              style={{
                borderColor: `${categoryColors[i]}30`,
                backgroundColor: `${categoryColors[i]}10`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${categoryColors[i]}25`, color: categoryColors[i] }}
              >
                {iconMap[item.icon ?? "sparkles"] ?? <Sparkles className="w-6 h-6" />}
              </div>
              <p className="font-bold text-lg mb-1">{item.title}</p>
              <p className="text-sm opacity-60">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Ticket bundles */}
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { label: "Single Day", price: "$69" },
            { label: "Two-Day Pass", price: "$119" },
            { label: "Season Pass", price: "$299" },
          ].map((ticket, i) => (
            <div key={i}>
              <p className="text-2xl sm:text-3xl font-black" style={{ color: categoryColors[i] }}>
                {ticket.price}
              </p>
              <p className="text-xs sm:text-sm opacity-60">{ticket.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
