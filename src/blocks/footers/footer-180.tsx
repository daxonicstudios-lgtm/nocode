import { MessageCircle, Briefcase, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer180(props: BlockProps) {
  const { theme, heading = "Fairway Logistics", bodyText = "Global freight, human touch." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Air Freight", url: "#" }, { label: "Ocean", url: "#" }, { label: "Ground", url: "#" }, { label: "Warehousing", url: "#" }] },
    { title: "Industries", links: [{ label: "Retail", url: "#" }, { label: "Manufacturing", url: "#" }, { label: "Healthcare", url: "#" }, { label: "Tech", url: "#" }] },
    { title: "Resources", links: [{ label: "Track Shipment", url: "#" }, { label: "Quote", url: "#" }, { label: "Locations", url: "#" }, { label: "Support", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-gray-900 py-14 text-gray-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold uppercase tracking-wide text-white">{heading}</p>
            <p className="mt-2 text-sm text-gray-400">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-gray-400">
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold uppercase tracking-wider text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Group.</span>
          <div className="flex gap-3">
            <span>EN</span><span>|</span><span>ES</span><span>|</span><span>FR</span><span>|</span><span>ZH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
