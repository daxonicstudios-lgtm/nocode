import type { BlockProps } from "@/blocks/types";
import { User, Clock } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Micro-Frontends: Worth the Complexity?", description: "An honest assessment of the architectural pattern everyone is talking about.", label: "Architecture", imageUrl: "", url: "#" },
  { title: "How Color Psychology Drives Conversions", description: "Evidence-based approaches to choosing brand colors that influence behavior.", label: "Marketing", imageUrl: "", url: "#" },
  { title: "Building Trust Through Transparent Pricing", description: "Why hidden fees destroy customer relationships and what to do instead.", label: "Business", imageUrl: "", url: "#" },
];

export default function Blog027(props: BlockProps) {
  const { theme, heading = "Insights & Ideas", subheading = "Expert perspectives on building for the web.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-2 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((post, i) => (
            <a key={i} href={post.url ?? "#"} className="group block rounded-2xl overflow-hidden" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="aspect-[3/2] relative" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded" style={{ backgroundColor: theme?.accent ?? "#f1f5f9", color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <h3 className="mt-3 text-lg font-bold leading-snug group-hover:underline">{post.title}</h3>
                <p className="mt-2 text-sm opacity-60 line-clamp-2">{post.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                      <User className="w-3 h-3 opacity-50" />
                    </div>
                    <span className="text-xs opacity-50">Team Blog</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs opacity-40">
                    <Clock className="w-3 h-3" /> 5 min
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
