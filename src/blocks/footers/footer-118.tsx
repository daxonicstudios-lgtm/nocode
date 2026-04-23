import type { BlockProps } from "@/blocks/types";

export default function Footer118(props: BlockProps) {
  const {
    theme,
    heading = "Matterform",
    bodyText = "3D printing for the rest of us.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Printers", "Filament", "Parts", "Bundles"] },
    { title: "Support", links: ["Manuals", "Warranty", "Contact"] },
  ];
  return (
    <footer className="w-full border-t-4 border-orange-500 bg-neutral-100 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-black uppercase tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-neutral-700">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase text-orange-600">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-800 hover:text-neutral-600">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading} Industries</p>
      </div>
    </footer>
  );
}
