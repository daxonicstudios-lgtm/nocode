import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer203(props: BlockProps) {
  const { theme, heading = "Stellar", bodyText = "Ship confidently with a platform built for high-velocity teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Features", url: "#" }, { label: "Pricing", url: "#" }, { label: "Download", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Developers", links: [{ label: "Documentation", url: "#" }, { label: "API Reference", url: "#" }, { label: "SDKs", url: "#" }, { label: "Open Source", url: "#" }, { label: "Status", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Blog", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Press", url: "#" }] },
    { title: "Legal", links: [{ label: "Terms", url: "#" }, { label: "Privacy", url: "#" }, { label: "Cookies", url: "#" }, { label: "DPA", url: "#" }, { label: "Subprocessors", url: "#" }, { label: "Acceptable Use", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-slate-950 py-16 text-slate-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ backgroundImage: theme?.accent ? `linear-gradient(to right, transparent, ${theme.accent}, transparent)` : undefined }} />
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="rounded-full border border-slate-800 p-2 text-slate-400 hover:border-slate-600 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-slate-800 p-2 text-slate-400 hover:border-slate-600 hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-slate-800 p-2 text-slate-400 hover:border-slate-600 hover:text-white"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 {heading}. All rights reserved.</p>
          <div className="flex items-center gap-2 rounded-full border border-slate-800 px-3 py-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /><span>All systems operational</span></div>
        </div>
      </div>
    </footer>
  );
}
