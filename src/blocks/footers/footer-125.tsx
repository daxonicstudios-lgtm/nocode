import type { BlockProps } from "@/blocks/types";

export default function Footer125(props: BlockProps) {
  const {
    theme,
    heading = "Shift",
    bodyText = "Workforce management for modern ops.",
  } = props;
  const cols = [
    { title: "Product", links: ["Scheduling", "Time Clock", "Payroll"] },
    { title: "Industries", links: ["Retail", "Hospitality", "Healthcare"] },
    { title: "Company", links: ["About", "Contact", "Careers"] },
  ];
  return (
    <footer className="w-full bg-gradient-to-br from-violet-600 to-indigo-700 py-16 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-violet-100">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-violet-200">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/90 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-violet-200">© 2026 {heading} Work</p>
      </div>
    </footer>
  );
}
