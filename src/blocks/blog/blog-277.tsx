import type { BlockProps } from "@/blocks/types";
import { User, Share } from "lucide-react";

const REACTIONS = ["128077", "10084", "128293", "128640", "128588"];
const DEFAULTS = [
  { title: "We just crossed 50,000 users", description: "What started as a weekend project is now serving creators across 12 countries. Grateful for every single user.", label: "Team Blog", value: "Today" },
  { title: "New tutorial series launching Monday", description: "Ten episodes covering everything from setup to advanced customization. Free for all users.", label: "Content Team", value: "Yesterday" },
  { title: "Your feedback shaped our roadmap", description: "We read every single suggestion. Here are the top five features coming in Q3.", label: "Product", value: "2 days ago" },
];

export default function Blog277(props: BlockProps) {
  const { theme, heading = "Updates", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">{heading}</h2>
        <div className="space-y-5">
          {items.map((post, i) => (
            <article key={i} className="rounded-2xl border p-5" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>
                  <User className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{String(post.label ?? "")}</p>
                  <p className="text-xs opacity-40">{String(post.value ?? "")}</p>
                </div>
                <Share className="w-4 h-4 opacity-30 cursor-pointer" />
              </div>
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm opacity-70 mt-2 leading-relaxed">{post.description}</p>
              <div className="flex items-center gap-2 mt-4 pt-3 border-t" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                {REACTIONS.slice(0, 3 + i).map((code, j) => (
                  <span key={j} className="text-lg cursor-pointer hover:scale-125 transition-transform">
                    {String.fromCodePoint(Number(code))}
                  </span>
                ))}
                <span className="text-xs opacity-40 ml-2">{42 + i * 18} reactions</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
