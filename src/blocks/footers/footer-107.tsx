import type { BlockProps } from "@/blocks/types";

export default function Footer107(props: BlockProps) {
  const {
    theme,
    heading = "Northwind",
    bodyText = "Simple tools for serious work.",
  } = props;
  const cols = [
    { title: "Product", links: ["Overview", "Pricing", "Security"] },
    { title: "Learn", links: ["Guides", "Blog", "Webinars"] },
    { title: "Connect", links: ["Twitter", "LinkedIn", "YouTube"] },
  ];
  return (
    <footer className="w-full bg-white py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500" />
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">{heading}</p>
            <p className="mt-2 text-sm text-neutral-600">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-neutral-600 hover:text-neutral-900">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading}, Inc.</p>
      </div>
    </footer>
  );
}
