import type { BlockProps } from "@/blocks/types";

export default function Footer052(props: BlockProps) {
  const {
    theme,
    heading = "Ember",
    bodyText = "Design tools for modern teams.",
    navLinks = [
      { label: "Features", url: "#" },
      { label: "Docs", url: "#" },
      { label: "Careers", url: "#" },
      { label: "Support", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-gray-900 py-12 text-gray-300"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-sm">
          <p className="font-serif text-2xl font-semibold text-white">{heading}</p>
          <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
        </div>
        <nav className="flex flex-wrap gap-6 sm:gap-8">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-gray-300 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading}. Crafted with care.
      </div>
    </footer>
  );
}
