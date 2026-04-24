import type { BlockProps } from "@/blocks/types";
import { BookOpen, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Choosing Between SSR and SSG", description: "A decision framework for picking the right rendering strategy for each page of your site.", label: "Architecture · 9 min", imageUrl: "", url: "#" },
  { title: "How to Create Compelling Case Studies", description: "A step-by-step process for turning customer wins into marketing assets that sell.", label: "Content · 6 min", imageUrl: "", url: "#" },
  { title: "Our Favorite No-Code Workflows", description: "Automations that save our team hours every week without writing any scripts.", label: "Productivity · 4 min", imageUrl: "", url: "#" },
];

export default function Blog049(props: BlockProps) {
  const { theme, heading = "Read & Subscribe", items = DEFAULT_ITEMS, buttonText = "Subscribe Free" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
            {items.slice(0, 3).map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group flex gap-5 py-6 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div className="w-20 h-20 rounded-xl shrink-0 flex items-center justify-center" style={{ backgroundColor: theme?.background ?? "#fff" }}>
                  <BookOpen className="w-6 h-6" style={{ color: theme?.primary ?? "#6366f1" }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                </div>
                <ArrowRight className="w-5 h-5 opacity-20 group-hover:opacity-60 transition-opacity shrink-0 mt-1" />
              </a>
            ))}
          </div>
          <div className="lg:pt-16">
            <div className="rounded-2xl p-8 sticky top-8" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>
              <h3 className="text-xl font-bold text-white">Get our newsletter</h3>
              <p className="mt-2 text-sm text-white/70">Hand-picked articles, practical tips, and product updates. Delivered every Thursday.</p>
              <input type="email" placeholder="Your email address" className="mt-5 w-full px-4 py-3 rounded-lg text-sm" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }} />
              <button className="mt-3 w-full py-3 rounded-lg text-sm font-bold bg-white" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
              <p className="mt-3 text-xs text-white/50 text-center">Trusted by 8,000+ subscribers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
