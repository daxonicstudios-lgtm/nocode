import type { BlockProps } from "@/blocks/types";

export default function Footer121(props: BlockProps) {
  const {
    theme,
    heading = "Foundry",
    bodyText = "Modular components, fast pages.",
  } = props;
  const cols = [
    { title: "Library", links: ["Blocks", "Templates", "Icons"] },
    { title: "Company", links: ["Team", "Jobs", "Press"] },
  ];
  return (
    <footer className="w-full bg-neutral-900 py-14 text-neutral-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-5xl font-black tracking-tighter">{heading}.</p>
            <p className="mt-3 text-sm text-neutral-400">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-neutral-500">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
