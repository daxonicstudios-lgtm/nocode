import { Camera, MessageCircle, Users } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer188(props: BlockProps) {
  const { theme, heading = "Velvet Studio", bodyText = "Wedding photography, unhurried and honest." } = props;
  const columns = [
    { title: "Portfolio", links: [{ label: "Weddings", url: "#" }, { label: "Engagements", url: "#" }, { label: "Elopements", url: "#" }, { label: "Editorials", url: "#" }] },
    { title: "Info", links: [{ label: "Experience", url: "#" }, { label: "Pricing", url: "#" }, { label: "FAQ", url: "#" }, { label: "Albums", url: "#" }] },
    { title: "Hello", links: [{ label: "Inquire", url: "#" }, { label: "Journal", url: "#" }, { label: "Reviews", url: "#" }, { label: "Instagram", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#efeae4] py-20 text-stone-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="font-serif text-5xl italic text-stone-900">{heading}</p>
          <p className="mt-3 text-sm tracking-wide text-stone-600">{bodyText}</p>
        </div>
        <div className="grid grid-cols-2 gap-10 border-t border-stone-300 pt-10 md:grid-cols-4">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="font-serif text-sm italic text-stone-700 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Follow</p>
            <div className="mt-4 flex gap-3 text-stone-500">
              <a href="#" className="hover:text-stone-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-stone-900"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-stone-900"><Users className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center font-serif text-xs italic text-stone-500">© 2026 {heading} · photographs by Marisol Vega</div>
      </div>
    </footer>
  );
}
