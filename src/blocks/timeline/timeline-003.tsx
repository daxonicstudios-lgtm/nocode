import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Kickoff call", description: "We align on scope and success metrics.", label: "Day 1" },
  { title: "Sprint reviews", description: "Every Friday at 3pm WAT.", label: "Weekly" },
  { title: "Delivery", description: "Live handoff with docs and training.", label: "Week 8" },
];

export default function Timeline003(props: BlockProps) {
  const { theme, heading = "What to expect", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">{heading}</h2>
        <div className="space-y-4">
          {items.slice(0, 3).map((t, i) => (
            <div key={i} className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-4 border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="text-sm font-semibold opacity-70 uppercase tracking-wide">{String(t.label)}</p>
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm opacity-70 mt-1">{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
