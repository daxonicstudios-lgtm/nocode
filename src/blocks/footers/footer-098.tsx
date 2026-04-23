import type { BlockProps } from "@/blocks/types";

export default function Footer098(props: BlockProps) {
  const {
    theme,
    heading = "Halo",
    bodyText = "Customer support that shines.",
    navLinks = [
      { label: "Inbox", url: "#" },
      { label: "Knowledge base", url: "#" },
      { label: "Integrations", url: "#" },
      { label: "Pricing", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl border-t border-gray-100 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 text-sm font-bold text-blue-500">
              H
            </span>
            <div>
              <p className="text-base font-semibold text-gray-900">{heading}</p>
              <p className="text-xs text-gray-500">{bodyText}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} className="text-sm text-gray-700 hover:text-blue-600">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400" />
      <p className="mx-auto max-w-6xl px-4 pt-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading} Inc. All rights reserved.
      </p>
    </footer>
  );
}
