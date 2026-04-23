"use client";

import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight, TrendingUp, Award, Users, Briefcase } from "lucide-react";

export default function Hero292(props: BlockProps) {
  const {
    theme,
    heading = "We Build Brands That Command Attention",
    subheading = "Award-Winning Creative Agency",
    bodyText = "From strategy to execution, we craft digital experiences that drive measurable results for ambitious brands worldwide.",
    buttonText = "View Our Work",
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Nexora Fintech", description: "Brand Identity & Web Platform", label: "+240% engagement" },
      { title: "Voltera Motors", description: "Product Launch Campaign", label: "$2.8M in pre-orders" },
      { title: "Helix Health", description: "App Design & Development", label: "500K downloads" },
    ],
  } = props;

  const stats = [
    { icon: Award, value: "47", label: "Awards Won" },
    { icon: Briefcase, value: "200+", label: "Projects Delivered" },
    { icon: Users, value: "86", label: "Global Clients" },
    { icon: TrendingUp, value: "3.2x", label: "Avg. ROI" },
  ];

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#111111", color: theme?.foreground ?? "#f5f5f5" }}
      className="min-h-screen px-5 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: theme?.primary ?? "#e74c3c" }}
            >
              {subheading}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              {heading}
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-base sm:text-lg opacity-60 leading-relaxed mb-8 max-w-lg">
              {bodyText}
            </p>
            <a
              href={buttonUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold group w-fit"
              style={{ color: theme?.primary ?? "#e74c3c" }}
            >
              {buttonText}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl mb-16"
          style={{ backgroundColor: `${theme?.primary ?? "#e74c3c"}10` }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <stat.icon
                className="w-5 h-5 mb-3 mx-auto sm:mx-0"
                style={{ color: theme?.primary ?? "#e74c3c" }}
              />
              <div className="text-2xl sm:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs opacity-50 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case study previews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden p-6 sm:p-8 border border-white/5 hover:border-white/15 transition-colors cursor-pointer"
              style={{ backgroundColor: `${theme?.foreground ?? "#f5f5f5"}05` }}
            >
              {imageUrl && (
                <div className="absolute inset-0 opacity-10">
                  <img src={imageUrl} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Case Study 0{i + 1}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 mb-4">{item.description}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${theme?.primary ?? "#e74c3c"}20`,
                    color: theme?.primary ?? "#e74c3c",
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
