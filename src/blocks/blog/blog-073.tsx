import type { BlockProps } from "@/blocks/types";
import { TrendingUp } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "Central Bank Introduces New Digital Currency Framework", description: "Regulations aim to balance innovation with consumer protection in the growing digital payments space.", label: "Top Story" },
  { title: "Cloud Infrastructure Spending Surges", description: "Enterprise cloud adoption accelerates across emerging markets.", label: "Enterprise" },
  { title: "Social Commerce Outpaces Traditional E-commerce", description: "Buying through chat apps and social platforms grows 200%.", label: "Commerce" },
  { title: "Developer Salaries Rise 15% Year Over Year", description: "Demand for full-stack engineers continues to outstrip supply.", label: "Careers" },
];

export default function Blog073(props: BlockProps) {
  const { theme, heading = "Trending Now", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5" style={{ color: theme?.primary ?? "#dc2626" }} />
          <h2 className="text-2xl font-bold">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="aspect-[4/3] rounded-xl mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
            <span className="text-xs font-bold uppercase" style={{ color: theme?.primary ?? "#dc2626" }}>{String(items[0]?.label)}</span>
            <h3 className="mt-1 text-xl font-bold">{items[0]?.title}</h3>
            <p className="mt-2 text-sm opacity-60">{items[0]?.description}</p>
          </div>
          {items.slice(1, 4).map((post, i) => (
            <article key={i} className="flex gap-4 lg:flex-col">
              <div className="w-24 h-24 lg:w-full lg:h-32 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">{String(post.label)}</span>
                <h3 className="mt-1 font-bold text-sm">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
