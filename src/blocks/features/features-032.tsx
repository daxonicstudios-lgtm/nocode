import type { BlockProps } from "@/blocks/types";
import { Cpu, Globe, Lock, Rocket } from "lucide-react";

const iconMap = [Cpu, Globe, Lock, Rocket];

const defaultItems = [
  { title: "AI Processing", description: "Harness machine learning models that adapt to your workflow automatically." },
  { title: "Global Reach", description: "Deploy to 200+ edge locations worldwide for instant access everywhere." },
  { title: "Zero Trust Auth", description: "Multi-layer authentication that verifies every request, every time." },
  { title: "Instant Deploy", description: "Ship updates in seconds with our automated CI/CD pipeline." },
];

export default function Features032(props: BlockProps) {
  const {
    theme,
    heading = "Next-Gen Infrastructure",
    subheading = "Powerful tools designed for the future of the web",
    items = defaultItems,
  } = props;

  const accent = theme?.primary ?? "#22d3ee";

  return (
    <section className="py-16 px-4 sm:py-24" style={{ backgroundColor: theme?.background ?? "#0f172a", color: theme?.foreground ?? "#f1f5f9" }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
        <p className="text-lg opacity-60 mb-14 max-w-2xl mx-auto">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div
                key={i}
                className="rounded-xl p-6 text-left border border-white/10 hover:border-transparent transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${accent}22` }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-50 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
