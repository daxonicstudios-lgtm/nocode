import { MessageCircle, Briefcase, Code, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer208(props: BlockProps) {
  const { theme, heading = "Meridian", bodyText = "Observability for modern engineering teams." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Logs", url: "#" }, { label: "Metrics", url: "#" }, { label: "Traces", url: "#" }, { label: "APM", url: "#" }, { label: "Alerts", url: "#" }, { label: "Dashboards", url: "#" }] },
    { title: "Developers", links: [{ label: "Documentation", url: "#" }, { label: "API", url: "#" }, { label: "Integrations", url: "#" }, { label: "CLI", url: "#" }, { label: "Open Source", url: "#" }, { label: "Status", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Blog", url: "#" }, { label: "Security", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy", url: "#" }, { label: "Terms", url: "#" }, { label: "DPA", url: "#" }, { label: "Subprocessors", url: "#" }, { label: "Cookies", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#0d1117] py-16 text-gray-300" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-3xl border border-gray-800 bg-gray-900/50 p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-bold text-white">Ready to ship better software?</p>
              <p className="mt-1 text-sm text-gray-400">Join 5,000+ engineering teams using {heading} to monitor production.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100">Start free trial <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-white">{heading}</p>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Technologies.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
