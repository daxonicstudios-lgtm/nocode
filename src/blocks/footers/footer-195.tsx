import { MessageCircle, Camera, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer195(props: BlockProps) {
  const { theme, heading = "Granite Gym", bodyText = "Strength training for the long run." } = props;
  const columns = [
    { title: "Classes", links: [{ label: "Olympic", url: "#" }, { label: "Powerlifting", url: "#" }, { label: "Conditioning", url: "#" }, { label: "Foundations", url: "#" }] },
    { title: "Membership", links: [{ label: "Join", url: "#" }, { label: "Pricing", url: "#" }, { label: "Day Pass", url: "#" }, { label: "Gift", url: "#" }] },
    { title: "Info", links: [{ label: "Coaches", url: "#" }, { label: "Schedule", url: "#" }, { label: "Contact", url: "#" }, { label: "FAQ", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-stone-950 py-14 text-stone-200" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-2xl font-black uppercase italic tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-stone-400">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-stone-700 text-stone-400 hover:border-yellow-400 hover:text-yellow-400"><Camera className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-stone-700 text-stone-400 hover:border-yellow-400 hover:text-yellow-400"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-stone-700 text-stone-400 hover:border-yellow-400 hover:text-yellow-400"><Users className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-black uppercase tracking-widest text-yellow-400">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm uppercase tracking-wide text-stone-300 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-800 pt-6 text-center text-xs uppercase tracking-widest text-stone-500">© 2026 {heading}. No excuses.</div>
      </div>
    </footer>
  );
}
