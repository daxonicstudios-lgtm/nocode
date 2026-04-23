import type { BlockProps } from "@/blocks/types";

export default function Footer144(props: BlockProps) {
  const {
    theme,
    heading = "Packrat",
    bodyText = "Backpacks, bags, and gear.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Backpacks", "Duffels", "Accessories"] },
    { title: "Help", links: ["Warranty", "Repairs", "Contact"] },
    { title: "About", links: ["Story", "Sustainability", "Blog"] },
  ];
  return (
    <footer className="w-full bg-stone-800 py-14 text-stone-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-3xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-stone-300">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-stone-200 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-stone-400">© 2026 {heading} Gear Co. · Lifetime warranty</p>
      </div>
    </footer>
  );
}
