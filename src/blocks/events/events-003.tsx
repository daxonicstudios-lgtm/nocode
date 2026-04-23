import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Opening keynote", description: "Sarah Okoro — Chief Product Officer", label: "9:00 – 9:45" },
  { title: "Panel: Building for Africa", description: "4 founders, 45 minutes, zero fluff", label: "10:00 – 10:45" },
  { title: "Workshop: Design systems", description: "Hands-on session with the design team", label: "11:00 – 12:30" },
  { title: "Closing fireside", description: "In conversation with the CEO", label: "14:00 – 14:45" },
];

export default function Events003(props: BlockProps) {
  const { theme, heading = "Day 1 · Thursday", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">{heading}</h2>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 4).map((s, i) => (
            <div key={i} className="py-5 grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 items-start border-t last:border-b" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <p className="text-sm font-semibold opacity-70">{String(s.label)}</p>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm opacity-70">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
