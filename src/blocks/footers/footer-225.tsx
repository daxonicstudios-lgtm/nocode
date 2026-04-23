import { MessageCircle, Briefcase, Code, ArrowRight } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer225(props: BlockProps) {
  const { theme, heading = "Nexus", bodyText = "The integration platform for modern work." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Connectors", url: "#" }, { label: "Workflows", url: "#" }, { label: "AI Agents", url: "#" }, { label: "Data Sync", url: "#" }, { label: "Embedded iPaaS", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Integrations", links: [{ label: "Salesforce", url: "#" }, { label: "HubSpot", url: "#" }, { label: "Slack", url: "#" }, { label: "NetSuite", url: "#" }, { label: "Workday", url: "#" }, { label: "View all 500+", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "API Reference", url: "#" }, { label: "Community", url: "#" }, { label: "Academy", url: "#" }, { label: "Templates", url: "#" }, { label: "Blog", url: "#" }, { label: "Events", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Customers", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact Sales", url: "#" }, { label: "Newsroom", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 p-10" style={{ backgroundColor: theme?.primary }}>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-3xl font-bold text-white">Connect everything. In minutes.</p>
              <p className="mt-2 text-white/80">Start building with 500+ prebuilt integrations.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">Try {heading} free <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pb-10 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Platforms, Inc.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
