import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer368(props: BlockProps) {
  const { theme, heading = "Thorn & Thistle" } = props;
  return (
    <footer
      className="w-full bg-emerald-950 py-14 text-emerald-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-serif text-3xl text-emerald-50">{heading}</p>
            <p className="mt-2 text-sm text-emerald-300">Farm-to-table restaurant · Nairobi</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              Reservation only
            </div>
          </div>
          <div className="md:col-span-2">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
              <div>
                <dt className="flex items-center gap-2 text-emerald-400">
                  <MapPin className="h-4 w-4" /> Address
                </dt>
                <dd className="mt-2 font-serif text-lg text-emerald-50">18 Rosslyn Lane</dd>
                <dd className="text-emerald-300">Karen, Nairobi</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-emerald-400">
                  <Phone className="h-4 w-4" /> Phone
                </dt>
                <dd className="mt-2 font-mono text-lg text-emerald-50">+254 20 555 0181</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-emerald-400">
                  <Mail className="h-4 w-4" /> Email
                </dt>
                <dd className="mt-2 font-serif text-lg text-emerald-50">book@thornthistle.ke</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-emerald-400">
                  <Clock className="h-4 w-4" /> Service
                </dt>
                <dd className="mt-2 font-serif text-lg text-emerald-50">Wed–Sun</dd>
                <dd className="text-emerald-300">Dinner 6:30–10:30pm</dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          className="relative mt-10 h-28 overflow-hidden rounded-full bg-emerald-900 ring-1 ring-emerald-800"
          role="img"
          aria-label="Map strip"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(6,78,59,0.6))]" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3">
            <MapPin className="h-5 w-5 text-emerald-300" style={{ color: theme?.accent }} />
            <span className="text-sm font-medium text-emerald-100">View on map</span>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-emerald-400">© 2026 {heading}</p>
      </div>
    </footer>
  );
}
