import type { BlockProps } from "@/blocks/types";
import { Filter, BookOpen } from "lucide-react";

const CHIPS = ["All", "Guides", "News", "Opinions", "Case Studies"];
const DEFAULTS = [
  { title: "The Complete SEO Checklist", description: "Everything your site needs to rank well on search engines.", label: "Guides", value: "12 min read" },
  { title: "Platform Update: March 2026", description: "Bug fixes, new blocks, and performance improvements.", label: "News", value: "2 min read" },
  { title: "Why No-Code Is Not Cheating", description: "Building without code is still building. Here is why it matters.", label: "Opinions", value: "4 min read" },
  { title: "How FreshCart Grew 300%", description: "An e-commerce success story powered by our platform.", label: "Case Studies", value: "7 min read" },
];

export default function Blog265(props: BlockProps) {
  const { theme, heading = "Articles & Resources", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5" style={{ color: theme?.primary ?? "#8b5cf6" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 opacity-40 shrink-0" />
          {CHIPS.map((chip, i) => (
            <span key={chip} className="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer" style={i === 0 ? { backgroundColor: theme?.primary ?? "#8b5cf6", color: "#fff" } : { backgroundColor: theme?.accent ?? "#f3f4f6" }}>
              {chip}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          {items.map((post, i) => (
            <article key={i} className="p-5 rounded-xl cursor-pointer hover:opacity-80" style={{ backgroundColor: theme?.accent ?? "#f5f3ff" }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#8b5cf6" }}>{String(post.label ?? "")}</span>
                <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
              </div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
