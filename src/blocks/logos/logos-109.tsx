import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Partner 1" }, { title: "Partner 2" }, { title: "Partner 3" },
  { title: "Partner 4" }, { title: "Partner 5" },
];
export default function Logos109(props: BlockProps) {
  const { theme, heading = "Dark logo showcase", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-16" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm opacity-40 mb-8">{heading}</p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {items.slice(0, 6).map((logo, i) => (
            <div key={i} className="w-28 h-10 rounded flex items-center justify-center text-xs font-bold opacity-20 bg-white/10">{logo.title}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
