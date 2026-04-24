"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";

const CATEGORIES = ["All", "Branding", "Web", "Product"];
const DEFAULT_ITEMS = [
  { title: "Helio Rebrand", label: "Branding" },
  { title: "Kite E-commerce", label: "Web" },
  { title: "Aster Banking App", label: "Product" },
  { title: "Otter Health Site", label: "Web" },
  { title: "Sonder Identity", label: "Branding" },
  { title: "Pilot Dashboard", label: "Product" },
];

export default function Portfolio002(props: BlockProps) {
  const { theme, heading = "Work", items = DEFAULT_ITEMS } = props;
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? items : items.filter((i) => i.label === filter);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <div className="flex gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm ${filter === c ? "text-white" : ""}`} style={{ backgroundColor: filter === c ? theme?.primary ?? "#000" : theme?.secondary ?? "#f3f4f6" }}>
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.slice(0, 6).map((p, i) => (
            <article key={i} className="group">
              <div className="aspect-square rounded-xl transition-transform group-hover:scale-[0.98]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <p className="mt-3 text-sm font-semibold">{p.title}</p>
              <p className="text-xs opacity-60">{String(p.label)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
