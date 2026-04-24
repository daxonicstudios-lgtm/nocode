import type { BlockProps } from "@/blocks/types";
import { Calendar, ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Building Accessible Forms That Convert", description: "How to create forms that work for all users while maximizing your submission rates.", label: "Apr 20, 2026", imageUrl: "", url: "#" },
  { title: "Our Journey to Carbon-Neutral Hosting", description: "The steps we took to make our infrastructure greener and what it cost us.", label: "Apr 14, 2026", imageUrl: "", url: "#" },
  { title: "Customer Story: Accra Food Collective", description: "How a food delivery network built their ordering platform entirely on mobile.", label: "Apr 8, 2026", imageUrl: "", url: "#" },
  { title: "A/B Testing Without the Complexity", description: "Simple methods for testing your ideas that do not require expensive tools.", label: "Apr 1, 2026", imageUrl: "", url: "#" },
];

export default function Blog018(props: BlockProps) {
  const { theme, heading = "Stories & Updates", items = DEFAULT_ITEMS, buttonText = "View All Posts" } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        {items.slice(0, 4).map((post, i) => (
          <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-6 mb-6 p-4 rounded-2xl" style={{ backgroundColor: theme?.background ?? "#fff" }}>
            <div className="w-full sm:w-52 h-40 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-1 text-xs opacity-50 mb-1">
                <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
              <h3 className="text-lg font-bold group-hover:underline">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>
                Read <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
        <div className="mt-6 text-center">
          <a href="#" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}
