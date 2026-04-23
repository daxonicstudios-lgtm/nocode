import type { BlockProps } from "@/blocks/types";

export default function Footer095(props: BlockProps) {
  const {
    theme,
    heading = "Arcade",
    bodyText = "Indie game publisher.",
    navLinks = [
      { label: "Games", url: "#" },
      { label: "Studios", url: "#" },
      { label: "Press kit", url: "#" },
      { label: "Submit", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-purple-950 py-12 text-purple-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-3xl font-bold uppercase tracking-tighter text-white">
            &gt; {heading}_
          </p>
          <p className="mt-3 max-w-sm text-sm text-purple-200/80">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.url}
                className="font-mono text-sm uppercase tracking-wider text-purple-200 hover:text-white"
              >
                [{l.label}]
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 font-mono text-xs text-purple-300/60 sm:px-6 lg:px-8">
        // © 2026 {heading} — player two ready
      </p>
    </footer>
  );
}
