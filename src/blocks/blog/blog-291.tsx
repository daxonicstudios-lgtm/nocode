import type { BlockProps } from "@/blocks/types";
import { Clock, ArrowUpRight } from "lucide-react";

const DEFAULTS = [
  { title: "The Definitive Guide to No-Code in Africa", description: "A deep exploration of the tools, communities, and opportunities shaping the continent's digital future.", label: "Cover Story", value: "20 min read" },
  { title: "Interview: Building for Mobile-First Markets", description: "Our CTO discusses the challenges and triumphs of designing for phones.", label: "Interview", value: "12 min" },
  { title: "Micro-SaaS Ideas for 2026", description: "Profitable niches you can build this weekend.", label: "Ideas", value: "8 min" },
  { title: "Component-Driven Development", description: "Why reusable blocks are the future of web design.", label: "Engineering", value: "10 min" },
  { title: "Community Awards Winners", description: "Celebrating the best sites built on our platform.", label: "Community", value: "5 min" },
  { title: "Revenue Report: Q1 2026", description: "Transparent numbers from our first quarter.", label: "Business", value: "4 min" },
];

export default function Blog291(props: BlockProps) {
  const { theme, heading = "The Magazine", subheading = "In-depth stories and analysis", items = DEFAULTS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">{heading}</h2>
            <p className="opacity-60 mt-1">{subheading}</p>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium opacity-60 hover:opacity-100 shrink-0">
            All posts <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((post, i) => (
            <article key={i} className={`rounded-2xl overflow-hidden cursor-pointer group ${i === 0 ? "sm:col-span-2 lg:col-span-2 sm:row-span-2" : ""}`}>
              <div className={`${i === 0 ? "aspect-[16/9]" : "aspect-video"} rounded-2xl mb-3`} style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
              <div className="pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                  <div className="flex items-center gap-1 text-xs opacity-40">
                    <Clock className="w-3 h-3" />
                    <span>{String(post.value ?? "")}</span>
                  </div>
                </div>
                <h3 className={`font-bold group-hover:underline ${i === 0 ? "text-2xl sm:text-3xl" : "text-lg"}`}>{post.title}</h3>
                <p className={`opacity-60 mt-1 ${i === 0 ? "text-base" : "text-sm"}`}>{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
