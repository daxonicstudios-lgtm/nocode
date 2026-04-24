import type { BlockProps } from "@/blocks/types";
import { Trash2 } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Gaming Mouse", description: "$79.99", label: "1" },
  { title: "Keyboard", description: "$129.99", label: "1" },
];
export default function EcomCart088(props: BlockProps) {
  const { theme, heading = "Dark shopping cart", buttonText = "Proceed to Payment" } = props;
  return (
    <section className="px-4 py-20" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">{heading}</h2>
        <div className="space-y-3">
          {DEFAULT_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="w-14 h-14 rounded-lg shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
              <div className="flex-1"><h3 className="font-medium text-sm text-white">{item.title}</h3><p className="text-sm font-bold mt-1">{item.description}</p></div>
              <span className="text-sm opacity-40">Qty: {String(item.label ?? "")}</span>
              <Trash2 className="w-4 h-4 opacity-30" />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xl font-black text-white">$209.98</span>
          <button className="px-8 py-3 rounded-xl font-semibold text-sm bg-white" style={{ color: theme?.primary ?? "#0f172a" }}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
