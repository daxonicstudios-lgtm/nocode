import type { BlockProps } from "@/blocks/types";
import { ArrowRight, Tag } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "GraphQL Federation in Practice", description: "Stitching microservice APIs into a unified graph layer.", label: "API", imageUrl: "" },
  { title: "Motion Design with Framer", description: "Creating delightful micro-interactions for web apps.", label: "Motion", imageUrl: "" },
  { title: "Testing Strategies for 2026", description: "Shift-left testing and AI-powered test generation.", label: "QA", imageUrl: "" },
];

export default function Blog108(props: BlockProps) {
  const {
    theme,
    heading = "From the Lab",
    subheading = "Experimental ideas and deep research",
    buttonUrl = "#",
    items = DEFAULT_ITEMS,
  } = props;

  return (
    <section
      className="px-5 py-20"
      style={{
        background: theme?.background ?? "linear-gradient(180deg, #0c0a1d 0%, #16132b 50%, #0c0a1d 100%)",
        color: theme?.foreground ?? "#ddd6fe",
      }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-black">{heading}</h2>
        <p className="mt-3 text-sm opacity-50 max-w-md mx-auto">{subheading}</p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.slice(0, 3).map((item, i) => (
          <a
            key={i}
            href={buttonUrl}
            className="group block rounded-3xl overflow-hidden border border-white/5 backdrop-blur-2xl hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <div
              className="h-44 relative"
              style={{ background: `linear-gradient(${100 + i * 30}deg, ${theme?.primary ?? "#7c3aed"}50, ${theme?.accent ?? "#ec4899"}30)` }}
            >
              <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                <Tag className="w-3 h-3" /> {String(item.label)}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold group-hover:underline">{item.title}</h3>
              <p className="mt-2 text-sm opacity-50 line-clamp-2">{item.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold" style={{ color: theme?.primary ?? "#a78bfa" }}>
                Continue reading <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
