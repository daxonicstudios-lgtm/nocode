import type { BlockProps } from "@/blocks/types";

export default function Footer130(props: BlockProps) {
  const {
    theme,
    heading = "Stagehand",
    bodyText = "Event production software.",
  } = props;
  const cols = [
    { title: "Product", links: ["Timelines", "Rider Management", "Vendors"] },
    { title: "Support", links: ["Help", "Contact", "Status"] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold">{heading}</p>
            <p className="mt-1.5 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium">{c.title}</p>
              <ul className="mt-2 space-y-1">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-black">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-dashed border-neutral-300 pt-4 text-xs text-neutral-500 md:flex-row">
          <span>© 2026 {heading}</span>
          <span>v 4.2</span>
        </div>
      </div>
    </footer>
  );
}
