import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Chris Anderson", description: "Founder & CEO", label: "10+ years in SaaS" },
  { title: "Nina Petrov", description: "Chief Design Officer", label: "Ex-Apple designer" },
  { title: "Omar Hassan", description: "VP Engineering", label: "Built systems for millions" },
];

export default function Team131(props: BlockProps) {
  const { theme, heading = "Team list with bios", items = DEFAULT_ITEMS } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">{heading}</h2>
        <div className="divide-y" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          {items.slice(0, 6).map((m, i) => (
            <div key={i} className="flex items-center gap-4 py-5">
              <div className="w-14 h-14 rounded-full shrink-0" style={{ backgroundColor: theme?.accent ?? "#e5e7eb" }} />
              <div className="flex-1">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="text-sm" style={{ color: theme?.primary }}>{m.description}</p>
              </div>
              <p className="text-xs opacity-40 hidden sm:block">{String(m.label ?? "")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
