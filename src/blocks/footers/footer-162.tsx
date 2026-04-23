import { MessageCircle, Camera, Users, Play } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer162(props: BlockProps) {
  const { theme, heading = "Ember Fitness", bodyText = "Train loud. Recover louder." } = props;
  const columns = [
    { title: "Workouts", links: [{ label: "HIIT", url: "#" }, { label: "Strength", url: "#" }, { label: "Yoga", url: "#" }, { label: "Running", url: "#" }] },
    { title: "Programs", links: [{ label: "30-Day Cut", url: "#" }, { label: "Bulk Up", url: "#" }, { label: "Marathon Prep", url: "#" }, { label: "Mobility", url: "#" }] },
    { title: "Gear", links: [{ label: "Shop", url: "#" }, { label: "App", url: "#" }, { label: "Merch", url: "#" }, { label: "Gift Cards", url: "#" }] },
  ];
  return (
    <footer className="w-full bg-orange-600 py-14 text-white" style={{ backgroundColor: theme?.background, color: theme?.foreground }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="text-3xl font-black uppercase italic tracking-tight">{heading}</p>
            <p className="mt-2 text-sm text-orange-100">{bodyText}</p>
            <div className="mt-5 flex gap-2">
              {[MessageCircle, Camera, Users, Play].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded bg-white/10 hover:bg-white/20"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-black uppercase tracking-widest">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}><a href={l.url} className="text-sm text-orange-100 hover:text-white">{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-xs uppercase tracking-wider text-orange-100">© 2026 {heading}. Go hard.</div>
      </div>
    </footer>
  );
}
