import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Acme" }, { title: "Monarch" }, { title: "Vertex" }, { title: "Northwind" }, { title: "Helix" }, { title: "Pulse" }, { title: "Orbit" }, { title: "Keel" },
];

export default function Logos002(props: BlockProps) {
  const { theme, heading = "Powering 12,000+ brands", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-medium opacity-70 mb-6">{heading}</p>
        <div className="flex gap-12 whitespace-nowrap animate-pulse-slow justify-center flex-wrap">
          {items.slice(0, 8).map((l, i) => (
            <span key={i} className="text-xl font-semibold opacity-50 tracking-tight">{l.title}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
