import { MessageCircle, Briefcase, Code, Play, Globe, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer250(props: BlockProps) {
  const { theme, heading = "Empire", bodyText = "The all-in-one business OS trusted by 100,000 teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Projects", url: "#" }, { label: "Docs", url: "#" }, { label: "Chat", url: "#" }, { label: "Meetings", url: "#" }, { label: "Tasks", url: "#" }, { label: "Whiteboard", url: "#" }] },
    { title: "Solutions", links: [{ label: "Engineering", url: "#" }, { label: "Marketing", url: "#" }, { label: "Sales", url: "#" }, { label: "Design", url: "#" }, { label: "HR", url: "#" }, { label: "Finance", url: "#" }, { label: "Legal", url: "#" }] },
    { title: "Resources", links: [{ label: "Templates", url: "#" }, { label: "Guides", url: "#" }, { label: "Academy", url: "#" }, { label: "Community", url: "#" }, { label: "Events", url: "#" }, { label: "Newsletter", url: "#" }, { label: "Changelog", url: "#" }, { label: "Roadmap", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Security", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-950 pt-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-gray-800 pb-12 sm:flex-row sm:items-center">
          <div>
            <p className="text-3xl font-bold text-white sm:text-4xl">Build your {heading}.</p>
            <p className="mt-2 text-gray-400">One platform, infinite possibilities. Start free, scale globally.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Contact sales</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100">Start free <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              <span className="rounded border border-gray-800 bg-gray-900 px-2 py-0.5 text-[10px] text-gray-400">SOC 2</span>
              <span className="rounded border border-gray-800 bg-gray-900 px-2 py-0.5 text-[10px] text-gray-400">ISO 27001</span>
              <span className="rounded border border-gray-800 bg-gray-900 px-2 py-0.5 text-[10px] text-gray-400">GDPR</span>
              <span className="rounded border border-gray-800 bg-gray-900 px-2 py-0.5 text-[10px] text-gray-400">HIPAA</span>
            </div>
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
        <div className="mt-14 border-t border-gray-800 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-500 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4">
              <p>© 2026 {heading} Systems, Inc.</p>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Status</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-gray-800 px-3 py-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>All systems operational</span></div>
              <button className="inline-flex items-center gap-1 rounded-full border border-gray-800 px-3 py-1 hover:text-white"><Globe className="h-3.5 w-3.5" /> Region: Africa</button>
              <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Play className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
