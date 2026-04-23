import type { BlockProps } from "@/blocks/types";

export default function Footer132(props: BlockProps) {
  const {
    theme,
    heading = "Monolith",
    bodyText = "Enterprise-grade data warehousing.",
  } = props;
  const cols = [
    { title: "Platform", links: ["Warehouse", "Pipelines", "Governance", "Security"] },
    { title: "Industries", links: ["Finance", "Healthcare", "Retail"] },
  ];
  return (
    <footer className="w-full bg-zinc-950 py-16 text-zinc-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="text-4xl font-extrabold uppercase tracking-tighter text-white">{heading}</p>
            <p className="mt-3 max-w-xs text-sm text-zinc-400">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">— {c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-4 text-xs text-zinc-600">© 2026 {heading} Systems · ISO 27001 certified</div>
      </div>
    </footer>
  );
}
