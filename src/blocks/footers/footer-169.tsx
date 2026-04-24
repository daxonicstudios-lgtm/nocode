import { MessageCircle, Briefcase, Code, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer169(props: BlockProps) {
  const { theme, heading = "Voltage", bodyText = "Energy solutions for a decarbonized future." } = props;
  const columns = [
    { title: "Solutions", links: [{ label: "Solar", url: "#" }, { label: "Wind", url: "#" }, { label: "Storage", url: "#" }, { label: "Grid", url: "#" }] },
    { title: "Industries", links: [{ label: "Residential", url: "#" }, { label: "Commercial", url: "#" }, { label: "Utility", url: "#" }, { label: "Government", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Investors", url: "#" }, { label: "Careers", url: "#" }, { label: "News", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-14" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 h-1 w-full bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500" />
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <p className="text-2xl font-black tracking-tight text-gray-900">{heading}</p>
            <p className="mt-2 text-sm text-gray-600">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-500">
              <a href="#" className="hover:text-gray-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Code className="h-5 w-5" /></a>
              <a href="#" className="hover:text-gray-900"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold text-gray-900">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-600 hover:text-gray-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Holdings, Inc.</span>
          <span>Certified B Corporation</span>
        </div>
      </div>
    </footer>
  );
}
