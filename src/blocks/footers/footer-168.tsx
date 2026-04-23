import { Camera, MessageCircle, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer168(props: BlockProps) {
  const { theme, heading = "Rosewood Bakery", bodyText = "Sourdough, pastries, and honest bread." } = props;
  const columns = [
    { title: "Menu", links: [{ label: "Breads", url: "#" }, { label: "Pastries", url: "#" }, { label: "Cakes", url: "#" }, { label: "Seasonal", url: "#" }] },
    { title: "Order", links: [{ label: "Online Pickup", url: "#" }, { label: "Wholesale", url: "#" }, { label: "Catering", url: "#" }, { label: "Gift Boxes", url: "#" }] },
    { title: "Visit", links: [{ label: "Hours", url: "#" }, { label: "Directions", url: "#" }, { label: "Events", url: "#" }, { label: "Careers", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-rose-50 py-14 text-rose-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-serif text-2xl italic">{heading}</p>
            <p className="mt-2 text-sm text-rose-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="text-rose-900/60 hover:text-rose-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-rose-900/60 hover:text-rose-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-rose-900/60 hover:text-rose-900"><Users className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-rose-900/70 hover:text-rose-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-rose-200 pt-6 text-center font-serif text-sm italic text-rose-900/70">
          Made with butter. Baked with love. © 2026 {heading}.
        </div>
      </div>
    </footer>
  );
}
