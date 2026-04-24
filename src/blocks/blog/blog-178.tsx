import type { BlockProps } from "@/blocks/types";
import { ChevronRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Heritage and Innovation", description: "Bridging tradition with technology in modern brand experiences.", label: "Brand", value: "I" },
  { title: "The Weight of Words", description: "Microcopy that elevates an interface from functional to delightful.", label: "Writing", value: "II" },
  { title: "Silence as Design", description: "Negative space, pauses, and the power of what you leave unsaid.", label: "Space", value: "III" },
  { title: "Timeless Over Trendy", description: "Why enduring design principles outlast every passing aesthetic.", label: "Principles", value: "IV" },
];

export default function Blog178(props: BlockProps) {
  const { theme, heading = "Gazette", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f8f6f1", color: theme?.foreground ?? "#1c1916" }} className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="border-b-2 pb-4 mb-16" style={{ borderColor: theme?.foreground ?? "#1c1916" }}>
          <h2 className="text-4xl sm:text-5xl font-light text-center" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group flex gap-4 items-start block">
              <span className="text-3xl font-light opacity-20 shrink-0 pt-1" style={{ fontFamily: "Georgia, serif" }}>{item.value}</span>
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
                <h3 className="mt-1 text-lg font-light leading-snug" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="mt-1 text-xs opacity-40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
                <span className="inline-flex items-center gap-0.5 mt-2 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-60 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>
                  Read <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
