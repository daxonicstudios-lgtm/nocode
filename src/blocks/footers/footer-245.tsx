import { MessageCircle, Briefcase, Code, Play, Globe } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer245(props: BlockProps) {
  const { theme, heading = "Caravan", bodyText = "Global logistics infrastructure for emerging markets." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Last-Mile Delivery", url: "#" }, { label: "Freight", url: "#" }, { label: "Warehousing", url: "#" }, { label: "Customs", url: "#" }, { label: "E-commerce Fulfillment", url: "#" }, { label: "Fleet Leasing", url: "#" }] },
    { title: "Regions", links: [{ label: "West Africa", url: "#" }, { label: "East Africa", url: "#" }, { label: "Southern Africa", url: "#" }, { label: "North Africa", url: "#" }, { label: "Middle East", url: "#" }, { label: "Southeast Asia", url: "#" }] },
    { title: "Resources", links: [{ label: "Track Shipment", url: "#" }, { label: "Rate Calculator", url: "#" }, { label: "API Docs", url: "#" }, { label: "Blog", url: "#" }, { label: "Reports", url: "#" }, { label: "Help Center", url: "#" }, { label: "Support", url: "#" }] },
    { title: "Company", links: [{ label: "About us", url: "#" }, { label: "Leadership", url: "#" }, { label: "Careers", url: "#" }, { label: "Press Room", url: "#" }, { label: "Sustainability", url: "#" }, { label: "Investors", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full border-t border-amber-900/30 bg-[#1c1410] py-16 text-amber-100" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-bold tracking-tight text-amber-50">{heading}</p>
            <p className="mt-3 text-sm text-amber-200/70">{bodyText}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-amber-300">Headquartered in</p>
            <p className="mt-1 text-sm text-amber-100">Lagos · Nairobi · Cairo · Dubai</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-amber-100 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-amber-900/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-amber-300/70 sm:flex-row">
            <p>© 2026 {heading} Logistics Group</p>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-1 hover:text-white"><Globe className="h-3.5 w-3.5" /> EN · Africa</button>
              <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Play className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
