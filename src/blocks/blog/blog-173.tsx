import type { BlockProps } from "@/blocks/types";
import { Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Quiet Revolution in Typography", description: "Variable fonts, optical sizing, and the new golden age of type on screen.", label: "Typography", value: "Spring 2026" },
  { title: "Designing for Permanence", description: "In a disposable digital world, building things that last requires courage and conviction.", label: "Philosophy", value: "Winter 2025" },
];

export default function Blog173(props: BlockProps) {
  const { theme, heading = "Selected Writings", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#1c1917", color: theme?.foreground ?? "#d6d3d1" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-20 text-center" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        {items.slice(0, 2).map((item, i) => (
          <a key={i} href={buttonUrl} className="block py-12 border-t group" style={{ borderColor: "rgba(214,211,209,0.15)" }}>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Bookmark className="w-3 h-3 opacity-30" />
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light leading-snug group-hover:opacity-80 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
                <p className="mt-4 text-sm opacity-40 leading-loose max-w-lg" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              </div>
              <span className="text-xs opacity-30 shrink-0 pt-1" style={{ fontFamily: "Georgia, serif" }}>{item.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
