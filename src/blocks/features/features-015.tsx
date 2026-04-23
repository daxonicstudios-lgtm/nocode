import type { BlockProps } from "@/blocks/types";
import { Palette, Code2, Cloud, Smartphone, Database, Bell } from "lucide-react";

const iconMap = [Palette, Code2, Cloud, Smartphone, Database, Bell];
const badges = ["Design", "Development", "Infrastructure", "Mobile", "Storage", "Alerts"];

const defaults = [
  { title: "Brand Kit Builder", description: "Create consistent brand assets with automated style guides.", label: "Design" },
  { title: "Code Export", description: "Export clean, production-ready code for any framework.", label: "Development" },
  { title: "Cloud Hosting", description: "Managed hosting with automatic scaling and zero downtime.", label: "Infrastructure" },
  { title: "Native Mobile Apps", description: "Generate iOS and Android apps from your web project.", label: "Mobile" },
  { title: "Managed Database", description: "Relational and document storage with automatic backups.", label: "Storage" },
  { title: "Smart Notifications", description: "Trigger alerts based on user behavior and custom rules.", label: "Alerts" },
];

export default function Features015(props: BlockProps) {
  const {
    theme,
    heading = "A Tool for Every Need",
    subheading = "Explore features by category",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const badge = item.label || badges[i % badges.length];
            return (
              <div key={i} className="text-left rounded-xl p-6" style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-4"
                  style={{ backgroundColor: `${theme?.primary || "#8b5cf6"}20`, color: theme?.primary || "#8b5cf6" }}
                >
                  {badge}
                </span>
                <div className="flex items-start gap-3">
                  <Icon size={20} className="mt-1 shrink-0" style={{ color: theme?.primary || "#8b5cf6" }} />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
