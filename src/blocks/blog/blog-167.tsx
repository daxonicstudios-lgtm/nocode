import type { BlockProps } from "@/blocks/types";
import { Minus } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "THE WEIGHT OF JAVASCRIPT", description: "Every kilobyte has a cost. Are you sure you need that library?", label: "ISSUE 12", value: "5 MIN" },
  { title: "FORMS ARE HARD", description: "After 30 years of the web, we still cannot make a good form.", label: "ISSUE 11", value: "8 MIN" },
  { title: "DEATH OF THE HOMEPAGE", description: "Social media killed the homepage. What comes next?", label: "ISSUE 10", value: "6 MIN" },
];

export default function Blog167(props: BlockProps) {
  const { theme, heading = "WEEKLY DUMP", subheading = "UNFILTERED TAKES ON WEB DEV", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section style={{ backgroundColor: theme?.background ?? "#ffffff", color: theme?.foreground ?? "#000" }} className="px-5 py-20 border-y-4 border-current">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black uppercase" style={{ fontFamily: "monospace" }}>{heading}</h2>
        <p className="text-xs uppercase tracking-[0.2em] mt-2 mb-10 opacity-50" style={{ fontFamily: "monospace" }}>{subheading}</p>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="flex gap-4 py-6 border-t-2 border-current group items-start">
            <Minus className="w-5 h-5 mt-1 shrink-0" style={{ color: theme?.primary ?? "#ff0000" }} />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase" style={{ fontFamily: "monospace" }}>
                <span style={{ color: theme?.primary ?? "#ff0000" }}>{item.label}</span>
                <span className="opacity-40">{item.value}</span>
              </div>
              <h3 className="mt-2 text-lg font-black uppercase group-hover:underline decoration-2" style={{ fontFamily: "monospace" }}>{item.title}</h3>
              <p className="mt-1 text-sm opacity-60" style={{ fontFamily: "monospace" }}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
