import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Inside our latest Series B", description: "Why we raised, what we're spending it on, and what we're not.", label: "April 18, 2026" },
  { title: "Thinking in systems, not pages", description: "A framework for building websites that actually scale with your brand.", label: "April 11, 2026" },
  { title: "Why we killed our flagship feature", description: "An honest post-mortem on a tough decision.", label: "April 3, 2026" },
  { title: "Field notes from 200 customer calls", description: "Patterns we noticed in 3 months of user research.", label: "March 27, 2026" },
];

export default function Blog002(props: BlockProps) {
  const { theme, heading = "Latest essays", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">{heading}</h2>
        <ul className="space-y-8">
          {items.slice(0, 4).map((p, i) => (
            <li key={i} className="border-b pb-8 last:border-b-0" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="text-xs opacity-60">{String(p.label)}</p>
              <h3 className="mt-2 text-2xl font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-base opacity-75">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
