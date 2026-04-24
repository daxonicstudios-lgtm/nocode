import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "NO MORE FRAMEWORKS", description: "What happens when you build with vanilla everything.", label: "2026.04.18", value: "EXPERIMENT" },
  { title: "ACCESSIBILITY AS REBELLION", description: "The most radical thing you can do is make your site usable.", label: "2026.04.12", value: "ESSAY" },
];

export default function Blog164(props: BlockProps) {
  const { theme, heading = "ZINE", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#ff6600", color: theme?.foreground ?? "#000000" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-16 -rotate-2" style={{ fontFamily: "monospace" }}>{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.slice(0, 2).map((item, i) => (
            <a key={i} href={buttonUrl} className="border-4 border-current p-8 group block hover:bg-black hover:text-white transition-colors">
              <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ fontFamily: "monospace" }}>{item.value}</span>
              <h3 className="mt-4 text-3xl sm:text-4xl font-black uppercase leading-none" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="mt-3 text-sm" style={{ fontFamily: "monospace" }}>{item.description}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs" style={{ fontFamily: "monospace" }}>{item.label}</span>
                <MoveRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
