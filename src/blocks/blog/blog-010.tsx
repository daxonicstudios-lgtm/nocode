import type { BlockProps } from "@/blocks/types";
import { Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How We Hire for Culture Without Sacrificing Skill", description: "Our interview process emphasizes both technical ability and human qualities in equal measure.", label: "Apr 20, 2026", imageUrl: "", url: "#" },
  { title: "The Psychology Behind Great Landing Pages", description: "Evidence-based design patterns that tap into how people actually make decisions online.", label: "Apr 14, 2026", imageUrl: "", url: "#" },
  { title: "Open-Source Tools We Rely On Every Day", description: "A curated list of the libraries and frameworks that power our stack and why we chose them.", label: "Apr 7, 2026", imageUrl: "", url: "#" },
  { title: "Writing Documentation That People Actually Read", description: "Strategies for creating docs that help users help themselves and reduce support tickets.", label: "Mar 30, 2026", imageUrl: "", url: "#" },
];

export default function Blog010(props: BlockProps) {
  const { theme, heading = "The Journal", subheading = "Ideas and perspectives from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="group">
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex items-center gap-1 text-xs opacity-50 mb-2">
                <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
              <h3 className="text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
