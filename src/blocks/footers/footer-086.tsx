import type { BlockProps } from "@/blocks/types";

export default function Footer086(props: BlockProps) {
  const {
    theme,
    heading = "Pivot",
    bodyText = "Analytics for product teams.",
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Integrations", url: "#" },
      { label: "Customers", url: "#" },
      { label: "Pricing", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-gray-900 py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 21h18M6 17V9m6 8V5m6 12v-6" />
            </svg>
            <p className="text-xl font-bold text-white">{heading}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm">{bodyText}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:text-right">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-800 px-4 pt-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading} Analytics
      </div>
    </footer>
  );
}
