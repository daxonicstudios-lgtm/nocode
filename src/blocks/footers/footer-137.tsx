import type { BlockProps } from "@/blocks/types";

export default function Footer137(props: BlockProps) {
  const {
    theme,
    heading = "Forge",
    bodyText = "DevOps automation platform.",
  } = props;
  const cols = [
    { title: "Product", links: ["Pipelines", "Deploy", "Secrets", "Observability"] },
    { title: "Developers", links: ["Docs", "API", "CLI", "GitHub"] },
  ];
  return (
    <footer className="w-full bg-[#0a0a0a] py-16 text-neutral-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-lg tracking-tight text-white">&gt; {heading}</p>
            <p className="mt-2 font-mono text-xs text-neutral-500">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs text-neutral-500">## {c.title}</p>
              <ul className="mt-3 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="font-mono text-sm text-neutral-300 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 font-mono text-xs text-neutral-600">// © 2026 {heading}.io</p>
      </div>
    </footer>
  );
}
