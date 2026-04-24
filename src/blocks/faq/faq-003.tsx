"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { Plus, Minus } from "lucide-react";

const CATEGORIES = ["Getting started", "Billing", "Security"];
const DEFAULT_ITEMS = [
  { title: "How do I sign up?", description: "Click 'Get Started' and enter your email. That's it.", label: "Getting started" },
  { title: "What payment methods do you accept?", description: "Cards, bank transfers, Apple Pay, Google Pay, and mobile money in 40+ countries.", label: "Billing" },
  { title: "Where is my data stored?", description: "EU-based data centers by default, with regional options available.", label: "Security" },
];

export default function Faq003(props: BlockProps) {
  const { theme, heading = "FAQ", items = DEFAULT_ITEMS } = props;
  const [openId, setOpenId] = useState<number>(0);
  const [cat, setCat] = useState(CATEGORIES[0]);

  const filtered = items.filter((q) => q.label === cat || !q.label);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <aside>
          <h2 className="text-2xl font-semibold mb-6">{heading}</h2>
          <nav className="flex md:flex-col gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`text-sm text-left px-3 py-2 rounded-md whitespace-nowrap ${cat === c ? "font-semibold" : "opacity-60"}`} style={{ backgroundColor: cat === c ? theme?.secondary ?? "#f3f4f6" : "transparent" }}>
                {c}
              </button>
            ))}
          </nav>
        </aside>
        <div className="md:col-span-3 space-y-2">
          {filtered.map((q, i) => (
            <div key={i} className="border-b py-4" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <button onClick={() => setOpenId(openId === i ? -1 : i)} className="w-full flex items-center justify-between text-left">
                <span className="font-medium">{q.title}</span>
                {openId === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
              {openId === i && <p className="mt-3 text-sm opacity-75">{q.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
