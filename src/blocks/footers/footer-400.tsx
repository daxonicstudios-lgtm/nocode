import { MapPin, Phone, Mail, Clock, Navigation, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer400(props: BlockProps) {
  const { theme, heading = "Continental Partners" } = props;
  const offices = [
    { city: "Lagos", address: "Victoria Island, 14 Saka Tinubu", phone: "+234 1 555 0110", hours: "Mon–Fri · 8–6" },
    { city: "Nairobi", address: "Upper Hill, 6 Hospital Rd", phone: "+254 20 555 0119", hours: "Mon–Fri · 8–6" },
    { city: "Johannesburg", address: "Sandton, 3 Fredman Dr", phone: "+27 11 555 0127", hours: "Mon–Fri · 8–5" },
    { city: "Accra", address: "Airport Residential, 2nd Rangoon", phone: "+233 30 555 0152", hours: "Mon–Fri · 8–5" },
    { city: "Casablanca", address: "Quartier Racine, 114 Bd d'Anfa", phone: "+212 22 555 0192", hours: "Mon–Fri · 9–6" },
    { city: "Cairo", address: "New Cairo, Road 90, 5th Settlement", phone: "+20 2 555 0147", hours: "Sun–Thu · 9–5" },
  ];
  return (
    <footer
      className="w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-slate-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300" style={{ color: theme?.accent, borderColor: theme?.accent }}>
            <Building2 className="h-3.5 w-3.5" /> Six cities · one continent
          </div>
          <p className="mt-4 font-serif text-4xl text-white sm:text-5xl">{heading}</p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Cross-border advisory, banking & investment services across Africa.
          </p>
        </div>
        <div
          className="relative mx-auto mt-12 h-60 max-w-5xl overflow-hidden rounded-3xl bg-slate-950/60 ring-1 ring-slate-800"
          role="img"
          aria-label="Africa operations map"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
          {[
            { x: "30%", y: "40%" },
            { x: "62%", y: "55%" },
            { x: "55%", y: "78%" },
            { x: "25%", y: "45%" },
            { x: "22%", y: "22%" },
            { x: "50%", y: "20%" },
          ].map((p, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: p.x, top: p.y }}>
              <div className="absolute -inset-2 animate-pulse rounded-full bg-amber-400/30 blur-md" />
              <MapPin className="relative h-5 w-5 text-amber-300" style={{ color: theme?.accent }} />
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-amber-400/30">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300" style={{ color: theme?.accent }}>
                  {o.city}
                </p>
                <Building2 className="h-4 w-4 text-slate-600" />
              </div>
              <p className="mt-4 flex items-start gap-2 text-sm text-slate-200">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" /> {o.address}
              </p>
              <p className="mt-2 flex items-center gap-2 font-mono text-sm text-slate-200">
                <Phone className="h-4 w-4 text-slate-500" /> {o.phone}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                <Clock className="h-4 w-4 text-slate-500" /> {o.hours}
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200" style={{ color: theme?.accent }}>
                <Navigation className="h-3.5 w-3.5" /> Directions
              </a>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 {heading}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> enquire@continentalpartners.africa
          </p>
        </div>
      </div>
    </footer>
  );
}
