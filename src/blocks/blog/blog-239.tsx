import type { BlockProps } from "@/blocks/types";
import { User, FileText, ArrowRight } from "lucide-react";

const POSTS = [
  { title: "Platform Engineering Explained", description: "Internal developer platforms and why they matter.", label: "Platform", value: "Ryan Mitchell" },
  { title: "Effective Standups", description: "Async standups that respect everyone's time.", label: "Agile", value: "Ryan Mitchell" },
  { title: "Logging Best Practices", description: "Structured logs that make debugging a breeze.", label: "Ops", value: "Ryan Mitchell" },
];

export default function Blog239(props: BlockProps) {
  const { theme, heading = "Ryan's Blog", buttonText = "View Profile", buttonUrl = "#", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="text-center border rounded-2xl p-6 h-fit" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
          <div className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><User className="w-10 h-10 text-white" /></div>
          <h3 className="mt-4 font-bold text-lg">Ryan Mitchell</h3>
          <p className="text-xs opacity-50 mt-1">Staff Engineer</p>
          <div className="flex items-center justify-center gap-1 mt-2 text-xs opacity-40"><FileText className="w-3 h-3" />{items.length} articles</div>
          <a href={buttonUrl} className="mt-4 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}<ArrowRight className="w-3 h-3" /></a>
        </aside>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{heading}</h2>
          <div className="space-y-4">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="p-4 rounded-xl hover:bg-black/5 transition cursor-pointer">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-1 font-bold text-lg">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
