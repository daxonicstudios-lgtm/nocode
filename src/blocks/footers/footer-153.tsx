import { Camera, Users, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer153(props: BlockProps) {
  const { theme, heading = "Marigold & Co.", bodyText = "Small-batch ceramics from Nairobi." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "New Arrivals", url: "#" }, { label: "Bestsellers", url: "#" }, { label: "Sale", url: "#" }, { label: "Gift Cards", url: "#" }] },
    { title: "Care", links: [{ label: "Shipping", url: "#" }, { label: "Returns", url: "#" }, { label: "FAQ", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "Studio", links: [{ label: "About", url: "#" }, { label: "Journal", url: "#" }, { label: "Workshops", url: "#" }, { label: "Stockists", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-amber-50 py-16 text-stone-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl italic">{heading}</p>
            <p className="mt-3 text-sm text-stone-600">{bodyText}</p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-stone-600 hover:text-stone-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-stone-600 hover:text-stone-900"><Users className="h-5 w-5" /></a>
              <a href="#" className="text-stone-600 hover:text-stone-900"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base italic text-stone-700">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-600 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-300 pt-6 text-center text-xs text-stone-500">
          © 2026 {heading}. Handmade with love.
        </div>
      </div>
    </footer>
  );
}
