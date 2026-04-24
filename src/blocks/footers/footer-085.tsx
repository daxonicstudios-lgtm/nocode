import type { BlockProps } from "@/blocks/types";

export default function Footer085(props: BlockProps) {
  const {
    theme,
    heading = "Nectar",
    bodyText = "Natural skincare. Honest ingredients.",
    navLinks = [
      { label: "Shop all", url: "#" },
      { label: "Ingredients", url: "#" },
      { label: "Routine", url: "#" },
      { label: "Account", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-yellow-50 py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-3xl lowercase tracking-wide text-yellow-950">{heading}.</p>
          <p className="mt-2 max-w-xs text-sm text-yellow-900/70">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm lowercase text-yellow-900 hover:text-yellow-950">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-2 border-t border-yellow-200 px-4 pt-4 text-xs text-yellow-900/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading.toLowerCase()}.</p>
        <p>Cruelty-free · Plastic-free packaging</p>
      </div>
    </footer>
  );
}
