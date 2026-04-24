import type { BlockProps } from "@/blocks/types";
import { useState } from "react";

export default function Pricing129(props: BlockProps) {
  const { theme, heading = "Pay as you go", subheading = "Only pay for what you use. No surprises.", buttonText = "Get Started" } = props;
  const [quantity, setQuantity] = useState(1000);

  const unitPrice = 0.005;
  const total = (quantity * unitPrice).toFixed(2);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-10 rounded-2xl p-8" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
          <label className="text-sm font-medium opacity-60">Monthly usage</label>
          <input
            type="range"
            min={100}
            max={100000}
            step={100}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full mt-3 accent-indigo-500"
          />
          <div className="flex justify-between text-xs opacity-40 mt-1">
            <span>100</span><span>100,000</span>
          </div>
          <div className="mt-6">
            <span className="text-sm opacity-60">{quantity.toLocaleString()} requests/mo</span>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black" style={{ color: theme?.primary }}>${total}</span>
              <span className="text-sm opacity-50">/mo</span>
            </div>
            <p className="text-xs opacity-40 mt-2">${unitPrice} per request</p>
          </div>
          <a href="#" className="mt-6 inline-block px-8 py-3 rounded-xl font-bold text-white text-sm" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
