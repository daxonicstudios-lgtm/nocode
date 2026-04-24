import type { BlockProps } from "@/blocks/types";
import { LayoutGrid, List } from "lucide-react";

const CATS = ["Recent", "Featured", "Archive"];
const DEFAULTS = [
  { title: "Building Trust Through Design", description: "Visual cues that tell visitors your site is legitimate and professional.", label: "Recent", value: "Mar 3" },
  { title: "Payment Gateway Integration", description: "Accept payments from customers across Africa and beyond.", label: "Featured", value: "Feb 28" },
  { title: "Site Speed Optimization", description: "Techniques to make your pages load in under two seconds.", label: "Recent", value: "Feb 20" },
  { title: "Community Forums Launch", description: "Connect with other builders and share your work.", label: "Archive", value: "Feb 10" },
];

export default function Blog268(props: BlockProps) {
  const { theme, heading = "Blog Posts", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <div className="flex items-center gap-1 p-1 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
            {CATS.map((cat, i) => (
              <button key={cat} className="px-4 py-2 rounded-md text-sm font-medium" style={i === 0 ? { backgroundColor: theme?.background ?? "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" } : {}}>
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mb-4">
          <button className="p-2 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}><LayoutGrid className="w-4 h-4 opacity-50" /></button>
          <button className="p-2 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}><List className="w-4 h-4 opacity-50" /></button>
        </div>
        <div className="space-y-3">
          {items.map((post, i) => (
            <article key={i} className="flex items-center gap-4 p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="w-16 h-16 rounded-lg shrink-0" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm opacity-60 mt-0.5 truncate">{post.description}</p>
              </div>
              <span className="text-xs opacity-40 shrink-0">{String(post.value ?? "")}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
