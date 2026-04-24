import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Zero to Website in Under 10 Minutes", description: "A step-by-step walkthrough of our fastest project creation flow.", label: "Tutorial · 4 min", imageUrl: "", url: "#" },
  { title: "CSS Grid vs Flexbox: When to Use Which", description: "A practical guide to choosing the right layout method for your design.", label: "Frontend · 7 min", imageUrl: "", url: "#" },
  { title: "How We Handle Error States Gracefully", description: "Patterns for communicating problems without frustrating your users.", label: "UX · 5 min", imageUrl: "", url: "#" },
];

const TAGS = ["JavaScript", "CSS", "React", "Performance", "Accessibility", "Mobile", "SEO", "AI", "Design Systems"];

export default function Blog038(props: BlockProps) {
  const { theme, heading = "Resources", subheading = "Tutorials, guides, and best practices.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60 mb-10">{subheading}</p>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          <aside className="order-2 lg:order-1">
            <div className="sticky top-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider opacity-40 mb-3">Browse by Tag</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <a key={tag} href="#" className="text-xs px-2.5 py-1 rounded-lg border hover:border-current transition-colors" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>{tag}</a>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                <h3 className="font-bold text-sm mb-1">Stay Updated</h3>
                <p className="text-xs opacity-50 mb-3">Get new posts delivered to your inbox.</p>
                <input type="email" placeholder="your@email.com" className="w-full text-sm px-3 py-2 rounded-lg border mb-2" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
                <button className="w-full text-sm font-semibold py-2 rounded-lg text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>Subscribe</button>
              </div>
            </div>
          </aside>
          <div className="order-1 lg:order-2 space-y-6">
            {items.slice(0, 3).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group block border-b pb-6 last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="flex items-center gap-1 text-xs opacity-40 mb-2">
                  <Clock className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="text-xl font-bold group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
