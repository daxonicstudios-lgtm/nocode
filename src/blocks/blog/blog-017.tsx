import type { BlockProps } from "@/blocks/types";
import { Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why We Open-Sourced Our Component Library", description: "Giving back to the community that helped us build a better product.", label: "Open Source · 8 min", imageUrl: "", url: "#" },
  { title: "Designing for Right-to-Left Languages", description: "Technical and cultural considerations for supporting Arabic and Hebrew users.", label: "Internationalization · 6 min", imageUrl: "", url: "#" },
  { title: "Lessons From Running a Beta Program", description: "What 200 beta testers taught us about shipping software that people actually want.", label: "Product · 5 min", imageUrl: "", url: "#" },
  { title: "Edge Computing and the Future of Web Performance", description: "How moving code closer to users can dramatically improve load times.", label: "Infrastructure · 10 min", imageUrl: "", url: "#" },
];

export default function Blog017(props: BlockProps) {
  const { theme, heading = "Blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group flex flex-col sm:flex-row gap-5 py-8 first:pt-0">
              <div className="w-full sm:w-48 h-36 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-70 line-clamp-2">{post.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs opacity-40">
                  <Clock className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
