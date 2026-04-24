"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Zap, Shield, BarChart3, Globe, Palette, Bell } from "lucide-react";

const icons = [Zap, Shield, BarChart3, Globe, Palette, Bell];

export default function Features137(props: BlockProps) {
  const {
    theme,
    heading = "Platform Features",
    subheading = "Switch views to explore different capabilities",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "One-Click Deploy", description: "Ship updates without downtime.", label: "build" },
      { title: "Visual Editor", description: "Drag-and-drop page builder.", label: "build" },
      { title: "Auto Backups", description: "Daily snapshots of your entire site.", label: "manage" },
      { title: "User Roles", description: "Fine-grained access control.", label: "manage" },
      { title: "Conversion Tracking", description: "Measure what matters.", label: "grow" },
      { title: "A/B Testing", description: "Test variants and pick winners.", label: "grow" },
    ],
  } = props;

  const segments = ["build", "manage", "grow"];
  const segmentLabels = ["Build", "Manage", "Grow"];
  const [active, setActive] = useState(segments[0]);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg overflow-hidden border" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
            {segments.map((seg, i) => (
              <button key={seg} onClick={() => setActive(seg)} className="px-5 py-2.5 text-sm font-medium transition-colors" style={active === seg ? { backgroundColor: theme?.primary || "#6366f1", color: "#fff" } : {}}>
                {segmentLabels[i]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.filter((item) => item.label === active).map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-start gap-4 rounded-xl border p-6" style={{ borderColor: theme?.accent || "#e5e7eb" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: theme?.primary || "#6366f1" }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="opacity-60 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
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
