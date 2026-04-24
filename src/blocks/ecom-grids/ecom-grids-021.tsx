import type { BlockProps } from "@/blocks/types";
import { ShoppingCart } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Classic T-Shirt", description: "$29.99", label: "New" },
  { title: "Slim Fit Jeans", description: "$59.99", label: "Sale" },
  { title: "Canvas Sneakers", description: "$44.99", label: "" },
  { title: "Leather Belt", description: "$24.99", label: "Best Seller" },
  { title: "Cotton Hoodie", description: "$49.99", label: "" },
  { title: "Aviator Sunglasses", description: "$34.99", label: "New" },
];
export default function EcomGrids021(props: BlockProps) {
  const { theme, heading = "Standard product grid", subheading = "Browse our collection", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div><h2 className="text-3xl font-bold">{heading}</h2><p className="mt-2 opacity-60">{subheading}</p></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 6).map((p, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] rounded-xl relative" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                {String(p.label ?? "") && <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{String(p.label ?? "")}</span>}
              </div>
              <h3 className="mt-3 font-medium text-sm">{p.title}</h3>
              <p className="text-sm font-bold mt-1" style={{ color: theme?.primary }}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
