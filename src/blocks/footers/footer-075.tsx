import type { BlockProps } from "@/blocks/types";

export default function Footer075(props: BlockProps) {
  const {
    theme,
    heading = "Forge",
    bodyText = "Engineering tools for people who build things.",
    navLinks = [
      { label: "Products", url: "#" },
      { label: "Industries", url: "#" },
      { label: "Resources", url: "#" },
      { label: "Sign in", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-zinc-100 py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-zinc-900 text-xl font-bold text-white">
            F
          </div>
          <div>
            <p className="text-xl font-bold uppercase tracking-wide text-zinc-900">{heading}</p>
            <p className="mt-1 text-sm text-zinc-600">{bodyText}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm font-medium uppercase tracking-wider text-zinc-700 hover:text-zinc-950">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        © 2026 {heading} Industries — ISO 9001 certified.
      </p>
    </footer>
  );
}
