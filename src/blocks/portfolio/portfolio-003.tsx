import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Helio — Rebrand & packaging", description: "Complete visual refresh for a 30-year-old skincare brand.", label: "Featured case study" },
];

export default function Portfolio003(props: BlockProps) {
  const { theme, items = DEFAULT_ITEMS } = props;
  const p = items[0];

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="aspect-[16/9] rounded-3xl mb-8" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
        <p className="text-xs uppercase tracking-wider opacity-60">{String(p.label)}</p>
        <h2 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">{p.title}</h2>
        <p className="mt-4 text-base opacity-75 max-w-2xl">{p.description}</p>
        <a href="#" className="mt-8 inline-block px-6 py-3 rounded-full text-white text-sm font-medium" style={{ backgroundColor: theme?.primary ?? "#000" }}>View case study</a>
      </div>
    </section>
  );
}
