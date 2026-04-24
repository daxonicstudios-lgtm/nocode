import type { BlockProps } from "@/blocks/types";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, step: "01", phase: "Discovery" },
  { icon: PenTool, step: "02", phase: "Design" },
  { icon: Code2, step: "03", phase: "Build" },
  { icon: Rocket, step: "04", phase: "Launch" },
];

export default function Features339(props: BlockProps) {
  const {
    theme,
    heading = "Our Process",
    subheading = "A proven workflow from concept to launch",
    items = [
      { title: "Research & Strategy", description: "Deep dive into your market, audience, and goals to define the creative brief." },
      { title: "Concept & Design", description: "Wireframes, prototypes, and visual designs refined through collaborative review." },
      { title: "Development", description: "Clean, performant code that brings approved designs to life pixel by pixel." },
      { title: "Deploy & Iterate", description: "Launch with confidence, then optimize based on real user feedback and data." },
    ],
  } = props;

  const primary = theme?.primary || "#6366f1";

  return (
    <section style={{ backgroundColor: theme?.background || "#111", color: theme?.foreground || "#fafafa" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-2">{heading}</h2>
        <p className="opacity-40 text-center mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const s = steps[i % steps.length];
            const Icon = s.icon;
            return (
              <div key={i} className="relative">
                <span className="text-6xl font-black opacity-5 absolute -top-4 -left-1">{s.step}</span>
                <div className="relative pt-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${primary}20`, color: primary }}>
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: primary }}>{s.phase}</span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-40 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
