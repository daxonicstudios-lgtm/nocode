import type { BlockProps } from "@/blocks/types";
import { Circle } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Platform Launch", description: "We officially opened our doors to the first 500 beta users worldwide.", label: "Jan 2026" },
  { title: "Mobile Editor Shipped", description: "Full drag-and-drop editing now works on phones and tablets.", label: "Feb 2026" },
  { title: "10,000 Websites Created", description: "A major milestone — and we are just getting started.", label: "Mar 2026" },
  { title: "AI Agent v2 Released", description: "Smarter suggestions, faster builds, and multi-page support.", label: "Apr 2026" },
];

export default function Blog056(props: BlockProps) {
  const { theme, heading = "Our Journey", subheading = "Key moments in our story", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">{heading}</h2>
        <p className="mt-2 text-sm opacity-60 text-center">{subheading}</p>
        <div className="relative mt-14 pl-8 border-l-2" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
          {items.slice(0, 4).map((post, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              <Circle className="absolute -left-[25px] w-4 h-4 fill-current" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="text-xs font-bold uppercase tracking-wider opacity-50">{String(post.label)}</span>
              <h3 className="mt-1 text-lg font-bold">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
