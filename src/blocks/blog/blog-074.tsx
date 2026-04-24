import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Opinion: Why Every Startup Needs a Writing Culture", description: "Clear writing forces clear thinking. Companies that write well ship better products.", label: "Opinion" },
  { title: "Interview: Building Products for Emerging Markets", description: "Our CEO shares lessons from five years of product development.", label: "Interview" },
  { title: "Weekly Roundup: Top Developer Tools", description: "The most interesting launches and updates from this week.", label: "Roundup" },
  { title: "Analysis: The State of No-Code in 2026", description: "Market size, key players, and where the industry is heading.", label: "Analysis" },
];

export default function Blog074(props: BlockProps) {
  const { theme, heading = "Editorial", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="border-y-2 py-3 mb-10" style={{ borderColor: theme?.foreground ?? "#000" }}>
          <h2 className="text-center text-3xl font-serif font-black uppercase tracking-widest">{heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.slice(0, 2).map((post, i) => (
            <article key={i}>
              <div className="aspect-[3/2] rounded-lg mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme?.primary ?? "#b91c1c" }}>{String(post.label)}</span>
              <h3 className="mt-1 text-xl font-serif font-bold">{post.title}</h3>
              <p className="mt-2 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
        <div className="h-px my-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(2, 4).map((post, i) => (
            <article key={i} className="flex gap-4">
              <div className="w-20 h-20 shrink-0 rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-50">{String(post.label)}</span>
                <h3 className="mt-1 font-serif font-bold text-sm">{post.title}</h3>
                <p className="mt-1 text-xs opacity-60 line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
