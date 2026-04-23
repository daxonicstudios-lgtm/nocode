import type { BlockProps } from "@/blocks/types";

export default function Footer106(props: BlockProps) {
  const {
    theme,
    heading = "Fieldhouse",
    bodyText = "Outdoor gear for everyday adventurers.",
  } = props;
  const cols = [
    { title: "Shop", links: ["New Arrivals", "Men", "Women", "Sale"] },
    { title: "Help", links: ["Shipping", "Returns", "Size Guide", "FAQ"] },
  ];
  return (
    <footer className="w-full bg-emerald-950 py-16 text-emerald-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">{heading}</p>
            <p className="mt-3 text-sm text-emerald-200/80">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-emerald-100 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-emerald-800 pt-6 text-xs text-emerald-300 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Co.</span>
          <span>Made in the Pacific Northwest</span>
        </div>
      </div>
    </footer>
  );
}
