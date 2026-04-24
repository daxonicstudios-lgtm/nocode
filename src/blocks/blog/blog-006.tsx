import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Inside Our Product Roadmap for 2026", description: "A transparent look at what we are building next and why these features matter to our users.", label: "Strategy", imageUrl: "", url: "#" },
  { title: "How Mobile Commerce Is Reshaping Africa", description: "The data behind the continent's fastest-growing digital economy and what it means for builders.", label: "Market Research", imageUrl: "", url: "#" },
  { title: "Conversations With Early Adopters", description: "Five founders share how they launched businesses using our platform in under a week.", label: "Community", imageUrl: "", url: "#" },
  { title: "Performance Budgets That Actually Work", description: "Setting and enforcing web performance targets that make a real difference for your visitors.", label: "Engineering", imageUrl: "", url: "#" },
];

export default function Blog006(props: BlockProps) {
  const { theme, heading = "Magazine", subheading = "Long-form stories and deep dives.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60 mb-12">{subheading}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              <h3 className="mt-2 text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70 line-clamp-2">{post.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs opacity-40">
                <Clock className="w-3 h-3" /> 6 min read
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
