import type { BlockProps } from "@/blocks/types";
import { Feather } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Essence of Material", description: "Exploring texture, weight, and presence in digital interfaces.", label: "Essay", value: "12 min" },
  { title: "A Season of Refinement", description: "Our annual review of what stayed, what changed, and what we learned.", label: "Reflection", value: "8 min" },
  { title: "Conversations with Light", description: "How illumination and shadow define hierarchy in design.", label: "Study", value: "10 min" },
];

export default function Blog172(props: BlockProps) {
  const { theme, heading = "Atelier", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#faf8f5", color: theme?.foreground ?? "#2c2420" }} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Feather className="w-5 h-5 opacity-40" />
          <h2 className="text-4xl font-light italic" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <div className="aspect-[3/4] rounded-sm mb-6 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e8e2d8" }}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" style={{ backgroundColor: theme?.secondary ?? "#e8e2d8" }} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label} — {item.value}</span>
              <h3 className="mt-2 text-xl font-light leading-snug" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-50 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
