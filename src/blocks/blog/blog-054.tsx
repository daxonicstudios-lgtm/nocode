import type { BlockProps } from "@/blocks/types";
import { SlidersHorizontal } from "lucide-react";

const FILTERS = ["Recent", "Popular", "Editors Pick", "Archived"];
const DEFAULT_ITEMS = [
  { title: "Designing for Low Bandwidth", description: "Creating delightful experiences even on 2G networks.", label: "Popular" },
  { title: "The Future of No-Code Tools", description: "Predictions from industry leaders for 2027 and beyond.", label: "Editors Pick" },
  { title: "Setting Up Your First Project", description: "A walkthrough of project creation and configuration.", label: "Recent" },
];

export default function Blog054(props: BlockProps) {
  const { theme, heading = "Blog & Updates", items = DEFAULT_ITEMS, buttonText = "Load More" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <SlidersHorizontal className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
          <h2 className="text-2xl sm:text-3xl font-bold flex-1">{heading}</h2>
        </div>
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {FILTERS.map((f, i) => (
            <span key={i} className="shrink-0 px-5 py-2 text-xs font-semibold rounded-full whitespace-nowrap" style={{ backgroundColor: i === 0 ? (theme?.primary ?? "#6366f1") : (theme?.secondary ?? "#f1f5f9"), color: i === 0 ? "#fff" : theme?.foreground }}>{f}</span>
          ))}
        </div>
        <div className="space-y-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-full sm:w-40 h-32 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-lg">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="px-6 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
