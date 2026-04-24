import { MessageCircle, Code, Briefcase, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer165(props: BlockProps) {
  const { theme, heading = "Statica", bodyText = "Observability for the modern stack." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Metrics", url: "#" }, { label: "Logs", url: "#" }, { label: "Traces", url: "#" }, { label: "Alerting", url: "#" }] },
    { title: "Solutions", links: [{ label: "Startups", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Government", url: "#" }, { label: "Agencies", url: "#" }] },
    { title: "Developers", links: [{ label: "Docs", url: "#" }, { label: "API", url: "#" }, { label: "Open Source", url: "#" }, { label: "Status", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 to-black py-14 text-slate-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600" />
              <p className="text-lg font-semibold text-white">{heading}</p>
            </div>
            <p className="mt-3 text-sm text-slate-400">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-slate-400">
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-400 hover:text-cyan-400">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:justify-between">
          <span className="text-xs text-slate-500">© 2026 {heading} Inc.</span>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
