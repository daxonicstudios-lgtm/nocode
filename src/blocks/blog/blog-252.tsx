import type { BlockProps } from "@/blocks/types";
import { Star, ArrowDown } from "lucide-react";

const DEFAULTS = [
  { title: "Why We Rebuilt Everything From Scratch", description: "Sometimes you have to tear it all down to build something truly great.", label: "Featured", value: "Mar 15" },
  { title: "5 Lessons From Our First Year", description: "What launching a startup in Africa taught us about resilience.", label: "Startup", value: "Mar 10" },
  { title: "Design Tokens Explained", description: "A practical guide to creating consistent design systems.", label: "Design", value: "Mar 8" },
  { title: "Performance Optimization Tips", description: "Speed up your website with these proven techniques.", label: "Dev", value: "Mar 5" },
];

export default function Blog252(props: BlockProps) {
  const { theme, heading = "Latest Stories", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="sticky top-0 z-10 pb-6 pt-2" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-5 h-5" style={{ color: theme?.primary ?? "#f59e0b" }} />
            <h2 className="text-2xl font-bold">{heading}</h2>
          </div>
          <div className="rounded-xl border-2 p-5 sm:p-6" style={{ borderColor: theme?.primary ?? "#f59e0b" }}>
            <span className="text-xs font-bold px-2 py-1 rounded" style={{ backgroundColor: theme?.primary ?? "#f59e0b", color: "#fff" }}>{String(featured?.label ?? "Featured")}</span>
            <h3 className="text-xl sm:text-2xl font-bold mt-3">{featured?.title}</h3>
            <p className="opacity-70 mt-2 text-sm sm:text-base">{featured?.description}</p>
            <span className="text-xs opacity-40 mt-2 inline-block">{String(featured?.value ?? "")}</span>
          </div>
          <div className="flex justify-center mt-3">
            <ArrowDown className="w-4 h-4 opacity-30 animate-bounce" />
          </div>
        </div>
        <div className="space-y-3 mt-2">
          {rest.map((post, i) => (
            <article key={i} className="p-4 rounded-lg hover:opacity-80 cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                <span className="text-xs opacity-40">{String(post.value ?? "")}</span>
              </div>
              <h3 className="font-semibold mt-1">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
