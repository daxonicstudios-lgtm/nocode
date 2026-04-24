import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The State of No-Code in 2026", description: "Our annual report on the tools, trends, and talent shaping the no-code ecosystem.", label: "Research · Apr 22", imageUrl: "", url: "#" },
  { title: "Five Mistakes New Website Builders Make", description: "Common pitfalls and how to avoid them when launching your first site.", label: "Guides · Apr 18", imageUrl: "", url: "#" },
  { title: "Shipping Changelog: March 2026", description: "A roundup of everything we shipped last month including dark mode and new templates.", label: "Updates · Apr 2", imageUrl: "", url: "#" },
  { title: "How We Reduced Churn by 30 Percent", description: "The retention experiments that made the biggest impact on our business.", label: "Growth · Mar 25", imageUrl: "", url: "#" },
];

export default function Blog016(props: BlockProps) {
  const { theme, heading = "All Posts", subheading = "Browse our full archive of articles.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60 mb-10">{subheading}</p>
        <div className="space-y-8">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-full sm:w-56 h-40 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</p>
                <h3 className="mt-2 text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-70">{post.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
