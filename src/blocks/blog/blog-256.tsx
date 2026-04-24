import type { BlockProps } from "@/blocks/types";
import { Sparkles, ArrowRight } from "lucide-react";

const DEFAULTS = [
  { title: "Launching in Lagos: Our Africa Story", description: "How we went from idea to product in one of the fastest-growing tech ecosystems.", label: "Story", value: "Dec 20" },
  { title: "Template Design Best Practices", description: "Create templates that users actually want to use.", label: "Design", value: "Dec 15" },
  { title: "Mobile-First Is Not Optional", description: "Most of your users are on phones. Design for them.", label: "Strategy", value: "Dec 10" },
];

export default function Blog256(props: BlockProps) {
  const { theme, heading = "Featured & Recent", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="sticky top-0 z-10 pb-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#ec4899" }} />
            {heading}
          </h2>
          <div className="p-[2px] rounded-2xl" style={{ background: `linear-gradient(135deg, ${theme?.primary ?? "#ec4899"}, ${theme?.accent ?? "#8b5cf6"})` }}>
            <div className="rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#fff", color: theme?.foreground }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#ec4899" }}>{String(featured?.label ?? "")}</span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2">{featured?.title}</h3>
              <p className="opacity-70 mt-2">{featured?.description}</p>
              <span className="text-xs opacity-40 mt-3 block">{String(featured?.value ?? "")}</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {rest.map((post, i) => (
            <article key={i} className="flex items-center justify-between gap-4 p-4 rounded-xl cursor-pointer hover:opacity-80" style={{ backgroundColor: theme?.accent ?? "#fdf2f8" }}>
              <div>
                <span className="text-xs opacity-50">{String(post.label ?? "")}</span>
                <h3 className="font-semibold">{post.title}</h3>
              </div>
              <ArrowRight className="w-4 h-4 opacity-30 shrink-0" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
