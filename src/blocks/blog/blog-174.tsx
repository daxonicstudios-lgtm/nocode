import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Architecture of Attention", description: "How the greatest designers guide the eye without effort.", label: "Design", value: "15 min" },
  { title: "The Language of Space", description: "Whitespace as a fundamental building block of elegant interfaces.", label: "Theory", value: "9 min" },
  { title: "Materials and Memory", description: "Why texture in digital design evokes emotion and trust.", label: "Craft", value: "11 min" },
  { title: "Beyond the Screen", description: "Designing for the senses in an increasingly ambient world.", label: "Future", value: "7 min" },
];

export default function Blog174(props: BlockProps) {
  const { theme, heading = "Études", subheading = "Explorations in Design", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#f7f5f0", color: theme?.foreground ?? "#1a1814" }} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-40 mb-3" style={{ fontFamily: "Georgia, serif" }}>{subheading}</p>
          <h2 className="text-4xl sm:text-5xl font-light italic" style={{ fontFamily: "Georgia, serif" }}>{heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14">
          {items.slice(0, 4).map((item, i) => (
            <a key={i} href={buttonUrl} className="group block">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40" style={{ fontFamily: "Georgia, serif" }}>{item.label}</span>
              <h3 className="mt-2 text-xl font-light leading-snug group-hover:opacity-70 transition-opacity" style={{ fontFamily: "Georgia, serif" }}>{item.title}</h3>
              <p className="mt-2 text-sm opacity-40 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>{item.description}</p>
              <span className="flex items-center gap-1 mt-3 text-[10px] opacity-30"><Clock className="w-3 h-3" />{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
