import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Rethinking Onboarding for Mobile Users", description: "How we redesigned our first-time experience to reduce drop-off by 40% on small screens.", label: "UX Design", imageUrl: "", url: "#" },
  { title: "The No-Code Movement Hits a Tipping Point", description: "Industry analysis suggests more than half of new websites in 2026 will be built without writing code.", label: "Industry", imageUrl: "", url: "#" },
  { title: "Behind the Scenes of Our Brand Refresh", description: "The creative process, missteps, and breakthroughs that shaped our new visual identity.", label: "Branding", imageUrl: "", url: "#" },
  { title: "Security Best Practices for SaaS Startups", description: "A practical checklist for protecting user data when you are growing fast and resources are thin.", label: "Security", imageUrl: "", url: "#" },
];

export default function Blog007(props: BlockProps) {
  const { theme, heading = "Featured Stories", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
            All stories <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group flex gap-5 items-start rounded-xl p-4" style={{ backgroundColor: theme?.background ?? "#ffffff" }}>
              <div className="w-40 h-32 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <h3 className="mt-1 text-lg font-bold leading-snug group-hover:underline line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
