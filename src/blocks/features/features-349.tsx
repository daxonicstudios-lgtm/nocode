import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const icons = [TrendingUp, Users, DollarSign, Activity];

export default function Features349(props: BlockProps) {
  const {
    theme,
    heading = "Dashboard Metrics",
    subheading = "Features that keep your KPIs front and center",
    items = [
      { title: "Revenue Tracking", description: "Real-time revenue monitoring with daily, weekly, and monthly breakdowns.", value: "$48.2K" },
      { title: "User Growth", description: "Track new signups, active users, and churn rates at a glance.", value: "2,847" },
      { title: "Average Order Value", description: "Monitor transaction values and identify upsell opportunities.", value: "$127" },
      { title: "System Performance", description: "CPU, memory, and network metrics with alerting thresholds.", value: "99.8%" },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-70 text-center mb-10">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="rounded-xl p-6 border" style={{ borderColor: `${primary}12` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primary}10` }}>
                      <Icon size={16} style={{ color: primary }} />
                    </div>
                    <span className="text-sm font-medium opacity-60">{item.title}</span>
                  </div>
                  <TrendingUp size={14} className="text-green-500" />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: primary }}>{item.value}</div>
                <p className="text-xs opacity-40 leading-relaxed">{item.description}</p>
                <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ backgroundColor: `${primary}10` }}>
                  <div className="h-full rounded-full" style={{ width: "72%", backgroundColor: primary }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
