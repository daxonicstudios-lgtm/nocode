import type { BlockProps } from "@/blocks/types";
import { X } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "DIGITAL MINIMALISM", description: "Stripping websites to their core function.", label: "APR 2026", value: "LONG READ" },
  { title: "THE MARKUP MATTERS", description: "Semantic HTML as a design decision, not an afterthought.", label: "MAR 2026", value: "TECHNICAL" },
  { title: "WEB FONTS ARE BLOAT", description: "A case for system fonts and raw performance.", label: "FEB 2026", value: "HOT TAKE" },
];

export default function Blog163(props: BlockProps) {
  const { theme, heading = "TRANSMISSIONS", subheading = "RAW THOUGHTS ON BUILDING FOR THE WEB", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#000000", color: theme?.foreground ?? "#00ff00" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-1" style={{ fontFamily: "monospace" }}>{heading}</h2>
        <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-12" style={{ fontFamily: "monospace" }}>{subheading}</p>
        <div className="space-y-4">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="border-2 p-5" style={{ borderColor: theme?.primary ?? "#00ff00" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs tracking-widest" style={{ fontFamily: "monospace", color: theme?.primary ?? "#00ff00" }}>{item.value}</span>
                <span className="text-xs opacity-40" style={{ fontFamily: "monospace" }}>{item.label}</span>
              </div>
              <h3 className="text-xl font-black uppercase" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="text-sm opacity-70 mt-2" style={{ fontFamily: "monospace" }}>{item.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs uppercase tracking-wider opacity-60 cursor-pointer" style={{ fontFamily: "monospace" }}>
                <X className="w-3 h-3" /> CONTINUE READING
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
