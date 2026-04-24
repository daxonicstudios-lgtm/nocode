"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

const PLANS = ["Starter", "Pro", "Business"];
const FEATURES = [
  { name: "Projects", values: ["1", "Unlimited", "Unlimited"] },
  { name: "Storage", values: ["500MB", "100GB", "1TB"] },
  { name: "Team seats", values: ["1", "10", "Unlimited"] },
  { name: "Support", values: ["Community", "Priority", "Dedicated"] },
];

export default function Comparison003(props: BlockProps) {
  const { theme, heading = "Compare plans" } = props;
  const [active, setActive] = useState(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-8">{heading}</h2>
        <div className="flex justify-center gap-2 mb-8">
          {PLANS.map((p, i) => (
            <button key={p} onClick={() => setActive(i)} className={`px-4 py-2 rounded-full text-sm ${active === i ? "text-white" : ""}`} style={{ backgroundColor: active === i ? theme?.primary ?? "#000" : theme?.secondary ?? "#f3f4f6" }}>
              {p}
            </button>
          ))}
        </div>
        <div className="divide-y rounded-2xl border overflow-hidden" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {FEATURES.map((f) => (
            <div key={f.name} className="grid grid-cols-2 p-4 text-sm">
              <span className="opacity-70">{f.name}</span>
              <span className="font-semibold">{f.values[active]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
