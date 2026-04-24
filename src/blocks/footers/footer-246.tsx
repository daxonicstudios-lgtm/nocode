import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer246(props: BlockProps) {
  const { theme, heading = "Conduit", bodyText = "The API platform powering modern integrations." } = props;
  const columns = [
    { title: "Product", links: [{ label: "API Gateway", url: "#" }, { label: "Developer Portal", url: "#" }, { label: "API Analytics", url: "#" }, { label: "Security", url: "#" }, { label: "Monetization", url: "#" }, { label: "Testing", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Platform", links: [{ label: "Hybrid", url: "#" }, { label: "Cloud", url: "#" }, { label: "On-premise", url: "#" }, { label: "Air-gapped", url: "#" }, { label: "Multi-region", url: "#" }] },
    { title: "Resources", links: [{ label: "Documentation", url: "#" }, { label: "Tutorials", url: "#" }, { label: "Templates", url: "#" }, { label: "Best Practices", url: "#" }, { label: "Community", url: "#" }, { label: "Blog", url: "#" }, { label: "Podcast", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Careers", url: "#" }, { label: "News", url: "#" }, { label: "Contact", url: "#" }, { label: "Trust", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-4 border-violet-600 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-mono text-2xl font-bold tracking-tight text-gray-900">&lt;{heading}/&gt;</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 rounded-md border border-gray-200 bg-gray-50 p-3">
              <p className="font-mono text-[11px] text-gray-500">npm install @{heading.toLowerCase()}/sdk</p>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p className="font-mono">© 2026 {heading}/api · v14.2.0</p>
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
