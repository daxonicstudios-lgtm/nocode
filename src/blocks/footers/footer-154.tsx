import { Briefcase, MessageCircle, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer154(props: BlockProps) {
  const { theme, heading = "Beacon Analytics", bodyText = "Clear data, confident decisions." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Dashboards", url: "#" }, { label: "Reports", url: "#" }, { label: "Predictive AI", url: "#" }, { label: "Consulting", url: "#" }] },
    { title: "About", links: [{ label: "Our Story", url: "#" }, { label: "Team", url: "#" }, { label: "Careers", url: "#" }, { label: "Newsroom", url: "#" }] },
    { title: "Contact", links: [{ label: "Sales", url: "#" }, { label: "Support", url: "#" }, { label: "Partnerships", url: "#" }, { label: "Media", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"><Code className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}, LLC.</span>
          <span>ISO 27001 certified.</span>
        </div>
      </div>
    </footer>
  );
}
