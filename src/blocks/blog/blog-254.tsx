import type { BlockProps } from "@/blocks/types";
import { TrendingUp, Calendar } from "lucide-react";

const DEFAULTS = [
  { title: "How AI Is Reshaping Content Creation", description: "Tools that once took teams now run solo. The landscape has shifted.", label: "Trending", value: "Jan 12" },
  { title: "Our Platform Roadmap for Q2", description: "New features, improvements, and what we are excited about.", label: "Product", value: "Jan 8" },
  { title: "Community Builders to Watch", description: "Ten creators pushing the boundaries of no-code.", label: "Community", value: "Jan 5" },
  { title: "SEO Strategies That Actually Work", description: "Forget the hacks. These fundamentals drive real traffic.", label: "Marketing", value: "Jan 2" },
];

export default function Blog254(props: BlockProps) {
  const { theme, heading = "Trending Now", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-0 z-10 pb-4" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: theme?.primary ?? "#1e293b", color: "#fff" }}>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">{heading}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">{featured?.title}</h3>
            <p className="opacity-80 mt-2">{featured?.description}</p>
            <div className="flex items-center gap-1 text-xs opacity-60 mt-4">
              <Calendar className="w-3 h-3" />
              <span>{String(featured?.value ?? "")}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {rest.map((post, i) => (
            <article key={i} className="py-5 cursor-pointer hover:opacity-80">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase opacity-50">{String(post.label ?? "")}</span>
                <span className="text-xs opacity-30">{String(post.value ?? "")}</span>
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
