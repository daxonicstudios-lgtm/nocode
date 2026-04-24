import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting the Most Out of Our Template Library", description: "Tips for customizing templates to match your brand without starting from scratch.", label: "Apr 20, 2026", imageUrl: "", url: "#" },
  { title: "Semantic HTML Matters More Than You Think", description: "Why proper markup improves accessibility, SEO, and maintainability all at once.", label: "Apr 14, 2026", imageUrl: "", url: "#" },
  { title: "What We Learned at AfricaTech Summit", description: "Key takeaways from the largest technology conference on the continent.", label: "Apr 8, 2026", imageUrl: "", url: "#" },
  { title: "The ROI of Good Design", description: "Hard numbers on how design investment translates to business outcomes.", label: "Apr 2, 2026", imageUrl: "", url: "#" },
];

const RECENT = ["Shipping Changelog: March", "New Pricing Announcement", "How We Hire Engineers", "Introducing Dark Mode"];

export default function Blog037(props: BlockProps) {
  const { theme, heading = "Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
          <div className="space-y-6">
            {items.slice(0, 4).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 p-4 rounded-xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                <div className="w-full sm:w-44 h-32 rounded-lg shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1 text-xs opacity-50 mb-1">
                    <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
                  </div>
                  <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                </div>
              </a>
            ))}
          </div>
          <aside>
            <div className="rounded-xl p-5" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <h3 className="font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-3">
                {RECENT.map((title, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:underline opacity-70">{title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-5 mt-4" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <h3 className="font-bold mb-3">Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["Design", "Code", "Growth", "AI", "Mobile"].map((t) => (
                  <a key={t} href="#" className="text-xs px-3 py-1.5 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f1f5f9", color: theme?.primary ?? "#6366f1" }}>{t}</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
