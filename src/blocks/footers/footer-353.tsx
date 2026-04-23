import { MapPin, Phone, Mail, Clock, Navigation, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer353(props: BlockProps) {
  const { theme, heading = "Meridian Dental", bodyText = "Modern family dentistry across East Africa." } = props;
  const offices = [
    { city: "Nairobi", address: "48 Riverside Drive", phone: "+254 20 555 0115" },
    { city: "Kampala", address: "Plot 7, Kololo Hill", phone: "+256 41 555 0129" },
    { city: "Kigali", address: "KN 3 Ave, Nyarutarama", phone: "+250 78 555 0180" },
  ];
  return (
    <footer
      className="w-full bg-slate-900 py-14 text-slate-200"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight">{heading}</p>
            <p className="mt-1 text-sm text-slate-400">{bodyText}</p>
          </div>
          <a
            href="#"
            className="inline-flex w-max items-center gap-1.5 rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            <Navigation className="h-4 w-4" /> Find nearest clinic
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((o) => (
            <div key={o.city} className="rounded-lg border border-slate-800 bg-slate-800/40 p-5">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-400" />
                <p className="text-sm font-semibold text-white">{o.city}</p>
              </div>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-500" /> {o.address}
              </p>
              <p className="mt-2 flex items-center gap-2 font-mono text-sm text-slate-300">
                <Phone className="h-4 w-4 text-slate-500" /> {o.phone}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 {heading}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> care@meridiandental.com
          </p>
        </div>
      </div>
    </footer>
  );
}
