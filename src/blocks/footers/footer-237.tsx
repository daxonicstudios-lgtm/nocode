import { MessageCircle, Briefcase, Code, Users, Camera, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer237(props: BlockProps) {
  const { theme, heading = "Fortress", bodyText = "Enterprise governance, risk, and compliance platform." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Risk Management", url: "#" }, { label: "Audit", url: "#" }, { label: "Policy Management", url: "#" }, { label: "Third-Party Risk", url: "#" }, { label: "Business Continuity", url: "#" }, { label: "ESG", url: "#" }] },
    { title: "Industries", links: [{ label: "Financial Services", url: "#" }, { label: "Healthcare", url: "#" }, { label: "Insurance", url: "#" }, { label: "Manufacturing", url: "#" }, { label: "Energy", url: "#" }, { label: "Public Sector", url: "#" }] },
    { title: "Services", links: [{ label: "Implementation", url: "#" }, { label: "Advisory", url: "#" }, { label: "Training", url: "#" }, { label: "Managed Services", url: "#" }, { label: "Migration", url: "#" }, { label: "Support Plans", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Trust Center", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-slate-900 py-16 text-slate-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Compliance</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">SOC 2</span>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">ISO 27001</span>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">ISO 9001</span>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">GDPR</span>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">HIPAA</span>
              <span className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">FedRAMP</span>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 {heading} GRC Ltd.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Users className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Camera className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
