import { MessageCircle, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer187(props: BlockProps) {
  const { theme, heading = "Helix", bodyText = "Open data. Better science." } = props;
  const columns = [
    { title: "Research", links: [{ label: "Datasets", url: "#" }, { label: "Publications", url: "#" }, { label: "Methods", url: "#" }, { label: "Citations", url: "#" }] },
    { title: "Tools", links: [{ label: "API", url: "#" }, { label: "Python SDK", url: "#" }, { label: "R Package", url: "#" }, { label: "Jupyter", url: "#" }] },
    { title: "Institute", links: [{ label: "People", url: "#" }, { label: "Grants", url: "#" }, { label: "Press", url: "#" }, { label: "Donate", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl text-gray-900">{heading} Research</p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base text-gray-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900 hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Institute. A 501(c)(3) non-profit.</span>
          <span>Open Access · Creative Commons BY 4.0</span>
        </div>
      </div>
    </footer>
  );
}
