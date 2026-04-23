import { MessageCircle, Briefcase, Code, Play, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer231(props: BlockProps) {
  const { theme, heading = "Lighthouse", bodyText = "Customer success platform for SaaS companies at scale." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Health Scores", url: "#" }, { label: "Playbooks", url: "#" }, { label: "NPS & Surveys", url: "#" }, { label: "Journey Analytics", url: "#" }, { label: "Revenue Ops", url: "#" }, { label: "AI Copilot", url: "#" }] },
    { title: "Solutions", links: [{ label: "CS Leaders", url: "#" }, { label: "CS Ops", url: "#" }, { label: "Account Managers", url: "#" }, { label: "Revenue Teams", url: "#" }, { label: "Executives", url: "#" }] },
    { title: "Resources", links: [{ label: "Blog", url: "#" }, { label: "Customer Academy", url: "#" }, { label: "Community", url: "#" }, { label: "Templates", url: "#" }, { label: "Reports", url: "#" }, { label: "Podcast", url: "#" }, { label: "Help Center", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }, { label: "Security", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="bg-amber-500 py-5" style={{ backgroundColor: theme?.accent }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-amber-950">Free trial · 14 days · No credit card required</p>
          <a href="#" className="inline-flex items-center gap-1 text-sm font-bold text-amber-950 hover:text-black">Start now <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
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
          <p>© 2026 {heading} Technologies, Inc. · SOC 2 · ISO 27001 · GDPR</p>
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
