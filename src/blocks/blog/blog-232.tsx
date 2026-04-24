import type { BlockProps } from "@/blocks/types";
import { Pen, AtSign } from "lucide-react";

const AUTHOR = { title: "Marcus Johnson", description: "Product designer turned writer. Passionate about design systems and accessibility.", label: "@marcusj" };
const POSTS = [
  { title: "Inclusive Design Checklist", description: "Practical steps to make your product usable by everyone.", label: "Design" },
  { title: "Design Tokens in Practice", description: "Bridge the gap between Figma and code with tokens.", label: "Systems" },
  { title: "Motion Design Principles", description: "Meaningful animation that enhances user experience.", label: "Animation" },
];

export default function Blog232(props: BlockProps) {
  const { theme, heading = "Featured Writer", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div className="space-y-5">
            {items.slice(0, 3).map((post, i) => (
              <article key={i} className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="w-24 h-24 shrink-0 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
                <div>
                  <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                  <h3 className="mt-1 font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="border rounded-2xl p-6 h-fit" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: theme?.primary ?? "#6366f1" }}><Pen className="w-8 h-8 text-white" /></div>
            <h3 className="mt-4 text-center font-bold text-lg">{AUTHOR.title}</h3>
            <p className="text-center text-xs opacity-50 mt-1 flex items-center justify-center gap-1"><AtSign className="w-3 h-3" />{AUTHOR.label}</p>
            <p className="mt-3 text-sm opacity-70 text-center">{AUTHOR.description}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
