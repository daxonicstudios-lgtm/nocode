import type { BlockProps } from "@/blocks/types";
import { Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Launching in a New Market? Read This First", description: "A checklist for expanding your product to a new geographic region, covering localization, payment methods, and cultural expectations.", label: "Business", imageUrl: "", url: "#" },
  { title: "Animation Principles for the Web", description: "Tasteful motion that guides attention.", label: "Design", imageUrl: "", url: "#" },
  { title: "How We Monitor Uptime Across 30 Regions", description: "Our observability stack explained in detail, from synthetic checks to real-user monitoring.", label: "Infrastructure", imageUrl: "", url: "#" },
  { title: "Writing Effective Alt Text", description: "Make images accessible in seconds.", label: "Accessibility", imageUrl: "", url: "#" },
  { title: "What Is Edge Computing?", description: "A simple explanation of edge computing and why it matters for website performance and latency.", label: "Technology", imageUrl: "", url: "#" },
  { title: "Our Favorite VS Code Extensions", description: "The tools our engineering team cannot live without.", label: "Tools", imageUrl: "", url: "#" },
];

export default function Blog042(props: BlockProps) {
  const { theme, heading = "Explore Topics", subheading = "Ideas worth your time.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.slice(0, 6).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block break-inside-avoid rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              {i % 3 === 0 && (
                <div className="aspect-video" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs font-medium mb-2" style={{ color: theme?.primary ?? "#6366f1" }}>
                  <Tag className="w-3 h-3" /> {String(post.label ?? "")}
                </div>
                <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
