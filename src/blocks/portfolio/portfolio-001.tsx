import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Helio — Rebrand", label: "Brand Identity · 2026" },
  { title: "Aster Bank — App redesign", label: "Product Design · 2025" },
  { title: "Kite & Co — E-commerce", label: "Web Design · 2025" },
  { title: "Otter Health — Marketing site", label: "Web · 2024" },
];

export default function Portfolio001(props: BlockProps) {
  const { theme, heading = "Selected projects", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.slice(0, 4).map((p, i) => (
            <article key={i}>
              <div className="aspect-[4/3] rounded-2xl mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm opacity-60 mt-1">{String(p.label)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
