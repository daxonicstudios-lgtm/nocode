import { MessageCircle, Camera, Play, Briefcase } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer191(props: BlockProps) {
  const { theme, heading = "Gallery 47", bodyText = "A contemporary art space in Dakar." } = props;
  const columns = [
    { title: "Visit", links: [{ label: "Hours & Tickets", url: "#" }, { label: "Exhibitions", url: "#" }, { label: "Education", url: "#" }, { label: "Plan Visit", url: "#" }] },
    { title: "Collection", links: [{ label: "Highlights", url: "#" }, { label: "Artists", url: "#" }, { label: "Acquisitions", url: "#" }, { label: "Archive", url: "#" }] },
    { title: "Support", links: [{ label: "Become a Member", url: "#" }, { label: "Donate", url: "#" }, { label: "Sponsor", url: "#" }, { label: "Volunteer", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-white py-16" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="font-serif text-3xl text-black">{heading}</p>
            <p className="mt-3 text-sm text-neutral-600">{bodyText}</p>
            <div className="mt-5 flex gap-4 text-neutral-500">
              <a href="#" className="hover:text-black"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-black"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-black"><Play className="h-5 w-5" /></a>
              <a href="#" className="hover:text-black"><Briefcase className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-black">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-neutral-700 hover:text-black hover:underline">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:justify-between">
          <span>© 2026 {heading}. Non-profit cultural institution.</span>
          <span>47 Rue Mohammed V, Dakar, Senegal</span>
        </div>
      </div>
    </footer>
  );
}
