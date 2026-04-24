import type { BlockProps } from "@/blocks/types";

export default function Footer078(props: BlockProps) {
  const {
    theme,
    heading = "Plinth",
    bodyText = "Architecture and interiors.",
    navLinks = [
      { label: "Projects", url: "#" },
      { label: "Studio", url: "#" },
      { label: "Press", url: "#" },
      { label: "Enquire", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-20"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Studio</p>
            <p className="mt-3 font-serif text-5xl font-light text-gray-900">{heading}</p>
            <p className="mt-4 max-w-sm text-sm text-gray-600">{bodyText}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Navigate</p>
            <ul className="mt-3 flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.url} className="text-base text-gray-900 underline-offset-4 hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-gray-400">
          © 2026 — {heading}
        </p>
      </div>
    </footer>
  );
}
