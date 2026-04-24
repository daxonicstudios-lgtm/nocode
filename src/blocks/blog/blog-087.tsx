import type { BlockProps } from "@/blocks/types";
import { MessageSquare, Send, Bookmark } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Handle Incidents", description: "Our on-call rotation, runbook culture, and post-mortem process.", label: "12", value: "56" },
  { title: "The Case for Monorepos", description: "Shared code, unified CI, and consistent tooling across projects.", label: "28", value: "93" },
  { title: "Writing Accessible Forms", description: "Labels, ARIA attributes, and keyboard navigation done right.", label: "8", value: "34" },
  { title: "Optimizing Database Queries", description: "Index strategies and query planning for Postgres.", label: "19", value: "71" },
];

export default function Blog087(props: BlockProps) {
  const { theme, heading = "Community Favorites", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f9fafb", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="p-5 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <h3 className="font-bold text-base">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
              <div className="flex items-center gap-5 mt-4 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <button className="flex items-center gap-1 text-xs opacity-50 hover:opacity-100 transition-opacity">
                  <MessageSquare className="w-3.5 h-3.5" /> {String(post.label)}
                </button>
                <button className="flex items-center gap-1 text-xs opacity-50 hover:opacity-100 transition-opacity">
                  <Send className="w-3.5 h-3.5" /> {String(post.value)}
                </button>
                <button className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
                  <Bookmark className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
