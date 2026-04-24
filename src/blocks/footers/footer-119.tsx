import type { BlockProps } from "@/blocks/types";

export default function Footer119(props: BlockProps) {
  const {
    theme,
    heading = "Brisket",
    bodyText = "Slow smoked. Served fast.",
  } = props;
  const cols = [
    { title: "Menu", links: ["Smokehouse", "Sides", "Drinks", "Desserts"] },
    { title: "Visit", links: ["Locations", "Hours", "Catering", "Book a Table"] },
  ];
  return (
    <footer className="w-full bg-[#2a1a12] py-16 text-orange-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl text-orange-300">{heading}</p>
            <p className="mt-3 text-sm italic text-orange-200/80">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-orange-100 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-orange-900/40 pt-4 text-xs text-orange-300/60">© 2026 {heading} BBQ · Austin, TX</p>
      </div>
    </footer>
  );
}
