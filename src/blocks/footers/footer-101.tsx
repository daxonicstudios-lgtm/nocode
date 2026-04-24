import type { BlockProps } from "@/blocks/types";

export default function Footer101(props: BlockProps) {
  const {
    theme,
    heading = "Vertex",
    bodyText = "Built for teams that ship faster.",
  } = props;
  const columns = [
    { title: "Product", links: [{ label: "Features", url: "#" }, { label: "Pricing", url: "#" }, { label: "Changelog", url: "#" }, { label: "Roadmap", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Support", url: "#" }, { label: "Community", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {heading}. All rights reserved.</div>
      </div>
    </footer>
  );
}
