import type { BlockProps } from "@/blocks/types";

export default function Footer062(props: BlockProps) {
  const {
    theme,
    heading = "Flint",
    bodyText = "Sparks of productivity, daily.",
    navLinks = [
      { label: "App", url: "#" },
      { label: "Download", url: "#" },
      { label: "Help", url: "#" },
      { label: "Status", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-orange-50 py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-2xl border border-orange-200 bg-white px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-block h-8 w-8 rounded-md bg-orange-500" />
          <div>
            <p className="text-lg font-bold text-gray-900">{heading}</p>
            <p className="text-xs text-gray-600">{bodyText}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-5">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-gray-700 hover:text-orange-600">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-6 max-w-5xl px-6 text-xs text-gray-500">
        © 2026 {heading}. Made with persistence.
      </p>
    </footer>
  );
}
