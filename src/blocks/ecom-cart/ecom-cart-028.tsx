import type { BlockProps } from "@/blocks/types";
import { Minus, Plus, X } from "lucide-react";
const DEFAULT_ITEMS = [
  { title: "Premium T-Shirt", description: "$29.99", label: "1" },
  { title: "Slim Fit Jeans", description: "$59.99", label: "1" },
  { title: "Canvas Sneakers", description: "$44.99", label: "2" },
];
export default function EcomCart028(props: BlockProps) {
  const { theme, heading = "Shopping cart with summary", buttonText = "Checkout" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{heading}</h2>
        <div className="space-y-4">
          {DEFAULT_ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-16 h-16 rounded-lg shrink-0" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }} />
              <div className="flex-1">
                <h3 className="font-medium text-sm">{item.title}</h3>
                <p className="text-sm font-bold mt-1" style={{ color: theme?.primary }}>{item.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}><Minus className="w-3 h-3" /></button>
                <span className="text-sm font-medium w-6 text-center">{String(item.label ?? "")}</span>
                <button className="w-7 h-7 rounded border flex items-center justify-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}><Plus className="w-3 h-3" /></button>
              </div>
              <button className="opacity-30 hover:opacity-100"><X className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
          <div className="flex justify-between text-sm"><span className="opacity-60">Subtotal</span><span className="font-bold">$164.96</span></div>
          <div className="flex justify-between text-sm mt-2"><span className="opacity-60">Shipping</span><span className="font-bold">Free</span></div>
          <hr className="my-3" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} />
          <div className="flex justify-between"><span className="font-bold">Total</span><span className="text-xl font-black" style={{ color: theme?.primary }}>$164.96</span></div>
          <button className="w-full mt-4 py-3 rounded-xl font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
