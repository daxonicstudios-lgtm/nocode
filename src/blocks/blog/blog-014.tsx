import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Calendar } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How to Choose the Right Template for Your Business", description: "A decision framework that helps you pick the perfect starting point based on your industry and goals.", label: "Apr 22, 2026", imageUrl: "", url: "#" },
  { title: "Announcing Real-Time Collaboration", description: "Multiple team members can now edit the same project simultaneously.", label: "Apr 18, 2026", imageUrl: "", url: "#" },
  { title: "SEO Basics Every Website Owner Should Know", description: "Practical steps to help search engines find and rank your pages.", label: "Apr 12, 2026", imageUrl: "", url: "#" },
];

export default function Blog014(props: BlockProps) {
  const { theme, heading = "What's New", items = DEFAULT_ITEMS } = props;

  const featured = items[0];
  const rest = items.slice(1, 3);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">{heading}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <a href={featured?.url ?? "#"} className="group block">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {featured?.imageUrl && <img src={featured.imageUrl} alt={featured.title ?? ""} className="w-full h-full object-cover" />}
            </div>
            <div className="flex items-center gap-1 text-xs opacity-50 mb-2">
              <Calendar className="w-3 h-3" /> {String(featured?.label ?? "")}
            </div>
            <h3 className="text-2xl font-bold group-hover:underline">{featured?.title}</h3>
            <p className="mt-2 opacity-70">{featured?.description}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: theme?.primary ?? "#6366f1" }}>
              Continue reading <ArrowRight className="w-4 h-4" />
            </span>
          </a>
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <a key={i} href={post.url ?? "#"} className="group flex gap-4 items-start flex-1">
                <div className="w-36 h-28 rounded-xl shrink-0 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                  {post.imageUrl && <img src={post.imageUrl} alt={post.title ?? ""} className="w-full h-full object-cover" />}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs opacity-50 mb-1">
                    <Calendar className="w-3 h-3" /> {String(post.label ?? "")}
                  </div>
                  <h3 className="font-bold leading-snug group-hover:underline">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-60 line-clamp-2">{post.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
