import type { BlockProps } from "@/blocks/types";
import { Globe, Lock, Workflow, TrendingUp } from "lucide-react";

const iconMap = [Globe, Lock, Workflow, TrendingUp];

const defaults = [
  { title: "Global Reach", description: "Deploy to 40+ regions worldwide with a single click. Your content is served from the edge closest to your users." },
  { title: "Zero-Trust Security", description: "Every request is verified. Role-based access controls keep sensitive data locked down at every layer." },
  { title: "Automated Workflows", description: "Build custom pipelines that trigger on any event. Connect 200+ integrations without writing code." },
  { title: "Growth Insights", description: "Predictive analytics help you spot trends before your competitors. Make data-backed decisions faster." },
];

export default function Features014(props: BlockProps) {
  const {
    theme,
    heading = "Platform Capabilities",
    subheading = "Enterprise features, startup simplicity",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={i} className="relative p-8 rounded-xl overflow-hidden" style={{ border: `1px solid ${theme?.accent || "#e5e7eb"}` }}>
                <span
                  className="absolute top-2 right-4 text-8xl font-black opacity-5 select-none leading-none"
                  style={{ color: theme?.primary || "#3b82f6" }}
                >
                  {num}
                </span>
                <div className="relative z-10">
                  <Icon size={28} style={{ color: theme?.primary || "#3b82f6" }} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
