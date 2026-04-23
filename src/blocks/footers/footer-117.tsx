import type { BlockProps } from "@/blocks/types";

export default function Footer117(props: BlockProps) {
  const {
    theme,
    heading = "Tidepool",
    bodyText = "Ocean research & education.",
  } = props;
  const cols = [
    { title: "Learn", links: ["Courses", "Species Guide", "Research"] },
    { title: "Engage", links: ["Volunteer", "Donate", "Events"] },
    { title: "Organization", links: ["About", "Team", "Contact"] },
  ];
  return (
    <footer className="w-full bg-sky-950 py-16 text-sky-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl tracking-tight">{heading}</p>
            <p className="mt-3 text-sm text-sky-200/70">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-sky-300/60">© 2026 {heading} Foundation · 501(c)(3)</p>
      </div>
    </footer>
  );
}
