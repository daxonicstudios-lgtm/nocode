import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [{ title: "1" },{ title: "2" },{ title: "3" },{ title: "4" },{ title: "5" },{ title: "6" }];
export default function Gallery286(props: BlockProps) {
  const { theme, heading = "Featured gallery", subheading = "Browse our collection", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2><p className="mt-3 opacity-60">{subheading}</p></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.slice(0, 6).map((img, i) => (
            <div key={i} className="aspect-square rounded-xl group cursor-pointer" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
