"use client";

import type { BlockProps } from "@/blocks/types";
import { Wrench, Hammer, HardHat, ArrowRight, Ruler, PaintBucket, Drill, CircuitBoard } from "lucide-react";

export default function Hero352(props: BlockProps) {
  const {
    theme,
    heading = "Build It Right, Build It Yourself",
    subheading = "Ironside Hardware",
    bodyText = "From weekend warriors to professional contractors, we have the tools, materials, and expert advice you need to tackle any project. Over 50,000 products in stock.",
    buttonText = "Shop Tools",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Power Tools", description: "Drills, saws, sanders & more", icon: "drill" },
      { title: "Plumbing", description: "Pipes, fittings, fixtures", icon: "wrench" },
      { title: "Electrical", description: "Wiring, outlets, panels", icon: "circuit" },
      { title: "Paint & Stain", description: "Interior, exterior, primers", icon: "paint" },
    ],
  } = props;

  const workshops = [
    { title: "Tile Installation 101", date: "Sat, May 3", spots: "8 spots left" },
    { title: "Basic Plumbing Fixes", date: "Sat, May 10", spots: "12 spots left" },
  ];

  const iconMap: Record<string, React.ReactNode> = {
    drill: <Drill className="w-5 h-5" />,
    wrench: <Wrench className="w-5 h-5" />,
    circuit: <CircuitBoard className="w-5 h-5" />,
    paint: <PaintBucket className="w-5 h-5" />,
  };

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#fafaf9" }}
      className="min-h-screen px-5 py-16 sm:py-24 flex items-center relative overflow-hidden"
    >
      {/* Diagonal stripe accent */}
      <div
        className="absolute top-0 right-0 w-2 h-full"
        style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
      />
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}30` }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — 3 cols */}
          <div className="lg:col-span-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border"
              style={{ borderColor: `${theme?.primary ?? "#f59e0b"}40`, color: theme?.primary ?? "#f59e0b" }}
            >
              <HardHat className="w-3.5 h-3.5" />
              {subheading}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-base sm:text-lg opacity-50 leading-relaxed mb-8 max-w-xl">
              {bodyText}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-bold text-black transition-transform hover:scale-105"
                style={{ backgroundColor: theme?.primary ?? "#f59e0b" }}
              >
                <Hammer className="w-4 h-4" />
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold border"
                style={{ borderColor: `${theme?.primary ?? "#f59e0b"}40`, color: theme?.primary ?? "#f59e0b" }}
              >
                <Ruler className="w-4 h-4" />
                Pro Account
              </a>
            </div>

            {/* DIY Project categories */}
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-4">Shop by Department</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {items.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border text-center transition-all hover:scale-[1.03] cursor-pointer"
                  style={{
                    borderColor: `${theme?.primary ?? "#f59e0b"}15`,
                    backgroundColor: `${theme?.primary ?? "#f59e0b"}08`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15`, color: theme?.primary ?? "#f59e0b" }}
                  >
                    {iconMap[item.icon ?? "wrench"] ?? <Wrench className="w-5 h-5" />}
                  </div>
                  <div className="font-bold text-xs">{item.title}</div>
                  <div className="text-[10px] opacity-40 mt-0.5">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 2 cols */}
          <div className="lg:col-span-2">
            {imageUrl && (
              <div className="rounded-xl overflow-hidden mb-6 shadow-xl">
                <img src={imageUrl} alt="Hardware store" className="w-full h-52 object-cover" />
              </div>
            )}

            {/* Workshop signup */}
            <div
              className="p-5 rounded-xl border mb-5"
              style={{ borderColor: `${theme?.primary ?? "#f59e0b"}20`, backgroundColor: `${theme?.primary ?? "#f59e0b"}06` }}
            >
              <h3 className="text-sm font-bold flex items-center gap-2 mb-4">
                <HardHat className="w-4 h-4" style={{ color: theme?.primary ?? "#f59e0b" }} />
                Free DIY Workshops
              </h3>
              <div className="space-y-3">
                {workshops.map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">{w.title}</div>
                      <div className="text-xs opacity-40">{w.date}</div>
                    </div>
                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded"
                      style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}15`, color: theme?.primary ?? "#f59e0b" }}
                    >
                      {w.spots}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="mt-4 block text-center text-xs font-bold py-2.5 rounded-md border"
                style={{ borderColor: `${theme?.primary ?? "#f59e0b"}30`, color: theme?.primary ?? "#f59e0b" }}
              >
                Sign Up for Workshops
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Products", value: "50K+" },
                { label: "Brands", value: "200+" },
                { label: "Years", value: "35" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-lg" style={{ backgroundColor: `${theme?.primary ?? "#f59e0b"}08` }}>
                  <div className="text-xl font-black" style={{ color: theme?.primary ?? "#f59e0b" }}>{stat.value}</div>
                  <div className="text-[10px] opacity-40 font-semibold uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
