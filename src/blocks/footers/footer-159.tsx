import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer159(props: BlockProps) {
  const { theme, heading = "Pilot CRM", bodyText = "The CRM founders actually use." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Sales Pipeline", url: "#" }, { label: "Email", url: "#" }, { label: "Automations", url: "#" }, { label: "Reports", url: "#" }] },
    { title: "Pricing", links: [{ label: "Plans", url: "#" }, { label: "Free Trial", url: "#" }, { label: "Startup Program", url: "#" }, { label: "Compare", url: "#" }] },
    { title: "Learn", links: [{ label: "Guides", url: "#" }, { label: "Webinars", url: "#" }, { label: "Customers", url: "#" }, { label: "Glossary", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t-4 border-indigo-600 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.primary }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 font-bold text-white" style={{ backgroundColor: theme?.primary }}>P</span>
              <span className="text-lg font-semibold text-gray-900">{heading}</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-indigo-600"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-600"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-600"><Code className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-indigo-600">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {heading}. All rights reserved.</div>
      </div>
    </footer>
  );
}
