import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer206(props: BlockProps) {
  const { theme, heading = "Forge", bodyText = "Tools for teams who build the future." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Pricing", url: "#" }, { label: "Customers", url: "#" }, { label: "Integrations", url: "#" }, { label: "Changelog", url: "#" }, { label: "Download", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Resources", links: [{ label: "Blog", url: "#" }, { label: "Docs", url: "#" }, { label: "Academy", url: "#" }, { label: "Community", url: "#" }, { label: "Newsletter", url: "#" }, { label: "Podcast", url: "#" }] },
    { title: "Support", links: [{ label: "Help Center", url: "#" }, { label: "Contact Sales", url: "#" }, { label: "Status", url: "#" }, { label: "API Reference", url: "#" }, { label: "Security", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-zinc-900 py-16 text-zinc-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-black uppercase tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-zinc-400">{bodyText}</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold text-white">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-zinc-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-zinc-800 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-zinc-500 hover:text-white"><Code className="h-5 w-5" /></a>
            </div>
            <div className="flex flex-col items-start gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:gap-6">
              <p>© 2026 {heading}. Forged with precision.</p>
              <p>ISO 27001 · SOC 2 · GDPR</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
