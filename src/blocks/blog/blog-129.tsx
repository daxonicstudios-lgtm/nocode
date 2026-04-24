import type { BlockProps } from "@/blocks/types";
import { Search, ArrowRight, Calendar } from "lucide-react";

const MONTHS = ["April 2026", "March 2026", "February 2026"];

const DEFAULT_ITEMS = [
  { title: "Modern Authentication Patterns", description: "Passwordless, passkeys, and magic links compared.", label: "Security", value: "Apr 20" },
  { title: "CSS Scroll-Driven Animations", description: "Creating parallax and reveal effects with pure CSS.", label: "Frontend", value: "Apr 15" },
  { title: "Building a CLI Tool in Go", description: "From cobra setup to homebrew distribution in one afternoon.", label: "Backend", value: "Apr 10" },
];

export default function Blog129(props: BlockProps) {
  const { theme, heading = "Blog Timeline", items = DEFAULT_ITEMS, buttonUrl = "#" } = props;

  return (
    <section className="px-5 py-20" style={{ backgroundColor: theme?.background ?? "#fafaf9", color: theme?.foreground ?? "#292524" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-30" />
            <input type="text" placeholder="Search timeline..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm outline-none" style={{ borderColor: `${theme?.foreground ?? "#292524"}12`, color: theme?.foreground ?? "#292524" }} />
          </div>
        </div>
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          <Calendar className="w-4 h-4 mt-1 opacity-30 flex-shrink-0" />
          {MONTHS.map((m, i) => (
            <button key={m} className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${i === 0 ? "text-white" : "opacity-50"}`} style={i === 0 ? { backgroundColor: theme?.primary ?? "#6366f1" } : {}}>
              {m}
            </button>
          ))}
        </div>
        {items.slice(0, 3).map((item, i) => (
          <a key={i} href={buttonUrl} className="group flex items-center gap-4 py-5 border-b" style={{ borderColor: `${theme?.foreground ?? "#292524"}08` }}>
            <span className="text-xs font-mono opacity-30 w-16 flex-shrink-0">{String(item.value)}</span>
            <div className="flex-1">
              <span className="text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{String(item.label)}</span>
              <h3 className="font-bold group-hover:underline">{item.title}</h3>
              <p className="text-sm opacity-50 mt-0.5">{item.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 opacity-20 group-hover:opacity-60 flex-shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
