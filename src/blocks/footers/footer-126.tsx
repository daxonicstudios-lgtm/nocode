import type { BlockProps } from "@/blocks/types";

export default function Footer126(props: BlockProps) {
  const {
    theme,
    heading = "Cable",
    bodyText = "Team chat without the noise.",
  } = props;
  const cols = [
    { title: "Product", links: ["Features", "Security", "Enterprise", "Pricing"] },
    { title: "Support", links: ["Docs", "Help", "Community", "Contact"] },
  ];
  return (
    <footer className="w-full bg-neutral-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-3 inline-block border-b border-neutral-900 pb-0.5 text-sm font-semibold">{c.title}</p>
              <ul className="space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-700 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading} Inc.</p>
      </div>
    </footer>
  );
}
