import type { BlockProps } from "@/blocks/types";
import { Pen, Clock } from "lucide-react";

const DEFAULTS = [
  { title: "Writing for the Web", description: "Online readers scan, they do not read. Structure your content for how people actually consume it.", label: "Writing", value: "9 min read" },
  { title: "A/B Testing Basics", description: "Test headlines, buttons, and layouts to find what works.", label: "Growth", value: "5 min" },
  { title: "Social Media Integration", description: "Add share buttons and feeds to your website.", label: "Social", value: "4 min" },
  { title: "Blog Post Templates", description: "Five proven formats for engaging blog content.", label: "Templates", value: "6 min" },
];

export default function Blog288(props: BlockProps) {
  const { theme, heading = "Read & Learn", subheading = "Curated articles for builders", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Pen className="w-4 h-4" style={{ color: theme?.primary ?? "#6366f1" }} />
              <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#6366f1" }}>{subheading}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{heading}</h2>
            <div className="p-6 rounded-2xl border-2 mb-4" style={{ borderColor: theme?.primary ?? "#6366f1" }}>
              <h3 className="text-xl font-bold">{featured?.title}</h3>
              <p className="opacity-70 mt-2">{featured?.description}</p>
              <div className="flex items-center gap-1 text-xs opacity-40 mt-3">
                <Clock className="w-3 h-3" />
                <span>{String(featured?.value ?? "")}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
            {rest.map((post, i) => (
              <article key={i} className="p-4 rounded-xl cursor-pointer hover:shadow-sm" style={{ backgroundColor: theme?.accent ?? "#f9fafb" }}>
                <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#6366f1" }}>{String(post.label ?? "")}</span>
                <h3 className="font-semibold mt-2">{post.title}</h3>
                <p className="text-sm opacity-60 mt-1">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
