import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, Timer, Award } from "lucide-react";

const icons = [TrendingUp, Users, Timer, Award];
const metrics = ["35%", "10K+", "< 200ms", "99.9%"];
const metricLabels = ["Revenue Uplift", "Active Users", "Avg Response", "Uptime"];

export default function Features327(props: BlockProps) {
  const {
    theme,
    heading = "Features That Move Metrics",
    subheading = "Every capability is tied to a measurable business outcome",
    items = [
      { title: "Conversion Engine", description: "A/B testing and personalization that lifts revenue.", value: "35%" },
      { title: "Collaboration Suite", description: "Shared workspaces that keep large teams aligned.", value: "10K+" },
      { title: "Edge Runtime", description: "Compute at the edge for lightning-fast interactions.", value: "< 200ms" },
      { title: "Reliability Core", description: "Multi-region failover with zero-downtime updates.", value: "99.9%" },
    ],
  } = props;

  const primary = theme?.primary || "#475569";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2">{heading}</h2>
        <p className="opacity-60 text-center mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex gap-5 p-6 rounded-xl border" style={{ borderColor: `${primary}10` }}>
                <div className="shrink-0">
                  <Icon size={20} style={{ color: primary }} className="mb-2" />
                  <div className="text-2xl font-bold" style={{ color: primary }}>{item.value || metrics[i % metrics.length]}</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-40 font-semibold">{metricLabels[i % metricLabels.length]}</div>
                </div>
                <div className="border-l pl-5" style={{ borderColor: `${primary}12` }}>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
