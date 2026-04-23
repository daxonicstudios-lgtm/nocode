import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer385(props: BlockProps) {
  const { theme, heading = "Kilo Digital" } = props;
  const offices = [
    { city: "Cairo", address: "Zamalek, 26 July Corridor", phone: "+20 2 555 0106" },
    { city: "Nairobi", address: "Kilimani, Argwings Kodhek Rd", phone: "+254 20 555 0179" },
    { city: "Lagos", address: "Lekki Phase 1, Admiralty Way", phone: "+234 1 555 0159" },
  ];
  return (
    <footer
      className="w-full bg-white py-12"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-violet-50 via-white to-pink-50 p-8 ring-1 ring-violet-100">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-600" style={{ color: theme?.primary }}>
                Where to find us
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{heading}</p>
              <p className="mt-1 text-sm text-gray-500">Digital product agency · Africa & MENA</p>
            </div>
            <p className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-200">
              <Mail className="h-4 w-4 text-violet-500" /> projects@kilo.digital
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {offices.map((o) => (
              <div key={o.city} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-violet-500" />
                  <p className="text-sm font-bold text-gray-900">{o.city}</p>
                </div>
                <p className="mt-3 flex items-start gap-2 text-sm text-gray-700">
                  <MapPin className="mt-0.5 h-4 w-4 text-gray-400" /> {o.address}
                </p>
                <p className="mt-2 flex items-center gap-2 font-mono text-sm text-gray-700">
                  <Phone className="h-4 w-4 text-gray-400" /> {o.phone}
                </p>
                <div
                  className="relative mt-4 h-20 overflow-hidden rounded-lg bg-gradient-to-br from-violet-50 to-pink-50"
                  role="img"
                  aria-label={`${o.city} map`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-5 w-5 text-violet-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500">
          <Clock className="h-3.5 w-3.5" /> Mon–Fri · 9am–6pm local · © 2026 {heading}
        </p>
      </div>
    </footer>
  );
}
