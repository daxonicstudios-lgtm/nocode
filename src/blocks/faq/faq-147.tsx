import type { BlockProps } from "@/blocks/types";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { title: "How does the AI work?", description: "Our AI analyzes your description and assembles matching components into a complete website." },
  { title: "Can I edit after AI builds it?", description: "Yes, every element is fully customizable in our editor." },
  { title: "What industries do you support?", description: "50+ industries including restaurants, salons, SaaS, e-commerce, and more." },
  { title: "Money-back guarantee?", description: "Yes, 30-day money-back guarantee on all paid plans." },
];

export default function Faq147(props: BlockProps) {
  const { theme, heading = "Dark-themed FAQ section", items = DEFAULT_ITEMS } = props;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-12">{heading}</h2>
        <div className="space-y-3">
          {items.slice(0, 6).map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left text-white">
                <span className="font-medium">{faq.title}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm opacity-60">{faq.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
