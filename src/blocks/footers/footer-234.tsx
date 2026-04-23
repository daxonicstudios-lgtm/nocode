import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer234(props: BlockProps) {
  const { theme, heading = "Ascend", bodyText = "The flight planning system for professional pilots." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Flight Planning", url: "#" }, { label: "Weather", url: "#" }, { label: "Charts", url: "#" }, { label: "Performance", url: "#" }, { label: "Dispatch", url: "#" }, { label: "Fleet Manager", url: "#" }] },
    { title: "For", links: [{ label: "Airlines", url: "#" }, { label: "Business Aviation", url: "#" }, { label: "Operators", url: "#" }, { label: "Schools", url: "#" }, { label: "Governments", url: "#" }] },
    { title: "Resources", links: [{ label: "Documentation", url: "#" }, { label: "Training", url: "#" }, { label: "Webinars", url: "#" }, { label: "Blog", url: "#" }, { label: "Regulatory Updates", url: "#" }, { label: "Newsletter", url: "#" }] },
    { title: "Support", links: [{ label: "Help Center", url: "#" }, { label: "24/7 Support", url: "#" }, { label: "System Status", url: "#" }, { label: "Release Notes", url: "#" }, { label: "Developer API", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-2 border-blue-900 bg-slate-100 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-slate-900">{heading}</p>
            <p className="mt-2 text-sm text-slate-600">{bodyText}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Certifications</p>
            <p className="mt-1 text-xs text-slate-600">FAA · EASA · ICAO · DO-200B</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-700 hover:text-slate-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-300 pt-6 text-xs text-slate-600 sm:flex-row">
          <p>© 2026 {heading} Aviation Systems · ICAO approved data provider</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-slate-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-slate-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
