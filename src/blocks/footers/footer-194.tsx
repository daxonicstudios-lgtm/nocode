import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer194(props: BlockProps) {
  const { theme, heading = "Canopy", bodyText = "HR built for companies that care." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Payroll", url: "#" }, { label: "Benefits", url: "#" }, { label: "Hiring", url: "#" }, { label: "Compliance", url: "#" }] },
    { title: "Compare", links: [{ label: "vs. Gusto", url: "#" }, { label: "vs. Rippling", url: "#" }, { label: "vs. Deel", url: "#" }, { label: "Migration", url: "#" }] },
    { title: "Company", links: [{ label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Blog", url: "#" }, { label: "Jobs", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-emerald-50 py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-emerald-600 p-6 text-white sm:flex-row sm:items-center">
          <p className="text-lg font-semibold">Hiring soon? Run payroll in 5 minutes.</p>
          <a href="#" className="rounded-lg bg-white px-5 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Start free</a>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold text-emerald-950">{heading}</p>
            <p className="mt-2 text-sm text-emerald-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-emerald-700">
              <a href="#" className="hover:text-emerald-950"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-950"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-950"><Code className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-emerald-950">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-emerald-900/70 hover:text-emerald-950">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-xs text-emerald-800/70">© 2026 {heading} Labs, Inc.</div>
      </div>
    </footer>
  );
}
