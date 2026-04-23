import type { BlockProps } from "@/blocks/types";

export default function Footer138(props: BlockProps) {
  const {
    theme,
    heading = "Parable",
    bodyText = "Publishing tools for independent writers.",
  } = props;
  const cols = [
    { title: "Write", links: ["Editor", "Publishing", "Newsletters"] },
    { title: "Grow", links: ["Audience", "Monetize", "Analytics"] },
    { title: "Help", links: ["Guides", "Support"] },
  ];
  return (
    <footer className="w-full bg-neutral-50 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10">
          <p className="font-serif text-5xl tracking-tight">{heading}</p>
          <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-2 space-y-1">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-black">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}. For the love of writing.</p>
      </div>
    </footer>
  );
}
