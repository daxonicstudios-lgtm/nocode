import { MessageCircle, Camera, Briefcase, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer164(props: BlockProps) {
  const { theme, heading = "Northwind Hotels", bodyText = "Boutique stays in unforgettable places." } = props;
  const columns = [
    { title: "Destinations", links: [{ label: "Cape Town", url: "#" }, { label: "Lisbon", url: "#" }, { label: "Kyoto", url: "#" }, { label: "Marrakech", url: "#" }, { label: "Mexico City", url: "#" }] },
    { title: "Stay", links: [{ label: "Book Direct", url: "#" }, { label: "Gift Cards", url: "#" }, { label: "Loyalty", url: "#" }, { label: "Groups", url: "#" }] },
    { title: "About", links: [{ label: "Story", url: "#" }, { label: "Press", url: "#" }, { label: "Careers", url: "#" }, { label: "Sustainability", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-stone-900 py-16 text-stone-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="font-serif text-4xl tracking-wider">{heading}</p>
          <p className="mt-2 text-sm italic text-stone-400">{bodyText}</p>
        </div>
        <div className="grid grid-cols-2 gap-10 border-t border-stone-700 pt-10 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base text-white">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-400 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-serif text-base text-white">Follow</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-stone-400 hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><Briefcase className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-white"><Users className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs uppercase tracking-widest text-stone-500">© 2026 {heading} Collection</div>
      </div>
    </footer>
  );
}
