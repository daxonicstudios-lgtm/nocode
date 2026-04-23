import { Camera, MessageCircle, Users, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer197(props: BlockProps) {
  const { theme, heading = "Tango Theatre", bodyText = "Live performances since 1923." } = props;
  const columns = [
    { title: "Shows", links: [{ label: "This Season", url: "#" }, { label: "Coming Soon", url: "#" }, { label: "Archive", url: "#" }, { label: "Touring", url: "#" }] },
    { title: "Tickets", links: [{ label: "Box Office", url: "#" }, { label: "Subscriptions", url: "#" }, { label: "Groups", url: "#" }, { label: "Gift Cards", url: "#" }] },
    { title: "Support", links: [{ label: "Donate", url: "#" }, { label: "Membership", url: "#" }, { label: "Sponsor", url: "#" }, { label: "Volunteer", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-red-950 py-16 text-red-50" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-3xl italic">{heading}</p>
            <p className="mt-2 text-sm text-red-200/80">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-red-200">
              {[Camera, MessageCircle, Users, Play].map((Icon, i) => (
                <a key={i} href="#" className="hover:text-white"><Icon className="h-5 w-5" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-serif text-base text-yellow-200">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-red-100/80 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-red-800 pt-6 text-center font-serif text-xs italic text-red-200/70">
          © 2026 {heading}. A 501(c)(3) non-profit. Box Office: 555-TANGO.
        </div>
      </div>
    </footer>
  );
}
