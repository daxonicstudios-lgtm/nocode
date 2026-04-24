import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why Your Website Needs a Blog", description: "Content marketing drives organic traffic, builds authority, and gives visitors a reason to return.", label: "Marketing", imageUrl: "", url: "#" },
  { title: "The Psychology Behind Great UX", description: "Cognitive biases and design heuristics that shape how people interact with interfaces.", label: "UX", imageUrl: "", url: "#" },
  { title: "How We Handle Database Migrations", description: "Zero-downtime schema changes at scale with Supabase and Postgres.", label: "Backend", imageUrl: "", url: "#" },
];

export default function Blog046(props: BlockProps) {
  const { theme, heading = "Our Blog", subheading = "Ideas, tutorials, and company updates.", items = DEFAULT_ITEMS, buttonText = "Subscribe" } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-14">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-2 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
        <div className="rounded-2xl p-8 sm:p-12 text-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
          <h3 className="text-2xl font-bold">Stay in the loop</h3>
          <p className="mt-2 opacity-60 max-w-md mx-auto">Get the latest articles and product updates delivered straight to your inbox. No spam, ever.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="you@example.com" className="flex-1 px-4 py-3 rounded-lg border text-sm" style={{ borderColor: theme?.secondary ?? "#e5e7eb", backgroundColor: theme?.background ?? "#fff" }} />
            <button className="px-6 py-3 rounded-lg text-sm font-semibold text-white shrink-0" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
