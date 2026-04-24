import type { BlockProps } from "@/blocks/types";

export default function Footer087(props: BlockProps) {
  const {
    theme,
    heading = "Reverie",
    bodyText = "Boutique fragrance house.",
    navLinks = [
      { label: "Collections", url: "#" },
      { label: "Discovery set", url: "#" },
      { label: "Stockists", url: "#" },
      { label: "Press", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-20"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <p className="font-serif text-7xl italic font-thin tracking-tight text-gray-900">{heading}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-gray-500">{bodyText}</p>
          </div>
          <ul className="flex flex-col items-center gap-3 sm:items-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.url}
                  className="text-xs uppercase tracking-[0.3em] text-gray-700 hover:text-gray-950"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-400">
            © 2026 · {heading}
          </p>
        </div>
      </div>
    </footer>
  );
}
