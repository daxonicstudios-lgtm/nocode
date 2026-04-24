import type { BlockProps } from "@/blocks/types";
import { Sparkles } from "lucide-react";

const POSTS = [
  { title: "Building a CLI Tool", description: "From argument parsing to publishing on npm.", label: "Tutorial" },
  { title: "Event-Driven Architecture", description: "Decouple services with message queues and event buses.", label: "Architecture" },
  { title: "Crafting a Pricing Page", description: "Layout, psychology, and conversion best practices.", label: "Design" },
];

export default function Blog227(props: BlockProps) {
  const { theme, heading = "Fresh from the Blog", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 justify-center mb-2"><Sparkles className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} /><h2 className="text-3xl font-bold">{heading}</h2></div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-xl cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="aspect-video overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              </div>
              <div className="p-5 transition-all duration-300 group-hover:pl-7">
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{post.label}</span>
                <h3 className="mt-2 text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
