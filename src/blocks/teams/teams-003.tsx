import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  title: ["Amara O.", "Daniel K.", "Nneka A.", "Ibrahim M.", "Sade B.", "Joseph O.", "Priya R.", "Tobi L."][i],
  label: ["CEO", "CTO", "Design", "Eng", "Product", "Sales", "Marketing", "Ops"][i],
}));

export default function Teams003(props: BlockProps) {
  const { theme, heading = "40 humans working on this", subheading = "Remote-first, spread across 14 countries.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.foreground ?? "#111", color: theme?.background ?? "#fff" }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
          {items.slice(0, 8).map((p, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square rounded-full bg-white/10 mb-2" />
              <p className="text-xs font-medium">{p.title}</p>
              <p className="text-[10px] opacity-60">{String(p.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
