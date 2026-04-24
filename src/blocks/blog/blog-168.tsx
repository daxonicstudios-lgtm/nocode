import type { BlockProps } from "@/blocks/types";
import { Crosshair } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "WE DELETED OUR CSS FRAMEWORK", description: "And our site got 40% faster overnight.", label: "PERFORMANCE" },
  { title: "THE ICON PROBLEM", description: "You do not need 4,000 icons. You need 40 good ones.", label: "DESIGN" },
  { title: "MEETINGS ARE BUGS", description: "Treat unnecessary meetings like you treat bugs in production.", label: "CULTURE" },
  { title: "TABLES ARE UNDERRATED", description: "HTML tables for tabular data. Revolutionary concept.", label: "HTML" },
];

export default function Blog168(props: BlockProps) {
  const { theme, heading = "FEED", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#ccff00", color: theme?.foreground ?? "#000" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Crosshair className="w-8 h-8" />
          <h2 className="text-4xl font-black uppercase" style={{ fontFamily: "monospace" }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="border-2 border-current p-6 hover:bg-black hover:text-white transition-colors group block -mt-0.5 sm:-ml-0.5 first:mt-0 first:ml-0">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] underline decoration-2" style={{ fontFamily: "monospace" }}>{item.label}</span>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-70" style={{ fontFamily: "monospace" }}>{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
