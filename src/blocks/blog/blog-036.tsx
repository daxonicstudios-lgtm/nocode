import type { BlockProps } from "@/blocks/types";
import { Tag, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Approach Product Strategy", description: "A transparent look at how we decide what to build and when to ship it.", label: "Strategy · Apr 22", imageUrl: "", url: "#" },
  { title: "Building Forms That Convert", description: "Evidence-based patterns for creating forms users actually complete.", label: "Design · Apr 16", imageUrl: "", url: "#" },
  { title: "Our Open-Source Contributions", description: "A roundup of the libraries and tools we have given back to the community.", label: "Engineering · Apr 10", imageUrl: "", url: "#" },
];

const CATEGORIES = ["All Posts", "Engineering", "Design", "Product", "Business", "Culture"];

export default function Blog036(props: BlockProps) {
  const { theme, heading = "Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div className="space-y-8">
            {items.slice(0, 3).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group block border-b pb-8 last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="aspect-[2/1] rounded-xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
                <div className="flex items-center gap-1 text-xs opacity-50 mb-2">
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="text-xl font-bold group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider opacity-50 mb-4">Categories</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:underline" style={{ color: i === 0 ? (theme?.primary ?? "#6366f1") : undefined }}>{cat}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
              <h3 className="font-bold text-sm mb-2">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "No-Code", "Mobile", "AI", "Design", "Performance"].map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
