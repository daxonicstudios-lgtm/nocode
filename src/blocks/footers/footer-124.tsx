import type { BlockProps } from "@/blocks/types";

export default function Footer124(props: BlockProps) {
  const {
    theme,
    heading = "Plaza",
    bodyText = "Marketplace for local makers.",
  } = props;
  const cols = [
    { title: "Shop", links: ["All Products", "New", "Featured", "Gifts"] },
    { title: "Sell", links: ["Open a Shop", "Seller Guide", "Fees"] },
  ];
  return (
    <footer className="w-full bg-rose-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl text-rose-950">{heading}</p>
            <p className="mt-2 text-sm text-rose-900/70">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wider text-rose-700">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-rose-950/80 hover:text-rose-950">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-rose-200 pt-4 text-xs text-rose-900/60 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Marketplace</span>
          <span>Supporting 2,400+ local artisans</span>
        </div>
      </div>
    </footer>
  );
}
