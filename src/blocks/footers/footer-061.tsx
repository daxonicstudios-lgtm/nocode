import type { BlockProps } from "@/blocks/types";

export default function Footer061(props: BlockProps) {
  const {
    theme,
    heading = "Atlas",
    bodyText = "Global payroll for modern companies.",
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Customers", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-slate-900 py-12 text-slate-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500 text-lg font-bold text-white">
            A
          </div>
          <div>
            <p className="text-xl font-semibold text-white">{heading}</p>
            <p className="mt-1 text-sm">{bodyText}</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 px-4 pt-4 text-xs text-slate-500 sm:px-6 lg:px-8">
        © 2026 {heading} Holdings.
      </div>
    </footer>
  );
}
