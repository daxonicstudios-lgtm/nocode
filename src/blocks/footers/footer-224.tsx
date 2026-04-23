import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer224(props: BlockProps) {
  const { theme, heading = "Atlas", bodyText = "Location intelligence for every business." } = props;
  const columns = [
    { title: "Products", links: [{ label: "Maps SDK", url: "#" }, { label: "Geocoding", url: "#" }, { label: "Search", url: "#" }, { label: "Navigation", url: "#" }, { label: "Static Maps", url: "#" }, { label: "Vision", url: "#" }] },
    { title: "Solutions", links: [{ label: "Logistics", url: "#" }, { label: "Retail", url: "#" }, { label: "Real Estate", url: "#" }, { label: "Automotive", url: "#" }, { label: "Travel", url: "#" }, { label: "Weather", url: "#" }] },
    { title: "Developers", links: [{ label: "Documentation", url: "#" }, { label: "Tutorials", url: "#" }, { label: "API Playground", url: "#" }, { label: "Forums", url: "#" }, { label: "Pricing Calculator", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-950 py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-gray-400">Sales</p>
              <p className="mt-1 text-white">sales@{heading.toLowerCase()}.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">Support</p>
              <p className="mt-1 text-white">support@{heading.toLowerCase()}.com</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400">Press</p>
              <p className="mt-1 text-white">press@{heading.toLowerCase()}.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Location Services</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
