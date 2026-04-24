import type { BlockProps } from "@/blocks/types";
import { SquareAsterisk } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "AGAINST BEST PRACTICES", description: "Sometimes the best practice is to ignore all best practices.", label: "RANT", value: "04.20" },
  { title: "PIXEL PERFECT IS A LIE", description: "Embrace the fluidity of the web instead of fighting it.", label: "TRUTH", value: "04.15" },
  { title: "DARK MODE IS NOT A FEATURE", description: "It is the default. Light mode is the feature.", label: "DEBATE", value: "04.08" },
];

export default function Blog166(props: BlockProps) {
  const { theme, heading = "BROADSIDE", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#fffdd0", color: theme?.foreground ?? "#000" }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-y-8 border-current py-6 mb-12">
          <h2 className="text-5xl sm:text-7xl font-black uppercase text-center" style={{ fontFamily: "monospace" }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="block border-2 border-current p-5 hover:bg-current group transition-colors">
              <div className="group-hover:invert">
                <div className="flex items-center justify-between mb-3">
                  <SquareAsterisk className="w-4 h-4" />
                  <span className="text-xs font-black" style={{ fontFamily: "monospace" }}>{item.value}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] border border-current px-2 py-0.5 inline-block" style={{ fontFamily: "monospace" }}>{item.label}</span>
                <h3 className="mt-3 text-lg font-black uppercase leading-tight" style={{ fontFamily: "monospace" }}>{item.title}</h3>
                <p className="mt-2 text-xs opacity-70" style={{ fontFamily: "monospace" }}>{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
