import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Amara Okonkwo", label: "Co-founder & CEO", description: "Previously led design at Paystack." },
  { title: "Daniel Kwame", label: "Co-founder & CTO", description: "Built scaling infrastructure at Flutterwave." },
  { title: "Nneka Adeola", label: "Head of Design", description: "12 years crafting product experiences." },
  { title: "Ibrahim Musa", label: "Head of Engineering", description: "Former staff engineer at a YC company." },
];

export default function Teams001(props: BlockProps) {
  const { theme, heading = "Meet the team", subheading = "Small, senior, and shipping.", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-3 text-base opacity-70">{subheading}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.slice(0, 4).map((p, i) => (
            <div key={i} className="text-center">
              <div className="aspect-square rounded-2xl mb-3" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <p className="font-semibold text-sm">{p.title}</p>
              <p className="text-xs opacity-60">{String(p.label)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
