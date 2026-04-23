import type { BlockProps } from "@/blocks/types";

export default function Footer129(props: BlockProps) {
  const {
    theme,
    heading = "Helix",
    bodyText = "Genomics, decoded.",
  } = props;
  const cols = [
    { title: "Research", links: ["Publications", "Datasets", "Tools"] },
    { title: "Platform", links: ["Sequencing", "Analysis", "API"] },
    { title: "Institute", links: ["Labs", "Team", "Contact"] },
  ];
  return (
    <footer className="w-full bg-neutral-950 py-16 text-neutral-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/30" />
              <p className="ml-1 text-lg font-semibold">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-neutral-400">{bodyText}</p>
          </div>
          {cols.slice(0, 2).map((c) => (
            <div key={c.title}>
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 font-mono text-xs text-neutral-600">© 2026 {heading} Biosciences</p>
      </div>
    </footer>
  );
}
