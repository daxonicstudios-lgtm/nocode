import type { BlockProps } from "@/blocks/types";

export default function Footer080(props: BlockProps) {
  const {
    theme,
    heading = "Pebble",
    bodyText = "Small, smooth, reliable.",
    navLinks = [
      { label: "How it works", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Login", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-stone-100 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl bg-white p-8 shadow-sm sm:p-10 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-stone-800" />
            <p className="text-lg font-semibold text-stone-900">{heading}</p>
          </div>
          <p className="mt-3 max-w-xs text-sm text-stone-600">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-stone-700 hover:text-stone-950">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-6 max-w-5xl px-4 text-xs text-stone-500 sm:px-6 lg:px-8">
        © 2026 {heading}. All rights reserved.
      </p>
    </footer>
  );
}
