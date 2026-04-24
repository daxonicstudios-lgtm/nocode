import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Sade Bello", label: "Chief Product Officer", description: "Led PM at Andela. Obsessed with user research." },
  { title: "Joseph Olatunji", label: "VP of Sales", description: "Built out commercial teams at two B2B SaaS exits." },
  { title: "Priya Ramakrishnan", label: "Head of Marketing", description: "Previously grew Notion's APAC community from 0 to 1M." },
];

export default function Teams002(props: BlockProps) {
  const { theme, heading = "Leadership", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">{heading}</h2>
        <div className="space-y-6">
          {items.slice(0, 3).map((p, i) => (
            <div key={i} className="flex gap-5 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm opacity-60">{String(p.label)}</p>
                <p className="mt-2 text-sm opacity-75 max-w-xl">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
