import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "BREAK THE GRID", description: "Why conventional layouts are holding your creativity hostage.", label: "OPINION", value: "2026-04-20" },
  { title: "RAW CSS IS BACK", description: "The return to hand-crafted styles in a utility-first world.", label: "TECH", value: "2026-04-15" },
  { title: "DESIGNING IN PUBLIC", description: "Open-source design processes and what we learned shipping live.", label: "PROCESS", value: "2026-04-10" },
];

export default function Blog161(props: BlockProps) {
  const { theme, heading = "THE BLOG", items = DEFAULT_ITEMS, buttonText = "READ", buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#000000" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight border-b-4 border-current pb-4 mb-12" style={{ fontFamily: "monospace" }}>{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {items.slice(0, 3).map((item, i) => (
            <article key={i} className="border-4 border-current p-6 -mt-1 md:mt-0 md:-ml-1 first:mt-0 first:ml-0">
              <span className="text-xs font-black uppercase tracking-widest" style={{ fontFamily: "monospace", color: theme?.primary ?? "#ff0000" }}>{item.label}</span>
              <h3 className="mt-3 text-xl font-black uppercase leading-tight" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-70" style={{ fontFamily: "monospace" }}>{item.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs opacity-40" style={{ fontFamily: "monospace" }}>{item.value}</span>
                <a href={buttonUrl} className="flex items-center gap-1 text-xs font-black uppercase" style={{ fontFamily: "monospace" }}>
                  {buttonText} <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
