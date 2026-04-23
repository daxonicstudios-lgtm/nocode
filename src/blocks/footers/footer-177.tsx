import { Camera, Users, MessageCircle, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer177(props: BlockProps) {
  const { theme, heading = "Polaris Outfitters", bodyText = "Built for the long trail." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "Jackets", url: "#" }, { label: "Tents", url: "#" }, { label: "Boots", url: "#" }, { label: "Packs", url: "#" }, { label: "Sale", url: "#" }] },
    { title: "Explore", links: [{ label: "Trip Reports", url: "#" }, { label: "Gear Guide", url: "#" }, { label: "Trails", url: "#" }, { label: "Videos", url: "#" }] },
    { title: "Service", links: [{ label: "Repair", url: "#" }, { label: "Returns", url: "#" }, { label: "Warranty", url: "#" }, { label: "Stores", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-stone-800 py-14 text-stone-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-black uppercase tracking-wide text-white">{heading}</p>
            <p className="mt-2 text-sm text-stone-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="text-stone-400 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><Play className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-stone-700 pt-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Co.</span>
          <span>1% for the Planet member</span>
        </div>
      </div>
    </footer>
  );
}
