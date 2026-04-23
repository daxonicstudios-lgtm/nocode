import type { BlockProps } from "@/blocks/types";

export default function Footer072(props: BlockProps) {
  const {
    theme,
    heading = "Basil",
    bodyText = "Seasonal boxes delivered fresh.",
    navLinks = [
      { label: "Shop", url: "#" },
      { label: "Farms", url: "#" },
      { label: "Recipes", url: "#" },
      { label: "Account", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-green-800 py-12 text-green-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-4xl italic">{heading}</p>
          <p className="mt-2 max-w-xs text-sm text-green-100/80">{bodyText}</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-green-50 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-2 border-t border-green-700 px-4 pt-4 text-xs text-green-200 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {heading} Farms</p>
        <p>Grown sustainably.</p>
      </div>
    </footer>
  );
}
