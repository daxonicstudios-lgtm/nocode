import type { BlockProps } from "@/blocks/types";
import { BookOpen } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Responsive Images Done Right", description: "How to serve the perfect image size for every device and save bandwidth in the process.", label: "Performance · 7 min", imageUrl: "", url: "#" },
  { title: "What Makes a Great Product Demo", description: "Lessons from analyzing hundreds of demo videos that actually convert viewers into users.", label: "Sales · 5 min", imageUrl: "", url: "#" },
  { title: "Navigating Payment Regulations in Africa", description: "A practical guide to compliance when accepting online payments across the continent.", label: "Legal · 9 min", imageUrl: "", url: "#" },
  { title: "Building a Design System From Scratch", description: "The process, tools, and decisions involved in creating a consistent component library.", label: "Design · 12 min", imageUrl: "", url: "#" },
];

export default function Blog020(props: BlockProps) {
  const { theme, heading = "Long Reads", subheading = "In-depth articles worth your time.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        {items.slice(0, 4).map((post, i) => (
          <a key={i} href={post.url ?? "#"} className="group grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-5 py-6 border-b last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
            <div className="h-36 sm:h-full rounded-xl overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs opacity-50 mb-2">
                <BookOpen className="w-3 h-3" /> {String(post.label ?? "")}
              </div>
              <h3 className="text-xl font-bold leading-snug group-hover:underline">{post.title}</h3>
              <p className="mt-2 text-sm opacity-70">{post.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
