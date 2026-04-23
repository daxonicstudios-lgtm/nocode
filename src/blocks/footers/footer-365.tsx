import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import type { BlockProps } from "@/blocks/types";

export default function Footer365(props: BlockProps) {
  const { theme, heading = "Cornerstone Accountants" } = props;
  const offices = [
    { city: "Accra", address: "4 Independence Ave", phone: "+233 30 555 0109" },
    { city: "Lagos", address: "8 Ademola Adetokunbo Cres", phone: "+234 1 555 0144" },
  ];
  return (
    <footer
      className="w-full bg-indigo-950 py-16 text-indigo-100"
      style={{ backgroundColor: theme?.background, color: theme?.foreground }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <p className="text-2xl font-semibold text-white">{heading}</p>
            <p className="mt-2 text-sm text-indigo-300">Trusted tax & advisory across West Africa.</p>
            <p className="mt-6 flex items-center gap-2 text-sm text-indigo-200">
              <Mail className="h-4 w-4 text-indigo-400" /> office@cornerstone.africa
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-indigo-200">
              <Clock className="h-4 w-4 text-indigo-400" /> Mon–Fri · 8am–5pm
            </p>
          </div>
          {offices.map((o) => (
            <div key={o.city} className="relative overflow-hidden rounded-2xl border border-indigo-800 bg-indigo-900/60 p-6">
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl"
                style={{ backgroundColor: theme?.accent }}
              />
              <div className="relative">
                <div className="flex items-center gap-2 text-indigo-300">
                  <Building2 className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-widest">{o.city} office</span>
                </div>
                <p className="mt-4 text-lg font-semibold text-white">{o.address}</p>
                <p className="mt-1 font-mono text-sm text-indigo-200">{o.phone}</p>
                <div
                  className="relative mt-5 h-28 overflow-hidden rounded-lg border border-indigo-800/80 bg-indigo-950"
                  role="img"
                  aria-label={`${o.city} map`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(129,140,248,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(129,140,248,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="h-6 w-6 text-indigo-300" style={{ color: theme?.accent }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 border-t border-indigo-900 pt-6 text-xs text-indigo-400">
          © 2026 {heading}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
