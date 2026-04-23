import type { BlockProps } from "@/blocks/types";

export default function Footer074(props: BlockProps) {
  const {
    theme,
    heading = "Stillwater",
    bodyText = "Quietly reliable hosting since 2019.",
    navLinks = [
      { label: "Servers", url: "#" },
      { label: "Status", url: "#" },
      { label: "Docs", url: "#" },
      { label: "Support", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-sky-50 py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-[1.5fr_1fr] sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-3xl text-sky-950">{heading}</p>
          <p className="mt-2 max-w-md text-sm text-sky-900/70">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-1">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-sky-800 hover:text-sky-950">
                → {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-sky-900/50 sm:px-6 lg:px-8">
        © 2026 {heading}
      </p>
    </footer>
  );
}
