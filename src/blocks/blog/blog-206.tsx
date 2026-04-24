import type { BlockProps } from "@/blocks/types";
import { Bookmark, Calendar } from "lucide-react";

const POSTS = [
  { title: "The Art of Code Reviews", description: "Transform code reviews from gatekeeping to mentoring.", label: "Engineering", value: "Mar 15, 2026" },
  { title: "Designing for Accessibility", description: "Inclusive design is great design — here is how to get started.", label: "Accessibility", value: "Mar 12, 2026" },
  { title: "Revenue Models for SaaS", description: "Freemium, usage-based, or flat-rate — which model wins?", label: "Business", value: "Mar 10, 2026" },
];

export default function Blog206(props: BlockProps) {
  const { theme, heading = "Recent Posts", subheading = "Stay up to date with our latest thinking.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="aspect-[16/9] relative" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur hover:bg-white transition" aria-label="Bookmark">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs opacity-50 mb-2">
                  <Calendar className="w-3 h-3" />{post.value}
                </div>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-1 text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
