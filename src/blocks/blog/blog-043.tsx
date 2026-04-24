import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Complete SEO Checklist for 2026", description: "From technical audits to content optimization, everything you need to rank higher in search results this year.", label: "SEO", imageUrl: "", url: "#" },
  { title: "Micro-Copy That Makes a Difference", description: "Tiny text, huge impact.", label: "UX Writing", imageUrl: "", url: "#" },
  { title: "How We Test Across 40 Device Types", description: "Our cross-browser and cross-device testing methodology that catches bugs before users do.", label: "QA", imageUrl: "", url: "#" },
  { title: "Quick Wins for Page Load Speed", description: "Five changes that take minutes and shave seconds off your load times.", label: "Performance", imageUrl: "", url: "#" },
  { title: "The Business Case for Web Accessibility", description: "Accessibility is not just a moral obligation. It expands your audience, reduces legal risk, and often improves conversion rates for all users.", label: "Accessibility", imageUrl: "", url: "#" },
];

export default function Blog043(props: BlockProps) {
  const { theme, heading = "From Our Blog", items = DEFAULT_ITEMS } = props;

  const heights = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-video"];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.slice(0, 5).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block break-inside-avoid">
              <div className={`${heights[i % heights.length]} rounded-xl overflow-hidden mb-3`} style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-1 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
