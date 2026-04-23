"use client";

import type { BlockProps } from "@/blocks/types";
import { Trophy, Calendar, ShoppingBag, Users, MapPin, Star } from "lucide-react";

export default function Hero441(props: BlockProps) {
  const {
    theme,
    heading = "Lusaka Lightning FC",
    subheading = "2026 Season Ticket Holders Get 20% Off Merch",
    bodyText = "Join the thunder! Be part of the most passionate fanbase in the league. Home matches every other Saturday at National Heroes Stadium.",
    buttonText = "Get Season Tickets",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "vs Kabwe Warriors", description: "Sat, May 3 - 3:00 PM", label: "Home", value: "upcoming" },
      { title: "vs Ndola United", description: "Sat, May 17 - 3:00 PM", label: "Home", value: "upcoming" },
      { title: "vs Kitwe Stars", description: "Sat, May 31 - 5:00 PM", label: "Away", value: "upcoming" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0a0a1a", color: theme?.foreground ?? "#ffffff" }}
      className="relative overflow-hidden"
    >
      {/* Diagonal stripe accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10 -skew-x-12 translate-x-20"
        style={{ backgroundColor: theme?.primary ?? "#e63946" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#e63946" }}
              >
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest" style={{ color: theme?.primary ?? "#e63946" }}>
                  2026 Season
                </p>
                <p className="text-xs opacity-60">League Champions 2024 & 2025</p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
              {heading}
            </h1>
            <p className="text-lg sm:text-xl font-semibold mb-3" style={{ color: theme?.primary ?? "#e63946" }}>
              {subheading}
            </p>
            <p className="text-base opacity-80 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#e63946" }}
              >
                <Users className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#e63946", color: theme?.primary ?? "#e63946" }}
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Merch
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex gap-8">
              {[
                { num: "14", label: "Wins" },
                { num: "3", label: "Draws" },
                { num: "1", label: "Loss" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black" style={{ color: theme?.primary ?? "#e63946" }}>{stat.num}</p>
                  <p className="text-xs uppercase tracking-wide opacity-60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Match Schedule */}
          <div>
            {imageUrl ? (
              <img src={imageUrl} alt={heading} className="w-full rounded-2xl mb-6 object-cover max-h-64" />
            ) : (
              <div
                className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#e63946", opacity: 0.15 }}
              >
                <Trophy className="w-20 h-20 opacity-50" style={{ color: theme?.primary ?? "#e63946" }} />
              </div>
            )}

            <div className="rounded-2xl border border-white/10 p-6" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5" style={{ color: theme?.primary ?? "#e63946" }} />
                <h3 className="font-bold text-lg">Upcoming Matches</h3>
              </div>

              <div className="space-y-3">
                {items.map((match, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <div>
                      <p className="font-semibold text-sm">{match.title}</p>
                      <p className="text-xs opacity-60">{match.description}</p>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: match.label === "Home" ? theme?.primary ?? "#e63946" : "transparent",
                        color: match.label === "Home" ? "#fff" : theme?.primary ?? "#e63946",
                        border: match.label !== "Home" ? `1px solid ${theme?.primary ?? "#e63946"}` : "none",
                      }}
                    >
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {match.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-4 block text-center text-sm font-semibold py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ color: theme?.primary ?? "#e63946" }}
              >
                View Full Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
