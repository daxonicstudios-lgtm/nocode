import type { BlockProps } from "@/blocks/types";
import { User, Mail } from "lucide-react";

const POSTS = [
  { title: "Metrics That Matter", description: "Focus on outcomes, not vanity numbers.", label: "Analytics", value: "James Park" },
  { title: "Building API Gateways", description: "Centralize auth, rate limiting, and logging.", label: "Backend", value: "James Park" },
  { title: "Technical Debt Playbook", description: "Strategies for paying it down without stopping features.", label: "Engineering", value: "James Park" },
];

export default function Blog233(props: BlockProps) {
  const { theme, heading = "Writer's Corner", subheading = "Deep dives from our resident expert.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}><User className="w-12 h-12 opacity-40" /></div>
          <h3 className="mt-4 font-bold text-lg">{items[0]?.value ?? "Author"}</h3>
          <p className="text-sm opacity-60 mt-1">{subheading}</p>
          <button className="mt-4 flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}><Mail className="w-4 h-4" />Subscribe</button>
        </aside>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{heading}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className={`p-5 rounded-xl border ${i === 0 ? "sm:col-span-2" : ""}`} style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
