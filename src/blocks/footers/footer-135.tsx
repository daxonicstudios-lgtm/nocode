import type { BlockProps } from "@/blocks/types";

export default function Footer135(props: BlockProps) {
  const {
    theme,
    heading = "Beacon",
    bodyText = "Customer feedback that drives product.",
  } = props;
  const cols = [
    { title: "Product", links: ["Surveys", "NPS", "In-app", "Integrations"] },
    { title: "Resources", links: ["Playbooks", "Benchmarks", "Blog"] },
    { title: "Company", links: ["Team", "Careers"] },
  ];
  return (
    <footer className="w-full bg-[#0f172a] py-14 text-slate-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <p className="text-lg font-semibold text-white">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-slate-400">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-slate-400 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-500">© 2026 {heading}. Listen better.</p>
      </div>
    </footer>
  );
}
