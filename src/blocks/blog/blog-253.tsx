import type { BlockProps } from "@/blocks/types";
import { Bookmark, Clock } from "lucide-react";

const DEFAULTS = [
  { title: "Building Accessible Websites in 2026", description: "Accessibility is not optional. Here is how to get it right from day one.", label: "Accessibility", value: "10 min" },
  { title: "The Rise of African Tech Hubs", description: "From Lagos to Nairobi, the continent is buzzing with innovation.", label: "Africa", value: "7 min" },
  { title: "Why Simplicity Wins Every Time", description: "Users do not want complexity. They want solutions.", label: "UX", value: "4 min" },
  { title: "Monetizing Your No-Code App", description: "Three proven revenue models for no-code creators.", label: "Business", value: "6 min" },
];

export default function Blog253(props: BlockProps) {
  const { theme, heading = "Editor's Picks", subheading = "Handpicked articles worth your time", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="sticky top-0 z-10 py-4" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <h2 className="text-3xl font-bold">{heading}</h2>
          <p className="opacity-60 text-sm mt-1">{subheading}</p>
          <div className="mt-6 rounded-2xl overflow-hidden flex flex-col sm:flex-row" style={{ backgroundColor: theme?.accent ?? "#f0f0f0" }}>
            <div className="sm:w-2/5 aspect-video sm:aspect-auto" style={{ backgroundColor: theme?.primary ?? "#6366f1", opacity: 0.15 }} />
            <div className="p-5 sm:p-6 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Bookmark className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "Featured")}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{featured?.title}</h3>
              <p className="opacity-70 text-sm mt-2">{featured?.description}</p>
              <div className="flex items-center gap-1 text-xs opacity-40 mt-3">
                <Clock className="w-3 h-3" />
                <span>{String(featured?.value ?? "5 min")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          {rest.map((post, i) => (
            <article key={i} className="p-4 border rounded-xl cursor-pointer hover:shadow-sm transition-shadow" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
              <h3 className="font-semibold mt-1">{post.title}</h3>
              <p className="text-sm opacity-60 mt-1">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
