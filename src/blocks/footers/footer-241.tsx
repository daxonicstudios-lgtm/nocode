import { MessageCircle, Briefcase, Code, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer241(props: BlockProps) {
  const { theme, heading = "Fulcrum", bodyText = "The lever for modern operations teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Work Management", url: "#" }, { label: "Goals & OKRs", url: "#" }, { label: "Portfolios", url: "#" }, { label: "Time Tracking", url: "#" }, { label: "Automation", url: "#" }] },
    { title: "For Teams", links: [{ label: "Marketing", url: "#" }, { label: "Engineering", url: "#" }, { label: "Operations", url: "#" }, { label: "Creative", url: "#" }, { label: "Sales", url: "#" }, { label: "IT", url: "#" }] },
    { title: "Resources", links: [{ label: "Help Center", url: "#" }, { label: "Academy", url: "#" }, { label: "Templates", url: "#" }, { label: "Blog", url: "#" }, { label: "Events", url: "#" }, { label: "Developer API", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Affiliates", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gradient-to-b from-white to-gray-50 pb-8 pt-16" style={{ backgroundImage: theme?.background ? undefined : undefined, backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
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
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-500 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4">
              <p>© 2026 {heading}, Inc.</p>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Cookies</a>
              <a href="#" className="hover:text-gray-900">Accessibility</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 hover:bg-gray-50"><Globe className="h-3.5 w-3.5" /> Region: Africa</button>
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
