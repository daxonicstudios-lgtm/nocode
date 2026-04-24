import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer393(props: BlockProps) {
  const { theme, heading = "Meridian Hotel Group" } = props;
  const offices = [
    { city: "Marrakech", address: "Avenue Mohammed VI", phone: "+212 5 555 0146" },
    { city: "Zanzibar", address: "Stone Town, Shangani St", phone: "+255 24 555 0157" },
    { city: "Seychelles", address: "Beau Vallon Beach", phone: "+248 4 555 0170" },
    { city: "Cape Town", address: "12 Kloof Nek Rd", phone: "+27 21 555 0189" },
  ];
  return (
    <footer
      className="w-full bg-stone-900 py-16 text-stone-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300" style={{ color: theme?.accent }}>
            Four destinations
          </p>
          <p className="mt-3 font-serif text-4xl">{heading}</p>
        </div>
        <div
          className="relative mx-auto mt-10 h-52 max-w-5xl overflow-hidden rounded-sm bg-stone-950 ring-1 ring-stone-800"
          role="img"
          aria-label="Regional map"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,211,209,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(214,211,209,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
          {[
            { x: "20%", y: "30%" },
            { x: "55%", y: "60%" },
            { x: "72%", y: "45%" },
            { x: "42%", y: "75%" },
          ].map((p, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
              <MapPin className="h-6 w-6 text-amber-300" style={{ color: theme?.accent }} />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city}>
              <p className="font-serif text-xl text-amber-300" style={{ color: theme?.accent }}>{o.city}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-stone-300">
                <MapPin className="mt-0.5 h-4 w-4 text-stone-500" /> {o.address}
              </p>
              <p className="mt-1.5 flex items-center gap-2 font-mono text-sm text-stone-300">
                <Phone className="h-4 w-4 text-stone-500" /> {o.phone}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-stone-800 pt-6 text-xs text-stone-400 sm:flex-row">
          <p>© 2026 {heading}</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> reservations@meridianhg.com
            </p>
            <p className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> 24/7 concierge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
