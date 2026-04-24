import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Announcing v2.0", description: "A major update with 500+ new components.", label: "Apr 20" },
  { title: "Tips for Better Conversion Rates", description: "Small changes that make a big difference.", label: "Apr 18" },
  { title: "Interview with Our CEO", description: "The vision behind the platform.", label: "Apr 14" },
];

export default function Blog287(props: BlockProps) {
  const { theme, heading = "News & updates", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 5).map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold group-hover:underline">{post.title}</h3>
                <span className="text-xs opacity-40 shrink-0">{String(post.label ?? "")}</span>
              </div>
              <p className="mt-1 text-sm opacity-60">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
