import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "On the Value of Restraint", description: "The most powerful design decisions are often about what you choose not to do.", label: "No. 24", value: "Essay" },
  { title: "The Anatomy of Elegance", description: "Dissecting what makes certain interfaces feel effortlessly refined.", label: "No. 23", value: "Analysis" },
  { title: "Curating the Digital Experience", description: "Every touchpoint is an opportunity to demonstrate care and attention.", label: "No. 22", value: "Insight" },
];

export default function Blog175(props: BlockProps) {
  const { theme, heading = "Correspondence", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#0d0d0d", color: theme?.foreground ?? "#c9b99a" }} className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-light tracking-tight mb-2" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        <div className="w-16 h-px mb-20" style={{ backgroundColor: theme?.primary ?? "#c9b99a" }} />
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="flex items-start gap-6 py-10 border-b group" style={{ borderColor: "rgba(201,185,154,0.15)" }}>
            <span className="text-xs tracking-[0.2em] opacity-30 shrink-0 pt-2" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.value}</span>
              <h3 className="mt-1 text-xl sm:text-2xl font-light" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity shrink-0 mt-2" />
          </a>
        ))}
      </div>
    </section>
  );
}
