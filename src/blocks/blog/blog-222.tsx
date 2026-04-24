import type { BlockProps } from "@/blocks/types";
import { MoveRight } from "lucide-react";

const POSTS = [
  { title: "Building Offline-First Apps", description: "Service workers and IndexedDB for resilient experiences.", label: "Engineering" },
  { title: "Content Strategy That Scales", description: "Plan, create, and distribute content systematically.", label: "Content" },
  { title: "Effective One-on-Ones", description: "Framework for meaningful manager-report conversations.", label: "Leadership" },
];

export default function Blog222(props: BlockProps) {
  const { theme, heading = "Featured Stories", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
              <div className="aspect-[4/5] transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-bold uppercase tracking-wide opacity-80">{post.label}</span>
                <h3 className="mt-1 text-lg font-bold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70 line-clamp-2">{post.description}</p>
                <span className="mt-3 flex items-center gap-1 text-sm font-medium translate-x-0 group-hover:translate-x-2 transition-transform duration-300">Read <MoveRight className="w-4 h-4" /></span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
