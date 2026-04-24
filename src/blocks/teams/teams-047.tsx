import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Sarah Johnson", description: "CEO & Co-Founder", label: "Leads strategy and vision." },
  { title: "Michael Chen", description: "CTO", label: "Oversees all technical architecture." },
  { title: "Amina Okafor", description: "Head of Design", label: "Creates beautiful UX." },
  { title: "David Kim", description: "Lead Engineer", label: "Builds core features." },
];

export default function Team047(props: BlockProps) {
  const { theme, heading = "Team grid with avatars", subheading = "The people behind the product", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">{heading}</h2>
          <p className="mt-3 opacity-60">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.slice(0, 4).map((m, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <h3 className="font-semibold">{m.title}</h3>
              <p className="text-sm mt-1" style={{ color: theme?.primary }}>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
