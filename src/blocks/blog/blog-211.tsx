import type { BlockProps } from "@/blocks/types";
import { Clock, BarChart3 } from "lucide-react";

const POSTS = [
  { title: "Getting Started with TypeScript", description: "A gentle introduction for JavaScript developers making the switch.", label: "Beginner", value: "4 min read" },
  { title: "Advanced React Patterns", description: "Compound components, render props, and custom hooks explained.", label: "Advanced", value: "12 min read" },
  { title: "CSS Grid Layouts Made Simple", description: "Build complex layouts with surprisingly little code.", label: "Intermediate", value: "6 min read" },
];

const BADGE_COLORS: Record<string, string> = { Beginner: "#22c55e", Intermediate: "#f59e0b", Advanced: "#ef4444" };

export default function Blog211(props: BlockProps) {
  const { theme, heading = "Learning Hub", subheading = "Articles tagged by difficulty so you can learn at your own pace.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">{heading}</h2>
        <p className="mt-2 text-center opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="border rounded-2xl p-5 flex flex-col" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: BADGE_COLORS[post.label ?? ""] ?? theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <span className="flex items-center gap-1 text-xs opacity-50"><Clock className="w-3 h-3" />{post.value}</span>
              </div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70 flex-1">{post.description}</p>
              <div className="mt-4 flex items-center gap-1 text-xs opacity-40"><BarChart3 className="w-3 h-3" />Difficulty: {post.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
