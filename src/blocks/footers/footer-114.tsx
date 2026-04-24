import type { BlockProps } from "@/blocks/types";

export default function Footer114(props: BlockProps) {
  const {
    theme,
    heading = "Orbital",
    bodyText = "Satellite data for a clearer picture of Earth.",
  } = props;
  const cols = [
    { title: "Solutions", links: ["Agriculture", "Defense", "Mining", "Climate"] },
    { title: "Platform", links: ["API", "Imagery", "Analytics"] },
  ];
  return (
    <footer className="relative w-full overflow-hidden bg-black py-16 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold tracking-tight">{heading}</p>
            <p className="mt-2 max-w-xs text-sm text-white/60">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium text-cyan-400">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-white/70 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-xs text-white/40">© 2026 {heading} Inc. All systems nominal.</p>
      </div>
    </footer>
  );
}
