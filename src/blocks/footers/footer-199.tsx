import { MessageCircle, Camera, Users, Play, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer199(props: BlockProps) {
  const { theme, heading = "Aurora Airlines", bodyText = "Fly brighter across three continents." } = props;
  const columns = [
    { title: "Book", links: [{ label: "Flights", url: "#" }, { label: "Hotels", url: "#" }, { label: "Car Rental", url: "#" }, { label: "Packages", url: "#" }] },
    { title: "Manage", links: [{ label: "Check-in", url: "#" }, { label: "Change Flight", url: "#" }, { label: "Baggage", url: "#" }, { label: "Upgrades", url: "#" }] },
    { title: "Aurora Club", links: [{ label: "Join", url: "#" }, { label: "Benefits", url: "#" }, { label: "Partners", url: "#" }, { label: "Miles", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-indigo-950 py-14 text-indigo-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold tracking-wide text-white">{heading}</p>
            <p className="mt-2 text-sm text-indigo-300">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Camera, Users, Play, Briefcase].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-800 text-indigo-100 hover:bg-indigo-700"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-indigo-200 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-indigo-800 pt-6 text-xs text-indigo-300 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Group Ltd.</span>
          <div className="flex gap-3">
            <span>EN</span><span>|</span><span>FR</span><span>|</span><span>PT</span><span>|</span><span>SW</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
