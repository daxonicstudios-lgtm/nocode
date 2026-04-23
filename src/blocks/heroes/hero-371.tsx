"use client";

import type { BlockProps } from "@/blocks/types";
import { Mic, Headphones, Play, Radio, Users, ArrowRight, Podcast } from "lucide-react";

export default function Hero371(props: BlockProps) {
  const {
    theme,
    heading = "Your Podcast Network, One Feed",
    subheading = "SoundWave Network",
    bodyText = "Discover expertly produced shows across tech, culture, business, and storytelling. Over 2 million listeners tune in every week to our growing lineup of original podcasts.",
    buttonText = "Browse All Shows",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "The Future Stack", description: "Technology & Innovation", value: "186 episodes", icon: "tech" },
      { title: "Culture Shift", description: "Society & Trends", value: "124 episodes", icon: "culture" },
      { title: "Founder Files", description: "Startup Stories", value: "97 episodes", icon: "business" },
      { title: "Deep Narrative", description: "Investigative Journalism", value: "63 episodes", icon: "story" },
      { title: "Mind & Market", description: "Psychology & Finance", value: "142 episodes", icon: "finance" },
      { title: "Creative Pulse", description: "Art & Design", value: "78 episodes", icon: "art" },
    ],
  } = props;

  const platforms = ["Apple Podcasts", "Spotify", "Google Podcasts", "Overcast"];

  const showColors = ["#6366f1", "#ec4899", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#0f0f14", color: theme?.foreground ?? "#f4f4f5" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Ambient gradient */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[200px] opacity-10"
        style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[180px] opacity-10"
        style={{ backgroundColor: theme?.accent ?? "#ec4899" }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
              style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}15`, color: theme?.primary ?? "#8b5cf6" }}
            >
              <Radio className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { label: "Active Shows", stat: "24", icon: Podcast },
                { label: "Weekly Listeners", stat: "2.1M", icon: Headphones },
                { label: "Total Episodes", stat: "1,840+", icon: Mic },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary ?? "#8b5cf6"}12` }}
                  >
                    <s.icon className="w-4 h-4" style={{ color: theme?.primary ?? "#8b5cf6" }} />
                  </div>
                  <div>
                    <div className="text-xl font-black">{s.stat}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-40">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#8b5cf6", color: "#ffffff" }}
              >
                <Headphones className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}40`, color: theme?.primary ?? "#8b5cf6" }}
              >
                <Play className="w-4 h-4" />
                Latest Episode
              </a>
            </div>

            {/* Listen on platforms */}
            <div>
              <span className="text-xs uppercase tracking-widest opacity-30 font-bold">Listen on</span>
              <div className="flex flex-wrap gap-3 mt-2">
                {platforms.map((p, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{ borderColor: `${theme?.primary ?? "#8b5cf6"}20`, color: theme?.primary ?? "#8b5cf6" }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Show grid */}
          <div>
            {imageUrl && (
              <div className="rounded-2xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="Podcast network" className="w-full h-48 object-cover" />
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {items.slice(0, 6).map((show, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-2xl border transition-all hover:scale-[1.03] cursor-pointer"
                  style={{
                    borderColor: `${showColors[i % showColors.length]}15`,
                    backgroundColor: `${showColors[i % showColors.length]}08`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-white font-black text-sm"
                    style={{ backgroundColor: showColors[i % showColors.length] }}
                  >
                    {show.title?.charAt(0)}
                    {show.title?.split(" ")[1]?.charAt(0) ?? ""}
                  </div>
                  <div className="font-bold text-sm mb-1 line-clamp-1">{show.title}</div>
                  <div className="text-[10px] opacity-40 mb-2">{show.description}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold" style={{ color: showColors[i % showColors.length] }}>
                      {show.value}
                    </span>
                    <Play
                      className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: showColors[i % showColors.length] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-4 p-3 rounded-xl text-center text-xs border flex items-center justify-center gap-2"
              style={{
                borderColor: `${theme?.primary ?? "#8b5cf6"}15`,
                backgroundColor: `${theme?.primary ?? "#8b5cf6"}06`,
              }}
            >
              <Users className="w-3.5 h-3.5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
              <span className="opacity-60">Join 2.1 million listeners worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
