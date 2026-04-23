import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer373(props: BlockProps) {
  const { theme, heading = "Atlas Logistics" } = props;
  const offices = [
    { city: "Lagos", address: "Tin Can Port Rd", phone: "+234 1 555 0120" },
    { city: "Mombasa", address: "Moi Ave, Port Complex", phone: "+254 41 555 0166" },
    { city: "Durban", address: "Point Rd, Harbour", phone: "+27 31 555 0118" },
    { city: "Dakar", address: "Blvd Maritime", phone: "+221 33 555 0173" },
    { city: "Accra", address: "Tema Harbour", phone: "+233 30 555 0154" },
    { city: "Casablanca", address: "Port de Casablanca", phone: "+212 22 555 0188" },
  ];
  return (
    <footer
      className="w-full bg-blue-950 py-14 text-blue-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-blue-300">
              <Building2 className="h-4 w-4" />
              <span className="text-xs uppercase tracking-widest">Global operations</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-white">{heading}</p>
            <p className="mt-1 text-sm text-blue-300">Six ports. One partner.</p>
          </div>
          <p className="flex items-center gap-2 text-xs text-blue-300">
            <Mail className="h-4 w-4" /> ops@atlaslog.africa
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-6">
          {offices.map((o) => (
            <div key={o.city} className="rounded-lg bg-blue-900/50 p-4 ring-1 ring-blue-800">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{o.city}</p>
              <p className="mt-2 text-sm text-white">{o.address}</p>
              <p className="mt-1 font-mono text-xs text-blue-200">{o.phone}</p>
            </div>
          ))}
        </div>
        <div
          className="relative mt-10 h-48 overflow-hidden rounded-2xl bg-blue-900/40 ring-1 ring-blue-800"
          role="img"
          aria-label="Global map"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          {[
            { x: "15%", y: "50%" },
            { x: "30%", y: "70%" },
            { x: "45%", y: "40%" },
            { x: "60%", y: "75%" },
            { x: "75%", y: "55%" },
            { x: "88%", y: "35%" },
          ].map((p, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
              <div className="absolute -inset-2 animate-ping rounded-full bg-blue-400/40" />
              <MapPin className="relative h-5 w-5 text-blue-300" style={{ color: theme?.accent }} />
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-blue-900 pt-6 text-xs text-blue-400">
          © 2026 {heading} · <Clock className="inline h-3 w-3" /> 24/7 dispatch
        </p>
      </div>
    </footer>
  );
}
