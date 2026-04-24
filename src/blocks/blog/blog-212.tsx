import type { BlockProps } from "@/blocks/types";
import { Clock, Flame } from "lucide-react";

const POSTS = [
  { title: "Database Indexing Strategies", description: "Speed up your queries with proper indexing techniques.", label: "Advanced", value: "10 min" },
  { title: "Tailwind CSS Tips and Tricks", description: "Lesser-known utilities that will speed up your workflow.", label: "Beginner", value: "3 min" },
  { title: "Building Real-Time Dashboards", description: "WebSockets, SSE, and polling — choosing the right approach.", label: "Intermediate", value: "8 min" },
  { title: "State Management Showdown", description: "Comparing Zustand, Jotai, Redux, and Signals.", label: "Intermediate", value: "7 min" },
];

export default function Blog212(props: BlockProps) {
  const { theme, heading = "Developer Blog", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{heading}</h2>
        <div className="space-y-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center gap-3" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-center gap-2 shrink-0">
                <Flame className="w-4 h-4" style={{ color: post.label === "Advanced" ? "#ef4444" : post.label === "Intermediate" ? "#f59e0b" : "#22c55e" }} />
                <span className="text-xs font-bold w-24" style={{ color: post.label === "Advanced" ? "#ef4444" : post.label === "Intermediate" ? "#f59e0b" : "#22c55e" }}>{post.label}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm opacity-60 truncate">{post.description}</p>
              </div>
              <span className="flex items-center gap-1 text-xs opacity-40 shrink-0"><Clock className="w-3 h-3" />{post.value}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
