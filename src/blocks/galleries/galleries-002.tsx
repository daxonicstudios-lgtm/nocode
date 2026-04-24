import type { BlockProps } from "@/blocks/types";

const ASPECTS = ["aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-square"];

export default function Galleries002(props: BlockProps) {
  const { theme, heading = "Recent shoots", subheading = "A small selection from the past season.", items = Array.from({ length: 6 }).map((_, i) => ({ title: `Photo ${i + 1}`, imageUrl: "" })) } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-sm opacity-70">{subheading}</p>
        </div>
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {items.slice(0, 6).map((img, i) => (
            <div key={i} className={`${ASPECTS[i % 6]} rounded-lg break-inside-avoid`} style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
              {img.imageUrl ? <img src={img.imageUrl as string} alt={img.title} className="w-full h-full object-cover rounded-lg" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
