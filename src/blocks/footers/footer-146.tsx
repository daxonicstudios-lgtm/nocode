import type { BlockProps } from "@/blocks/types";

export default function Footer146(props: BlockProps) {
  const {
    theme,
    heading = "Arcade",
    bodyText = "Indie games, hand-picked.",
  } = props;
  const cols = [
    { title: "Play", links: ["New Releases", "Top Rated", "Free", "Genres"] },
    { title: "Developers", links: ["Submit a Game", "Dev Blog", "Store SDK"] },
  ];
  return (
    <footer className="w-full bg-fuchsia-950 py-14 text-fuchsia-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-black uppercase tracking-tight text-fuchsia-200">{heading}</p>
            <p className="mt-2 text-sm text-fuchsia-300/80">{bodyText}</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wider text-fuchsia-400">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-fuchsia-400/70">© 2026 {heading}. Press start.</p>
      </div>
    </footer>
  );
}
