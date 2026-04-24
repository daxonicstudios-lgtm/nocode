import type { BlockProps } from "@/blocks/types";

export default function Footer149(props: BlockProps) {
  const {
    theme,
    heading = "Axle",
    bodyText = "Fleet telematics for logistics teams.",
  } = props;
  const cols = [
    { title: "Platform", links: ["Tracking", "Maintenance", "Compliance", "Fuel"] },
    { title: "Industries", links: ["Trucking", "Delivery", "Construction"] },
    { title: "Company", links: ["About", "Careers", "Partners"] },
  ];
  return (
    <footer className="w-full bg-slate-900 py-14 text-slate-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-yellow-400" />
              <p className="text-xl font-bold text-white">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">© 2026 {heading} Telematics</p>
      </div>
    </footer>
  );
}
