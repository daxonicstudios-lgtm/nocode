import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer221(props: BlockProps) {
  const { theme, heading = "Polaris", bodyText = "Navigate your cloud. End-to-end observability." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "APM", url: "#" }, { label: "Infrastructure", url: "#" }, { label: "Logs", url: "#" }, { label: "Synthetic", url: "#" }, { label: "RUM", url: "#" }, { label: "Security", url: "#" }, { label: "Network", url: "#" }] },
    { title: "Use Cases", links: [{ label: "DevOps", url: "#" }, { label: "SRE", url: "#" }, { label: "Cloud Migration", url: "#" }, { label: "Kubernetes", url: "#" }, { label: "Serverless", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Academy", url: "#" }, { label: "Podcast", url: "#" }, { label: "Events", url: "#" }, { label: "Changelog", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Careers", url: "#" }, { label: "Newsroom", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-indigo-950 py-16 text-indigo-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-indigo-200/80">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-indigo-100/90 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-indigo-900 pt-6 text-xs text-indigo-300/70 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 {heading} Observability, Inc.</p>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Trust</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-indigo-800 px-3 py-1"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span>Status: operational</span></div>
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
