import { Camera, Users, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer166(props: BlockProps) {
  const { theme, heading = "Cornerstone Church", bodyText = "A community rooted in love and service." } = props;
  const columns = [
    { title: "Gather", links: [{ label: "Service Times", url: "#" }, { label: "Locations", url: "#" }, { label: "Events", url: "#" }, { label: "Livestream", url: "#" }] },
    { title: "Grow", links: [{ label: "Small Groups", url: "#" }, { label: "Kids", url: "#" }, { label: "Youth", url: "#" }, { label: "Missions", url: "#" }] },
    { title: "Serve", links: [{ label: "Volunteer", url: "#" }, { label: "Give", url: "#" }, { label: "Prayer", url: "#" }, { label: "Counseling", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-[#faf7f2] py-14 text-stone-800" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-2 text-sm italic text-stone-600">{bodyText}</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="text-stone-500 hover:text-stone-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-900"><Users className="h-5 w-5" /></a>
              <a href="#" className="text-stone-500 hover:text-stone-900"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-lg text-stone-900">{c.title}</p>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-stone-600 hover:text-stone-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-stone-300 pt-6 text-center text-xs text-stone-500">
          © 2026 {heading}. 1247 Ridgeview Drive, Sunday Services 9am and 11am.
        </div>
      </div>
    </footer>
  );
}
