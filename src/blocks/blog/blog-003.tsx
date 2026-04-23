import type { BlockProps } from "@/blocks/types";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_ITEMS = [
  { title: "How we approach customer research", description: "Our playbook for talking to 200+ users a quarter.", label: "Process" },
  { title: "Design principles we won't break", description: "The rules we gave ourselves — and why they matter.", label: "Design" },
  { title: "A year in reviews", description: "What 40,000 pieces of feedback taught us.", label: "Culture" },
];

export default function Blog003(props: BlockProps) {
  const { theme, heading = "Featured post", subheading = "More stories", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="aspect-[16/9] rounded-2xl mb-5" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
          <p className="text-xs font-medium uppercase tracking-wider opacity-60">{heading}</p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-semibold leading-tight">{items[0].title}</h3>
          <p className="mt-3 text-base opacity-75">{items[0].description}</p>
        </article>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider opacity-60 mb-6">{subheading}</h4>
          <ul className="space-y-5">
            {items.slice(1, 3).map((p, i) => (
              <li key={i} className="flex gap-3 items-start border-b pb-5 last:border-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
                <div>
                  <p className="text-xs opacity-60">{String(p.label)}</p>
                  <p className="font-semibold mt-1 text-sm">{p.title}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto flex-shrink-0 opacity-50" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
