import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Organic Face Cream", description: "$18.00" },
  { title: "Vitamin C Serum", description: "$24.00" },
  { title: "Clay Mask", description: "$15.00" },
  { title: "Eye Cream", description: "$22.00" },
  { title: "Lip Balm Set", description: "$12.00" },
  { title: "Body Lotion", description: "$20.00" },
];
export default function EcomGrids117(props: BlockProps) {
  const { theme, heading = "Minimal product grid", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {items.slice(0, 6).map((p, i) => (
            <a key={i} href="#" className="group">
              <div className="aspect-square rounded-lg" style={{ backgroundColor: theme?.accent ?? "#f5f5f5" }} />
              <div className="mt-3 flex justify-between">
                <span className="text-sm group-hover:underline">{p.title}</span>
                <span className="text-sm font-semibold">{p.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
