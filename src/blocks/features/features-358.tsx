import type { BlockProps } from "@/blocks/types";
import { Upload, Database, Server, HardDrive } from "lucide-react";

const icons = [Upload, Database, Server, HardDrive];
const progressValues = [85, 72, 95, 60];

export default function Features358(props: BlockProps) {
  const {
    theme,
    heading = "System Health Dashboard",
    subheading = "Real-time metrics at your fingertips",
    bodyText,
    buttonText,
    buttonUrl = "#",
    imageUrl,
    items = [
      { title: "Upload Speed", description: "Blazing fast file transfers across regions.", value: "85" },
      { title: "Database Load", description: "Optimized queries with intelligent caching.", value: "72" },
      { title: "Server Uptime", description: "Redundant infrastructure for zero downtime.", value: "95" },
      { title: "Storage Used", description: "Elastic storage that grows with your data.", value: "60" },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background || "#e5e5e5", color: theme?.foreground || "#374151" }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            const pct = parseInt(item.value || String(progressValues[i % progressValues.length]), 10);
            return (
              <div key={i} className="rounded-2xl p-6" style={{ background: theme?.background || "#e5e5e5", boxShadow: "8px 8px 16px #c2c2c2, -8px -8px 16px #ffffff" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} style={{ color: theme?.primary || "#10b981" }} />
                  <h3 className="font-semibold">{item.title}</h3>
                  <span className="ml-auto text-sm font-bold" style={{ color: theme?.primary || "#10b981" }}>{pct}%</span>
                </div>
                <div className="h-3 rounded-full mb-3" style={{ background: theme?.background || "#e5e5e5", boxShadow: "inset 3px 3px 6px #c2c2c2, inset -3px -3px 6px #ffffff" }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: theme?.primary || "#10b981" }} />
                </div>
                <p className="text-sm opacity-60">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
