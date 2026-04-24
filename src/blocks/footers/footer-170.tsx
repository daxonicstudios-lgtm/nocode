import { MessageCircle, Camera, Play, Mail } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer170(props: BlockProps) {
  const { theme, heading = "Parchment", bodyText = "A reading club for the curious." } = props;
  const columns = [
    { title: "Read", links: [{ label: "Current Pick", url: "#" }, { label: "Archive", url: "#" }, { label: "Essays", url: "#" }, { label: "Interviews", url: "#" }] },
    { title: "Members", links: [{ label: "Join", url: "#" }, { label: "Gift", url: "#" }, { label: "Login", url: "#" }, { label: "Benefits", url: "#" }] },
    { title: "About", links: [{ label: "Our Editors", url: "#" }, { label: "Authors", url: "#" }, { label: "Press", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#fdfbf5] py-16 text-stone-900" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl">{heading}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600">{bodyText}</p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-stone-500 hover:text-stone-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-900"><Play className="h-5 w-5" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-900"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base italic">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-600 hover:text-stone-900 hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-stone-200 pt-6 text-xs text-stone-500">
          © 2026 {heading} Media. Published in Accra and New York.
        </div>
      </div>
    </footer>
  );
}
