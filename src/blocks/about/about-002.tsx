import type { BlockProps } from "@/blocks/types";

const DEFAULT_STATS = [
  { label: "Founded", value: "2019" },
  { label: "Team members", value: "84" },
  { label: "Countries served", value: "80+" },
  { label: "Active users", value: "100K" },
];

export default function About002(props: BlockProps) {
  const { theme, heading = "Built by people who cared enough", bodyText = "We were tired of watching small business owners pay agencies thousands for websites that looked like templates anyway. So we built something better — a platform where anyone can create a site that actually looks like their brand.", items = DEFAULT_STATS } = props;

  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">{heading}</h2>
          <p className="mt-6 text-base opacity-75 leading-relaxed">{bodyText}</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {items.slice(0, 4).map((it, i) => (
            <div key={i} className="p-5 rounded-xl border" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
              <div className="text-3xl font-semibold" style={{ color: theme?.primary }}>{it.value}</div>
              <div className="mt-1 text-sm opacity-60 uppercase tracking-wider">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
