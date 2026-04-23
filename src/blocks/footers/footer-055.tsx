import type { BlockProps } from "@/blocks/types";

export default function Footer055(props: BlockProps) {
  const {
    theme,
    heading = "Kindred",
    bodyText = "Community software, built with care.",
    navLinks = [
      { label: "About", url: "#" },
      { label: "Press", url: "#" },
      { label: "Terms", url: "#" },
      { label: "Privacy", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500" />
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold">{heading}</p>
          <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
          {navLinks.map((l) => (
            <a key={l.label} href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading} Collective.
      </p>
    </footer>
  );
}
