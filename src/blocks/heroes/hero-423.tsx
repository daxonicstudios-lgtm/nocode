"use client";

import type { BlockProps } from "@/blocks/types";
import { Layers, DollarSign, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Hero423(props: BlockProps) {
  const {
    theme,
    heading = "One platform, endless possibilities",
    subheading = "Build, scale, and manage your entire business from a single dashboard.",
    bodyText,
    buttonText = "Start Building",
    buttonUrl = "#",
    imageUrl,
    items = [
      {
        title: "Features",
        description: "Drag-and-drop editor, real-time collaboration, version history, and 200+ integrations that connect your favorite tools seamlessly.",
        icon: "features",
        label: "50+ tools included",
      },
      {
        title: "Pricing",
        description: "Simple, transparent pricing starting at $29/month. No setup fees, no hidden charges. Scale up or down anytime.",
        icon: "pricing",
        label: "From $29/mo",
      },
      {
        title: "About",
        description: "Founded in 2020, we serve 50,000+ businesses across 80 countries. Our mission is to democratize software for every team.",
        icon: "about",
        label: "50K+ teams",
      },
    ],
  } = props;

  const [activeTab, setActiveTab] = useState(0);
  const icons = [Layers, DollarSign, Users];

  return (
    <section
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
      className="min-h-screen flex items-center px-4 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-base sm:text-lg opacity-70 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex rounded-xl p-1 gap-1"
            style={{ backgroundColor: theme?.foreground ? `${theme.foreground}08` : "rgba(0,0,0,0.04)" }}
          >
            {items.map((item, i) => {
              const Icon = icons[i] ?? Layers;
              const isActive = i === activeTab;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={
                    isActive
                      ? { backgroundColor: theme?.primary ?? "#8b5cf6", color: "#fff" }
                      : { color: theme?.foreground ?? "inherit", opacity: 0.6 }
                  }
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content panel */}
        <div
          className="rounded-2xl p-8 sm:p-12 border border-current/5 text-center"
          style={{ backgroundColor: theme?.primary ? `${theme.primary}06` : "rgba(139,92,246,0.03)" }}
        >
          {items[activeTab] && (
            <div className="max-w-xl mx-auto">
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{
                  backgroundColor: theme?.primary ? `${theme.primary}15` : "rgba(139,92,246,0.1)",
                  color: theme?.primary ?? "#8b5cf6",
                }}
              >
                {items[activeTab].label}
              </span>
              <p className="text-lg sm:text-xl leading-relaxed opacity-80 mb-8">
                {items[activeTab].description}
              </p>
              <a
                href={buttonUrl}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: theme?.primary ?? "#8b5cf6" }}
              >
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{
                backgroundColor: i === activeTab ? (theme?.primary ?? "#8b5cf6") : (theme?.foreground ?? "#000"),
                opacity: i === activeTab ? 1 : 0.2,
                transform: i === activeTab ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
