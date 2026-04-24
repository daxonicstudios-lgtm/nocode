import type { BlockProps } from "@/blocks/types";
import { ExternalLink } from "lucide-react";

const POSTS = [
  { title: "Email Deliverability Tips", description: "Avoid spam folders and reach your audience every time.", label: "Marketing" },
  { title: "Postgres Performance Tuning", description: "Query plans, vacuum, and config tweaks for speed.", label: "Database" },
  { title: "Designing Empty States", description: "Turn blank screens into onboarding opportunities.", label: "UX" },
  { title: "Feature Flags at Scale", description: "Roll out safely with gradual feature releases.", label: "DevOps" },
];

export default function Blog223(props: BlockProps) {
  const { theme, heading = "Explore Articles", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:border-transparent cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <h3 className="mt-3 text-xl font-bold group-hover:underline transition-all duration-200">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
