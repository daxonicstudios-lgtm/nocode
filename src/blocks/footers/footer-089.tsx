import type { BlockProps } from "@/blocks/types";

export default function Footer089(props: BlockProps) {
  const {
    theme,
    heading = "Parallel",
    bodyText = "Developer productivity on autopilot.",
    navLinks = [
      { label: "Changelog", url: "#" },
      { label: "API", url: "#" },
      { label: "Community", url: "#" },
      { label: "Careers", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl border-t border-gray-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              <span className="h-6 w-1 rounded-sm bg-gray-900" />
              <span className="h-6 w-1 rounded-sm bg-gray-900" />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">{heading}</p>
              <p className="text-xs text-gray-500">{bodyText}</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
            {navLinks.map((l) => (
              <a key={l.label} href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-6 text-xs text-gray-500">© 2026 {heading} Labs. Built for engineers.</p>
      </div>
    </footer>
  );
}
