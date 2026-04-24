import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How Remote Teams Stay Productive", description: "Lessons from managing distributed teams across three continents and twelve time zones.", label: "Productivity", imageUrl: "", url: "#" },
  { title: "The Rise of AI-Powered Design", description: "How machine learning is transforming the way we approach visual design and user experience.", label: "Technology", imageUrl: "", url: "#" },
  { title: "Building Trust With Your First 100 Users", description: "A practical playbook for earning loyalty when you have no brand recognition yet.", label: "Growth", imageUrl: "", url: "#" },
];

export default function Blog003(props: BlockProps) {
  const { theme, heading = "Recent Posts", subheading = "Stay informed with our latest thinking.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60 max-w-lg mx-auto">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-[4/3]" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs opacity-50 mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>Apr 2026</span>
                </div>
                <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <span className="mt-3 inline-block text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: theme?.accent ?? "#f1f5f9", color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
