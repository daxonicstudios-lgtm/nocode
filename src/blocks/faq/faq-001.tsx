"use client";
import { useState } from "react";
import type { BlockProps } from "@/blocks/types";
import { ChevronDown } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Can I use my own domain?", description: "Yes. Connect any domain you already own in a few clicks, or buy one through us." },
  { title: "Do I need to know how to code?", description: "Not at all. The AI does the heavy lifting and the editor is drag-and-drop." },
  { title: "What happens if I cancel?", description: "Your site stays live for 30 days after cancellation. You can export everything." },
  { title: "Is there a free trial?", description: "Yes — 14 days, no credit card needed." },
];

export default function Faq001(props: BlockProps) {
  const { theme, heading = "Frequently asked questions", items = DEFAULT_ITEMS } = props;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="space-y-3">
          {items.map((q, i) => (
            <div key={i} className="border rounded-xl" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-medium text-sm sm:text-base">{q.title}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-4 text-sm opacity-75 leading-relaxed">{q.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
