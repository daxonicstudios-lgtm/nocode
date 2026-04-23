import { MessageCircle, Briefcase, Code, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer196(props: BlockProps) {
  const { theme, heading = "Harbor", bodyText = "Secure developer workstations in the cloud." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Workstations", url: "#" }, { label: "Teams", url: "#" }, { label: "Security", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Solutions", links: [{ label: "Enterprise", url: "#" }, { label: "Regulated", url: "#" }, { label: "Remote", url: "#" }, { label: "Contractors", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Changelog", url: "#" }, { label: "Support", url: "#" }, { label: "Contact Sales", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-slate-100 py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-semibold text-slate-900">{heading}</p>
            <p className="mt-2 text-sm text-slate-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-slate-500">
              <a href="#" className="hover:text-slate-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-slate-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-slate-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-slate-900"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-slate-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-slate-600 hover:text-slate-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-300 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {heading} Labs</span>
          <div className="flex gap-3">
            <span className="rounded border border-slate-300 px-2 py-0.5">SOC 2</span>
            <span className="rounded border border-slate-300 px-2 py-0.5">ISO 27001</span>
            <span className="rounded border border-slate-300 px-2 py-0.5">FedRAMP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
