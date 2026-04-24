import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "500+", description: "Components" },{ title: "128", description: "Categories" },
  { title: "24/7", description: "Support" },{ title: "4.9", description: "Rating" },
];
export default function Stats062(props: BlockProps) {
  const { theme, heading = "Stats in highlight cards", subheading = "Numbers that speak", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2><p className="mt-3 opacity-60">{subheading}</p></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.slice(0, 4).map((s, i) => (
            <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: theme?.background ?? "#fff" }}><div className="text-3xl font-black" style={{ color: theme?.primary }}>{s.title}</div><div className="text-sm opacity-50 mt-2">{s.description}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
