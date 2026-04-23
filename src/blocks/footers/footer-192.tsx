import { MessageCircle, Camera, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer192(props: BlockProps) {
  const { theme, heading = "Moxie Beauty", bodyText = "Clean makeup that earns its place." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "Lips", url: "#" }, { label: "Eyes", url: "#" }, { label: "Face", url: "#" }, { label: "Skin", url: "#" }, { label: "Sets", url: "#" }] },
    { title: "Help", links: [{ label: "Shipping", url: "#" }, { label: "Returns", url: "#" }, { label: "Shade Finder", url: "#" }, { label: "Contact", url: "#" }] },
    { title: "About", links: [{ label: "Our Story", url: "#" }, { label: "Ingredients", url: "#" }, { label: "Sustainability", url: "#" }, { label: "Press", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-pink-50 py-14 text-pink-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl italic text-pink-700">{heading}</p>
            <p className="mt-2 text-sm text-pink-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700"><Camera className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700"><Users className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-pink-700">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-pink-900/70 hover:text-pink-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-pink-200 pt-6 text-xs text-pink-800/70 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}. Cruelty-free and vegan.</span>
          <span>Designed in Lagos · Shipped worldwide</span>
        </div>
      </div>
    </footer>
  );
}
