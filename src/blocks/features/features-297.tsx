"use client";

import type { BlockProps } from "@/blocks/types";
import { useState } from "react";
import { LayoutGrid, Users, Zap, Shield, BarChart3, Settings } from "lucide-react";

const icons = [LayoutGrid, Users, Zap, Shield, BarChart3, Settings];
const categories = ["All", "Productivity", "Security", "Analytics"];

export default function Features297(props: BlockProps) {
  const {
    theme,
    heading = "Explore by Category",
    subheading = "Filter features by what matters most to your team",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Kanban Boards", description: "Visual task management with drag-and-drop columns.", label: "Productivity" },
      { title: "Team Chat", description: "Real-time messaging with threads and file sharing.", label: "Productivity" },
      { title: "Instant Deploy", description: "One-click deployments with automatic rollback.", label: "Productivity" },
      { title: "Access Control", description: "Role-based permissions for every resource.", label: "Security" },
      { title: "Audit Logs", description: "Complete history of every action taken in your account.", label: "Analytics" },
      { title: "Custom Workflows", description: "Automate any process with conditional logic.", label: "Productivity" },
    ],
  } = props;

  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((item) => item.label === active);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className="px-4 py-2 rounded-full text-sm font-medium transition-colors" style={{ backgroundColor: active === cat ? (theme?.primary || "#6366f1") : "transparent", color: active === cat ? "#fff" : (theme?.foreground || "#6b7280"), border: active === cat ? "none" : "1px solid #d1d5db" }}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={`${item.title}-${i}`} className="rounded-xl border p-5" style={{ borderColor: theme?.primary ? `${theme.primary}20` : "#e5e7eb" }}>
                <Icon size={22} className="mb-3" style={{ color: theme?.primary || "#6366f1" }} />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
        {buttonText && (
          <div className="text-center mt-10">
            <a href={buttonUrl} className="inline-block px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: theme?.primary || "#6366f1" }}>{buttonText}</a>
          </div>
        )}
      </div>
    </section>
  );
}
