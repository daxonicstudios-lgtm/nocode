import type { BlockProps } from "@/blocks/types";
import { Bookmark, Clock, ChevronRight } from "lucide-react";

const FEATURED = { title: "The Complete Guide to Design Tokens", description: "Everything you need to know about bridging design and development with tokens.", label: "Design Systems", value: "12 min read" };
const POSTS = [
  { title: "Webhooks Done Right", description: "Reliable event delivery patterns for modern APIs.", label: "Backend", value: "5 min" },
  { title: "Hiring Your First Engineer", description: "What to look for beyond technical skills.", label: "Startup", value: "7 min" },
];

export default function Blog210(props: BlockProps) {
  const { theme, heading = "From the Blog", buttonText = "All Posts", buttonUrl = "#", items = POSTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <a href={buttonUrl} className="flex items-center gap-1 text-sm font-medium" style={{ color: theme?.primary ?? "#6366f1" }}>{buttonText}<ChevronRight className="w-4 h-4" /></a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl overflow-hidden border" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
            <div className="aspect-video relative" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
              <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur hover:bg-white transition" aria-label="Bookmark"><Bookmark className="w-4 h-4" /></button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs opacity-50 mb-2"><Clock className="w-3 h-3" />{FEATURED.value}</div>
              <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{FEATURED.label}</span>
              <h3 className="mt-2 text-xl font-bold">{FEATURED.title}</h3>
              <p className="mt-2 text-sm opacity-70">{FEATURED.description}</p>
            </div>
          </article>
          <div className="space-y-4">
            {items.slice(0, 2).map((post, i) => (
              <article key={i} className="flex gap-4 p-4 border rounded-xl" style={{ borderColor: theme?.accent ?? "#e5e7eb" }}>
                <div className="w-24 h-24 shrink-0 rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase opacity-50">{post.label}</span>
                  <h3 className="mt-1 font-bold">{post.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{post.description}</p>
                  <span className="text-xs opacity-40 mt-2 flex items-center gap-1"><Clock className="w-3 h-3" />{post.value}</span>
                </div>
                <button className="self-start p-1.5 hover:bg-black/5 rounded-full transition" aria-label="Bookmark"><Bookmark className="w-4 h-4" /></button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
