import type { BlockProps } from "@/blocks/types";

export default function Footer060(props: BlockProps) {
  const {
    theme,
    heading = "Quill",
    bodyText = "Words for writers who care about every comma.",
    navLinks = [
      { label: "Writing", url: "#" },
      { label: "Archive", url: "#" },
      { label: "About", url: "#" },
      { label: "RSS", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-[#fdfcf8] py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="font-serif text-4xl text-gray-900">{heading}.</p>
            <p className="mt-3 text-sm italic text-gray-600">{bodyText}</p>
          </div>
          <ul className="flex flex-col gap-2 sm:items-end">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} className="font-serif text-base text-gray-800 hover:text-gray-950">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
          © 2026 {heading}
        </div>
      </div>
    </footer>
  );
}
