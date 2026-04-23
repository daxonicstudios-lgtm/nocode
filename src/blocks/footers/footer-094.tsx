import type { BlockProps } from "@/blocks/types";

export default function Footer094(props: BlockProps) {
  const {
    theme,
    heading = "Whisker",
    bodyText = "Pet care, tail-waggingly good.",
    navLinks = [
      { label: "Food", url: "#" },
      { label: "Toys", url: "#" },
      { label: "Health", url: "#" },
      { label: "Account", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-amber-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <span className="text-3xl">🐾</span>
          <div>
            <p className="text-2xl font-bold text-amber-900">{heading}</p>
            <p className="mt-1 text-sm text-amber-800/80">{bodyText}</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.url}
                className="rounded-full border border-amber-300 bg-white px-3 py-1 text-sm text-amber-900 hover:bg-amber-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-5xl px-4 text-xs text-amber-800/60 sm:px-6 lg:px-8">
        © 2026 {heading} Pet Co.
      </p>
    </footer>
  );
}
