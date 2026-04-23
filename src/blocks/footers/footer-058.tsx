import type { BlockProps } from "@/blocks/types";

export default function Footer058(props: BlockProps) {
  const {
    theme,
    heading = "Noble",
    bodyText = "Banking made transparent.",
    navLinks = [
      { label: "Accounts", url: "#" },
      { label: "Loans", url: "#" },
      { label: "Investing", url: "#" },
      { label: "Help Center", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-emerald-950 py-12 text-emerald-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-4 md:flex-row md:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-serif text-3xl italic">{heading}</p>
          <p className="mt-2 max-w-xs text-sm text-emerald-200/80">{bodyText}</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-emerald-200 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-4 text-xs text-emerald-300/70 sm:px-6 lg:px-8">
        © 2026 {heading}. FDIC insured. Member FINRA.
      </div>
    </footer>
  );
}
