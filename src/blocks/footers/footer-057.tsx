import type { BlockProps } from "@/blocks/types";

export default function Footer057(props: BlockProps) {
  const {
    theme,
    heading = "Vertex",
    bodyText = "Build. Ship. Scale.",
    navLinks = [
      { label: "Platform", url: "#" },
      { label: "Developers", url: "#" },
      { label: "Enterprise", url: "#" },
      { label: "Changelog", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-zinc-950 py-12 text-zinc-400"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <div className="mt-1 h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600" />
          <div>
            <p className="text-xl font-semibold text-white">{heading}</p>
            <p className="mt-2 max-w-sm text-sm">{bodyText}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-3 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-800 px-4 pt-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        © 2026 {heading} Inc.
      </div>
    </footer>
  );
}
