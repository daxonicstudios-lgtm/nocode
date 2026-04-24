import type { BlockProps } from "@/blocks/types";
import { Star } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Pro Gaming Mouse", description: "$79.99", label: "4.9" },
  { title: "Mechanical Keyboard", description: "$129.99", label: "4.8" },
  { title: "RGB Mousepad", description: "$39.99", label: "4.7" },
  { title: "Gaming Headset", description: "$99.99", label: "4.8" },
];
export default function EcomGrids153(props: BlockProps) {
  const { theme, heading = "Dark product grid with ratings", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 8).map((p, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="aspect-square" style={{ backgroundColor: "rgba(255,255,255,0.03)" }} />
              <div className="p-4">
                <h3 className="font-medium text-sm text-white">{p.title}</h3>
                <div className="flex items-center gap-1 mt-1"><Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /><span className="text-xs opacity-50">{String(p.label ?? "")}</span></div>
                <p className="font-bold mt-2 text-white">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
