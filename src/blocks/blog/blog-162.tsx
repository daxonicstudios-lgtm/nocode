import type { BlockProps } from "@/blocks/types";
import { Hash } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "STOP USING ROUNDED CORNERS", description: "A manifesto for sharp edges in interface design.", label: "01", value: "MANIFESTO" },
  { title: "BRUTALISM IS NOT UGLY", description: "Reclaiming raw aesthetics as intentional design language.", label: "02", value: "ESSAY" },
  { title: "TYPE IS ALL YOU NEED", description: "When typography becomes the entire visual system.", label: "03", value: "GUIDE" },
  { title: "THE OVERHEAD OF POLISH", description: "What we lose when every surface is smoothed and rounded.", label: "04", value: "OPINION" },
];

export default function Blog162(props: BlockProps) {
  const { theme, heading = "DISPATCHES", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f5f5dc", color: theme?.foreground ?? "#1a1a1a" }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-7xl font-black uppercase mb-12" style={{ fontFamily: "monospace" }}>{heading}</h2>
        {items.slice(0, 4).map((item, i) => (
          <a key={i} href={buttonUrl} className="block border-b-2 border-current py-5 group">
            <div className="flex items-start gap-4">
              <span className="text-3xl font-black opacity-20" style={{ fontFamily: "monospace" }}>{item.label}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Hash className="w-3 h-3 opacity-40" />
                  <span className="text-xs font-black uppercase tracking-widest opacity-60" style={{ fontFamily: "monospace" }}>{item.value}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase mt-1 group-hover:underline decoration-4" style={{ fontFamily: "monospace" }}>{item.title}</h3>
                <p className="text-sm opacity-60 mt-1" style={{ fontFamily: "monospace" }}>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
