import type { BlockProps } from "@/blocks/types";
import { Clock4, Flame } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "CSS Grid Mastery", description: "From basic grids to complex magazine layouts in one guide.", label: "18 min", value: "hot" },
  { title: "Startup Legal Checklist", description: "Incorporation, IP, contracts — what founders need to know.", label: "10 min", value: "new" },
  { title: "Animation Performance Tips", description: "Keep your animations at 60fps without jank.", label: "6 min", value: "hot" },
];

export default function Blog069(props: BlockProps) {
  const { theme, heading = "Reading List", subheading = "Curated articles with time estimates", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
      </div>
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        {items.slice(0, 3).map((post, i) => (
          <article key={i} className="flex items-center gap-4 p-5 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
            <span className="text-3xl font-black opacity-10 w-10 text-center">{i + 1}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm truncate">{post.title}</h3>
                {post.value === "hot" && <Flame className="w-3.5 h-3.5 shrink-0 text-orange-500" />}
              </div>
              <p className="text-xs opacity-60 truncate">{post.description}</p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium shrink-0 opacity-50">
              <Clock4 className="w-3.5 h-3.5" /> {String(post.label)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
