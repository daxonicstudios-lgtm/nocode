import type { BlockProps } from "@/blocks/types";

export default function Footer143(props: BlockProps) {
  const {
    theme,
    heading = "Revive",
    bodyText = "Sustainable fashion since 2015.",
  } = props;
  const cols = [
    { title: "Collections", links: ["Women", "Men", "Accessories", "Home"] },
    { title: "Our Story", links: ["Mission", "Materials", "Factories", "Impact"] },
  ];
  return (
    <footer className="w-full bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="text-2xl font-light tracking-[0.2em]">{heading.toUpperCase()}</p>
            <p className="mt-3 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm font-light text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-14 text-xs tracking-widest text-neutral-500">© 2026 {heading.toUpperCase()} · B-CORP CERTIFIED</p>
      </div>
    </footer>
  );
}
