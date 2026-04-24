import type { BlockProps } from "@/blocks/types";
import { TrendingUp } from "lucide-react";

const DEFAULTS = [
  { title: "How We Built Our Component Library", description: "From 10 blocks to 10,000. The engineering journey behind our massive component system.", label: "Engineering", value: "12 min" },
  { title: "Responsive Design Patterns", description: "Layouts that look great from 320px to 4K.", label: "Design", value: "7 min" },
  { title: "E-commerce Conversion Secrets", description: "Data-driven strategies that boost sales.", label: "Business", value: "9 min" },
  { title: "Accessibility for Designers", description: "Make beautiful sites everyone can use.", label: "A11y", value: "5 min" },
];

export default function Blog282(props: BlockProps) {
  const { theme, heading = "Trending Articles", items = DEFAULTS } = props;
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#ef4444" }} />
          <h2 className="text-3xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <article className="lg:col-span-3 rounded-2xl overflow-hidden cursor-pointer group">
            <div className="aspect-[16/10] rounded-2xl mb-4" style={{ backgroundColor: theme?.accent ?? "#f3f4f6" }} />
            <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#ef4444" }}>{String(featured?.label ?? "")}</span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2 group-hover:underline">{featured?.title}</h3>
            <p className="opacity-70 mt-2">{featured?.description}</p>
          </article>
          <div className="lg:col-span-2 space-y-4">
            {rest.map((post, i) => (
              <article key={i} className="flex gap-3 cursor-pointer group">
                <span className="text-2xl font-black opacity-10 shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="text-xs font-medium opacity-50">{String(post.label ?? "")}</span>
                  <h3 className="font-semibold mt-0.5 group-hover:underline">{post.title}</h3>
                  <p className="text-sm opacity-60 mt-0.5">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
