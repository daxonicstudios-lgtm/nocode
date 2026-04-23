import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { label: "Founded", value: "2019" },
  { label: "Employees", value: "84" },
  { label: "Offices", value: "4" },
  { label: "Funding raised", value: "$12M" },
  { label: "Partners", value: "120+" },
  { label: "Customers", value: "35K" },
];

export default function Stats003(props: BlockProps) {
  const { theme, items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.primary ?? "#0a0a0a", color: "#fff" }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {items.slice(0, 6).map((s, i) => (
          <div key={i} className="py-6 sm:py-0 sm:px-6 text-center">
            <div className="text-3xl sm:text-4xl font-semibold">{s.value}</div>
            <div className="mt-1 text-xs opacity-70 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
