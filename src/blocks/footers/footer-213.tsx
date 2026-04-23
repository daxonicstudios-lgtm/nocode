import { MessageCircle, Briefcase, Users, Camera } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer213(props: BlockProps) {
  const { theme, heading = "Zenith", bodyText = "Premium services and bespoke experiences since 1998." } = props;
  const columns = [
    { title: "Services", links: [{ label: "Consulting", url: "#" }, { label: "Strategy", url: "#" }, { label: "Design", url: "#" }, { label: "Engineering", url: "#" }, { label: "Growth", url: "#" }, { label: "Research", url: "#" }] },
    { title: "Industries", links: [{ label: "Finance", url: "#" }, { label: "Healthcare", url: "#" }, { label: "Retail", url: "#" }, { label: "Technology", url: "#" }, { label: "Energy", url: "#" }, { label: "Media", url: "#" }] },
    { title: "Insights", links: [{ label: "Articles", url: "#" }, { label: "Reports", url: "#" }, { label: "Case Studies", url: "#" }, { label: "Events", url: "#" }, { label: "Newsletter", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Leadership", url: "#" }, { label: "Careers", url: "#" }, { label: "Offices", url: "#" }, { label: "Press Room", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#1a1a1a] py-16 text-gray-400" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl font-light italic text-white">{heading}</p>
            <p className="mt-3 text-sm text-gray-400">{bodyText}</p>
            <p className="mt-5 text-xs text-gray-500">Founded in New York · Offices in London, Lagos, Singapore</p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-sm italic text-white">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-gray-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
            <p>© 2026 {heading} Partners LLP. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Users className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white"><Camera className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
