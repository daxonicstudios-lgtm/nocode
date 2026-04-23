import { MessageCircle, Users, Camera, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer151(props: BlockProps) {
  const { theme, heading = "Atlas", bodyText = "Modern tools for growing teams around the globe." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Features", url: "#" }, { label: "Pricing", url: "#" }, { label: "Integrations", url: "#" }, { label: "Changelog", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Careers", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Resources", links: [{ label: "Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Community", url: "#" }, { label: "Support", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12" style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-bold tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-900"><Users className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-900"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-700 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">© 2026 {heading}. All rights reserved.</div>
      </div>
    </footer>
  );
}
