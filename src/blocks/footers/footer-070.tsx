import type { BlockProps } from "@/blocks/types";

export default function Footer070(props: BlockProps) {
  const {
    theme,
    heading = "Prism",
    bodyText = "Color systems for the rest of us.",
    navLinks = [
      { label: "Palette", url: "#" },
      { label: "Tokens", url: "#" },
      { label: "Plugins", url: "#" },
      { label: "Blog", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 overflow-hidden rounded">
              <span className="h-full w-1/3 bg-rose-500" />
              <span className="h-full w-1/3 bg-amber-400" />
              <span className="h-full w-1/3 bg-sky-500" />
            </div>
            <p className="text-lg font-bold text-gray-900">{heading}</p>
          </div>
          <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-gray-200 px-4 pt-4 text-xs text-gray-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading} Labs</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
