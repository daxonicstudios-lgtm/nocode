import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Campaign — Summer '26", label: "Editorial" },
  { title: "Lagos at dawn", label: "Street" },
  { title: "Mother & child", label: "Portrait" },
];

export default function Galleries003(props: BlockProps) {
  const { theme, heading = "Featured gallery", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-10">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 3).map((img, i) => (
            <figure key={i}>
              <div className="aspect-[4/5] rounded-xl mb-3 overflow-hidden" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }}>
                {img.imageUrl ? <img src={img.imageUrl as string} alt={img.title} className="w-full h-full object-cover" /> : null}
              </div>
              <figcaption>
                <p className="text-xs uppercase tracking-wider opacity-60">{String(img.label)}</p>
                <p className="mt-1 font-semibold">{img.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
