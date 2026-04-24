import type { BlockProps } from "@/blocks/types";
import { Monitor, Cloud, Lock, Cpu } from "lucide-react";

const icons = [Monitor, Cloud, Lock, Cpu];

export default function Features302(props: BlockProps) {
  const {
    theme,
    heading = "Everything You Need",
    subheading = "Full-width features built for modern teams",
    items = [
      { title: "Real-Time Monitoring", description: "Track every metric that matters with live dashboards and instant alerts when things change." },
      { title: "Cloud Native", description: "Built from the ground up for the cloud with auto-scaling, redundancy, and zero downtime deploys." },
      { title: "Data Protection", description: "End-to-end encryption, SOC 2 compliance, and granular access controls keep your data safe." },
      { title: "Smart Automation", description: "Let AI handle repetitive tasks so your team can focus on what truly moves the needle." },
    ],
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">{heading}</h2>
        <p className="opacity-70 text-center mb-10 max-w-2xl mx-auto">{subheading}</p>
        <div className="space-y-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="w-full rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 border"
                style={{ borderColor: theme?.primary ? `${theme.primary}30` : "#e5e7eb" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: theme?.primary || "#6366f1", color: "#fff" }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
