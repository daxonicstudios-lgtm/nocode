import { MessageCircle, Briefcase, Code, Play, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer212(props: BlockProps) {
  const { theme, heading = "Obelisk", bodyText = "The data platform for AI-native teams." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Data Warehouse", url: "#" }, { label: "Transformations", url: "#" }, { label: "Reverse ETL", url: "#" }, { label: "ML Ops", url: "#" }, { label: "Pipelines", url: "#" }, { label: "Catalog", url: "#" }] },
    { title: "Solutions", links: [{ label: "Analytics Teams", url: "#" }, { label: "Data Engineers", url: "#" }, { label: "ML Engineers", url: "#" }, { label: "Executives", url: "#" }, { label: "Enterprise", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "API Reference", url: "#" }, { label: "SDKs", url: "#" }, { label: "Open Source", url: "#" }, { label: "Community", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Blog", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-950 py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-gray-800 pb-10 sm:flex-row sm:items-center">
          <p className="text-2xl font-bold text-white sm:text-3xl">Ship your first pipeline in 10 minutes.</p>
          <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100">Book a demo <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-white">{heading}</p>
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
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Data Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 rounded-full border border-gray-800 px-3 py-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>All systems operational</span></div>
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
