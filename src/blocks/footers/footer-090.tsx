import type { BlockProps } from "@/blocks/types";

export default function Footer090(props: BlockProps) {
  const {
    theme,
    heading = "Verdant",
    bodyText = "Greener supply chains, step by step.",
    navLinks = [
      { label: "Impact", url: "#" },
      { label: "Reports", url: "#" },
      { label: "Partners", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-lime-950 py-14 text-lime-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-[1.3fr_1fr] sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-lime-300" fill="currentColor">
              <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z" />
            </svg>
            <p className="text-2xl font-semibold text-white">{heading}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-lime-200/80">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-lime-100 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-lime-900 px-4 pt-4 text-xs text-lime-300/70 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading}</p>
        <p>B-Corp Certified · Carbon neutral since 2022</p>
      </div>
    </footer>
  );
}
