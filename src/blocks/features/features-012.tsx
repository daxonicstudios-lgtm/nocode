import type { BlockProps } from "@/blocks/types";
import { Layers, Grid3X3, PenTool, Cpu } from "lucide-react";

const iconMap = [Layers, Grid3X3, PenTool, Cpu];

const defaults = [
  { title: "Modular Design", description: "Swap components without breaking your layout." },
  { title: "Pixel Grid System", description: "Align everything with mathematical precision." },
  { title: "Vector Editing", description: "Edit shapes and paths directly in the browser." },
  { title: "Smart Processing", description: "AI handles repetitive design tasks for you." },
];

export default function Features012(props: BlockProps) {
  const {
    theme,
    heading = "Geometric Precision",
    subheading = "Every element is intentionally placed",
    items = defaults,
  } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
          <p className="text-lg opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[i % iconMap.length];
            return (
              <div key={i} className="p-6">
                <div
                  className="w-16 h-16 flex items-center justify-center mb-5 border-2"
                  style={{ borderColor: theme?.primary || "#6366f1", color: theme?.primary || "#6366f1" }}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
