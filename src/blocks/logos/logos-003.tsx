import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Acme", description: "Logistics" },
  { title: "Monarch", description: "Fintech" },
  { title: "Vertex", description: "Healthcare" },
  { title: "Northwind", description: "E-commerce" },
];

export default function Logos003(props: BlockProps) {
  const { theme, heading = "Some of our favorite customers", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((l, i) => (
            <div key={i} className="p-6 rounded-2xl border text-center" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="text-xl font-semibold">{l.title}</p>
              <p className="text-xs opacity-60 mt-1">{l.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
