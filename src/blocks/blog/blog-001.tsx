import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "How we built our design system", description: "Behind the scenes of our 12-month effort to unify the product.", label: "Engineering · 8 min read" },
  { title: "The economics of a mobile-first platform", description: "Why we bet the farm on people building websites from phones.", label: "Strategy · 5 min read" },
  { title: "Shipping changelog: April 2026", description: "Everything we shipped this month, in one post.", label: "Updates · 3 min read" },
];

export default function Blog001(props: BlockProps) {
  const { theme, heading = "From the blog", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((p, i) => (
            <article key={i}>
              <div className="aspect-[4/3] rounded-xl mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <p className="text-xs font-medium uppercase tracking-wider opacity-60">{String(p.label)}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm opacity-70">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
