import type { BlockProps } from "@/blocks/types";

export default function Galleries001(props: BlockProps) {
  const { theme, heading = "Selected work", items = Array.from({ length: 6 }).map((_, i) => ({ title: `Project ${i + 1}` })) } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.slice(0, 6).map((img, i) => (
            <div key={i} className="aspect-square rounded-lg" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {img.imageUrl ? <img src={img.imageUrl as string} alt={img.title} className="w-full h-full object-cover rounded-lg" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
