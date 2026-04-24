import type { BlockProps } from "@/blocks/types";

export default function Footer139(props: BlockProps) {
  const {
    theme,
    heading = "Saunter",
    bodyText = "Walking shoes for the long haul.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Men", "Women", "Kids", "Sale"] },
    { title: "Help", links: ["Returns", "Sizing", "Contact"] },
  ];
  return (
    <footer className="w-full bg-yellow-400 py-14 text-neutral-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-4xl font-black italic">{heading}!</p>
            <p className="mt-2 text-sm">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-black uppercase">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm font-medium hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs font-bold">© 2026 {heading}. Keep walking.</p>
      </div>
    </footer>
  );
}
