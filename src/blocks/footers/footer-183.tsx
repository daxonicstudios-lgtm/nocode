import { MessageCircle, Camera, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer183(props: BlockProps) {
  const { theme, heading = "Coastline Surf Co.", bodyText = "Boards shaped by hand in Muizenberg." } = props;
  const columns = [
    { title: "Surf", links: [{ label: "Shortboards", url: "#" }, { label: "Longboards", url: "#" }, { label: "Fish", url: "#" }, { label: "Custom", url: "#" }] },
    { title: "Rider", links: [{ label: "Size Guide", url: "#" }, { label: "Care", url: "#" }, { label: "Pro Team", url: "#" }, { label: "Lessons", url: "#" }] },
    { title: "Shop", links: [{ label: "Apparel", url: "#" }, { label: "Wax & Fins", url: "#" }, { label: "Wetsuits", url: "#" }, { label: "Gift Cards", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-cyan-950 py-14 text-cyan-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-2 text-sm italic text-cyan-200/80">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-cyan-200">
              <a href="#" className="hover:text-white"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Users className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-cyan-100/80 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-cyan-800 pt-6 text-xs text-cyan-300 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}.</span>
          <span>Shaped in Cape Town, ridden worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
