import type { BlockProps } from "@/blocks/types";

export default function Footer077(props: BlockProps) {
  const {
    theme,
    heading = "Baobab",
    bodyText = "Fintech rooted in the communities we serve.",
    navLinks = [
      { label: "Send money", url: "#" },
      { label: "Business", url: "#" },
      { label: "Agents", url: "#" },
      { label: "Help", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-amber-900 py-12 text-amber-50"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-3xl font-extrabold text-white">{heading}</p>
          <p className="mt-3 max-w-sm text-sm text-amber-100/80">{bodyText}</p>
          <p className="mt-3 text-xs text-amber-200/70">Licensed in Kenya, Uganda, Ghana, Nigeria.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:text-right">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-amber-100 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-amber-800 px-4 pt-4 text-xs text-amber-200/70 sm:px-6 lg:px-8">
        © 2026 {heading} Financial
      </div>
    </footer>
  );
}
