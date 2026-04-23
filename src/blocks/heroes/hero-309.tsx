"use client";

import type { BlockProps } from "@/blocks/types";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function Hero309(props: BlockProps) {
  const {
    theme,
    heading = "Find your perfect stay",
    subheading = "Explore 2 million+ homes worldwide",
    bodyText = "Book unique places to stay and things to do, all from local hosts in 190+ countries.",
    buttonText = "Search",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Location", description: "Where are you going?", icon: "pin" },
      { title: "Check in", description: "Add dates", icon: "calendar" },
      { title: "Guests", description: "How many?", icon: "users" },
    ],
  } = props;

  const iconMap: Record<string, React.ReactNode> = {
    pin: <MapPin className="w-5 h-5 opacity-40" />,
    calendar: <Calendar className="w-5 h-5 opacity-40" />,
    users: <Users className="w-5 h-5 opacity-40" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#1a1a1a" }}
      className="min-h-screen flex items-center justify-center px-5 py-24 relative overflow-hidden"
    >
      {/* Background image or gradient */}
      {imageUrl ? (
        <div className="absolute inset-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${theme?.primary ?? "#f43f5e"}40, transparent 50%),
                         radial-gradient(circle at 70% 50%, ${theme?.accent ?? "#3b82f6"}30, transparent 50%)`,
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
          style={imageUrl ? { color: "#ffffff" } : undefined}
        >
          {heading}
        </h1>

        <p
          className="text-base sm:text-lg opacity-50 mb-10 max-w-lg mx-auto"
          style={imageUrl ? { color: "#ffffff" } : undefined}
        >
          {bodyText}
        </p>

        {/* Search bar */}
        <div
          className="rounded-2xl sm:rounded-full border shadow-xl p-3 sm:p-2"
          style={{
            backgroundColor: theme?.background ?? "#ffffff",
            borderColor: `${theme?.foreground ?? "#1a1a1a"}10`,
          }}
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-black/[0.03] transition-colors cursor-pointer">
                {iconMap[item.icon ?? "pin"] ?? <MapPin className="w-5 h-5 opacity-40" />}
                <div className="text-left">
                  <div className="text-xs font-bold">{item.title}</div>
                  <div className="text-xs opacity-40">{item.description}</div>
                </div>
                {i < items.slice(0, 3).length - 1 && (
                  <div
                    className="hidden sm:block w-px h-8 ml-auto"
                    style={{ backgroundColor: `${theme?.foreground ?? "#1a1a1a"}10` }}
                  />
                )}
              </div>
            ))}

            {/* Search button */}
            <a
              href={buttonUrl}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full text-sm font-bold transition-transform hover:scale-105 flex-shrink-0"
              style={{ backgroundColor: theme?.primary ?? "#f43f5e", color: "#ffffff" }}
            >
              <Search className="w-4 h-4" />
              <span className="sm:hidden">{buttonText}</span>
            </a>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-xs sm:text-sm mt-6 opacity-30" style={imageUrl ? { color: "#ffffff" } : undefined}>
          {subheading}
        </p>
      </div>
    </section>
  );
}
