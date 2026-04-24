import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer240(props: BlockProps) {
  const { theme, heading = "Keystone", bodyText = "The foundation for content-driven websites." } = props;
  const columns = [
    { title: "Product", links: [{ label: "CMS", url: "#" }, { label: "Admin UI", url: "#" }, { label: "GraphQL API", url: "#" }, { label: "Fields & Types", url: "#" }, { label: "Workflow", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Developers", links: [{ label: "Getting Started", url: "#" }, { label: "Documentation", url: "#" }, { label: "Examples", url: "#" }, { label: "GitHub", url: "#" }, { label: "NPM Package", url: "#" }, { label: "Roadmap", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Community", links: [{ label: "Discord", url: "#" }, { label: "Showcase", url: "#" }, { label: "Open Source", url: "#" }, { label: "Contributors", url: "#" }, { label: "Events", url: "#" }, { label: "Sponsors", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Team", url: "#" }, { label: "Blog", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }, { label: "Brand Assets", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 rounded-md border border-gray-300 bg-gray-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-800">
              <Code className="h-4 w-4" />
              <span>Star on GitHub</span>
              <span className="rounded bg-gray-700 px-1.5 py-0.5 text-xs">8.2k</span>
            </a>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Open Source · MIT License</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
