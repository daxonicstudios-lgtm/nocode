import type { BlockProps } from "@/blocks/types";
import { Heart, ShoppingBag } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Wireless Headphones", description: "$89.99", label: "4.8" },
  { title: "Smart Watch", description: "$199.99", label: "4.6" },
  { title: "Bluetooth Speaker", description: "$49.99", label: "4.9" },
  { title: "Power Bank", description: "$29.99", label: "4.7" },
];
export default function EcomGrids087(props: BlockProps) {
  const { theme, heading = "Product cards with actions", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 8).map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-square relative" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"><Heart className="w-4 h-4" /></button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm">{p.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold" style={{ color: theme?.primary }}>{p.description}</span>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><ShoppingBag className="w-4 h-4 text-white" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
