import { MessageCircle, Briefcase, Code, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer211(props: BlockProps) {
  const { theme, heading = "Harbor", bodyText = "The reliable foundation for ambitious businesses." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Features", url: "#" }, { label: "Pricing", url: "#" }, { label: "Integrations", url: "#" }, { label: "Enterprise", url: "#" }, { label: "Security", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Leadership", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Investors", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Resources", links: [{ label: "Documentation", url: "#" }, { label: "Blog", url: "#" }, { label: "Webinars", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Partner Program", url: "#" }] },
    { title: "Support", links: [{ label: "Help Center", url: "#" }, { label: "Status", url: "#" }, { label: "Community Forum", url: "#" }, { label: "Developer API", url: "#" }, { label: "Contact Support", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white pb-10 pt-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><Code className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 {heading} Technologies, Inc.</p>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
            <a href="#" className="hover:text-gray-900">Sitemap</a>
          </div>
          <button className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-2.5 py-1 hover:bg-gray-50"><Globe className="h-3.5 w-3.5" /> English (US)</button>
        </div>
      </div>
    </footer>
  );
}
