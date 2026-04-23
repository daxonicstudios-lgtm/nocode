import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer209(props: BlockProps) {
  const { theme, heading = "Northwind", bodyText = "Enterprise security and compliance for everything you ship." } = props;
  const columns = [
    { title: "Platform", links: [{ label: "Access Control", url: "#" }, { label: "Audit Logs", url: "#" }, { label: "SSO & SAML", url: "#" }, { label: "Provisioning", url: "#" }, { label: "Compliance", url: "#" }] },
    { title: "Solutions", links: [{ label: "For Engineering", url: "#" }, { label: "For Security", url: "#" }, { label: "For Finance", url: "#" }, { label: "For Legal", url: "#" }, { label: "For HR", url: "#" }] },
    { title: "Resources", links: [{ label: "Documentation", url: "#" }, { label: "Blog", url: "#" }, { label: "Webinars", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Guides", url: "#" }, { label: "Glossary", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Partners", url: "#" }, { label: "Contact", url: "#" }, { label: "Newsroom", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ backgroundImage: theme?.primary ? `linear-gradient(to right, ${theme.primary}, ${theme.accent ?? theme.primary})` : undefined }} />
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-gray-900">{heading}</p>
            <p className="mt-3 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-md border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">SOC 2</span>
              <span className="rounded-md border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">ISO 27001</span>
              <span className="rounded-md border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">HIPAA</span>
              <span className="rounded-md border border-gray-300 px-2 py-1 text-[10px] font-semibold text-gray-700">GDPR</span>
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
          <p>© 2026 {heading} Corporation. All rights reserved.</p>
          <div className="flex items-center gap-4">
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
