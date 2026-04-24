import type { BlockProps } from "@/blocks/types";
import { Bookmark, Clock } from "lucide-react";

const POSTS = [
  { title: "Sustainable Tech Practices", description: "How companies are reducing their carbon footprint through smarter engineering.", label: "Green Tech", value: "6 min" },
  { title: "UX Writing That Converts", description: "Small copy changes that lead to big conversion improvements.", label: "Design", value: "4 min" },
  { title: "Fundraising in a Downturn", description: "Practical advice for startups raising capital in uncertain markets.", label: "Startup", value: "8 min" },
  { title: "The Rise of Edge Computing", description: "Why processing data closer to users changes everything.", label: "Infrastructure", value: "5 min" },
];

export default function Blog202(props: BlockProps) {
  const { theme, heading = "Saved for Later", subheading = "Bookmark your favorite articles and come back anytime.", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold">{heading}</h2>
        <p className="mt-2 opacity-60">{subheading}</p>
        <div className="mt-10 space-y-4">
          {items.slice(0, 4).map((post, i) => (
            <article key={i} className="flex items-start gap-4 p-4 rounded-xl border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
              <div className="w-20 h-20 shrink-0 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs opacity-50 mb-1">
                  <span className="font-medium uppercase">{post.label}</span>
                  <span className="flex items-center gap-0.5"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <h3 className="font-semibold truncate">{post.title}</h3>
                <p className="text-sm opacity-70 mt-1 line-clamp-1">{post.description}</p>
              </div>
              <button className="shrink-0 p-2 rounded-full hover:bg-black/5 transition" aria-label="Bookmark">
                <Bookmark className="w-5 h-5" style={{ color: theme?.primary ?? "#6366f1" }} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
