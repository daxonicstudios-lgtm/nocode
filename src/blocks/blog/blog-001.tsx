import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Built Our Design System", description: "Behind the scenes of our 12-month effort to unify the product experience across every touchpoint.", label: "Engineering", imageUrl: "", url: "#" },
  { title: "The Economics of Mobile-First Platforms", description: "Why we bet on people building websites from phones and what the data says about it.", label: "Strategy", imageUrl: "", url: "#" },
  { title: "Shipping Changelog: April 2026", description: "Everything we shipped this month in one concise post. New blocks, bug fixes, and performance wins.", label: "Updates", imageUrl: "", url: "#" },
];

export default function Blog001(props: BlockProps) {
  const { theme, heading = "From the Blog", subheading = "Insights, updates, and stories from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{heading}</h2>
        <p className="mt-2 text-base opacity-60 max-w-xl">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="mt-4">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <h3 className="mt-1 text-lg font-semibold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-70 line-clamp-2">{post.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs opacity-50">
                  <Clock className="w-3 h-3" />
                  <span>5 min read</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
