import type { BlockProps } from "@/blocks/types";

export default function Footer140(props: BlockProps) {
  const {
    theme,
    heading = "Signal",
    bodyText = "Alerts and incident response.",
  } = props;
  const cols = [
    { title: "Product", links: ["On-call", "Incidents", "Analytics"] },
    { title: "Company", links: ["About", "Security", "Careers"] },
    { title: "Legal", links: ["Privacy", "Terms", "DPA"] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold">{heading}</p>
            <p className="mt-1.5 text-sm text-neutral-600">{bodyText}</p>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> All systems operational
            </div>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-700 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading} Inc.</p>
      </div>
    </footer>
  );
}
