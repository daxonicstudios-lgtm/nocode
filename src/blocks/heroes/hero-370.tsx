"use client";

import type { BlockProps } from "@/blocks/types";
import { Clapperboard, ArrowRight, Play, Film, Video, Award, Camera, MonitorPlay } from "lucide-react";

export default function Hero370(props: BlockProps) {
  const {
    theme,
    heading = "We Tell Stories That Move People",
    subheading = "Framelight Productions",
    bodyText = "Award-winning film and video production studio crafting commercials, documentaries, music videos, and brand films. From concept to final cut, we bring your vision to life in cinematic quality.",
    buttonText = "Watch Our Reel",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Commercials", description: "TV, digital & social media ads", value: "200+ delivered" },
      { title: "Brand Films", description: "Corporate stories & company profiles", value: "Fortune 500 clients" },
      { title: "Music Videos", description: "Concept, shoot & post-production", value: "50M+ views" },
      { title: "Documentaries", description: "Feature-length & short form", value: "Festival selections" },
    ],
  } = props;

  const clientLogos = ["Nike", "Spotify", "Coca-Cola", "Samsung", "Netflix"];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#09090b", color: theme?.foreground ?? "#fafafa" }}
      className="min-h-screen relative overflow-hidden flex flex-col"
    >
      {/* Cinematic widescreen bars */}
      <div className="h-8 sm:h-12 bg-black w-full shrink-0" />

      <div className="flex-1 px-5 py-12 sm:py-20 flex items-center relative">
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')" }} />

        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[180px] opacity-10"
          style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
        />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-widest mb-6 border"
                style={{ borderColor: `${theme?.primary ?? "#e11d48"}40`, color: theme?.primary ?? "#e11d48" }}
              >
                <Clapperboard className="w-3.5 h-3.5" />
                {subheading}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.0] mb-6 tracking-tight">
                {heading}
              </h1>

              <p className="text-base sm:text-lg opacity-40 leading-relaxed mb-8 max-w-lg">
                {bodyText}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={buttonUrl}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-bold transition-transform hover:scale-105 text-white"
                  style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
                >
                  <Play className="w-4 h-4 fill-current" />
                  {buttonText}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md text-sm font-semibold border transition-colors"
                  style={{ borderColor: `${theme?.primary ?? "#e11d48"}40`, color: theme?.primary ?? "#e11d48" }}
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Client logos */}
              <div>
                <div className="text-xs uppercase tracking-widest opacity-20 mb-4">Trusted by</div>
                <div className="flex flex-wrap items-center gap-6">
                  {clientLogos.map((name, i) => (
                    <span
                      key={i}
                      className="text-sm font-bold uppercase tracking-wider opacity-20 hover:opacity-40 transition-opacity"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Reel preview & services */}
            <div>
              {/* Reel preview */}
              <div className="relative mb-8 group cursor-pointer">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Production reel"
                    className="w-full aspect-video object-cover rounded-lg"
                  />
                ) : (
                  <div
                    className="w-full aspect-video rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${theme?.primary ?? "#e11d48"}08` }}
                  >
                    <Film className="w-16 h-16 opacity-10" style={{ color: theme?.primary ?? "#e11d48" }} />
                  </div>
                )}
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/30 group-hover:bg-black/40 transition-colors">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: theme?.primary ?? "#e11d48" }}
                  >
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded text-xs font-mono bg-black/70 text-white">
                  2:34
                </div>
              </div>

              {/* Production services */}
              <div className="grid grid-cols-2 gap-3">
                {items.slice(0, 4).map((service, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border transition-all hover:scale-[1.02]"
                    style={{
                      borderColor: `${theme?.primary ?? "#e11d48"}12`,
                      backgroundColor: `${theme?.primary ?? "#e11d48"}05`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {i === 0 ? <MonitorPlay className="w-4 h-4" style={{ color: theme?.primary ?? "#e11d48" }} /> :
                       i === 1 ? <Video className="w-4 h-4" style={{ color: theme?.primary ?? "#e11d48" }} /> :
                       i === 2 ? <Camera className="w-4 h-4" style={{ color: theme?.primary ?? "#e11d48" }} /> :
                       <Award className="w-4 h-4" style={{ color: theme?.primary ?? "#e11d48" }} />}
                      <span className="text-sm font-bold">{service.title}</span>
                    </div>
                    <div className="text-xs opacity-40 mb-2">{service.description}</div>
                    <div className="text-xs font-semibold" style={{ color: theme?.primary ?? "#e11d48" }}>
                      {service.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Awards */}
              <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t" style={{ borderColor: `${theme?.primary ?? "#e11d48"}10` }}>
                {[
                  { icon: Award, label: "12 Festival Awards" },
                  { icon: Film, label: "300+ Projects" },
                  { icon: Camera, label: "4K/8K Ready" },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs opacity-40">
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cinematic bar */}
      <div className="h-8 sm:h-12 bg-black w-full shrink-0" />
    </section>
  );
}
