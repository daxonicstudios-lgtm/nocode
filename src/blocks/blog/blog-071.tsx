import type { BlockProps } from "@/blocks/types";
import { Newspaper } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Tech Giants Bet Big on African Markets", description: "A wave of investment is reshaping the continent's digital landscape. From fintech to edtech, global players are establishing local offices and partnerships.", label: "Lead Story" },
  { title: "Remote Work Reshapes City Centers", description: "Office vacancy rates hit record highs as companies adopt hybrid models.", label: "Business" },
  { title: "New Framework Challenges React Dominance", description: "A signals-based approach gains traction among frontend developers.", label: "Technology" },
  { title: "The Rise of AI-Powered Design Tools", description: "Automated layout generation is changing how designers work daily.", label: "Innovation" },
];

export default function Blog071(props: BlockProps) {
  const { theme, heading = "The Daily Brief", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Newspaper className="w-5 h-5" />
          <h2 className="text-2xl font-black uppercase tracking-tight">{heading}</h2>
        </div>
        <div className="h-px mb-8" style={{ backgroundColor: theme?.foreground ?? "#000" }} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-lg mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#dc2626" }}>{String(items[0]?.label)}</span>
            <h3 className="mt-1 text-2xl font-bold leading-tight">{items[0]?.title}</h3>
            <p className="mt-2 text-sm opacity-70">{items[0]?.description}</p>
          </div>
          <div className="space-y-6">
            {items.slice(1, 4).map((post, i) => (
              <article key={i} className="pb-6 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-sm">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
