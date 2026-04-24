import type { BlockProps } from "@/blocks/types";

export default function Footer066(props: BlockProps) {
  const {
    theme,
    heading = "Switch",
    bodyText = "Developer tools that just click.",
    navLinks = [
      { label: "CLI", url: "#" },
      { label: "SDK", url: "#" },
      { label: "Docs", url: "#" },
      { label: "Changelog", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full border-t border-gray-200 bg-gray-50 py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-mono text-base text-gray-900">$ {heading.toLowerCase()} --version</p>
          <p className="mt-1 font-mono text-sm text-gray-500">v4.7.2</p>
          <p className="mt-4 text-sm text-gray-600">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="font-mono text-sm text-gray-700 hover:text-gray-900">
                ./{l.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-5xl px-4 font-mono text-xs text-gray-400 sm:px-6 lg:px-8">
        # © 2026 {heading}
      </p>
    </footer>
  );
}
