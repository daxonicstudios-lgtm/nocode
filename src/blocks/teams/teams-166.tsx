import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Alex Rivera", description: "Product Manager", label: "Former PM at Stripe" },
  { title: "Priya Patel", description: "Senior Designer", label: "Previously at Figma" },
  { title: "James Osei", description: "Backend Engineer", label: "Open source contributor" },
];

export default function Team166(props: BlockProps) {
  const { theme, heading = "Featured team cards", subheading = "Talented people building great things", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.accent ?? "#f8fafc", color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.slice(0, 6).map((m, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: theme?.background ?? "#fff" }}>
              <div className="w-16 h-16 rounded-full mb-4" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
              <h3 className="font-bold text-lg">{m.title}</h3>
              <p className="text-sm" style={{ color: theme?.primary }}>{m.description}</p>
              <p className="text-xs opacity-50 mt-1">{String(m.label ?? "")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
