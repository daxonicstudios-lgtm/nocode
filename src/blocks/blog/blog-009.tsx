import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "The Art of Writing Product Announcements", description: "How to communicate new features in a way that excites users and drives adoption.", label: "Marketing", imageUrl: "", url: "#" },
  { title: "Lessons From Our First Year of Growth", description: "Revenue, user numbers, and the hard-won insights that got us from zero to here.", label: "Startup", imageUrl: "", url: "#" },
  { title: "Designing for Low-Bandwidth Environments", description: "Techniques for delivering a great experience even when connectivity is unreliable.", label: "Performance", imageUrl: "", url: "#" },
  { title: "Building an API That Developers Love", description: "What we learned from watching hundreds of developers integrate with our platform.", label: "Developer", imageUrl: "", url: "#" },
];

export default function Blog009(props: BlockProps) {
  const { theme, heading = "Explore Our Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 p-5 rounded-2xl hover:shadow-md transition-shadow" style={{ backgroundColor: theme?.accent ?? "#f8fafc" }}>
              <div className="w-full sm:w-48 h-36 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1 text-xs font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="mt-2 text-lg font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
