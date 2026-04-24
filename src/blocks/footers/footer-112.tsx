import type { BlockProps } from "@/blocks/types";

export default function Footer112(props: BlockProps) {
  const {
    theme,
    heading = "Merchant",
    bodyText = "Payments infrastructure for modern businesses.",
  } = props;
  const cols = [
    { title: "Products", links: ["Payments", "Billing", "Terminal", "Connect", "Radar"] },
    { title: "Use cases", links: ["Marketplaces", "SaaS", "Retail", "Enterprise"] },
  ];
  return (
    <footer className="w-full bg-indigo-950 py-16 text-indigo-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 rotate-45 bg-indigo-400" />
              <p className="text-xl font-semibold">{heading}</p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-indigo-300">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-indigo-900 pt-6 text-xs text-indigo-400 md:flex-row">
          <span>© 2026 {heading} Financial Technologies</span>
          <span>EN · USD</span>
        </div>
      </div>
    </footer>
  );
}
