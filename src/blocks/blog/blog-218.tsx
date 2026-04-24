import type { BlockProps } from "@/blocks/types";
import { Timer, TrendingUp } from "lucide-react";

const POSTS = [
  { title: "Next.js App Router Deep Dive", description: "Server components, layouts, and the new data-fetching model.", label: "Advanced", value: "18 min" },
  { title: "Flexbox Cheat Sheet", description: "A visual reference for every flexbox property you will ever need.", label: "Beginner", value: "3 min" },
  { title: "API Versioning Approaches", description: "URL paths, headers, or query params — trade-offs of each.", label: "Intermediate", value: "9 min" },
];

export default function Blog218(props: BlockProps) {
  const { theme, heading = "Guided Reading", subheading = "Pick your pace and skill level.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl p-6 text-left" style={{ backgroundColor: theme?.accent ? `${theme.accent}18` : "#f3f4f6" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
                  <Timer className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold">{post.value}</p>
                  <p className="text-xs opacity-50 flex items-center gap-1"><TrendingUp className="w-3 h-3" />{post.label}</p>
                </div>
              </div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
