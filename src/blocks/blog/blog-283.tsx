import type { BlockProps } from "@/blocks/types";
import { Bookmark, ChevronRight } from "lucide-react";

const DEFAULTS = [
  { title: "Platform Security Deep Dive", description: "How we protect your data with encryption, auth, and row-level security.", label: "Security", value: "10 min read" },
  { title: "Custom Font Integration", description: "Use any Google Font or upload your own.", label: "Design", value: "4 min" },
  { title: "Multi-Tenant Architecture", description: "Serving thousands of sites from one codebase.", label: "Engineering", value: "8 min" },
  { title: "SEO Audit Checklist", description: "Check every box before you publish.", label: "Marketing", value: "6 min" },
];

export default function Blog283(props: BlockProps) {
  const { theme, heading = "Deep Reads", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="rounded-2xl border overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="aspect-[4/3]" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "")}</span>
                <Bookmark className="w-4 h-4 opacity-30 cursor-pointer" />
              </div>
              <h3 className="text-xl font-bold">{featured?.title}</h3>
              <p className="opacity-70 mt-2">{featured?.description}</p>
              <span className="text-xs opacity-40 mt-3 block">{String(featured?.value ?? "")}</span>
            </div>
          </article>
          <div className="space-y-3">
            {rest.map((post, i) => (
              <article key={i} className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:opacity-80" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
                <div className="w-20 h-20 rounded-lg shrink-0" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                  <h3 className="font-semibold mt-0.5">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5 line-clamp-1">{post.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 opacity-30 shrink-0" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
