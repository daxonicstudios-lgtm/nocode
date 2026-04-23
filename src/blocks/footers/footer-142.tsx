import type { BlockProps } from "@/blocks/types";

export default function Footer142(props: BlockProps) {
  const {
    theme,
    heading = "Nimbus",
    bodyText = "Weather APIs for developers.",
  } = props;
  const cols = [
    { title: "API", links: ["Forecast", "Historical", "Radar", "Marine"] },
    { title: "Resources", links: ["Docs", "Pricing", "Status"] },
  ];
  return (
    <footer className="w-full bg-sky-100 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-500" />
              <p className="text-lg font-bold text-sky-950">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-sky-900/70">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-sky-900">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-sky-800 hover:text-sky-950">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-sky-900/60">© 2026 {heading} Weather</p>
      </div>
    </footer>
  );
}
