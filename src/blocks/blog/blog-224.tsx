import type { BlockProps } from "@/blocks/types";
import { Eye } from "lucide-react";

const POSTS = [
  { title: "Headless CMS Comparison", description: "Sanity, Strapi, Contentful, and more — side by side.", label: "Tools" },
  { title: "Dark Mode Implementation", description: "System preference detection and smooth theme toggling.", label: "Frontend" },
  { title: "OKRs for Engineering Teams", description: "Align your team around measurable outcomes.", label: "Process" },
];

export default function Blog224(props: BlockProps) {
  const { theme, heading = "Blog Posts", subheading = "Discover our latest content.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.slice(0, 3).map((post, i) => (
            <article key={i} className="group text-left rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-2xl cursor-pointer" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="aspect-video relative overflow-hidden" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-5">
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
