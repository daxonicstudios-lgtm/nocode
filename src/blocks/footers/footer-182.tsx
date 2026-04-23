import { MessageCircle, Code, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer182(props: BlockProps) {
  const { theme, heading = "Prism", bodyText = "Type systems without the tears." } = props;
  const columns = [
    { title: "Docs", links: [{ label: "Getting Started", url: "#" }, { label: "Guides", url: "#" }, { label: "API Reference", url: "#" }, { label: "Examples", url: "#" }] },
    { title: "Tools", links: [{ label: "CLI", url: "#" }, { label: "VS Code", url: "#" }, { label: "Prism UI", url: "#" }, { label: "Migrator", url: "#" }] },
    { title: "Company", links: [{ label: "Blog", url: "#" }, { label: "Careers", url: "#" }, { label: "Brand", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-pink-500 via-violet-500 to-sky-500" />
              <p className="text-lg font-semibold text-gray-900">{heading}</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-4 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-medium text-gray-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-violet-600">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs text-gray-500">© 2026 {heading}. Crafted with ❤️ by engineers who hated waiting for builds.</div>
      </div>
    </footer>
  );
}
