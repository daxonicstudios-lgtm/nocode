import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer201(props: BlockProps) {
  const { theme, heading = "Titan", bodyText = "The platform for modern enterprises building at scale." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Overview", url: "#" }, { label: "Features", url: "#" }, { label: "Pricing", url: "#" }, { label: "Integrations", url: "#" }, { label: "Changelog", url: "#" }, { label: "Roadmap", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Investors", url: "#" }, { label: "Partners", url: "#" }] },
    { title: "Resources", links: [{ label: "Documentation", url: "#" }, { label: "Blog", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Webinars", url: "#" }, { label: "Help Center", url: "#" }, { label: "API Reference", url: "#" }] },
    { title: "Legal", links: [{ label: "Privacy Policy", url: "#" }, { label: "Terms of Service", url: "#" }, { label: "Cookie Policy", url: "#" }, { label: "Security", url: "#" }, { label: "Compliance", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-4 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" aria-label="Github" className="text-gray-500 hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-gray-900"><Play className="h-5 w-5" /></a>
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
          <p>© 2026 {heading}, Inc. All rights reserved.</p>
          <p>SOC 2 · ISO 27001 · GDPR compliant</p>
        </div>
      </div>
    </footer>
  );
}
