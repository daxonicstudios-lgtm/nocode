import type { BlockProps } from "@/blocks/types";
import { Asterisk } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "MICROSERVICES CONSIDERED HARMFUL", description: "When a monolith is the right choice.", label: "2026-04-22" },
  { title: "WRITE LESS CODE", description: "The best code is the code you never wrote.", label: "2026-04-17" },
  { title: "NAMING IS HARD (STILL)", description: "A love letter to descriptive variable names.", label: "2026-04-09" },
];

export default function Blog169(props: BlockProps) {
  const { theme, heading = "OUTPUT", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#000", color: theme?.foreground ?? "#fff" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-8xl font-black uppercase mb-16 border-b-4 pb-4" style={{ fontFamily: "monospace", borderColor: theme?.primary ?? "#ff3366" }}>{heading}</h2>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="block py-8 border-b border-gray-800 group">
            <div className="flex items-center gap-2 mb-2">
              <Asterisk className="w-4 h-4" style={{ color: theme?.primary ?? "#ff3366" }} />
              <span className="text-xs uppercase tracking-widest opacity-40" style={{ fontFamily: "monospace" }}>{item.label}</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase group-hover:line-through" style={{ fontFamily: "monospace" }}>{item.title}</h3>
            <p className="mt-2 text-sm opacity-50 max-w-xl" style={{ fontFamily: "monospace" }}>{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
