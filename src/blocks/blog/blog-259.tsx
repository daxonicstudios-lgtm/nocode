import type { BlockProps } from "@/blocks/types";
import { Zap, Clock } from "lucide-react";

const DEFAULTS = [
  { title: "Announcing Smart Layouts", description: "Our AI now arranges your content automatically for the best visual impact.", label: "New Feature", value: "5 min read" },
  { title: "Dark Mode Done Right", description: "Not just inverted colors. True dark mode requires careful design.", label: "Design", value: "4 min read" },
  { title: "Building Forms That Convert", description: "Every field you add reduces conversions by 10 percent.", label: "Conversion", value: "6 min read" },
  { title: "Multi-Language Sites Made Easy", description: "Reach a global audience with built-in translation support.", label: "Feature", value: "3 min read" },
];

export default function Blog259(props: BlockProps) {
  const { theme, heading = "What's New", subheading = "Product updates and expert guides", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="sticky top-0 z-10 pb-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: theme?.primary ?? "#10b981" }}>{subheading}</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{heading}</h2>
          <div className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 items-start" style={{ backgroundColor: theme?.primary ?? "#10b981", color: "#fff" }}>
            <Zap className="w-8 h-8 shrink-0 opacity-80" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">{featured?.title}</h3>
              <p className="opacity-80 mt-2">{featured?.description}</p>
              <div className="flex items-center gap-1 text-xs opacity-60 mt-3">
                <Clock className="w-3 h-3" />
                <span>{String(featured?.value ?? "")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rest.map((post, i) => (
            <article key={i} className="p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#10b981" }}>{String(post.label ?? "")}</span>
              <h3 className="font-semibold mt-2">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
