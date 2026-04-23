import type { BlockProps } from "@/blocks/types";

export default function Footer120(props: BlockProps) {
  const {
    theme,
    heading = "Zephyr",
    bodyText = "Cloud monitoring that doesn't suck.",
  } = props;
  const cols = [
    { title: "Product", links: ["Dashboards", "Alerts", "APM", "Logs"] },
    { title: "Company", links: ["About", "Jobs", "Security"] },
    { title: "Legal", links: ["Terms", "Privacy", "DPA"] },
  ];
  return (
    <footer className="w-full bg-gradient-to-b from-white to-neutral-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-blue-600" />
              <p className="text-lg font-bold">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">{bodyText}</p>
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
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. SOC 2 Type II.</p>
      </div>
    </footer>
  );
}
