import type { BlockProps } from "@/blocks/types";

export default function Footer064(props: BlockProps) {
  const {
    theme,
    heading = "Cascade",
    bodyText = "Workflow automation, without the YAML.",
    navLinks = [
      { label: "Integrations", url: "#" },
      { label: "Templates", url: "#" },
      { label: "Docs", url: "#" },
      { label: "Sign in", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="h-px w-full bg-gray-200" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <p className="text-sm text-gray-600">All systems normal</p>
          <span className="mx-3 hidden text-gray-300 sm:inline">|</span>
          <p className="hidden text-sm font-semibold text-gray-900 sm:inline">{heading}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-6xl border-t border-gray-100 px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-500">{bodyText}</p>
        <p className="mt-1 text-xs text-gray-400">© 2026 {heading} Systems.</p>
      </div>
    </footer>
  );
}
