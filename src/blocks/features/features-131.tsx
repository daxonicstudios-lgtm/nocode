"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3 } from "lucide-react";

const tabIcons = [Zap, Shield, BarChart3];

export default function Features131(props: BlockProps) {
  const {
    theme,
    heading = "Explore Our Features",
    subheading = "Organized by category for easy browsing",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Performance", description: "Blazing fast page loads with edge caching and image optimization.", label: "performance" },
      { title: "Auto Scaling", description: "Handle traffic spikes without lifting a finger.", label: "performance" },
      { title: "SSL Certificates", description: "Free HTTPS for every site, auto-renewed.", label: "security" },
      { title: "DDoS Protection", description: "Enterprise-grade shields against attacks.", label: "security" },
      { title: "Visitor Analytics", description: "Track pageviews, sessions, and conversions.", label: "analytics" },
      { title: "Funnel Reports", description: "See where users drop off in your flow.", label: "analytics" },
    ],
  } = props;

  const tabs = ["performance", "security", "analytics"];
  const tabLabels = ["Performance", "Security", "Analytics"];
  const [active, setActive] = useState(tabs[0]);

  const filtered = items.filter((item) => item.label === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab, i) => {
            const Icon = tabIcons[i];
            return (
              <button key={tab} onClick={() => setActive(tab)} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={active === tab ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : { backgroundColor: theme?.accent || "#f3f4f6" }}>
                <Icon size={16} />
                {tabLabels[i]}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((item, i) => (
            <div key={i} className="rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        {buttonText && (
          <div className="text-center mt-8">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
