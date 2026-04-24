import type { BlockProps } from "@/blocks/types";

export default function Footer109(props: BlockProps) {
  const {
    theme,
    heading = "Pixelstack",
    bodyText = "Frontend frameworks built for speed.",
  } = props;
  const cols = [
    { title: "Product", links: ["Docs", "Components", "Templates", "Themes"] },
    { title: "Community", links: ["Discord", "GitHub", "Twitter", "Showcase"] },
    { title: "Company", links: ["About", "Blog", "Contact"] },
  ];
  return (
    <footer className="w-full bg-zinc-900 py-16 text-zinc-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <p className="text-lg font-bold text-white">{heading}</p>
            <p className="mt-2 text-sm text-zinc-400">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-zinc-400 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-zinc-500">© 2026 {heading} Labs</p>
      </div>
    </footer>
  );
}
