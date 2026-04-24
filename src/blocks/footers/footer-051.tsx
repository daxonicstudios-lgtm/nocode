import type { BlockProps } from "@/blocks/types";

export default function Footer051(props: BlockProps) {
  const {
    theme,
    heading = "Nimbus",
    bodyText = "Tools for modern teams.",
    navLinks = [
      { label: "Product", url: "#" },
      { label: "Pricing", url: "#" },
      { label: "Blog", url: "#" },
      { label: "Contact", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
        <div>
          <p className="text-lg font-bold tracking-tight">{heading}</p>
          <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
        </div>
        <ul className="flex flex-col gap-2 sm:items-end">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-gray-200 px-4 pt-4 text-xs text-gray-500 sm:px-6 lg:px-8">
        © 2026 {heading}. All rights reserved.
      </div>
    </footer>
  );
}
