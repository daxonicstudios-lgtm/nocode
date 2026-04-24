import type { BlockProps } from "@/blocks/types";
import { Users, ChevronRight } from "lucide-react";

const AUTHORS = [
  { title: "Kai Tanaka", label: "Engineering", value: "9 posts" },
  { title: "Priya Sharma", label: "Design", value: "7 posts" },
  { title: "Leo Rivera", label: "Product", value: "5 posts" },
];
const POSTS = [
  { title: "Testing in Production Safely", description: "Feature flags, observability, and staged rollouts.", label: "Engineering" },
  { title: "Color Accessibility Guide", description: "Ensure contrast ratios meet WCAG standards.", label: "Design" },
  { title: "Product Discovery Techniques", description: "Validate ideas before committing engineering resources.", label: "Product" },
];

export default function Blog237(props: BlockProps) {
  const { theme, heading = "Team Blog", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8"><Users className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} /><h2 className="text-3xl font-bold">{heading}</h2></div>
        <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
          <div className="grid gap-5 sm:grid-cols-3">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="p-5 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
          <aside>
            <h3 className="text-xs font-bold uppercase tracking-wide opacity-40 mb-4">Contributors</h3>
            <div className="space-y-3">
              {AUTHORS.map((a, i) => (
                <div key={i} className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{a.title[0]}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold group-hover:underline">{a.title}</p>
                    <p className="text-xs opacity-40">{a.value}</p>
                  </div>
                  <ChevronRight className="w-3 h-3 opacity-30" />
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
