import type { BlockProps } from "@/blocks/types";
import { Sparkles, Layers, Wand2, Shapes } from "lucide-react";

const icons = [Sparkles, Layers, Wand2, Shapes];

export default function Features334(props: BlockProps) {
  const {
    theme,
    heading = "Layered Creativity",
    subheading = "Overlapping elements create visual depth",
    items = [
      { title: "Generative Art", description: "AI creates unique visuals for every page you publish." },
      { title: "Depth Effects", description: "Parallax scrolling and layered compositions add dimension." },
      { title: "Magic Resize", description: "Designs adapt automatically to any screen or format." },
      { title: "Shape Library", description: "Hundreds of organic shapes and geometric patterns to choose from." },
    ],
  } = props;

  const primary = theme?.primary || "#8b5cf6";
  const accent = theme?.accent || "#ec4899";

  return (
    <section style={{ backgroundColor: theme?.background || "#18181b", color: theme?.foreground || "#fafafa" }} className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-black mb-2">{heading}</h2>
        <p className="opacity-50 mb-14">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full rounded-2xl opacity-20" style={{ backgroundColor: accent }} />
                <div className="absolute -top-1 -left-1 w-full h-full rounded-2xl opacity-15" style={{ backgroundColor: primary }} />
                <div className="relative rounded-2xl p-8 text-left" style={{ backgroundColor: theme?.background || "#18181b", border: `1px solid ${primary}30` }}>
                  <Icon size={28} style={{ color: primary }} className="mb-4" />
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
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
