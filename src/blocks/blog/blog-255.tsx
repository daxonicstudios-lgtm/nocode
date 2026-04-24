import type { BlockProps } from "@/blocks/types";
import { Hash } from "lucide-react";

const DEFAULTS = [
  { title: "The Definitive Guide to Landing Pages", description: "Everything you need to convert visitors into customers.", label: "Guide", value: "15 min read" },
  { title: "Color Psychology in Web Design", description: "Why certain colors drive more clicks than others.", label: "Design", value: "8 min read" },
  { title: "Automating Your Workflow", description: "Save hours every week with smart automation setups.", label: "Productivity", value: "6 min read" },
  { title: "Writing Copy That Converts", description: "Words matter more than design. Here is how to get them right.", label: "Copywriting", value: "5 min read" },
];

export default function Blog255(props: BlockProps) {
  const { theme, heading = "Must-Read Articles", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        <div className="sticky top-0 z-10 pb-4" style={{ backgroundColor: theme?.background ?? "#fff" }}>
          <div className="flex flex-col sm:flex-row gap-5 rounded-xl border p-4" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
            <div className="sm:w-48 h-32 sm:h-auto rounded-lg shrink-0" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
            <div className="flex-1">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: theme?.primary ?? "#6366f1", color: "#fff" }}>{String(featured?.label ?? "")}</span>
              <h3 className="text-xl font-bold mt-2">{featured?.title}</h3>
              <p className="opacity-70 text-sm mt-1">{featured?.description}</p>
              <span className="text-xs opacity-40 mt-2 block">{String(featured?.value ?? "")}</span>
            </div>
          </div>
        </div>
        <ol className="mt-4 space-y-3">
          {rest.map((post, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg hover:opacity-80 cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 text-sm font-bold" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }}>
                <Hash className="w-3 h-3 opacity-40" />
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
