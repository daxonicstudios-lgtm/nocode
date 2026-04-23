import type { BlockProps } from "@/blocks/types";

export default function Footer067(props: BlockProps) {
  const {
    theme,
    heading = "Rafiki",
    bodyText = "Built in Africa for the world.",
    navLinks = [
      { label: "Product", url: "#" },
      { label: "Partners", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Careers", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-gradient-to-br from-amber-50 to-rose-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-2xl font-extrabold text-gray-900">{heading}</p>
          <p className="mt-2 max-w-md text-sm text-gray-700">{bodyText}</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.url}
              className="rounded-full border border-gray-900/10 bg-white/60 px-4 py-1.5 text-sm text-gray-800 hover:bg-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-gray-600 sm:px-6 lg:px-8">
        © 2026 {heading}. Made with love across 54 countries.
      </p>
    </footer>
  );
}
