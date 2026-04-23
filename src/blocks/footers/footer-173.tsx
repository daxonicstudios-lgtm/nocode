import { Camera, Users, MessageCircle } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer173(props: BlockProps) {
  const { theme, heading = "Verdant Yoga", bodyText = "Breathe deep. Move slow. Grow rooted." } = props;
  const columns = [
    { title: "Classes", links: [{ label: "Vinyasa", url: "#" }, { label: "Yin", url: "#" }, { label: "Hot Flow", url: "#" }, { label: "Meditation", url: "#" }] },
    { title: "Membership", links: [{ label: "Pricing", url: "#" }, { label: "New Student", url: "#" }, { label: "Gift Cards", url: "#" }, { label: "App", url: "#" }] },
    { title: "Studio", links: [{ label: "Schedule", url: "#" }, { label: "Teachers", url: "#" }, { label: "Retreats", url: "#" }, { label: "Contact", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-green-50 py-16 text-green-950" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl">{heading}</p>
            <p className="mt-3 text-sm italic text-green-900/70">{bodyText}</p>
            <div className="mt-5 flex gap-3 text-green-900/60">
              <a href="#" className="hover:text-green-900"><Camera className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-900"><Users className="h-5 w-5" /></a>
              <a href="#" className="hover:text-green-900"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.25em] text-green-800">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-green-900/70 hover:text-green-900">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center font-serif text-sm italic text-green-900/60">Namaste · © 2026 {heading}</div>
      </div>
    </footer>
  );
}
