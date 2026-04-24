import type { BlockProps } from "@/blocks/types";
import { Zap, ExternalLink } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "SHIP OR DIE", description: "The startup mantra taken to its logical extreme. Thoughts on velocity.", label: "EDITORIAL", value: "01" },
  { title: "CSS GRID SOLVES EVERYTHING", description: "Almost. A practical guide to modern layout without hacks.", label: "TUTORIAL", value: "02" },
  { title: "YOUR STARTUP NEEDS A BLOG", description: "Content marketing is not dead. You are just doing it wrong.", label: "STRATEGY", value: "03" },
];

export default function Blog170(props: BlockProps) {
  const { theme, heading = "RAW", subheading = "NO FILTER. NO POLISH.", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground ?? "#000" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-4 border-current p-6 sm:p-10 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-6 h-6" style={{ color: theme?.primary ?? "#ff0000" }} />
            <h2 className="text-4xl sm:text-6xl font-black uppercase" style={{ fontFamily: "monospace" }}>{heading}</h2>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-60" style={{ fontFamily: "monospace" }}>{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="border-2 border-current p-6 group block relative">
              <span className="absolute top-2 right-2 text-5xl font-black opacity-10" style={{ fontFamily: "monospace" }}>{item.value}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-current pb-0.5 inline-block mb-3" style={{ fontFamily: "monospace" }}>{item.label}</span>
              <h3 className="text-lg font-black uppercase leading-tight" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="mt-2 text-xs opacity-60" style={{ fontFamily: "monospace" }}>{item.description}</p>
              <ExternalLink className="w-4 h-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
