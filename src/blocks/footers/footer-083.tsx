import type { BlockProps } from "@/blocks/types";

export default function Footer083(props: BlockProps) {
  const {
    theme,
    heading = "Rowan",
    bodyText = "Healthcare software, human-first.",
    navLinks = [
      { label: "Product", url: "#" },
      { label: "Providers", url: "#" },
      { label: "Patients", url: "#" },
      { label: "About", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 pb-8 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white">
              <span className="text-sm font-bold">R</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">{heading}</p>
              <p className="mt-1 max-w-sm text-sm text-gray-600">{bodyText}</p>
            </div>
          </div>
          <ul className="flex flex-col gap-2 sm:items-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} className="text-sm text-gray-700 hover:text-teal-700">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 border-t border-gray-200 pt-4 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© 2026 {heading} Health</p>
          <p>HIPAA compliant · SOC 2 Type II</p>
        </div>
      </div>
    </footer>
  );
}
