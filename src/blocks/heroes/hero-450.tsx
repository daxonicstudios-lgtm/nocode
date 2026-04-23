"use client";

import type { BlockProps } from "@/blocks/types";
import { Gauge, Timer, Flag, Trophy, Users, ChevronRight, Flame, MapPin } from "lucide-react";

export default function Hero450(props: BlockProps) {
  const {
    theme,
    heading = "Apex Speed Karting",
    subheading = "Feel the Rush. Own the Track.",
    bodyText = "Professional-grade electric go-karts on a 800-meter indoor circuit. Speeds up to 70 km/h, real-time lap timing, and a leaderboard that resets weekly. Do you have what it takes?",
    buttonText = "Book Your Race",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Sprint Race", description: "10-minute timed session", value: "R180", label: "solo" },
      { title: "Grand Prix", description: "Qualifying + 15-lap race for up to 10 drivers", value: "R280", label: "competitive" },
      { title: "Endurance Team", description: "1-hour relay race, teams of 3", value: "R750", label: "per team" },
    ],
  } = props;

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#ffffff" }}
      className="relative overflow-hidden"
    >
      {/* Racing stripe accents */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />
      <div className="absolute top-2 left-0 w-full h-0.5 opacity-50" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />

      {/* Checkered flag pattern top-right */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className={`${(Math.floor(i / 4) + i) % 2 === 0 ? "bg-white" : ""}`} />
          ))}
        </div>
      </div>

      {/* Speed lines */}
      <div className="absolute top-1/3 left-0 w-full">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-px w-1/3 opacity-5 mb-4"
            style={{ backgroundColor: theme?.primary ?? "#ef4444", marginLeft: `${i * 15}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-6 h-6" style={{ color: theme?.primary ?? "#ef4444" }} />
              <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: theme?.primary ?? "#ef4444" }}>
                Indoor Electric Karting
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase leading-none tracking-tighter mb-3">
              {heading}
            </h1>
            <p className="text-xl sm:text-2xl font-light italic mb-4 opacity-70">{subheading}</p>

            <div className="w-20 h-1 mb-6" style={{ backgroundColor: theme?.primary ?? "#ef4444" }} />

            <p className="text-sm opacity-50 mb-8 max-w-lg">{bodyText}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-4 font-black uppercase tracking-wider transition-all hover:scale-105"
                style={{
                  backgroundColor: theme?.primary ?? "#ef4444",
                  color: "#fff",
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                  paddingRight: "2.5rem",
                }}
              >
                <Flag className="w-5 h-5" />
                {buttonText}
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider border transition-colors hover:opacity-80"
                style={{ borderColor: theme?.primary ?? "#ef4444", color: theme?.primary ?? "#ef4444" }}
              >
                <Trophy className="w-5 h-5" />
                Leaderboard
              </a>
            </div>

            {/* Track stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: <Gauge className="w-5 h-5" />, num: "70", unit: "km/h", label: "Top Speed" },
                { icon: <MapPin className="w-5 h-5" />, num: "800", unit: "m", label: "Track Length" },
                { icon: <Timer className="w-5 h-5" />, num: "42.3", unit: "s", label: "Lap Record" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                  <div className="flex justify-center mb-2" style={{ color: theme?.primary ?? "#ef4444" }}>{stat.icon}</div>
                  <p className="text-2xl font-black">
                    {stat.num}<span className="text-xs font-normal opacity-50">{stat.unit}</span>
                  </p>
                  <p className="text-[10px] uppercase tracking-wider opacity-40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Race packages */}
          <div>
            <div
              className="border-l-4 p-6"
              style={{ borderColor: theme?.primary ?? "#ef4444", backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6" style={{ color: theme?.primary ?? "#ef4444" }}>
                Race Packages
              </h3>

              <div className="space-y-0">
                {items.map((race, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-5 border-b last:border-b-0"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center font-black text-lg"
                        style={{ backgroundColor: theme?.primary ?? "#ef4444", color: "#fff", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold">{race.title}</h4>
                        <p className="text-xs opacity-40">{race.description}</p>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-xl font-black" style={{ color: theme?.primary ?? "#ef4444" }}>{race.value}</p>
                      <p className="text-[10px] uppercase opacity-40">{race.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={buttonUrl}
                className="mt-6 flex items-center justify-center gap-2 w-full py-4 font-black uppercase tracking-wider text-sm text-white transition-all hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#ef4444" }}
              >
                Race Now <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Requirements */}
            <div className="mt-6 p-4 rounded-lg text-xs opacity-50" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
              <p className="font-bold mb-1">Requirements</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Min height: 140cm</span>
                <span>Ages 12+ (Junior karts: 8+)</span>
                <span>Closed-toe shoes required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
