"use client";

import type { BlockProps } from "@/blocks/types";
import { Axe, Trophy, Calendar, Users, Clock, Shield, ChevronRight } from "lucide-react";

export default function Hero468(props: BlockProps) {
  const {
    theme,
    heading = "Throw Like a Lumberjack",
    subheading = "Axe Throwing Lounge & League",
    bodyText = "Unleash your inner woodsman. Our indoor axe throwing lanes feature professional targets, cold drinks on tap, and coaches who will have you sticking bullseyes in no time.",
    buttonText = "Book a Lane",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Walk-In Throws", description: "30 min per lane, no reservation needed", label: "$20/person" },
      { title: "Group Events", description: "Private lanes, host, and tournament bracket", label: "$30/person" },
      { title: "Corporate Team Building", description: "Catered packages with competition", label: "From $40/person" },
      { title: "Birthday Parties", description: "2 hrs, cake table, trophy for winner", label: "From $250" },
    ],
  } = props;

  const leagueInfo = [
    { stat: "12", label: "Weeks" },
    { stat: "8", label: "Teams" },
    { stat: "$500", label: "Prize Pool" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1C1410", color: theme?.foreground ?? "#F0E6D8" }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Wood grain texture effect */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, currentColor 40px, currentColor 41px)",
        }}
      />

      {/* Top accent */}
      <div className="h-1.5 w-full" style={{ backgroundColor: theme?.primary ?? "#C53030" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme?.primary ?? "#C53030" }}
              >
                <Axe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-black tracking-[0.25em] uppercase block" style={{ color: theme?.primary ?? "#C53030" }}>
                  Timber Jack&apos;s
                </span>
                <span className="text-xs opacity-40 uppercase tracking-wider">Axe Throwing Lounge</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none mb-5 uppercase">
              {heading}
            </h1>
            <p className="text-lg opacity-70 mb-2">{subheading}</p>
            <p className="text-base opacity-50 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-black text-white uppercase tracking-wider text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#C53030" }}
              >
                <Axe className="w-5 h-5" />
                {buttonText}
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold uppercase tracking-wider text-sm border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#C53030", color: theme?.primary ?? "#C53030" }}
              >
                Join the League
              </a>
            </div>

            {/* Lane booking options */}
            <div className="space-y-3">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border"
                  style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#C5303020" }}
                >
                  <div className="mb-2 sm:mb-0">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm opacity-50">{item.description}</p>
                  </div>
                  <span
                    className="font-black text-lg whitespace-nowrap"
                    style={{ color: theme?.primary ?? "#C53030" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image and league card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl overflow-hidden aspect-video">
              {imageUrl ? (
                <img src={imageUrl} alt="Axe throwing" className="w-full h-full object-cover" />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: theme?.primary ? `${theme.primary}15` : "#C5303015" }}
                >
                  <div className="text-center">
                    <Axe className="w-16 h-16 mx-auto mb-2 opacity-30" style={{ color: theme?.primary ?? "#C53030" }} />
                    <p className="text-sm opacity-30 font-bold uppercase tracking-wider">10 Lanes Available</p>
                  </div>
                </div>
              )}
            </div>

            {/* League info card */}
            <div
              className="p-6 rounded-xl border-2"
              style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#C5303030" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5" style={{ color: theme?.primary ?? "#C53030" }} />
                <h3 className="font-black uppercase tracking-wider">Spring League</h3>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">
                {leagueInfo.map((l, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-black" style={{ color: theme?.primary ?? "#C53030" }}>
                      {l.stat}
                    </p>
                    <p className="text-xs opacity-50 uppercase tracking-wider">{l.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-sm opacity-60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Starts May 12
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Mondays 7 PM
                </span>
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  All skill levels
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: theme?.primary ? `${theme.primary}10` : "#C5303010" }}>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: theme?.primary ?? "#C53030" }} />
                <span className="text-sm font-semibold">Open Wed-Sun</span>
              </div>
              <span className="text-sm opacity-60">4 PM - Midnight | Sat-Sun from 12 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
