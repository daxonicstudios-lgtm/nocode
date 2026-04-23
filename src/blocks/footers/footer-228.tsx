import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer228(props: BlockProps) {
  const { theme, heading = "Redwood", bodyText = "Enterprise-grade open source, supported by experts." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Enterprise Edition", url: "#" }, { label: "Cloud", url: "#" }, { label: "Community Edition", url: "#" }, { label: "Extensions", url: "#" }, { label: "Integrations", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Support", links: [{ label: "Documentation", url: "#" }, { label: "Knowledge Base", url: "#" }, { label: "Community Forum", url: "#" }, { label: "Professional Services", url: "#" }, { label: "Training", url: "#" }] },
    { title: "Resources", links: [{ label: "Blog", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Whitepapers", url: "#" }, { label: "Webinars", url: "#" }, { label: "Events", url: "#" }, { label: "Newsletter", url: "#" }, { label: "Roadmap", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Leadership", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Customers", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-4 border-emerald-600 bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 rounded-lg border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs font-semibold text-gray-700">Apache 2.0 Licensed</p>
              <p className="mt-1 text-[11px] text-gray-500">Star us on Code · 45.2k stars</p>
            </div>
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
          <p>© 2026 {heading} Open Source Foundation</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
