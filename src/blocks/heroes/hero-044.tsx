"use client";

import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { ArrowRight, ToggleLeft, ToggleRight } from "lucide-react";

export default function Hero044(props: BlockProps) {
  const {
    theme,
    heading = "One Platform, Endless Possibilities",
    subheading = "Launch your online store in minutes with built-in payments, inventory management, and beautiful storefronts.",
    bodyText = "Scale your service business effortlessly with scheduling, client portals, and automated workflows.",
    buttonText = "Get Started Free",
    buttonUrl = "#",
    items = [],
  } = props;

  const tabOneLabel = items.length > 0 ? items[0].label ?? "For Sellers" : "For Sellers";
  const tabTwoLabel = items.length > 1 ? items[1].label ?? "For Services" : "For Services";
  const tabOneText = subheading;
  const tabTwoText = bodyText;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#111827" }}
      className="min-h-[80vh] flex items-center justify-center px-5 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {heading}
        </h1>

        {/* Toggle tabs */}
        <div className="mt-8 inline-flex items-center rounded-full p-1 gap-1" style={{ backgroundColor: theme?.background ?? "#f3f4f6", border: "1px solid rgba(0,0,0,0.1)" }}>
          <button
            onClick={() => setActiveTab(0)}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={
              activeTab === 0
                ? { backgroundColor: theme?.primary ?? "#2563eb", color: "#fff" }
                : { backgroundColor: "transparent" }
            }
          >
            <span className="flex items-center gap-2">
              <ToggleLeft className="w-4 h-4" />
              {tabOneLabel}
            </span>
          </button>
          <button
            onClick={() => setActiveTab(1)}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            style={
              activeTab === 1
                ? { backgroundColor: theme?.primary ?? "#2563eb", color: "#fff" }
                : { backgroundColor: "transparent" }
            }
          >
            <span className="flex items-center gap-2">
              <ToggleRight className="w-4 h-4" />
              {tabTwoLabel}
            </span>
          </button>
        </div>

        {/* Toggleable content */}
        <div className="mt-6 min-h-[80px] flex items-center justify-center">
          <p
            className="text-lg sm:text-xl opacity-70 leading-relaxed max-w-xl mx-auto transition-opacity duration-300"
            key={activeTab}
          >
            {activeTab === 0 ? tabOneText : tabTwoText}
          </p>
        </div>

        <div className="mt-8">
          <a
            href={buttonUrl}
            style={{ backgroundColor: theme?.primary ?? "#2563eb" }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-base hover:opacity-90 transition-opacity"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
