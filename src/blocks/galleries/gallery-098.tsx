import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [{ title: "1" },{ title: "2" },{ title: "3" },{ title: "4" },{ title: "5" },{ title: "6" }];
export default function Gallery098(props: BlockProps) {
  const { theme, heading = "Masonry gallery", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">{heading}</h2>
        <div className="columns-2 md:columns-3 gap-4">
          {items.slice(0, 9).map((img, i) => (
            <div key={i} className="break-inside-avoid mb-4 rounded-xl" style={{ height: `${180 + (i % 4) * 60}px`, backgroundColor: theme?.accent ?? "#e5e7eb" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
