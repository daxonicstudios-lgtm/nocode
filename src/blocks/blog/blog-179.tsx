import type { BlockProps } from "@/blocks/types";
import { Minus } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Lines and Shadows", description: "The interplay of geometry and light that gives depth to flat screens.", label: "Visual Arts", value: "Spring" },
  { title: "A Return to Roots", description: "Hand-drawn elements and organic shapes reclaim the digital canvas.", label: "Illustration", value: "Spring" },
  { title: "The Poetry of Interaction", description: "When micro-animations transcend function and become expression.", label: "Motion", value: "Spring" },
];

export default function Blog179(props: BlockProps) {
  const { theme, heading = "Editions", subheading = "Spring 2026 Collection", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#262220", color: theme?.foreground ?? "#c9bfb0" }} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 text-center mb-3" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
        <h2 className="text-4xl sm:text-5xl font-light text-center italic mb-20" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-8 border-t group block" style={{ borderColor: "rgba(201,191,176,0.12)" }}>
            <span className="text-xs uppercase tracking-[0.3em] opacity-30 sm:w-28 shrink-0" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
            <Minus className="hidden sm:block w-4 h-4 opacity-20 shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-light group-hover:opacity-70 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-1 text-sm opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
