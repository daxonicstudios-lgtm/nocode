import type { BlockProps } from "@/blocks/types";

export default function Footer131(props: BlockProps) {
  const {
    theme,
    heading = "Kindred",
    bodyText = "Community adoption platform.",
  } = props;
  const cols = [
    { title: "Adopt", links: ["Dogs", "Cats", "Other Pets"] },
    { title: "Help", links: ["Donate", "Volunteer", "Foster"] },
    { title: "About", links: ["Mission", "Team", "Contact"] },
  ];
  return (
    <footer className="w-full bg-orange-100 py-14 text-orange-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-2xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-orange-900/70">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wider">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-orange-900/60">© 2026 {heading} Rescue · Non-profit</p>
      </div>
    </footer>
  );
}
