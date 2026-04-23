import { MessageCircle, Briefcase, Code, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer220(props: BlockProps) {
  const { theme, heading = "Ironclad", bodyText = "Contract lifecycle management for legal teams." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Workflow Designer", url: "#" }, { label: "Repository", url: "#" }, { label: "AI", url: "#" }, { label: "Analytics", url: "#" }, { label: "Integrations", url: "#" }, { label: "Security", url: "#" }] },
    { title: "Solutions", links: [{ label: "Legal", url: "#" }, { label: "Sales", url: "#" }, { label: "HR", url: "#" }, { label: "Procurement", url: "#" }, { label: "Finance", url: "#" }, { label: "Operations", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Academy", url: "#" }, { label: "Blog", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Webinars", url: "#" }, { label: "Events", url: "#" }, { label: "Community", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "News", url: "#" }, { label: "Contact", url: "#" }, { label: "Partners", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-[#fafafa] py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <form className="mt-5">
              <label className="text-xs font-semibold text-gray-700">Subscribe to our newsletter</label>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="Your work email" className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500" />
                <button type="submit" aria-label="Subscribe" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white hover:bg-gray-800"><Mail className="h-4 w-4" /></button>
              </div>
            </form>
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© 2026 {heading} Legal Technologies Ltd.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-gray-900"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
