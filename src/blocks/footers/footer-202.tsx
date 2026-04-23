import { MessageCircle, Briefcase, Code, Camera, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer202(props: BlockProps) {
  const { theme, heading = "Monarch", bodyText = "Enterprise infrastructure trusted by 10,000+ teams worldwide." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Platform", url: "#" }, { label: "Analytics", url: "#" }, { label: "Automation", url: "#" }, { label: "Security", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Solutions", links: [{ label: "For Startups", url: "#" }, { label: "For Enterprise", url: "#" }, { label: "For Developers", url: "#" }, { label: "For Agencies", url: "#" }, { label: "For Education", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Guides", url: "#" }, { label: "Blog", url: "#" }, { label: "Podcast", url: "#" }, { label: "Events", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Careers", url: "#" }, { label: "Contact", url: "#" }, { label: "Brand kit", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-950 py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:flex-row sm:items-center" style={{ backgroundColor: theme?.primary }}>
          <div>
            <p className="text-2xl font-bold text-white">Start your free trial today</p>
            <p className="mt-1 text-sm text-white/80">No credit card required · 14-day trial · Cancel anytime</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">Get started <ArrowRight className="h-4 w-4" /></a>
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
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Labs. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Camera className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
