import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Founded in Lagos", description: "Started as a side project for a local agency.", label: "2019" },
  { title: "First 1,000 users", description: "Went viral on Twitter after a launch post.", label: "2020" },
  { title: "Series A", description: "Raised $4M to expand across Africa.", label: "2022" },
  { title: "Series B", description: "Raised $12M, opened offices in Nairobi and Cape Town.", label: "2025" },
];

export default function Timeline001(props: BlockProps) {
  const { theme, heading = "Our journey", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">{heading}</h2>
        <ol className="relative border-l-2 ml-4 space-y-10" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.map((t, i) => (
            <li key={i} className="pl-6 relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full" style={{ backgroundColor: theme?.primary ?? "#000" }} />
              <p className="text-xs font-semibold uppercase tracking-wider opacity-60">{String(t.label)}</p>
              <h3 className="mt-1 font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm opacity-70">{t.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
