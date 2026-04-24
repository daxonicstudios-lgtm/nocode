import type { BlockProps } from "@/blocks/types";

const DEFAULT_ITEMS = [
  { label: "Active users", value: "120K+" },
  { label: "Sites published", value: "340K" },
  { label: "Countries", value: "80+" },
  { label: "Uptime", value: "99.99%" },
];

export default function Stats001(props: BlockProps) {
  const { theme, heading = "The numbers speak", items = DEFAULT_ITEMS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-14">{heading}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.slice(0, 4).map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{ color: theme?.primary }}>{s.value}</div>
              <div className="mt-2 text-sm opacity-70 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
