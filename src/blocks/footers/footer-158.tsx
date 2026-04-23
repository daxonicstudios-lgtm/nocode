import { Camera, MessageCircle, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer158(props: BlockProps) {
  const { theme, heading = "Savanna Safari", bodyText = "Curated experiences across East Africa." } = props;
  const columns = [
    { title: "Destinations", links: [{ label: "Kenya", url: "#" }, { label: "Tanzania", url: "#" }, { label: "Rwanda", url: "#" }, { label: "Uganda", url: "#" }] },
    { title: "Experiences", links: [{ label: "Classic Safari", url: "#" }, { label: "Gorilla Trek", url: "#" }, { label: "Beach Extensions", url: "#" }, { label: "Honeymoons", url: "#" }] },
    { title: "Plan", links: [{ label: "Inquire", url: "#" }, { label: "Travel Guide", url: "#" }, { label: "FAQ", url: "#" }, { label: "Agents", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#f4efe6] py-14 text-stone-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-bold uppercase tracking-widest">{heading}</p>
            <p className="mt-3 text-sm text-stone-600">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 hover:bg-stone-800 hover:text-white"><Camera className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 hover:bg-stone-800 hover:text-white"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 hover:bg-stone-800 hover:text-white"><Play className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-500">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-700 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-stone-300 pt-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading} Ltd.</span>
          <span>Proudly Made in Nairobi.</span>
        </div>
      </div>
    </footer>
  );
}
