import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Users, Award } from "lucide-react";

const DEFAULT_ITEMS = [
  { label: "Revenue grown", value: "3.4x", description: "Average customer growth in year one" },
  { label: "Customer satisfaction", value: "4.9/5", description: "From 12,000+ verified reviews" },
  { label: "Retention", value: "94%", description: "Annual customer retention rate" },
];

const ICONS = [TrendingUp, Users, Award];

export default function Stats002(props: BlockProps) {
  const { theme, heading = "Results that matter", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((s, i) => {
            const Icon = ICONS[i % 3];
            return (
              <div key={i} className="p-8 rounded-2xl" style={{ backgroundColor: theme?.secondary ?? "#f3f4f6" }}>
                <Icon className="w-6 h-6 mb-5" style={{ color: theme?.primary }} />
                <div className="text-4xl font-semibold">{s.value}</div>
                <div className="mt-1 font-medium">{s.label}</div>
                <p className="mt-2 text-sm opacity-70">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
