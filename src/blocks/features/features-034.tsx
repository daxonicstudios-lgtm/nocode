import type { BlockProps } from "@/blocks/types";
import { BarChart3, Users, Clock, Settings } from "lucide-react";

const iconMap = [BarChart3, Users, Clock, Settings];

const defaultItems = [
  { title: "Real-Time Analytics", description: "Track visitor behavior, conversions, and revenue with live dashboards updated every second." },
  { title: "Team Management", description: "Invite teammates, assign roles, and manage permissions from a single control panel." },
  { title: "Scheduled Publishing", description: "Plan your content calendar and let automation handle the rest at the right moment." },
  { title: "Custom Workflows", description: "Design approval pipelines and automations that match how your team actually works." },
];

export default function Features034(props: BlockProps) {
  const {
    theme,
    heading = "Tools That Work Together",
    subheading = "An integrated suite designed to streamline every part of your workflow",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#f59e0b";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const hasBg = i % 2 === 0;
            return (
              <div
                key={i}
                className="rounded-xl p-6 sm:p-8"
                style={hasBg ? { backgroundColor: `${accent}0a` } : undefined}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${accent}20` }}>
                    <Icon className="w-5 h-5" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="opacity-55 text-sm leading-relaxed">{item.description}</p>
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
