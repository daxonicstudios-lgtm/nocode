import type { BlockProps } from "@/blocks/types";

export default function Footer123(props: BlockProps) {
  const {
    theme,
    heading = "Glacier",
    bodyText = "Backup & archival storage.",
  } = props;
  const cols = [
    { title: "Services", links: ["Backup", "Archive", "Restore", "Compliance"] },
    { title: "Pricing", links: ["Plans", "Calculator", "Enterprise"] },
    { title: "Help", links: ["Docs", "Status", "Support"] },
  ];
  return (
    <footer className="w-full bg-slate-50 py-14 text-slate-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-baseline justify-between">
          <p className="text-2xl font-semibold">{heading}</p>
          <p className="hidden text-sm text-slate-500 md:block">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title} className="border-t border-slate-300 pt-4">
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-slate-600 hover:text-slate-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-500">© 2026 {heading} Cloud Services</p>
      </div>
    </footer>
  );
}
