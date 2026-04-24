import type { BlockProps } from "@/blocks/types";
import { User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Design for Emerging Markets", description: "Unique UX challenges and solutions for users in Africa and South Asia.", label: "Design", imageUrl: "", url: "#" },
  { title: "The Case for Progressive Enhancement", description: "Building sites that work everywhere, then enhancing for modern browsers.", label: "Engineering", imageUrl: "", url: "#" },
  { title: "Growth Lessons From Our First 1000 Users", description: "What worked, what failed, and what we would do differently.", label: "Growth", imageUrl: "", url: "#" },
];

export default function Blog026(props: BlockProps) {
  const { theme, heading = "Latest Posts", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
                  <User className="w-3.5 h-3.5 opacity-50" />
                </div>
                <span className="text-xs opacity-50">Editorial Team</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
