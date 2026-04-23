import { MessageCircle, Briefcase, Code } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer243(props: BlockProps) {
  const { theme, heading = "Apex", bodyText = "Performance analytics for the world's best athletes." } = props;
  const columns = [
    { title: "Product", links: [{ label: "Athlete App", url: "#" }, { label: "Coach Platform", url: "#" }, { label: "Team Manager", url: "#" }, { label: "Video Analysis", url: "#" }, { label: "Wearables SDK", url: "#" }, { label: "Pricing", url: "#" }] },
    { title: "Sports", links: [{ label: "Soccer", url: "#" }, { label: "Basketball", url: "#" }, { label: "Running", url: "#" }, { label: "Cycling", url: "#" }, { label: "Swimming", url: "#" }, { label: "Rugby", url: "#" }, { label: "All Sports", url: "#" }] },
    { title: "Resources", links: [{ label: "Academy", url: "#" }, { label: "Research", url: "#" }, { label: "Blog", url: "#" }, { label: "Events", url: "#" }, { label: "Certification", url: "#" }, { label: "Podcast", url: "#" }] },
    { title: "Company", links: [{ label: "About", url: "#" }, { label: "Customers", url: "#" }, { label: "Careers", url: "#" }, { label: "Partners", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }, { label: "Legal", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-orange-600 py-16 text-orange-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-black uppercase tracking-tight text-white">{heading}</p>
            <p className="mt-3 text-sm text-orange-100">{bodyText}</p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-orange-700 p-2">
                <p className="text-lg font-bold text-white">50M+</p>
                <p className="text-[10px] text-orange-200">Athletes</p>
              </div>
              <div className="rounded-lg bg-orange-700 p-2">
                <p className="text-lg font-bold text-white">180</p>
                <p className="text-[10px] text-orange-200">Countries</p>
              </div>
              <div className="rounded-lg bg-orange-700 p-2">
                <p className="text-lg font-bold text-white">4.9★</p>
                <p className="text-[10px] text-orange-200">Rating</p>
              </div>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-orange-50 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-orange-500 pt-6 text-xs text-orange-200 sm:flex-row">
          <p>© 2026 {heading} Sports Performance</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Briefcase className="h-4 w-4" /></a>
            <a href="#" className="hover:text-white"><Code className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
