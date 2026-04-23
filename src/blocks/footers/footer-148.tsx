import type { BlockProps } from "@/blocks/types";

export default function Footer148(props: BlockProps) {
  const {
    theme,
    heading = "Relay",
    bodyText = "Async video for distributed teams.",
  } = props;
  const cols = [
    { title: "Product", links: ["Features", "Integrations", "Security"] },
    { title: "Company", links: ["About", "Blog", "Press"] },
  ];
  return (
    <footer className="relative w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
        <p className="mt-10 text-xs text-neutral-500">© 2026 {heading} Video</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500" />
    </footer>
  );
}
