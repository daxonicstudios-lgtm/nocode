import { MapPin, Phone, Mail, Clock, Navigation, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer379(props: BlockProps) {
  const { theme, heading = "Kimberlite Partners" } = props;
  const offices = [
    { city: "Gaborone", address: "Plot 54368, CBD", phone: "+267 39 555 0104", hours: "Mon–Fri · 8–5" },
    { city: "Lusaka", address: "Thabo Mbeki Rd", phone: "+260 21 555 0161", hours: "Mon–Fri · 8–5" },
    { city: "Harare", address: "Sam Nujoma St, Avondale", phone: "+263 24 555 0172", hours: "Mon–Fri · 8–5" },
  ];
  return (
    <footer
      className="w-full bg-white py-16"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-y-2 border-gray-900 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Offices</p>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{heading}</p>
          <p className="mt-1 text-sm text-gray-500">Corporate law across Southern Africa.</p>
        </div>
        <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {offices.map((o) => (
            <div key={o.city} className="p-6 md:px-8">
              <div className="flex items-center gap-2 text-gray-900">
                <Building2 className="h-4 w-4" />
                <p className="text-sm font-bold uppercase tracking-widest">{o.city}</p>
              </div>
              <p className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                <MapPin className="mt-0.5 h-4 w-4 text-gray-400" /> {o.address}
              </p>
              <p className="mt-2 flex items-center gap-2 font-mono text-sm text-gray-700">
                <Phone className="h-4 w-4 text-gray-400" /> {o.phone}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 text-gray-400" /> {o.hours}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 hover:underline"
              >
                <Navigation className="h-3.5 w-3.5" /> Get directions
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t-2 border-gray-900 pt-6 text-xs text-gray-500">
          <p>© 2026 {heading}</p>
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5" /> office@kimberlite.law
          </p>
        </div>
      </div>
    </footer>
  );
}
