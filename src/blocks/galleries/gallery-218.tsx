import type { BlockProps } from "@/blocks/types";
const DEFAULT_ITEMS = [{ title: "1" },{ title: "2" },{ title: "3" },{ title: "4" },{ title: "5" },{ title: "6" }];
export default function Gallery218(props: BlockProps) {
  const { theme, heading = "Dark gallery", subheading = "A curated collection", items = DEFAULT_ITEMS } = props;
  return (
    <section className="px-4 py-24" style={{ backgroundColor: theme?.primary ?? "#0f172a", color: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12"><h2 className="text-3xl sm:text-5xl font-bold text-white">{heading}</h2><p className="mt-4 opacity-60">{subheading}</p></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.slice(0, 6).map((img, i) => (<div key={i} className="aspect-square rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />))}
        </div>
      </div>
    </section>
  );
}
