import type { BlockProps } from "@/blocks/types";
import { ArrowRight, BookOpen } from "lucide-react";

const DEFAULTS = [
  { title: "Comprehensive Guide to Web Typography", description: "Font sizes, line heights, and spacing rules that make your text sing.", label: "Typography", value: "14 min" },
  { title: "Video Backgrounds Done Right", description: "Add motion without killing performance.", label: "Media", value: "5 min" },
  { title: "Footer Design Patterns", description: "The most overlooked section of every website.", label: "Layout", value: "4 min" },
  { title: "Contact Page Best Practices", description: "Make it easy for visitors to reach you.", label: "Conversion", value: "3 min" },
];

export default function Blog289(props: BlockProps) {
  const { theme, heading = "Featured Reading", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <button className="flex items-center gap-1 text-sm font-medium opacity-60 hover:opacity-100">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:row-span-2 rounded-2xl p-6 flex flex-col justify-end min-h-[280px]" style={{ backgroundColor: theme?.accent ?? "#f0fdf4", borderLeft: `4px solid ${theme?.primary ?? "#10b981"}` }}>
            <BookOpen className="w-6 h-6 mb-3" style={{ color: theme?.primary ?? "#10b981" }} />
            <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#10b981" }}>{String(featured?.label ?? "")}</span>
            <h3 className="text-xl font-bold mt-2">{featured?.title}</h3>
            <p className="opacity-70 mt-2 text-sm">{featured?.description}</p>
            <span className="text-xs opacity-40 mt-3">{String(featured?.value ?? "")} read</span>
          </article>
          {rest.map((post, i) => (
            <article key={i} className="p-4 rounded-xl border cursor-pointer hover:shadow-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
              <h3 className="font-semibold mt-1">{post.title}</h3>
              <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
