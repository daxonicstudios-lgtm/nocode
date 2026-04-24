import type { BlockProps } from "@/blocks/types";
import { User, Calendar } from "lucide-react";

const POSTS = [
  { title: "Navigating Career Transitions", description: "How to pivot into tech from a non-traditional background.", label: "Career", value: "Feb 28, 2026" },
  { title: "Mentorship Programs That Work", description: "Building structured mentorship within your organization.", label: "People", value: "Mar 5, 2026" },
  { title: "Remote Team Rituals", description: "Habits that keep distributed teams connected.", label: "Remote", value: "Mar 12, 2026" },
];

export default function Blog236(props: BlockProps) {
  const { theme, heading = "Posts by Lina Watts", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1fr_240px]">
        <div>
          <h2 className="text-3xl font-bold mb-8">{heading}</h2>
          <div className="space-y-5">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="pb-5 border-b" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="flex items-center gap-2 text-xs opacity-50 mb-2"><Calendar className="w-3 h-3" />{post.value}</div>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-1 text-xl font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="h-fit sticky top-8 p-5 rounded-2xl border text-center" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
          <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-8 h-8 text-white" /></div>
          <p className="mt-3 font-bold">Lina Watts</p>
          <p className="text-xs opacity-50 mt-1">People & Culture Lead</p>
          <p className="text-sm opacity-60 mt-3">Sharing insights on building healthy, high-performing teams.</p>
        </aside>
      </div>
    </section>
  );
}
