import type { BlockProps } from "@/blocks/types";

export default function Footer141(props: BlockProps) {
  const {
    theme,
    heading = "Terrace",
    bodyText = "Boutique hotel in Marrakech.",
  } = props;
  const cols = [
    { title: "Stay", links: ["Rooms", "Suites", "Packages", "Gift Cards"] },
    { title: "Experience", links: ["Spa", "Restaurant", "Tours"] },
  ];
  return (
    <footer className="w-full bg-[#2c1810] py-16 text-[#e8d4b8]" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl italic tracking-wide">{heading}</p>
            <p className="mt-3 text-sm text-[#e8d4b8]/70">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a670]">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-1 border-t border-[#c9a670]/20 pt-5 text-xs text-[#e8d4b8]/50 md:flex-row md:justify-between">
          <span>© 2026 {heading} Hotel</span>
          <span>Reservations: +212 524 000 000</span>
        </div>
      </div>
    </footer>
  );
}
