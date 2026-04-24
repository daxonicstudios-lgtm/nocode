import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Shipping Faster With Component Libraries", description: "How pre-built components cut our development time in half and improved consistency.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "Design Systems That Scale With Your Team", description: "A framework for maintaining visual coherence as your product and team grow.", label: "Apr 15, 2026", imageUrl: "", url: "#" },
  { title: "Why We Rebuilt Our Editor From Scratch", description: "The technical and business reasons behind our biggest architectural decision this year.", label: "Apr 8, 2026", imageUrl: "", url: "#" },
];

export default function Blog005(props: BlockProps) {
  const { theme, heading = "From the Blog", subheading = "Insights and updates from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <p className="text-xs opacity-50">{String(post.label ?? "")}</p>
              <h3 className="mt-1 font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                Read article <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
