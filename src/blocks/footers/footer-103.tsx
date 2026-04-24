import type { BlockProps } from "@/blocks/types";

export default function Footer103(props: BlockProps) {
  const {
    theme,
    heading = "Atelier",
    bodyText = "Design studio · Est. 2018",
  } = props;
  const cols = [
    { title: "Services", links: ["Branding", "Web Design", "Strategy", "Motion"] },
    { title: "Studio", links: ["Team", "Process", "Journal", "Contact"] },
  ];
  return (
    <footer className="w-full bg-[#f5f3ef] py-20 text-neutral-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-serif text-4xl tracking-tight">{heading}</p>
            <p className="mt-3 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-xl">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-base text-neutral-700 underline-offset-4 hover:underline">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-neutral-300 pt-6 text-xs text-neutral-500 md:flex-row">
          <span>© 2026 {heading} Studio</span>
          <span>Brooklyn · Lisbon · Nairobi</span>
        </div>
      </div>
    </footer>
  );
}
