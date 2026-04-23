import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

const iconMap = [Clock, ArrowUpRight, ShieldCheck];

const defaults = [
  { title: "Avg. Response Time", description: "Measured across all API endpoints in the last 30 days.", value: "48ms" },
  { title: "Monthly Uptime", description: "Consistently maintained over the past 12 months.", value: "99.98%" },
  { title: "Security Score", description: "Independently audited by leading cybersecurity firms.", value: "A+" },
];

export default function Features019(props: BlockProps) {
  const {
    theme,
    heading = "Performance by the Numbers",
    subheading = "Metrics that speak louder than promises",
    items = defaults,
  } = props;

  const primary = theme?.primary || "#0ea5e9";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="rounded-2xl p-8" style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Icon size={20} style={{ color: primary }} />
                  <span className="text-4xl font-black" style={{ color: primary }}>
                    {item.value || "N/A"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
