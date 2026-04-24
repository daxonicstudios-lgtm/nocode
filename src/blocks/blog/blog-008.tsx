import type { BlockProps } from "@/blocks/types";
import { User } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Why Small Teams Build Better Products", description: "Constraints breed creativity. Here is why our team of eight outships companies ten times our size.", label: "Culture · 8 min", imageUrl: "", url: "#" },
  { title: "From Figma to Production in One Day", description: "Our streamlined design-to-code pipeline that eliminated the handoff bottleneck.", label: "Process · 5 min", imageUrl: "", url: "#" },
  { title: "Content Strategy for Landing Pages", description: "The copywriting framework we use to turn visitors into customers on every page we build.", label: "Marketing · 7 min", imageUrl: "", url: "#" },
  { title: "Database Design for Multi-Tenant Apps", description: "Practical patterns for keeping user data isolated, secure, and fast at scale.", label: "Backend · 10 min", imageUrl: "", url: "#" },
];

export default function Blog008(props: BlockProps) {
  const { theme, heading = "Read Our Latest", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 4).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-2xl overflow-hidden border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="aspect-[2/1]" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs opacity-50">
                  <User className="w-3 h-3" />
                  <span>{String(post.label ?? "")}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
