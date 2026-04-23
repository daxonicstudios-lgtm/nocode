import { MessageCircle, Briefcase, Code, Play, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer215(props: BlockProps) {
  const { theme, heading = "Citadel", bodyText = "Identity and access for the enterprise, simplified." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Single Sign-On", url: "#" }, { label: "Multi-Factor Auth", url: "#" }, { label: "Directory", url: "#" }, { label: "Passwordless", url: "#" }, { label: "Lifecycle", url: "#" }, { label: "Governance", url: "#" }] },
    { title: "Solutions", links: [{ label: "Workforce", url: "#" }, { label: "Customer Identity", url: "#" }, { label: "Zero Trust", url: "#" }, { label: "API Security", url: "#" }, { label: "Compliance", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Webinars", url: "#" }, { label: "Whitepapers", url: "#" }, { label: "Trust Center", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Leadership", url: "#" }, { label: "News", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">Certifications</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-700">SOC 2 Type II</span>
              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-700">ISO 27001</span>
              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-700">HIPAA</span>
              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-700">PCI DSS</span>
              <span className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-[10px] font-semibold text-gray-700">FedRAMP</span>
            </div>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 {heading} Security Inc.</p>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Trust</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-1 hover:text-gray-900"><Globe className="h-3.5 w-3.5" /> English</button>
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Play className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
