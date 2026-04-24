import type { BlockProps } from "@/blocks/types";

export default function Footer069(props: BlockProps) {
  const {
    theme,
    heading = "Meridian",
    bodyText = "Private wealth, public values.",
    navLinks = [
      { label: "Philosophy", url: "#" },
      { label: "Strategies", url: "#" },
      { label: "Insights", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-[#f4f1ec] py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-stone-300 pb-10 sm:grid-cols-2">
          <div>
            <p className="font-serif text-3xl font-light text-stone-900">{heading}</p>
            <p className="mt-3 max-w-sm text-sm text-stone-700">{bodyText}</p>
          </div>
          <ul className="flex flex-col gap-3 sm:items-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} className="font-serif text-base text-stone-800 hover:text-stone-950">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs text-stone-500 sm:flex-row sm:justify-between">
          <p>© 2026 {heading} Capital</p>
          <p>Authorized and regulated.</p>
        </div>
      </div>
    </footer>
  );
}
