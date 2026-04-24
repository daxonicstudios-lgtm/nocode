import type { BlockProps } from "@/blocks/types";
import { Clock, Star } from "lucide-react";

const POSTS = [
  { title: "Responsive Images Done Right", description: "srcset, sizes, and modern image formats for the web.", label: "Intermediate", value: "7 min" },
  { title: "Git Workflow for Teams", description: "Branch strategies that keep your team moving fast.", label: "Beginner", value: "5 min" },
  { title: "Microservices vs Monolith", description: "When to split and when to stay together.", label: "Advanced", value: "10 min" },
];

export default function Blog216(props: BlockProps) {
  const { theme, heading = "Skill-Level Blog", items = POSTS } = props;
  const stars = (l: string) => l === "Advanced" ? 3 : l === "Intermediate" ? 2 : 1;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="text-center p-6 rounded-2xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: 3 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4" fill={s < stars(post.label ?? "") ? (theme?.primary ?? "#6366f1") : "none"} stroke={theme?.primary ?? "#6366f1"} />
                ))}
              </div>
              <span className="text-xs font-bold uppercase opacity-60">{post.label}</span>
              <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
              <p className="mt-3 text-xs opacity-40 flex items-center justify-center gap-1"><Clock className="w-3 h-3" />{post.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
