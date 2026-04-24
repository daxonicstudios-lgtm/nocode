import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [
  { title: "Men's Fashion" }, { title: "Women's Fashion" }, { title: "Electronics" },
  { title: "Home & Garden" }, { title: "Sports" }, { title: "Beauty" },
];
export default function EcomCategories139(props: BlockProps) {
  const { theme, heading = "Product category grid", subheading = "Browse by category", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10"><h2 className="text-3xl font-bold">{heading}</h2><p className="mt-2 opacity-60">{subheading}</p></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.slice(0, 6).map((cat, i) => (
            <a key={i} href="#" className="aspect-[4/3] rounded-2xl flex items-end p-6 group" style={{ backgroundColor: theme?.accent ?? "#f1f5f9" }}>
              <span className="font-bold text-lg group-hover:underline">{cat.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
