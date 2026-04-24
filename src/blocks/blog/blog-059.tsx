import type { BlockProps } from "@/blocks/types";
import { Minus } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Year in Review: 2025", description: "Reflecting on the lessons, failures, and wins of our first full year.", label: "Dec 2025" },
  { title: "Why We Chose Supabase", description: "The technical and business reasons behind our backend choice.", label: "Nov 2025" },
  { title: "Launching in Nigeria", description: "Our first market entry — challenges, surprises, and early traction.", label: "Oct 2025" },
];

export default function Blog059(props: BlockProps) {
  const { theme, heading = "Company Timeline", subheading = "Follow our progress from idea to scale.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f9fafb", color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-2 text-sm opacity-60">{subheading}</p>
      </div>
      <div className="max-w-2xl mx-auto mt-14">
        {items.slice(0, 3).map((post, i) => (
          <div key={i} className="flex items-start gap-4 mb-8 last:mb-0">
            <div className="flex flex-col items-center mt-1">
              <Minus className="w-5 h-5 rotate-90" style={{ color: theme?.primary ?? "#6366f1" }} />
              {i < items.length - 1 && <div className="w-px h-16" style={{ backgroundColor: theme?.secondary ?? "#d1d5db" }} />}
            </div>
            <div className="rounded-xl p-5 flex-1" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label)}</span>
              <h3 className="mt-2 font-bold text-lg">{post.title}</h3>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
