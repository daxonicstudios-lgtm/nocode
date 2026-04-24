import type { BlockProps } from "@/blocks/types";
import { Layers } from "lucide-react";

const TAGS = ["All Topics", "UX Research", "Development", "Marketing", "Analytics"];
const DEFAULT_ITEMS = [
  { title: "User Research on a Budget", description: "Five guerrilla research methods that cost nothing.", label: "UX Research" },
  { title: "API Design Best Practices", description: "REST conventions that will save your team headaches.", label: "Development" },
  { title: "Content Marketing Playbook", description: "Organic growth strategies that compound over time.", label: "Marketing" },
  { title: "Mastering Web Vitals Metrics", description: "Track the numbers that actually impact user experience.", label: "Analytics" },
  { title: "Accessibility Audit Checklist", description: "Ensure every user can navigate your product.", label: "UX Research" },
  { title: "SEO for SaaS Startups", description: "The technical SEO foundations you cannot skip.", label: "Marketing" },
];

export default function Blog053(props: BlockProps) {
  const { theme, heading = "Explore Topics", subheading = "Filter by category to find what interests you.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#fafafa", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <Layers className="w-6 h-6 mx-auto mb-3" style={{ color: theme?.primary ?? "#6366f1" }} />
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60 max-w-md mx-auto">{subheading}</p>
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {TAGS.map((t, i) => (
            <button key={i} className="px-4 py-2 rounded-full text-xs font-semibold border-2" style={{ borderColor: theme?.primary ?? "#6366f1", backgroundColor: i === 0 ? (theme?.primary ?? "#6366f1") : "transparent", color: i === 0 ? "#fff" : (theme?.primary ?? "#6366f1") }}>
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
          {items.slice(0, 6).map((post, i) => (
            <article key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded" style={{ backgroundColor: theme?.secondary ?? "#eef2ff", color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
              <h3 className="mt-4 font-bold text-lg">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
