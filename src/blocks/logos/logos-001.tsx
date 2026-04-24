import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Acme" }, { title: "Monarch" }, { title: "Vertex" }, { title: "Northwind" }, { title: "Helix" }, { title: "Pulse" },
];

export default function Logos001(props: BlockProps) {
  const { theme, heading = "Trusted by teams at", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-16">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest opacity-60 mb-8">{heading}</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {items.slice(0, 6).map((l, i) => (
            <div key={i} className="text-center opacity-50 hover:opacity-100 transition-opacity font-semibold text-lg tracking-tight">{l.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
