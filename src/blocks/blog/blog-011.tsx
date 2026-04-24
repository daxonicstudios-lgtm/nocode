import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Complete Guide to No-Code Development in 2026", description: "Everything you need to know about building websites, apps, and workflows without writing a single line of code.", label: "Featured", imageUrl: "", url: "#" },
  { title: "Mobile-First Design Principles", description: "Why starting with the smallest screen leads to better products for everyone.", label: "Design", imageUrl: "", url: "#" },
  { title: "AI and the Future of Web Building", description: "How conversational AI is replacing drag-and-drop editors.", label: "Technology", imageUrl: "", url: "#" },
];

export default function Blog011(props: BlockProps) {
  const { theme, heading = "Latest Articles", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 3);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <a href={featured?.url ?? "#"} className="group lg:col-span-3">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {featured?.imageUrl && <img src={featured.imageUrl} alt={featured.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(featured?.label ?? "")}</span>
            <h3 className="mt-2 text-2xl font-bold leading-snug group-hover:underline">{featured?.title}</h3>
            <p className="mt-2 opacity-70">{featured?.description}</p>
          </a>
          <div className="lg:col-span-2 space-y-6">
            {rest.map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group block">
                <div className="aspect-[3/2] rounded-xl overflow-hidden mb-3" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider opacity-50">{String(post.label ?? "")}</span>
                <h3 className="mt-1 font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
