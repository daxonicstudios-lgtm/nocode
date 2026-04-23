import type { BlockProps } from "@/blocks/types";

export default function Footer073(props: BlockProps) {
  const {
    theme,
    heading = "Spool",
    bodyText = "Podcast hosting made simple.",
    navLinks = [
      { label: "Record", url: "#" },
      { label: "Distribute", url: "#" },
      { label: "Monetize", url: "#" },
      { label: "Log in", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-black py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="h-0.5 w-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500" />
      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-2xl font-black uppercase tracking-tight text-white">{heading}</p>
          <p className="mt-2 max-w-sm text-sm text-neutral-400">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm uppercase tracking-wider text-neutral-300 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-neutral-600 sm:px-6 lg:px-8">
        © 2026 {heading} Audio
      </p>
    </footer>
  );
}
