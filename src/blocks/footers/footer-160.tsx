import { MessageCircle, Camera, Users, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer160(props: BlockProps) {
  const { theme, heading = "Forge & Fern", bodyText = "Plants, pots, and peace of mind." } = props;
  const columns = [
    { title: "Shop", links: [{ label: "Plants", url: "#" }, { label: "Planters", url: "#" }, { label: "Accessories", url: "#" }, { label: "Subscriptions", url: "#" }] },
    { title: "Grow", links: [{ label: "Plant Care", url: "#" }, { label: "Pet-Safe Guide", url: "#" }, { label: "Light Guide", url: "#" }, { label: "Blog", url: "#" }] },
    { title: "Help", links: [{ label: "Shipping", url: "#" }, { label: "Returns", url: "#" }, { label: "Plant Guarantee", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-emerald-950 py-16 text-emerald-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-2 text-sm text-emerald-200/80">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-emerald-200">
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-lg">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-emerald-200/80 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-emerald-800 pt-6 sm:flex-row sm:justify-between">
          <span className="text-xs text-emerald-300/70">© 2026 {heading}.</span>
          <div className="flex gap-2 text-xs text-emerald-300/70">
            <span className="rounded border border-emerald-700 px-2 py-0.5">USD</span>
            <span className="rounded border border-emerald-700 px-2 py-0.5">EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
