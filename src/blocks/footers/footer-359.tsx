import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer359(props: BlockProps) {
  const { theme, heading = "Savanna Studio" } = props;
  const offices = [
    { city: "Nairobi", address: "Westlands, 12 Woodvale Grove", phone: "+254 20 555 0178", hours: "Mon–Fri · 9–6" },
    { city: "Lagos", address: "Victoria Island, 3 Ajose Adeogun", phone: "+234 1 555 0123", hours: "Mon–Fri · 9–6" },
    { city: "Cape Town", address: "Woodstock, 66 Albert Rd", phone: "+27 21 555 0160", hours: "Mon–Fri · 9–6" },
    { city: "London", address: "Shoreditch, 84 Great Eastern St", phone: "+44 20 5550 0191", hours: "Mon–Fri · 9–6" },
  ];
  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-14"
      style={{ backgroundColor: theme?.background, color: theme?.foreground, borderColor: theme?.secondary }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-semibold">{heading}</p>
            <p className="mt-1 text-sm text-gray-500">Brand and product design, globally.</p>
          </div>
          <p className="text-xs uppercase tracking-widest text-gray-400">Four studios · one team</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <div key={o.city} className="bg-white p-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest">{o.city}</span>
              </div>
              <p className="mt-3 flex items-start gap-2 text-sm text-gray-800">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" /> {o.address}
              </p>
              <p className="mt-2 flex items-center gap-2 font-mono text-sm text-gray-700">
                <Phone className="h-4 w-4 text-gray-400" /> {o.phone}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4 text-gray-400" /> {o.hours}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6 text-xs text-gray-500">
          <p>© 2026 {heading}</p>
          <a href="#" className="flex items-center gap-1.5 text-gray-700 hover:text-gray-900">
            <Mail className="h-3.5 w-3.5" /> hello@savanna.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
