import type { BlockProps } from "@/blocks/types";
import { Diamond } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Palette of Seasons", description: "Drawing inspiration from nature's shifting color stories throughout the year.", label: "Color", value: "8 min read" },
  { title: "Proportion and Harmony", description: "The golden ratio applied to digital layouts and spacing systems.", label: "Geometry", value: "6 min read" },
  { title: "Wabi-Sabi in Interface Design", description: "Finding beauty in imperfection and incompleteness.", label: "Aesthetic", value: "10 min read" },
];

export default function Blog176(props: BlockProps) {
  const { theme, heading = "Maison", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f0ece3", color: theme?.foreground ?? "#2d2926" }} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-20">
          <div className="w-12 h-px" style={{ backgroundColor: theme?.foreground ?? "#2d2926", opacity: 0.2 }} />
          <Diamond className="w-4 h-4 opacity-30" />
          <h2 className="text-3xl sm:text-4xl font-light italic" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
          <Diamond className="w-4 h-4 opacity-30" />
          <div className="w-12 h-px" style={{ backgroundColor: theme?.foreground ?? "#2d2926", opacity: 0.2 }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.slice(0, 3).map((item, i) => (
            <a key={i} href={buttonUrl} className="group text-center block">
              <div className="aspect-square rounded-sm mb-6" style={{ backgroundColor: theme?.secondary ?? "#ddd5c8" }} />
              <span className="text-[10px] uppercase tracking-[0.4em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
              <h3 className="mt-2 text-lg font-light leading-snug group-hover:opacity-70 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-2 text-xs opacity-40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              <span className="text-[10px] opacity-30 mt-3 inline-block" style={{ fontFamily: "Georgia, serif" }}>{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
