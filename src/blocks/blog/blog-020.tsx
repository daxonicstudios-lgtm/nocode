import type { BlockProps } from "@/blocks/types";
import { ArrowRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Getting Started with Our Platform", description: "A beginner-friendly guide to your first project.", label: "Tutorial · 4 min" },
  { title: "Advanced Customization Techniques", description: "Take your projects to the next level with these tips.", label: "Advanced · 7 min" },
  { title: "Community Spotlight: March Edition", description: "Highlighting amazing projects built by our community.", label: "Community · 3 min" },
];

export default function Blog020(props: BlockProps) {
  const { theme, heading = "Recent articles", subheading = "Thoughts, stories, and ideas from our team.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">{heading}</h2>
        <p className="opacity-60 mb-10">{subheading}</p>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 5).map((post, i) => (
            <article key={i} className="py-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider opacity-50">{String(post.label ?? "")}</p>
                <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm opacity-70">{post.description}</p>
              </div>
              <ArrowRight className="w-5 h-5 shrink-0 mt-2 opacity-30" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
