import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "A Beginner's Guide to No-Code Tools", description: "Explore the landscape of no-code platforms and find the right fit for your next project.", label: "Guides", imageUrl: "", url: "#" },
  { title: "Why Accessibility Matters for Every Website", description: "Practical tips to make your site usable by everyone, regardless of ability.", label: "Design", imageUrl: "", url: "#" },
  { title: "Scaling Your Online Store Without Code", description: "Real strategies from founders who grew their e-commerce businesses on no-code tools.", label: "Business", imageUrl: "", url: "#" },
];

export default function Blog002(props: BlockProps) {
  const { theme, heading = "Latest Articles", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[4/3]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</span>
                <h3 className="mt-2 font-bold text-lg leading-snug">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
