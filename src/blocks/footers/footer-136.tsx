import type { BlockProps } from "@/blocks/types";

export default function Footer136(props: BlockProps) {
  const {
    theme,
    heading = "Crafthaus",
    bodyText = "Handmade ceramics from Nairobi.",
  } = props;
  const cols = [
    { title: "Shop", links: ["Bowls", "Mugs", "Vases", "Limited"] },
    { title: "Visit", links: ["Studio", "Workshops", "Stockists"] },
  ];
  return (
    <footer className="w-full bg-[#1a1613] py-16 text-[#e8dcc7]" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-3 text-sm text-[#e8dcc7]/70">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-xl">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-[#e8dcc7]/80 hover:text-[#e8dcc7]">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 text-xs text-[#e8dcc7]/50">© 2026 {heading} · Thrown by hand</p>
      </div>
    </footer>
  );
}
