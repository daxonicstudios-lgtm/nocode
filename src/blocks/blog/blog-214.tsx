import type { BlockProps } from "@/blocks/types";
import { Clock, Zap } from "lucide-react";

const POSTS = [
  { title: "Performance Budgets That Work", description: "Set measurable goals for page speed and stick to them.", label: "Intermediate", value: "6 min" },
  { title: "Authentication Patterns Compared", description: "JWTs, sessions, OAuth — pros and cons of each approach.", label: "Advanced", value: "11 min" },
  { title: "Your First Pull Request", description: "A beginner-friendly walkthrough of the contribution workflow.", label: "Beginner", value: "3 min" },
];

export default function Blog214(props: BlockProps) {
  const { theme, heading = "Quick Reads & Deep Dives", items = POSTS } = props;
  const diffColor = (l: string) => l === "Advanced" ? "#ef4444" : l === "Intermediate" ? "#eab308" : "#22c55e";

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">{heading}</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="border-l-4 pl-4 py-2" style={{ borderColor: diffColor(post.label ?? "") }}>
              <div className="flex items-center gap-2 text-xs mb-2">
                <Zap className="w-3 h-3" style={{ color: diffColor(post.label ?? "") }} />
                <span className="font-bold" style={{ color: diffColor(post.label ?? "") }}>{post.label}</span>
                <span className="opacity-40 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
              </div>
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-sm opacity-70">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
