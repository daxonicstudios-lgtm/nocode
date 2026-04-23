import type { BlockProps } from "@/blocks/types";

export default function Footer115(props: BlockProps) {
  const {
    theme,
    heading = "Sprout",
    bodyText = "Grow what matters.",
  } = props;
  const cols = [
    { title: "Product", links: ["Plans", "Features", "FAQ"] },
    { title: "About", links: ["Story", "Impact", "Careers"] },
    { title: "Help", links: ["Support", "Contact", "Status"] },
  ];
  return (
    <footer className="w-full bg-lime-50 py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-lime-200 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-lime-700" />
              <p className="text-sm font-bold text-lime-900">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-lime-950/70">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-lime-900">{c.title}</p>
              <ul className="mt-2 space-y-1">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-lime-950/80 hover:text-lime-950">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-lime-950/60">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
