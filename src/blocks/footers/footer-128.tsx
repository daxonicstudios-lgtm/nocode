import type { BlockProps } from "@/blocks/types";

export default function Footer128(props: BlockProps) {
  const {
    theme,
    heading = "Minta",
    bodyText = "Fresh salads. Delivered fast.",
  } = props;
  const cols = [
    { title: "Order", links: ["Menu", "Delivery", "Pickup", "Catering"] },
    { title: "Company", links: ["About", "Sustainability", "Careers"] },
  ];
  return (
    <footer className="w-full bg-emerald-500 py-14 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-black">{heading}</p>
            <p className="mt-2 text-sm text-emerald-50/90">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wide">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-emerald-50 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-emerald-100">© 2026 {heading} Foods</p>
      </div>
    </footer>
  );
}
