import type { BlockProps } from "@/blocks/types";

export default function Footer091(props: BlockProps) {
  const {
    theme,
    heading = "Binder",
    bodyText = "Notes, docs, and minds organized.",
    navLinks = [
      { label: "Templates", url: "#" },
      { label: "Mobile", url: "#" },
      { label: "Help", url: "#" },
      { label: "Sign up", url: "#" },
    ],
  } = props;
  return (
    <footer
      className="w-full bg-white py-10"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xl font-bold text-gray-900">{heading}</p>
              <p className="mt-1 text-sm text-gray-600">{bodyText}</p>
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
        </div>
        <p className="mt-6 text-xs text-gray-500">© 2026 {heading}. A notebook for the modern mind.</p>
      </div>
    </footer>
  );
}
