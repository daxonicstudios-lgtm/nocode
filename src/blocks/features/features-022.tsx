import type { BlockProps } from "@/blocks/types";
import { Cpu, Cloud, Lock, Rocket } from "lucide-react";

const iconMap = [Cpu, Cloud, Lock, Rocket];

const defaults = [
  { title: "AI-Powered Insights", description: "Leverage machine learning to predict trends and optimize outcomes." },
  { title: "Cloud Native", description: "Fully managed infrastructure with automatic scaling and zero downtime." },
  { title: "Zero Trust Security", description: "Every request is authenticated and authorized by default." },
  { title: "Rapid Deployment", description: "Go from code to production in minutes, not weeks." },
];

export default function Features022(props: BlockProps) {
  const {
    theme,
    heading = "Platform Capabilities",
    subheading = "Four pillars that power modern digital teams.",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.slice(0, 4).map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="p-6 rounded-lg border-l-4"
                style={{ borderColor: theme?.primary ?? "#3b82f6", backgroundColor: theme?.background ? `${theme.background}` : undefined }}
              >
                <Icon size={28} className="mb-4" style={{ color: theme?.primary }} />
                <h3 className="text-base font-bold mb-2">{item.title ?? defaults[i]?.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description ?? defaults[i]?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
