import type { BlockProps } from "@/blocks/types";

export default function Footer105(props: BlockProps) {
  const {
    theme,
    heading = "Quartz",
    bodyText = "Analytics without the bloat.",
  } = props;
  const cols = [
    { title: "Explore", links: ["Dashboards", "Reports", "Insights", "Alerts"] },
    { title: "Support", links: ["Help Center", "Docs", "Status", "Contact"] },
    { title: "Legal", links: ["Terms", "Privacy", "Cookies"] },
  ];
  return (
    <footer className="w-full bg-slate-900 py-14 text-slate-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <p className="text-lg font-semibold text-white">{heading}</p>
          <p className="mt-1 text-sm text-slate-400">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 divide-y divide-slate-800 md:grid-cols-3 md:divide-x md:divide-y-0">
          {cols.map((c, i) => (
            <div key={c.title} className={i === 0 ? "md:pr-8" : i === 2 ? "md:pl-8 pt-8 md:pt-0" : "md:px-8 pt-8 md:pt-0"}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-slate-300 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-500">© 2026 {heading} Analytics Inc.</p>
      </div>
    </footer>
  );
}
