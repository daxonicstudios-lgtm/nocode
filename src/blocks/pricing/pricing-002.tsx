import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { title: "Pay as you go", value: "$0.01", description: "per request", items: ["No monthly fee", "Usage-based", "Scale to zero"] },
  { title: "Team", value: "$99", description: "per month", items: ["10 seats", "500K requests", "Slack support"] },
];

export default function Pricing002(props: BlockProps) {
  const { theme, heading = "Two ways to get started", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.slice(0, 2).map((tier, i) => (
            <div key={i} className="p-8 rounded-3xl" style={{ backgroundColor: i === 0 ? theme?.secondary ?? "#f4f4f5" : theme?.primary, color: i === 0 ? undefined : "#fff" }}>
              <h3 className="text-xl font-semibold">{tier.title}</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-bold">{tier.value}</span>
                <span className="text-sm opacity-70">{tier.description}</span>
              </div>
              <ul className="mt-8 space-y-2 text-sm">
                {(tier.items as string[]).map((f: string, j: number) => (
                  <li key={j} className="opacity-80">• {f}</li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-block px-5 py-2.5 rounded-full text-sm font-medium" style={{ backgroundColor: i === 0 ? theme?.primary : "#fff", color: i === 0 ? "#fff" : theme?.primary }}>
                Choose plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
